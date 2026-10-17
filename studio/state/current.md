# Current state

Last reviewed: 2026-10-17.

GitHub Flow from accepted proposal #2 revision 1 was added to main through
[PR #4](https://github.com/michi-guns/bad-dream/pull/4), merge commit
`1fb2f845bc1e9746c73417cb8d7b8dc76695bfa3`. Its
[post-merge checks](https://github.com/michi-guns/bad-dream/actions/runs/39025055645)
passed. The repository is public, main is the default, and protection was
configured and verified through administrator readback. See
[settings evidence](../reports/github-flow-settings.md).

Accepted proposal #3 revision 4 was added to main through
[PR #5](https://github.com/michi-guns/bad-dream/pull/5), squash commit
`2112dcc8dc838de0aeec783363e1696e97af0f0e`. Its
[post-merge checks](https://github.com/michi-guns/bad-dream/actions/runs/39025700980)
passed. The response guidance is now in main.

The plain-language communication guide from
[PR #6](https://github.com/michi-guns/bad-dream/pull/6) is in main at `d5e2f79`.
Current focus: TASK-1, below, once the #7 records are closed.
Issues #2 and #3 remain open. Automatic PR-template population and the final
integration records remain pending; passing CI alone does not close those items.

Proposal [#7](https://github.com/michi-guns/bad-dream/issues/7) revision 1
(fresh-context reviewers and a closed review loop) is in main through [PR
#8](https://github.com/michi-guns/bad-dream/pull/8), squash commit `aebfa6d`;
its post-merge checks passed. #7 closes once this record is in main. Still to
check: a fresh Claude Code session lists all six reviewers under `/agents`. See
[the reviewers record](../sessions/2026-10-17-reviewers.md).

The original local checkout was preserved on setup/studio-foundation at 0d5cb38;
it now also holds two unpushed draft commits superseded by the #7 branch.
Implementation used separate worktrees. Follow the
[local migration guidance](../workflows/github-flow.md) deliberately; never
silently reset or overwrite local work. The communication conflict fix was prepared separately
and did not access or change the operator's checkout.

TASK-1 remains To Do and unstarted. No Backlog.md files were modified. Reconstruct
its execution brief through the pinned CLI before eventual execution. No creative
mechanic, engine or production scope is accepted.

After the communication guide is merged and checked, the human should paste
[the current ChatGPT instructions](../chatgpt-project-instructions.md) into project
settings. Repository edits do not change app settings. Earlier setup checks remain
in [setup verification](../reports/setup-verification.md).

Resume from [the guide](../README.md),
[GitHub Flow](../workflows/github-flow.md),
[response guidance](../workflows/response-guidance.md) and
[the operating handoff](../sessions/2026-10-17-operating-proposals.md).
