import { existsSync, readdirSync, readFileSync } from "node:fs";
import { dirname, join, relative, resolve, sep } from "node:path";

function files(root: string, dir = root): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap(e => {
    if ([".git", "node_modules", ".obsidian", ".local", ".cache"].includes(e.name)) return [];
    const p = join(dir, e.name);
    return e.isDirectory() ? files(root, p) : [p];
  });
}

export function verify(root: string): string[] {
  const errors: string[] = [];
  const all = files(root);
  const paths = new Set(all.map(p => relative(root, p).split(sep).join("/")));
  const ids = new Map<string, string>();
  const required = ["README.md", "AGENTS.md", "studio/README.md", "studio/foundation.md",
    "studio/manifest.json", "studio/project.yml", "studio/state/current.md", "book/index.md",
    ".agents/skills/refine-proposal/SKILL.md", "studio/chatgpt-project-instructions.md"];
  for (const p of required) if (!paths.has(p)) errors.push(`Missing required path: ${p}`);
  let manifest: any;
  try {
    manifest = JSON.parse(readFileSync(join(root, "studio/manifest.json"), "utf8"));
    if (manifest.schema_version !== 1 || !/^\d+\.\d+\.\d+$/.test(manifest.operating_version))
      errors.push("Invalid manifest versions");
    for (const [id, p] of Object.entries(manifest.protocols ?? {}) as any) {
      if (!paths.has(p.path)) errors.push(`Unresolved protocol ${id}: ${p.path}`);
      if (!/^\d+\.\d+\.\d+$/.test(p.version)) errors.push(`Invalid protocol version: ${id}`);
    }
  } catch (e) { errors.push(`Manifest: ${e}`); }

  const checkPath = (from: string, target: string) => {
    if (!target || /^(?:[a-z][a-z\d+.-]*:|#)/i.test(target)) return;
    const dest = target.split(/[?#]/)[0];
    if (!dest) return;
    let decoded: string;
    try { decoded = decodeURIComponent(dest); } catch { errors.push(`Invalid URL: ${from}`); return; }
    const abs = resolve(dirname(join(root, from)), decoded);
    const rel = relative(root, abs).split(sep).join("/");
    if (rel.startsWith("../") || !existsSync(abs)) errors.push(`Broken link: ${from} -> ${target}`);
    else if (!paths.has(rel) && ![...paths].some(p => p.startsWith(rel + "/")))
      errors.push(`Case mismatch or ignored target: ${from} -> ${target}`);
  };
  for (const abs of all) {
    const path = relative(root, abs).split(sep).join("/");
    if (!/\.(md|ya?ml)$/.test(path)) continue;
    const text = readFileSync(abs, "utf8").replace(/^\uFEFF/, "");
    let data: any;
    try {
      if (/\.ya?ml$/.test(path)) data = Bun.YAML.parse(text);
      else if (text.startsWith("---\n")) data = Bun.YAML.parse(text.split("\n---")[0].slice(4));
    } catch (e) { errors.push(`YAML ${path}: ${e}`); }
    if (path.startsWith("book/notes/") && path.endsWith(".md")) {
      for (const key of ["id", "type", "status", "chapter", "sources", "protocol_id", "protocol_version", "protocol_revision"])
        if (data?.[key] == null) errors.push(`${path}: missing ${key}`);
      if (data?.id) {
        if (ids.has(data.id)) errors.push(`Duplicate note ID ${data.id}: ${ids.get(data.id)}, ${path}`);
        ids.set(data.id, path);
      }
      const protocol = manifest?.protocols?.[data?.protocol_id];
      if (!protocol) errors.push(`${path}: unknown protocol ${data?.protocol_id}`);
      else if (data.protocol_version !== protocol.version && data.protocol_revision === "bootstrap")
        errors.push(`${path}: bootstrap protocol version mismatch`);
    }
    if (path.endsWith(".md")) {
      // Ignore fenced code; validate normal inline Markdown file targets, including angle paths.
      const body = text.replace(/^```[^\n]*\n[\s\S]*?^```\s*$/gm, "");
      for (const m of body.matchAll(/\[[^\]]*\]\((<[^>]+>|[^)]+)\)/g))
        checkPath(path, m[1].replace(/^<|>$/g, "").replace(/\s+"[^"]*"$/, ""));
    }
    // Backlog references/documentation are explicitly relative to repository root.
    if (path.startsWith("backlog/") && data) {
      for (const key of ["references", "documentation"]) {
        for (const ref of data[key] ?? []) {
          if (!/^[a-z][a-z\d+.-]*:/i.test(ref)) checkPath("README.md", ref);
        }
      }
    }
  }
  const bootstrap = join(root, "studio/chatgpt-project-instructions.md");
  if (existsSync(bootstrap)) {
    const text = readFileSync(bootstrap, "utf8");
    if (text.length >= 8000) errors.push("ChatGPT bootstrap exceeds conservative 8,000-character target");
    if (/REPLACE_WITH_/.test(text)) errors.push("ChatGPT bootstrap has unresolved coordinates");
  }
  return errors;
}

if (import.meta.main) {
  const errors = verify(resolve(import.meta.dir, ".."));
  if (errors.length) { console.error(errors.join("\n")); process.exit(1); }
  console.log("Manifest, YAML, note IDs, protocol references and internal file links passed.");
  console.log("GUI rendering, fragment anchors and human acceptance require separate verification.");
}
