# Fresh-context reviewers and closed review loop — 2026-10-17

Changed: six read-only reviewer subagents under `.claude/agents/` — code,
protocol, agent-context, proposal, knowledge and resumability — and the closed
[review loop](../workflows/review-change.md) they run in, with pointers from
`AGENTS.md`, the [studio guide](../README.md) and four workflows; versions are
in [history](../changes.md). Prepared on branch `docs/issue-7-review-loop` (from
main at `d5e2f79`) in a separate worktree, `bad-dream-review-loop`, and added to
main through [PR #8](https://github.com/michi-guns/bad-dream/pull/8), squash
commit `aebfa6d`.

Decisions: proposal [#7](https://github.com/michi-guns/bad-dream/issues/7)
revision 1. The operator accepted it in a local Claude Code session after the
agent explained main's proposal and PR rules: "yes, go ahead … do whatever is
needed to align with main -> then new branch -> create PR with the changes".
Earlier instructions in that session set the scope: reviewers modelled on
another of their workspaces, a dedicated agent-context reviewer, a closed loop
on every review type, three rounds for ordinary notes and session records, and
high-priority Pushover escalation. Agent suggestions within that scope: the
reviewer set, the five-round limit for other records, and the operator waiver
(review-change *When*). The acceptance and fingerprint are recorded on #7. The
operator authorised the merge of PR #8 at its reviewed head `81b4279` ("merge PR
#8 at 81b4279"); `aebfa6d` is the resulting squash commit.

Verified: `bun run verify` and `bun test` (12 pass) after every round's fixes;
PR #8's checks and the post-merge checks on main passed. Review loops: protocol
APPROVED in round 3, agent context in round 2, the original record in round 2
(this follow-up has its own review); PR #8 lists each approving head.

Open: the original checkout's `setup/studio-foundation` branch still holds the
first draft (commits `e279b5a`, `b1eebdb`, never pushed), superseded by this
branch and left untouched. Codex cannot load `.claude/agents/` and passes a
definition's body as a fresh subagent's brief. The ChatGPT bootstrap does not
route to the review and has little space left. The `pushover-notify` skill is
personal to the operator's machine. #7 stays open until this follow-up record is
in main.

Next action: after this follow-up merges, the agent closes #7 with an
integration comment (`gh issue close 7 --repo michi-guns/bad-dream --comment
...`). Then, in a fresh Claude Code session, run `/agents` and confirm all six
reviewers are listed. Then resume TASK-1 with `bun run backlog -- task view
TASK-1 --plain`.
