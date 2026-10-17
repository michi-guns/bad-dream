---
id: github-flow
type: decision
status: accepted
chapter: studio-operations
sources:
  - "https://github.com/michi-guns/bad-dream/issues/2"
protocol_id: knowledge-note
protocol_version: 1.0.0
protocol_revision: b2bf58aec9e5a5cd11107d6f27b80e27f7b918a1
---

# GitHub Flow and protected primary state

Accepted scope: main, PR-only content, branch/PR conventions, canonical
Linux/Windows CI, verified protections and the one-time administrative rename.
Implementation is prepared, **not integrated**; protection enforcement is blocked.

Acceptance: Jimzord (connected account jimzord12), 2026-10-17, explicit chat
instruction “I accept them all”, recorded truthfully by an agent in
[the acceptance comment](https://github.com/michi-guns/bad-dream/issues/2#issuecomment-6232010324).
Revision 1 exact UTF-8 body SHA-256 including trailing newline:
`32b58f93ce115abb0f60e042cf0e73ee33425d8adaed335508600b2f79b2e86f`.
The later acceptance governs the unchanged body's proposed wording. No merge
permission was granted. The same acceptance record adds the human convention
`Accepted: revision N`; agents preserve supporting provenance, with no scripts.

## Context, rationale and alternatives

The setup branch had become primary; #1 was integrated directly there. Rename it
to main without losing history so its authority is obvious. Short-lived branches
and PRs expose scope/review and prevent a branch name hiding primary writes.
GitHub Flow avoids a long-lived develop branch and a second tracker. One template
and existing canonical checks keep maintenance small. Human approval assesses
scope and rationale; CI only checks objective consistency. Agent review remains
advisory and does not require another GitHub account's formal approval.

## Consequences and reconsideration

Use [the workflow](../../studio/workflows/github-flow.md) for exact naming,
merge gates, local migration, template/CI and rollback. All file changes,
including rollback records, use PRs. Preserve original protocol history and tags.
[Settings evidence](../../studio/reports/github-flow-settings.md) records the
Free-plan blocker and owner actions. Do not claim protection enforcement, close
#2, purchase upgrades or change visibility. Reconsider scope only by an explicit
human decision if plan constraints persist or the minimal process obstructs work.
No game tasks are created; these bounded operating changes are tracked by their
existing proposal and PR. TASK-1 remains unstarted.
