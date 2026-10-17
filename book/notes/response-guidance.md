---
id: response-guidance
type: decision
status: accepted
chapter: studio-operations
sources:
  - "https://github.com/michi-guns/bad-dream/issues/3"
protocol_id: knowledge-note
protocol_version: 1.0.0
protocol_revision: 4986c99b92939c9b5e098a1ac474e32feda281f8
---

# Useful visibility and complete handoffs

Accepted, prepared on a working branch, **not integrated**. Extends
[guided task execution](guided-task-execution.md); depends on
[GitHub Flow](github-flow.md). Prerequisite PR #4 has merged; this response
guidance still awaits its own checks, review and separate merge authorisation.

## Provenance and revision history

Jimzord (connected account jimzord12), 2026-10-17, explicitly said “I accept them
all” in chat. An agent truthfully recorded that human acceptance in
[the revision-4 acceptance comment](https://github.com/michi-guns/bad-dream/issues/3#issuecomment-6232010464).
Exact revision-4 UTF-8 body SHA-256 including trailing newline:
`692fa0055adb5dfc3a9657a8056a03b38bbc77f8b610ca5711b49d3d47f78736`.
No merge was authorised. The unchanged body's proposed wording is historical.

Earlier issue comments preserve revision fingerprints: revision 1 introduced
headers/counts; revision 2 added recaps/recommendations; revision 3 corrected
headers to useful occasions and stable stages; revision 4 added both handoff
directions and made simple labels the default. The earlier every-substantive-
response header rule is superseded by revision 4; fingerprints are not interchangeable.
See the complete issue comments for original provenance; do not rewrite them.

## Decision and rationale

Use useful stable stage headers, truthful counts, bullet Recap and next-action
Recommendation(s) in every response, plus explicit Chat ↔ Local Agent handoffs
with complete prompts. A returning human should see current position and next
action without memorising the repository or relying on an inaccessible chat.
[The protocol](../../studio/workflows/response-guidance.md) contains stable
stage values and exact behaviour; [examples](../../studio/reports/response-guidance-verification.md)
exercise both handoff directions and progress changes.

## Alternatives, tradeoffs and migration

Headers on every substantive reply became noisy; keep them for starts/resumptions,
stage changes or orientation requests. Simple labels minimise visual overhead;
short arrows are optional. Unknown-total work uses no fraction. Recaps scale down
to one bullet for a clarification. Complete prompts add a little handoff text but
prevent lost authority/context between surfaces. A prompt grants no new authority.

New protocol versions apply to new work; historical Git content explains prior
sessions. Legacy task briefs gain workflow details when next worked through the
pinned CLI. No task edits are justified here; TASK-1 stays unstarted. Reconsider
if headers become noisy: shorten display while preserving truthful orientation.
No approval automation, creative decisions or merge permission is introduced.
