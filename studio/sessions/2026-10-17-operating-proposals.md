# Operating proposals handoff — 2026-10-17

Accepted: #2 revision 1 and #3 revision 4; provenance is in their comments.
No merge is authorised; both issues remain open. This branch prepares #2 first.

Remote default renamed to main at unchanged b2bf58a. Original local checkout
preserved; implementation is isolated in bad-dream-issue-2. Existing tags/history
remain intact. See [workflow](../workflows/github-flow.md) for local migration.

Prepared: GitHub Flow, PR template, Linux/Windows canonical CI, coordinates,
protocol versions, simple acceptance convention and offline rationale. No task
changes are justified; TASK-1 remains unstarted. See
[settings evidence](../reports/github-flow-settings.md) for protection history.

Verification and PR/review results will be appended when observed. Automatic
template population and main-push confirmation require a later authorised merge.
Next: run canonical checks, open PR, obtain independent review, then prepare #3
with its dependency explicit. Do not merge or close proposals as integrated.

Local #2 verification: frozen install passed on Bun 1.4.3; canonical verify
passed; bun test passed 12/12 with 70 assertions, including Windows junction
functionality/E2E. Protection PUT was rejected with the recorded HTTP 403.

Hosted #2 CI run 39019785481 passed Linux, Windows and Required checks.
Independent agent review of 4986c99b92939c9b5e098a1ac474e32feda281f8 found
no substantive blockers; this follow-up normalises the three reported CRLF
final lines and records evidence. Final reviewed head/checks are reported on PR #4.

Protection follow-up: the operator made the repository public. Authenticated
admin CLI then applied main protection (HTTP 200) and REST/GraphQL readback
verified PR-only changes, `Required checks` (GitHub Actions), up-to-date
branches, admin enforcement, no bypass allowances, and force push/deletion
disabled. No direct main push test was made. #4 evidence was refreshed; #5 is
reconciled after #4 merges. Merge still needs separate human authorisation.
