# Fresh-context reviewers and closed review loop — 2026-10-17

Changed: six read-only reviewer subagents under `.claude/agents/` — code,
protocol, agent-context, proposal, knowledge and resumability — and the closed
[review loop](../workflows/review-change.md) they run in, with pointers from
`AGENTS.md`, the [studio guide](../README.md) and four workflows; versions are
in [history](../changes.md). Committed on branch `docs/issue-7-review-loop`
(from main at `d5e2f79`) in a separate worktree, `bad-dream-review-loop`, beside
the original checkout. Not yet pushed; no PR yet; not merged.

Decisions: proposal [#7](https://github.com/michi-guns/bad-dream/issues/7)
revision 1. The operator accepted it in a local Claude Code session after the
agent explained main's proposal and PR rules: "yes, go ahead … do whatever is
needed to align with main -> then new branch -> create PR with the changes".
Earlier instructions in that session set the scope: reviewers modelled on
another of their workspaces, a dedicated agent-context reviewer, a closed loop
on every review type, three rounds for ordinary notes and session records, and
high-priority Pushover escalation. The reviewer set, the five-round limit
elsewhere and the operator waiver (review-change *When*) are agent suggestions
within that scope. The acceptance is not yet recorded on #7: the comment was
blocked by a permission check. Merging is a separate operator decision.

Verified: `bun run verify` and `bun test` (12 pass) after every round's fixes.
Review loops: protocol APPROVED in round 3, agent context APPROVED in round 2;
this record's own review is the last loop. Each approving head SHA and the
final head are listed in the PR.

Open: the original checkout's `setup/studio-foundation` branch still holds the
first draft (commits `e279b5a`, `b1eebdb`, never pushed), superseded by this
branch and left untouched. Codex cannot load `.claude/agents/` and passes a
definition's body as a fresh subagent's brief. The ChatGPT bootstrap does not
route to the review and has little space left. The `pushover-notify` skill is
personal to the operator's machine.

Next action: once the operator allows GitHub writes (blocked by the agent's
permission check), the agent posts the acceptance record and the
proposal-fingerprint comment on #7, pushes the branch and opens the PR.

After merge: confirm in a fresh Claude Code session that `/agents` lists all
six reviewers.
