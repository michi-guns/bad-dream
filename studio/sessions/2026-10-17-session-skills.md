# Session skills — 2026-10-17

Changed: two thin shared skills, `start-session` and `end-session`, under
`.agents/skills/`. They point at `studio/workflows/start-session.md` and
`end-session.md` and embed no second version; see [history](../changes.md).
[Current state](../state/current.md) now tells a new local session to begin
with `/start-session` (Codex: `$start-session`). Committed on branch
`docs/session-skills`, pushed, and delivered by
[PR #13](https://github.com/michi-guns/bad-dream/pull/13); merged only if this
file is in main.

Decisions: the operator asked for the start skill "and anything else that you
think that makes sense"; `end-session` is an agent suggestion within that.
Neither skill changes a rule. The end-session workflow's paste-ready prompt
still applies; for a new local session it can open with `/start-session`, so
this record needs no separate user-facing handoff section.

Verified: `bun run verify` and `bun test` (12 pass) passed on the branch's
final commit. Review loops (agent context, protocol, records) and checks are
listed in PR #13.

Open: proposals [#2](https://github.com/michi-guns/bad-dream/issues/2) and
[#3](https://github.com/michi-guns/bad-dream/issues/3) still await their final
integration records. TASK-1 is To Do and unstarted.

Next action: in a new local session, run `/start-session`; ask the operator who
owns TASK-1 and which first question to choose; then run
`bun run backlog -- task view TASK-1 --plain`.
