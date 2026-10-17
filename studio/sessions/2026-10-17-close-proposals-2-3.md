# Closing proposals #2 and #3 — 2026-10-17

Changed: the operator asked for proposals
[#2](https://github.com/michi-guns/bad-dream/issues/2) (GitHub Flow) and
[#3](https://github.com/michi-guns/bad-dream/issues/3) (response guidance) to be
closed. Each is closed as completed with an integration record
([#2 record](https://github.com/michi-guns/bad-dream/issues/2#issuecomment-6236240383),
[#3 record](https://github.com/michi-guns/bad-dream/issues/3#issuecomment-6236241025)).
#2 went to main through PR #4. #3 went through PR #5, plus the communication
guide in PR #6. This record is carried by
[PR #14](https://github.com/michi-guns/bad-dream/pull/14), and it is merged only
if this file is in main.

Verified: main's protection was read back again through `gh api` as the
operator's administrator account (the `Required checks` status check is
required; force pushes and deletions are off). The last open #2 item,
automatic PR-template population, was then checked. The operator was signed in
to GitHub in Chrome, and the new-PR page for branch `docs/close-proposals-2-3`
pre-filled the description box with `.github/pull_request_template.md`: same
length (738 characters), same start and end text. Nothing was submitted from the
browser. The result is posted on #2.

Open: none from #2 or #3. TASK-1 is To Do and unstarted.

Next action: ask the operator who owns TASK-1 and which first question to
choose, then run `bun run backlog -- task view TASK-1 --plain`.
