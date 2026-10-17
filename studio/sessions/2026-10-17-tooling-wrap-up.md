# Tooling wrap-up before game work — 2026-10-17

Changed: closed out the reviewer and workflow setup. The six reviewer agents and
the [review loop](../workflows/review-change.md) are in main (#7), as is the
[In one go](../workflows/github-flow.md#in-one-go) shorthand (#10); see
[the reviewers record](2026-10-17-reviewers.md) and
[the in-one-go record](2026-10-17-in-one-go.md). Local housekeeping, outside the
repository: the old worktrees `bad-dream-issue-2` and `bad-dream-issue-3` and
the local archive branches were removed. Each was clean, and its head was
already contained in a merged PR's head. This record is delivered by the PR from
`docs/session-handoff-tooling`; if you are reading it in main, that PR has
merged and the operator's single checkout is back on main.

Decisions: the operator explicitly asked for the cleanup, reported pasting the
ChatGPT instructions from main after PR #11 into project settings (reported,
not verified by the agent), and asked to start the real work in a new session.

Verified: `bun run verify` and `bun test` on main at `439bd9b`; every merged
PR's checks and post-merge checks passed. Claude Code loaded and ran the six
reviewers as agent types.

Open: proposals [#2](https://github.com/michi-guns/bad-dream/issues/2) (GitHub
Flow) and [#3](https://github.com/michi-guns/bad-dream/issues/3) (response
guidance), from an earlier session, stay open until their final integration
records are written; see [current state](../state/current.md). TASK-1 is To Do
and unstarted; the operator assigns its owner and chooses the first question.

Next action: in a new session, run `/start-session` (Codex: `$start-session`),
ask the operator to assign TASK-1's owner, then start it (review the creative
brief and choose the first question) with `bun run backlog -- task view TASK-1
--plain`.
