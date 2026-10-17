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

The plain-language communication guide from [PR
#6](https://github.com/michi-guns/bad-dream/pull/6) is in main at `d5e2f79`.
Issues #2 and #3 remain open. Automatic PR-template population and the final
integration records remain pending; passing CI alone does not close those items.

Proposal [#7](https://github.com/michi-guns/bad-dream/issues/7) revision 1
(fresh-context reviewers and a closed review loop) is in main through [PR
#8](https://github.com/michi-guns/bad-dream/pull/8), squash commit `aebfa6d`,
and #7 is closed with its integration record. Claude Code loaded the six
reviewers and ran them as agent types; to check them, ask Claude which subagents
it can use (the `/agents` wizard no longer exists). Saying **in one go** now
authorises the full GitHub Flow cycle through merge and cleanup; see [GitHub
Flow](../workflows/github-flow.md), #10 and [the in-one-go
record](../sessions/2026-10-17-in-one-go.md). See [the reviewers
record](../sessions/2026-10-17-reviewers.md).

The operator's single local checkout is on main; the old worktrees and local
archive branches were removed after checking they held nothing beyond main.
Implementation used separate worktrees. Follow the [local migration
guidance](../workflows/github-flow.md) deliberately; never silently reset or
overwrite local work.

Current focus: TASK-1. TASK-1 remains To Do and unstarted. No Backlog.md files
were modified. Reconstruct its execution brief through the pinned CLI before
eventual execution. No creative mechanic, engine or production scope is
accepted. Start it in a new session; see [the tooling
wrap-up](../sessions/2026-10-17-tooling-wrap-up.md).

The operator reported pasting [the current ChatGPT
instructions](../chatgpt-project-instructions.md) into project settings. Earlier
setup checks remain in [setup verification](../reports/setup-verification.md).

Resume from [the guide](../README.md),
[GitHub Flow](../workflows/github-flow.md),
[response guidance](../workflows/response-guidance.md) and
[the operating handoff](../sessions/2026-10-17-operating-proposals.md).
