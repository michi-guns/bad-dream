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
