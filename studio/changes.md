# Operating protocol history

## 3.0.0 — 2026-10-17 GitHub Flow (pending integration)

Accepted #2 revision 1 and the supplemental simple acceptance-comment convention.
Adds github-flow 1.0.0, PR template and pinned Linux/Windows canonical CI.
Versions affected authority/integration protocols for PR-only main content and
separate human merge authorisation. Administrative rename preserves b2bf58a and
existing tags. Enforcement was blocked while the repository was a private Free
organisation repository; after the operator made it public, main protection was
configured and verified by readback. See [settings evidence](reports/github-flow-settings.md). No tasks are changed.
Rollback uses a PR; historical setup coordinates in old sessions remain provenance.


## 2.0.0 — 2026-10-17 guided work and informed workflow changes

Authority: [proposal #1](https://github.com/michi-guns/bad-dream/issues/1),
revision 1; [operator acceptance recorded by agent](https://github.com/michi-guns/bad-dream/issues/1#issuecomment-6231506770).
See the [accepted rationale](../book/notes/guided-task-execution.md).

- Foundation, task lifecycle, context reconciliation and protocol changes are 2.0.0: execution briefs
  are now required and an apparent workflow memory error is corrected before
  inferring an override. Substantive operating changes use issues; amendments and
  bounded exceptions have distinct recording paths. These change requirements.
- Startup and proposal integration are 1.1.0: explicit orientation and brief-aware
  integration.
- Agent entry, ChatGPT bootstrap and a lightweight task brief template expose the
  behaviour. Prefer concise structured text and do not assume repository knowledge.
- Migration: legacy tasks remain valid; reconstruct missing methods before execution,
  persist through the pinned CLI before the next substantive task write, and avoid
  bulk rewrites/custom fields. Current TASK-1/2/3 status and contents are unchanged.
- Historical 1.0.0 protocols remain in Git and the existing immutable baseline tag.
  No new tag has been created. Resolve this revision through its enclosing commit.
- Verification and remaining limitations are in the
  [session record](sessions/2026-10-17-guided-task-execution.md).
- Rollback: use a reviewed corrective/revert commit to restore affected protocols,
  manifest and bootstrap together, preserve this acceptance/history and any newer
  task briefs, and record the reason. Do not move the baseline tag.

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
