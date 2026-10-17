import { test, expect } from "bun:test";
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve, sep } from "node:path";
import { verify } from "./verify";

test("detect broken/case-wrong links, duplicate IDs and unresolved protocols", () => {
  const root = mkdtempSync(join(tmpdir(), "bad-dream-checker-"));
  try {
    mkdirSync(join(root, "studio"), { recursive: true });
    mkdirSync(join(root, "book/notes"), { recursive: true });
    writeFileSync(join(root, "studio/manifest.json"), JSON.stringify({
      schema_version: 1, operating_version: "1.0.0", protocols: {},
    }));
    const note = "---\nid: repeated\ntype: hypothesis\nstatus: draft\nchapter: concept-laboratory\nsources: []\nprotocol_id: absent\nprotocol_version: 1.0.0\nprotocol_revision: bootstrap\n---\n";
    writeFileSync(join(root, "book/notes/a.md"), note + "[missing](missing.md)\n[b](B.md)");
    writeFileSync(join(root, "book/notes/b.md"), note);
    let errors = verify(root);
    expect(errors.some(x => x.includes("Duplicate note ID"))).toBe(true);
    expect(errors.some(x => x.includes("unknown protocol"))).toBe(true);
    expect(errors.some(x => x.includes("Broken link"))).toBe(true);
    expect(errors.some(x => x.includes("B.md"))).toBe(true);
    writeFileSync(join(root, "book/notes/a.md"), note + "[valid](b.md)");
    errors = verify(root);
    expect(errors.some(x => x.includes("Broken link"))).toBe(false);
  } finally {
    const target = resolve(root);
    if (!target.startsWith(resolve(tmpdir()) + sep + "bad-dream-checker-"))
      throw new Error("Refusing cleanup outside this test's temporary workspace");
    rmSync(target, { recursive: true, force: true });
  }
});
