import { existsSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";

// Resolve the installed package directly: no global fallback, download, or launcher child.
const root = resolve(import.meta.dir, "..");
const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
const expected = pkg.devDependencies?.["backlog.md"];
if (!/^\d+\.\d+\.\d+$/.test(expected ?? "")) throw new Error("Backlog must have an exact pin");
const platform = process.platform === "win32" ? "windows" : process.platform;
const binary = join(root, "node_modules", `backlog.md-${platform}-${process.arch}`,
  process.platform === "win32" ? "backlog.exe" : "backlog");
if (!existsSync(binary)) throw new Error("Pinned binary absent; run bun install --frozen-lockfile");
const version = Bun.spawnSync([binary, "--version"], { cwd: root });
if (version.exitCode || version.stdout.toString().trim() !== expected)
  throw new Error("Installed Backlog version differs from package pin");
const args = process.argv.slice(2).filter((arg, i) => !(i === 0 && arg === "--"));
const proc = Bun.spawn([binary, ...args], {
  cwd: root, stdin: "inherit", stdout: "inherit", stderr: "inherit",
  env: { ...process.env, BACKLOG_CWD: root },
});
process.exit(await proc.exited);
