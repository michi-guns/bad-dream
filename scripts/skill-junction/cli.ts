import { resolve } from "node:path";
import { manageJunction, type Action } from "./junction";

const help = `Usage: bun run skills:link -- [create|update|delete] [--root <checkout>]

Default: update. Creates or repairs .claude/skills -> .agents/skills on Windows.
delete removes the junction only. Real directories/files are never overwritten.
The default checkout is this script's repository, independent of the current directory.`;

export function parseArgs(input: string[]) {
  const args = input[0] === "--" ? input.slice(1) : [...input];
  let root = resolve(import.meta.dir, "../..");
  let action: Action = "update";
  let hasAction = false;
  let hasRoot = false;
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === "--help" || arg === "-h") return { help: true, root, action };
    if (arg === "--root") {
      if (hasRoot || !args[i + 1] || args[i + 1].startsWith("--"))
        throw new Error("Supply --root once, with a checkout directory");
      root = resolve(args[++i]);
      hasRoot = true;
    } else if (["create", "update", "delete"].includes(arg) && !hasAction) {
      action = arg as Action;
      hasAction = true;
    } else throw new Error(`Unknown or repeated argument: ${arg}`);
  }
  return { help: false, root, action };
}

if (import.meta.main) {
  try {
    const args = parseArgs(process.argv.slice(2));
    console.log(args.help ? help : `${manageJunction(args.root, args.action)}: .claude/skills`);
  } catch (error) {
    console.error(error instanceof Error ? error.message : String(error));
    process.exitCode = 1;
  }
}
