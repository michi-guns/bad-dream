# Operating protocol history

## 4.2.0 — 2026-10-17 "in one go" shorthand

Proposal #10 revision 1, accepted through the operator's explicit instruction
and recorded on #10. Reason: routine changes needed a second operator message
just to name the reviewed head for merge. Adds github-flow 1.1.0's *In one go*
section: the phrase is advance merge authorisation for one change, still gated
by approved review loops, passing checks and a pinned-head merge, followed by
branch and worktree cleanup that removes `.claude/skills` junctions with the
skills manager before removing a worktree. It does not accept proposals.
AGENTS.md points to it. Minor version because the addition is compatible. The
implementing PR's merge commit and checks are recorded on #10. Rollback through
a PR.

## 4.1.0 — 2026-10-17 fresh-context reviewers and closed review loop (merged)

Proposal #7 revision 1, accepted through the operator's explicit instructions in
a local Claude Code session and recorded on #7 with its fingerprint. Reason:
GitHub Flow requires independent agent review but did not say who reviews what
or when a review is finished. Adds review-change 1.0.0 and six read-only
definitions under `.claude/agents/`: code, protocol, agent-context, proposal,
knowledge and resumability reviewers. Every non-trivial change closes its loop
before asking to merge (proposals before publication or triage): five rounds for
scripts, protocols, agent context, proposals and integration notes; three for
other notes, tasks and records for returning humans. An unresolved loop
escalates to the operator through their personal `pushover-notify` skill; the
operator may waive a review. Agent review stays advisory and grants no
acceptance or merge authority. Minor bumps: refine-proposal 1.1.0 and
end-session 3.1.0 add review steps; patches: integrate-proposal 2.0.1 points at
the loop; github-flow 1.0.1 points at it and defines the reviewed head.
Operating 4.1.0 because the addition is compatible. Verified by `bun run
verify`, `bun test` and the review loop reported in the PR. PR #8 was
squash-merged at `aebfa6dc659a52b6f2d73a607cd2e78274260b2b`, identical to
reviewed head `81b4279ce7c66310b10a72caeb178a00e914b5ed`; its post-merge checks
passed. Rollback through a PR. See [the session
record](sessions/2026-10-17-reviewers.md).

## 2026-10-17 plain-language communication guide (merged)

Direct operator request adds studio/communication.md and links from the agent
entry/studio guide. It explains the situation and next decision in everyday
words, with technical details kept exact and placed after the practical point.
The guide clarifies existing communication expectations; no approval or merge
rule changes. PR #6 was merged into main at
`d5e2f791328947522fd875dd946658f7e2f02edd`. See [the session
record](sessions/2026-10-17-plain-language.md).

## 4.0.0 — 2026-10-17 response guidance (merged; final records pending)

Accepted #3 revision 4 extends #1 with response-guidance 1.0.0: stable useful
stage labels (simple by default), truthful counts, every-response
recaps/recommendations and complete bidirectional handoff prompts. Updates
foundation, startup, task lifecycle, end-session, agent/bootstrap and templates.
Prerequisite #2 PR #4 merged at 1fb2f845bc1e9746c73417cb8d7b8dc76695bfa3. PR #5
then merged at 2112dcc8dc838de0aeec783363e1696e97af0f0e; its post-merge checks
passed. Final issue records remain pending; the communication guide merged
through PR #6. Historical header rules remain in issue revisions; revision 4
governs. No task files/status or creative scope changes. See
[decision](../book/notes/response-guidance.md) and
[verification](reports/response-guidance-verification.md). Rollback through a
PR.


## 3.0.0 — 2026-10-17 GitHub Flow (merged; follow-up verification pending)

Accepted #2 revision 1 and the supplemental simple acceptance-comment convention.
Adds github-flow 1.0.0, PR template and pinned Linux/Windows canonical CI.
Versions affected authority/integration protocols for PR-only main content and
separate human merge authorisation. Administrative rename preserves b2bf58a and
existing tags. Enforcement was blocked while the repository was a private Free
organisation repository; after the operator made it public, main protection was
configured and verified by readback. See [settings evidence](reports/github-flow-settings.md). No tasks are changed.
PR #4 merged at 1fb2f845bc1e9746c73417cb8d7b8dc76695bfa3; post-merge
CI passed. Automatic template population and final issue disposition remain
pending. Rollback uses a PR; historical setup coordinates remain provenance.


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
