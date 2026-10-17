# Shared Claude Code skills — 2026-10-17

Authority: explicit operator request to add `CLAUDE.md` with `@AGENTS.md`, plus
instructions and a TypeScript script to create/update/delete junctions and test
a disposable skill lifecycle. No new game-design decision is involved.

Added the shared instruction import, the manager and its guide under
`scripts/skill-junction/`, and `bun run skills:link`. Skills remain canonical
under `.agents/skills/`. The local `.claude/skills` NTFS junction is created and
ignored by Git. Other Claude configuration remains independent.

Validation on Windows x64 with Bun 1.4.3: `bun test` passed all 12 tests (70
assertions), including 11 manager/CLI tests. Tests exercise real junction
creation, idempotence, stale/dangling repair, deletion without source loss,
ordinary-file/directory preservation, redirected-ancestor refusal and invalid
CLI arguments. The CLI end-to-end exercise creates, edits and deletes a test
skill through the shared view, repairs/removes the junction, and retains source
and former-target sentinel files. Temporary test trees are removed after use.

`bun run verify` passed with the live junction in place. Windows metadata
confirmed LinkType `Junction`; reading `refine-proposal/SKILL.md` through the
Claude path returned the canonical content. Claude Code's command is unavailable
in this session, so actual `/context` and skill invocation remain unverified.

Changes are committed locally on `setup/studio-foundation`; publication of this
change was not requested, so no push or PR was made. Initial repository setup
remains published. The existing baseline tag is unchanged.

Subsequent operator instruction: “push as well”. Pushed implementation commit
`05c40cb` to `origin/setup/studio-foundation` and verified its full SHA matches
GitHub. Updated current state to record publication; no PR or merge was performed.

Next tooling check: start Claude Code in this checkout and inspect `/context`
and `/refine-proposal`. Next project action remains TASK-1, reviewing the creative
brief. See [the manager guide](../../scripts/skill-junction/README.md) for daily
use and rollback; `delete` removes the alias, `update` recreates it.
