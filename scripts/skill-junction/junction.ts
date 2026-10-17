import {
  lstatSync, mkdirSync, readlinkSync, realpathSync, symlinkSync, unlinkSync,
} from "node:fs";
import { dirname, join, resolve } from "node:path";

export type Action = "create" | "update" | "delete";
export type Result = "created" | "updated" | "deleted" | "unchanged" | "absent";

function inspect(path: string) {
  try { return lstatSync(path); }
  catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return undefined;
    throw error;
  }
}

function requireDirectory(path: string) {
  const entry = inspect(path);
  if (!entry?.isDirectory() || entry.isSymbolicLink())
    throw new Error(`Expected a real directory, not a link or file: ${path}`);
}

function targetOf(link: string) {
  // readlink works even when a checkout move leaves the old target missing.
  return resolve(dirname(link), readlinkSync(link)).toLowerCase();
}

/** Manage only <root>/.claude/skills. Never recursively remove a link or its target. */
export function manageJunction(root: string, action: Action): Result {
  if (process.platform !== "win32") throw new Error("This junction manager requires Windows");
  if (!["create", "update", "delete"].includes(action)) throw new Error("Unknown junction action");
  const base = realpathSync(root);
  const parent = join(base, ".claude");
  const link = join(parent, "skills");
  const source = join(base, ".agents", "skills");

  // Refuse redirected ancestors before following them or removing anything.
  if (inspect(parent)) requireDirectory(parent);
  if (action !== "delete") {
    requireDirectory(join(base, ".agents"));
    requireDirectory(source);
  }
  const current = inspect(link);
  if (current && !current.isSymbolicLink())
    throw new Error(`Refusing to replace or delete a real file/directory: ${link}`);

  if (action === "delete") {
    if (!current) return "absent";
    // The exact absolute path is beneath the validated real parent. unlink removes
    // only the directory junction, including a dangling one, never its contents.
    unlinkSync(link);
    return "deleted";
  }

  if (current && targetOf(link) === source.toLowerCase()) return "unchanged";
  if (current && action === "create")
    throw new Error("Existing skills link has a different target; use update to repair it");
  if (!current) {
    mkdirSync(parent, { recursive: true });
    symlinkSync(source, link, "junction");
    return "created";
  }

  const previousTarget = readlinkSync(link);
  unlinkSync(link);
  try { symlinkSync(source, link, "junction"); }
  catch (error) {
    try { symlinkSync(resolve(parent, previousTarget), link, "junction"); }
    catch (rollbackError) {
      throw new AggregateError([error, rollbackError], "Junction update and rollback both failed");
    }
    throw error;
  }
  return "updated";
}
