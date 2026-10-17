# Current state

Last reviewed: 2026-10-17.

Current focus: prepare accepted operating proposals #2 revision 1, then #3
revision 4. #2 files are on a working branch pending PR integration; no merge
is authorised. Main is now the remote default at b2bf58a after the administrative
rename; no direct content changes were made there. The operator made the
repository public; main protection is now configured and verified by readback
(PR + `Required checks` + up to date, admins enforced, no bypass, force push and
deletion off). See [GitHub Flow](../workflows/github-flow.md) and
[settings evidence](../reports/github-flow-settings.md). #3 is prepared in
dependent PR #5, which must not merge before #4.

The original checkout remains on setup/studio-foundation at 0d5cb38; it was
clean and behind the remote. Implementation uses a separate worktree. Follow
the migration guidance deliberately; preserve existing local work.

TASK-1 remains To Do and unstarted. No Backlog.md files were modified. Reconstruct
its execution brief through the pinned CLI before eventual execution. No creative
mechanic, engine or production scope is accepted. #1 remains integrated at
b2bf58a; historical setup and shared-skills evidence are retained in session records.

ChatGPT project settings need a human paste of
[the updated instructions](../chatgpt-project-instructions.md) after reviewing
this pending change; repository edits do not update app settings. Remaining
bootstrap checks are in [setup verification](../reports/setup-verification.md).

Resume from [the guide](../README.md),
[GitHub Flow decision](../../book/notes/github-flow.md) and
[operating handoff](../sessions/2026-10-17-operating-proposals.md).
