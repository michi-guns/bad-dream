import { describe, expect, test } from "bun:test";
import { existsSync, lstatSync, mkdirSync, readFileSync, realpathSync, symlinkSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { manageJunction } from "./junction";
import { parseArgs } from "./cli";
import { fixture } from "./fixture";

describe.skipIf(process.platform !== "win32")("Windows skill junction functionality", () => {
  test("creates an actual junction, is idempotent, and deletes only the link", () => {
    const f = fixture();
    try {
      writeFileSync(join(f.source, "keep.txt"), "canonical content");
      expect(manageJunction(f.checkout, "create")).toBe("created");
      expect(lstatSync(f.link).isSymbolicLink()).toBe(true);
      expect(realpathSync(f.link)).toBe(realpathSync(f.source));
      expect(manageJunction(f.checkout, "create")).toBe("unchanged");
      expect(manageJunction(f.checkout, "update")).toBe("unchanged");
      writeFileSync(join(f.parent, "settings.json"), "{}");
      expect(manageJunction(f.checkout, "delete")).toBe("deleted");
      expect(existsSync(f.link)).toBe(false);
      expect(readFileSync(join(f.source, "keep.txt"), "utf8")).toBe("canonical content");
      expect(readFileSync(join(f.parent, "settings.json"), "utf8")).toBe("{}");
      expect(manageJunction(f.checkout, "delete")).toBe("absent");
    } finally { f.cleanup(); }
  });

  test.each([false, true])("repairs a stale junction (dangling=%s) while retaining its old target", dangling => {
    const f = fixture();
    try {
      const old = join(f.root, "old skills");
      mkdirSync(old);
      writeFileSync(join(old, "keep.txt"), "old content");
      mkdirSync(f.parent);
      symlinkSync(old, f.link, "junction");
      if (dangling) f.removeTree(old);
      expect(() => manageJunction(f.checkout, "create")).toThrow("use update");
      expect(manageJunction(f.checkout, "update")).toBe("updated");
      expect(realpathSync(f.link)).toBe(realpathSync(f.source));
      if (!dangling) expect(readFileSync(join(old, "keep.txt"), "utf8")).toBe("old content");
    } finally { f.cleanup(); }
  });

  test.each(["file", "directory"])("preserves an existing real %s for every action", kind => {
    const f = fixture();
    try {
      mkdirSync(f.parent);
      const sentinel = kind === "file" ? f.link : join(f.link, "keep.txt");
      if (kind === "directory") mkdirSync(f.link);
      writeFileSync(sentinel, "do not lose me");
      for (const action of ["create", "update", "delete"] as const) {
        expect(() => manageJunction(f.checkout, action)).toThrow("real file/directory");
        expect(readFileSync(sentinel, "utf8")).toBe("do not lose me");
      }
    } finally { f.cleanup(); }
  });

  test("missing source cannot mutate a link, but deletion still removes a dangling junction", () => {
    const f = fixture();
    try {
      manageJunction(f.checkout, "create");
      f.removeTree(f.source);
      expect(() => manageJunction(f.checkout, "update")).toThrow("real directory");
      expect(lstatSync(f.link).isSymbolicLink()).toBe(true);
      expect(manageJunction(f.checkout, "delete")).toBe("deleted");
    } finally { f.cleanup(); }
  });

  test("refuses a redirected .claude parent without touching the other directory", () => {
    const f = fixture();
    try {
      const other = join(f.root, "other directory");
      mkdirSync(other);
      writeFileSync(join(other, "skills"), "preserve");
      symlinkSync(other, f.parent, "junction");
      for (const action of ["create", "update", "delete"] as const)
        expect(() => manageJunction(f.checkout, action)).toThrow("real directory");
      expect(readFileSync(join(other, "skills"), "utf8")).toBe("preserve");
    } finally { f.cleanup(); }
  });

  test("refuses a linked source directory", () => {
    const f = fixture();
    try {
      f.removeTree(f.source);
      symlinkSync(f.root, f.source, "junction");
      expect(() => manageJunction(f.checkout, "create")).toThrow("real directory");
    } finally { f.cleanup(); }
  });
});

test("CLI arguments reject invalid or repeated actions before filesystem work", () => {
  expect(parseArgs([]).action).toBe("update");
  expect(parseArgs(["--", "delete"]).action).toBe("delete");
  for (const args of [["--root"], ["update", "delete"], ["--unknown"], ["--root", "a", "--root", "b"]])
    expect(() => parseArgs(args)).toThrow();
});
