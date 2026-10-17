# Operating protocol history

## 2026-10-17 — Shared skills for Claude Code

Direct operator request adds `CLAUDE.md` importing `AGENTS.md`, and a Windows
junction manager under `scripts/skill-junction/`. Canonical skills remain under
`.agents/skills/`; `.claude/skills` is an ignored local alias. Create/update/delete
commands preserve source data and unrelated settings. Tests use disposable real
junctions and exercise a test skill's creation, modification and removal.
Existing protocol requirements and their 1.0.0 baseline remain unchanged.

## 1.0.0 — 2026-10-17 bootstrap

Authority: the operator's supplied setup brief revision 2 and current instruction
to perform checks/preparation and create the repository in the specified folder.
This is direct bootstrap authority, not a fabricated accepted proposal.

Introduces separate proposal/knowledge/task authorities, chapter contracts,
explicit context precedence and reconciliation, human acceptance provenance,
portable linked notes, pinned short-lived Backlog CLI and durable handoffs.
No creative mechanic, engine or AI provider is chosen.

`bootstrap` resolves to the annotated local immutable tag `studio-v1.0.0`,
created after initial protocol commit `68e4708`. The tag resolves the exact
protocol baseline; never move it. It has been pushed to the private remote. Resolve full snapshot
SHAs externally through Git. Later repository-coordinate and verification edits
do not change the meaning of this tagged protocol snapshot.
