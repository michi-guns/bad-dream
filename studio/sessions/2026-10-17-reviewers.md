# Fresh-context reviewers and closed review loop — 2026-10-17

Changed: six read-only reviewer subagents under `.claude/agents/` — code,
protocol, agent-context, proposal, knowledge and resumability — and the closed
[review loop](../workflows/review-change.md) they run in. `refine-proposal`
1.1.0, `end-session` 3.1.0, `integrate-proposal` 2.0.1 and `github-flow` 1.0.1
point at it (github-flow also defines the reviewed head); operating version
4.1.0; see [history](../changes.md). Pointers in `AGENTS.md` and the [studio
guide](../README.md). Prepared on branch `docs/issue-7-review-loop` from main at
`d5e2f79`; not merged.

Decisions: proposal [#7](https://github.com/michi-guns/bad-dream/issues/7)
revision 1, accepted through the operator's explicit instructions in a local
Claude Code session: reviewers modelled on another of their workspaces, a
dedicated agent-context reviewer, a closed loop on every review type, three
rounds for ordinary notes and session records, high-priority Pushover escalation
of an unresolved loop. The reviewer set, the five-round limit elsewhere and the
operator waiver (review-change *When*) are agent suggestions within that scope.
Merging is a separate operator decision. The acceptance and fingerprint comments
on #7 were blocked by a permission check and are pending.

Verified: `bun run verify` and `bun test` passed locally; CI results and the
review outcomes for this branch are reported in its PR.

Open: the files were first prepared on the stale local `setup/studio-foundation`
checkout (commits `e279b5a`, `b1eebdb`, never pushed) before main's GitHub Flow
was noticed; that checkout is left untouched. Codex cannot load
`.claude/agents/` and passes a definition's body as a fresh subagent's brief.
The ChatGPT bootstrap does not route to the review and has little space left.
The `pushover-notify` skill is personal to the operator's machine.

Next action: post the acceptance and fingerprint comments on #7 (pending
permission) before merge authorisation. Then the operator reviews the PR and
decides whether to merge it, naming its reviewed head SHA; afterwards open a
fresh Claude Code session and confirm `/agents` lists all six.
