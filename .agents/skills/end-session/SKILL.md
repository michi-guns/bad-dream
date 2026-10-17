---
name: end-session
description: End a substantive Bad Dream work session with a durable handoff. Writes the dated session record and current-state update, reviews them, delivers them through a PR, and gives the operator a paste-ready start for the next session. Use when the operator wants to stop, wrap up, hand off, or continue in a new session.
---

Follow the canonical workflow at `studio/workflows/end-session.md` and the
handoff template at `studio/templates/handoff.md`; do not maintain a second
embedded version.

1. Inspect Git status and diff. Name what is local, committed, pushed, merged and
   still open, with exact PRs, heads and issues.
2. On a working branch, write the dated record in `studio/sessions/` and update
   `studio/state/current.md` so both stay true after merge. Run the review loop
   in `studio/workflows/review-change.md` on them last.
3. Push and open the PR under `studio/workflows/github-flow.md`. Merge only with
   the operator's named merge authorisation or their *In one go* instruction,
   then read back main and clean up as that workflow says.
4. End with the next-session start: for a new local session, tell the operator
   to run `/start-session` (Codex: `$start-session`), adding only what the
   repository does not hold. For a move to ChatGPT, give the full paste-ready
   prompt that `studio/workflows/response-guidance.md` requires.

If nothing was written to the repository, give a portable handoff marked not
integrated instead.
