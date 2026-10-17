import { describe, expect, test } from "bun:test";
import { existsSync, mkdirSync, readFileSync, realpathSync, symlinkSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fixture } from "./fixture";

const cli = join(import.meta.dir, "cli.ts");

describe.skipIf(process.platform !== "win32")("skill-junction CLI end to end", () => {
  test("creates, edits and deletes a test skill through the shared junction; repairs and removes junction", () => {
    const f = fixture();
    const run = (...args: string[]) => {
      const result = Bun.spawnSync([process.execPath, cli, ...args, "--root", f.checkout], { cwd: f.root });
      expect(result.exitCode).toBe(0);
      return result.stdout.toString();
    };
    try {
      expect(run("create")).toContain("created:");
      const skill = join(f.source, "test-skill");
      const alias = join(f.link, "test-skill", "SKILL.md");
      mkdirSync(skill);
      writeFileSync(join(skill, "SKILL.md"), "---\nname: test-skill\ndescription: Disposable test\n---\nVersion one\n");
      expect(readFileSync(alias, "utf8")).toContain("Version one");
      writeFileSync(join(skill, "SKILL.md"), "---\nname: test-skill\ndescription: Disposable test\n---\nVersion two\n");
      expect(readFileSync(alias, "utf8")).toContain("Version two");
      // Changes through Claude's path also reach the one canonical skill.
      writeFileSync(alias, "Edited through alias\n");
      expect(readFileSync(join(skill, "SKILL.md"), "utf8")).toBe("Edited through alias\n");
      f.removeTree(skill);
      expect(existsSync(alias)).toBe(false);

      expect(run("delete")).toContain("deleted:");
      const stale = join(f.root, "stale skills");
      mkdirSync(stale);
      writeFileSync(join(stale, "keep.txt"), "preserved");
      symlinkSync(stale, f.link, "junction");
      expect(run("update")).toContain("updated:");
      expect(realpathSync(f.link)).toBe(realpathSync(f.source));
      expect(readFileSync(join(stale, "keep.txt"), "utf8")).toBe("preserved");
      expect(run()).toContain("unchanged:");
      writeFileSync(join(f.source, "survivor.txt"), "canonical data");
      run("delete");
      expect(existsSync(f.link)).toBe(false);
      expect(readFileSync(join(f.source, "survivor.txt"), "utf8")).toBe("canonical data");
      expect(run("delete")).toContain("absent:");
    } finally { f.cleanup(); }
  });

  test("invalid invocation exits nonzero and does not create a junction", () => {
    const f = fixture();
    try {
      const result = Bun.spawnSync([process.execPath, cli, "destroy", "--root", f.checkout]);
      expect(result.exitCode).toBe(1);
      expect(result.stderr.toString()).toContain("Unknown");
      expect(existsSync(f.parent)).toBe(false);
    } finally { f.cleanup(); }
  });
});
