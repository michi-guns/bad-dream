# Shared skills for Codex and Claude Code

Author skills once in [`.agents/skills/`](../../.agents/skills). The root
[CLAUDE.md](../../CLAUDE.md) imports [AGENTS.md](../../AGENTS.md) with `@AGENTS.md`.
Claude Code sees the same skill files through a Windows directory junction:

```text
.claude/skills -> .agents/skills
```

Only `skills` is linked, so `.claude` can also contain independent settings.
The junction is ignored by Git; it contains an absolute local target and must be
recreated in each checkout/worktree. Source skills and this manager are committed.
No package install hook or background synchronization process is needed.

## Commands

Run from the repository with Bun:

```powershell
bun run skills:link -- create
bun run skills:link -- update
bun run skills:link -- delete
```

`create` makes the junction and leaves an already-correct link unchanged. It
refuses a link pointing elsewhere. `update` creates a missing junction or repairs
an outdated/dangling target, for example after moving a checkout. With no action,
`bun run skills:link` defaults to `update`. `delete` removes only the junction;
source skills and Claude settings remain in place. Deleting an absent link is
safe to repeat. No command recursively deletes a junction or copies skill files.

The default root is derived from the script location, independent of the shell's
working directory. For a different checkout or a disposable fixture:

```powershell
bun scripts/skill-junction/cli.ts update --root 'C:\work\another checkout'
bun run skills:link -- --help
```

The source `.agents` and `skills` must be real directories. Existing real files
or directories at `.claude/skills` are preserved and cause an error; reconcile
their contents into the canonical location before retrying. A linked `.claude`
parent is refused so the script cannot mutate another folder through it. Delete
also works if a missing source has left a dangling junction. Errors exit nonzero.
Updates restore the previous link if creation of the replacement fails.

## Everyday skill changes

Create `.agents/skills/<skill-name>/SKILL.md`, edit it there, or remove that
canonical skill directory when its removal is authorised. The Claude view changes
immediately through the junction; rerunning the manager for each skill change
is unnecessary. Editing through `.claude/skills` also edits the canonical files.
Use canonical paths in reviews so the single source stays clear.

After initial setup, start Claude Code in this checkout. Inspect `/context` for
instruction loading and the skill list for `refine-proposal`. Invoke it as
`/refine-proposal`; Codex uses `$refine-proposal`. Filesystem visibility is tested
here; Claude's actual runtime loading still needs a session with Claude installed.
This manager requires Windows and a filesystem that supports directory junctions.

## Verification and rollback

```powershell
bun test scripts/skill-junction
bun run verify
```

Tests create real Windows junctions in disposable directories, including paths
with spaces. They cover idempotence, stale/dangling target repair, missing source,
preservation of files/directories and old targets, redirected-ancestor refusal,
and command failures. The CLI end-to-end test creates, edits and deletes a test
skill and verifies changes through both paths, then repairs/removes the junction
and confirms canonical data survives. Windows-specific tests are explicitly
skipped on other platforms. Fixtures are detached and removed after each test.

To disable sharing, run `delete`. Recreate it with `update`. Revert the code/docs
commit separately if the integration itself needs to be rolled back; never delete
the canonical source merely to remove the alias.

References checked 2026-10-17: [Claude instruction imports](https://code.claude.com/docs/en/memory),
[Claude project skills](https://code.claude.com/docs/en/skills), and
[filesystem junction API](https://nodejs.org/api/fs.html#fssymlinksynctarget-path-type).
