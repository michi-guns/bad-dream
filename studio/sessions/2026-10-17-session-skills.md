# Session skills — 2026-10-17

Changed: two thin shared skills, `start-session` and `end-session`, under
`.agents/skills/`. They point at `studio/workflows/start-session.md` and
`end-session.md` and embed no second version; see [history](../changes.md).
[Current state](../state/current.md) now tells a new local session to begin
with `/start-session` (Codex: `$start-session`). Prepared on branch
`docs/session-skills` and delivered by its PR; if you are reading this in main,
that PR has merged.

Decisions: the operator asked whether a thin skill should replace pasting a
next-session prompt, then asked for "the start skill and anything else that you
think that makes sense". Adding `end-session` is an agent suggestion within that
request. Neither skill changes a rule: the end-session workflow's paste-ready
prompt still applies, and for a new local session it can open with
`/start-session`.

Verified: `bun run verify` and `bun test` after every round's fixes; the review
loops and checks are listed in the PR.

Open: proposals [#2](https://github.com/michi-guns/bad-dream/issues/2) and
[#3](https://github.com/michi-guns/bad-dream/issues/3) still await their final
integration records. TASK-1 is To Do; the operator assigns its owner.

Next action: in a new local session, run `/start-session`, then start TASK-1
with `bun run backlog -- task view TASK-1 --plain`.
