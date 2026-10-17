# Operating proposals handoff — 2026-10-17

Accepted: #2 revision 1 and #3 revision 4; provenance is in their comments.
No merge is authorised; both issues remain open. This branch prepares #2 first.

Remote default renamed to main at unchanged b2bf58a. Original local checkout
preserved; implementation is isolated in bad-dream-issue-2. Existing tags/history
remain intact. See [workflow](../workflows/github-flow.md) for local migration.

Prepared: GitHub Flow, PR template, Linux/Windows canonical CI, coordinates,
protocol versions, simple acceptance convention and offline rationale. No task
changes are justified; TASK-1 remains unstarted. See
[settings evidence](../reports/github-flow-settings.md) for the plan blocker.

Verification and PR/review results will be appended when observed. Automatic
template population and main-push confirmation require a later authorised merge.
Next: run canonical checks, open PR, obtain independent review, then prepare #3
with its dependency explicit. Do not merge or close proposals as integrated.

Local #2 verification: frozen install passed on Bun 1.4.3; canonical verify
passed; bun test passed 12/12 with 70 assertions, including Windows junction
functionality/E2E. Protection PUT was rejected with the recorded HTTP 403.

## Proposal #3 preparation

#2 published as [PR #4](https://github.com/michi-guns/bad-dream/pull/4), head
4986c99b92939c9b5e098a1ac474e32feda281f8. Shell push lacked workflow scope;
the authorised GitHub connector published it. The isolated local working branch
was reconciled with that remote commit; the original checkout was not changed.

#3 is prepared in bad-dream-issue-3 on docs/issue-3-response-handoffs, based on
#4's head. It adds useful stable headers, truthful progress, every-response
recaps/recommendations, complete two-way handoffs, versioned protocols/templates,
bootstrap and offline decision rationale. No task records changed. Behavioural
examples are in [verification](../reports/response-guidance-verification.md).

Dependency: merge #4 only with separate human authorisation, then reconcile/rebase
#3 on current main, rerun CI and obtain review/authorisation for the resulting
head. PR #5 targets main for combined canonical CI; its diff includes prerequisite
#4 until that merges. Review #3 alone against #4's head.

Hosted #2 CI run 39019785481 passed Linux, Windows and Required checks.
Independent agent review of 4986c99b92939c9b5e098a1ac474e32feda281f8 found
no substantive blockers; this follow-up normalises the three reported CRLF
final lines and records evidence. Final reviewed head/checks are reported on PR #4.

#3 local verification: frozen install, bun run verify, and 12/12 Windows tests
passed with 70 assertions. Six illustrative behaviour scenarios passed manual
walkthrough; they assert no actual TASK-1 progress. PR/review evidence follows.

Published #3 as [PR #5](https://github.com/michi-guns/bad-dream/pull/5).
#4 final head 9f77a7500b884dd078416b4c055a860c2e18b1b3 independently reviewed
with no concerns; all three checks passed in run 39019890266. #3 canonical local
verification passed after reconciling the dependency. Hosted #3 results and its
final independently reviewed SHA are recorded on PR #5, avoiding a self-hash.

Human actions: decide compatible plan support or propose revised protection
scope; do not treat blocked enforcement as complete. No merges are authorised.
Review PR #4 first. After authorised integration, verify automatic template
population with a subsequent PR and main-push checks. Paste the updated ChatGPT
bootstrap manually (under 8,000 characters; app field acceptance still pending),
and migrate the original checkout deliberately using GitHub Flow guidance.
