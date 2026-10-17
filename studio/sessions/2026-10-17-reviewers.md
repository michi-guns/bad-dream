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
high-priority Pushover escalation. The reviewer set, the five-round limit
elsewhere and the operator waiver (review-change *When*) are agent suggestions
within that scope. The acceptance and fingerprint are recorded on #7. The
operator authorised the merge as "merge PR #8 at 81b4279".

Verified: `bun run verify` and `bun test` (12 pass) after every round's fixes;
PR #8's checks and the post-merge checks on main passed. Review loops: protocol
APPROVED in round 3, agent context in round 2, this record in round 2; PR #8
lists each approving head.

Open: the original checkout's `setup/studio-foundation` branch still holds the
first draft (commits `e279b5a`, `b1eebdb`, never pushed), superseded by this
branch and left untouched. Codex cannot load `.claude/agents/` and passes a
definition's body as a fresh subagent's brief. The ChatGPT bootstrap does not
route to the review and has little space left. The `pushover-notify` skill is
personal to the operator's machine.

Next action: confirm in a fresh Claude Code session that `/agents` lists all six
reviewers.
