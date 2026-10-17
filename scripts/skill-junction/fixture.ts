import { lstatSync, mkdirSync, mkdtempSync, rmSync, unlinkSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve, sep } from "node:path";

export function fixture() {
  // Spaces exercise argument passing in the real CLI tests.
  const root = mkdtempSync(join(tmpdir(), "bad-dream-junction-test-"));
  const checkout = join(root, "checkout with spaces");
  const source = join(checkout, ".agents", "skills");
  const parent = join(checkout, ".claude");
  const link = join(parent, "skills");
  mkdirSync(source, { recursive: true });
  return {
    root, checkout, source, parent, link,
    removeTree(path: string) {
      const target = resolve(path);
      if (!target.startsWith(resolve(root) + sep))
        throw new Error("Refusing removal outside this test's temporary workspace");
      if (lstatSync(target).isSymbolicLink()) unlinkSync(target);
      else rmSync(target, { recursive: true, force: true });
    },
    cleanup() {
      const target = resolve(root);
      if (!target.startsWith(resolve(tmpdir()) + sep + "bad-dream-junction-test-"))
        throw new Error("Refusing cleanup outside the test's temporary workspace");
      // Detach known junctions before recursive cleanup, without following them.
      for (const p of [parent, join(checkout, ".agents"), link, source]) {
        try { if (lstatSync(p).isSymbolicLink()) unlinkSync(p); }
        catch (error) {
          if ((error as NodeJS.ErrnoException).code !== "ENOENT") throw error;
        }
      }
      rmSync(target, { recursive: true, force: true });
    },
  };
}
