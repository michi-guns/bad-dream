---
name: end-session
description: End a substantive Bad Dream work session with a durable handoff. Writes the dated session record and current-state update, reviews them, and prepares the next session's start. Use when the operator wants to stop for now, end the session, or move the work to a new session; not for a proposal or migration handoff, which is refine-proposal.
---

Follow the canonical workflow at `studio/workflows/end-session.md` and the
handoff template at `studio/templates/handoff.md`; do not maintain a second
embedded version.

1. Inspect Git status, diff and ignored files; keep credentials and machine
   noise out. Name what is local, committed, pushed, merged and still open, with
   exact PRs, heads and issues.
2. Create or use a working branch, then write the dated record in
   `studio/sessions/` and update `studio/state/current.md` so both stay true
   after merge. Run the review loop in `studio/workflows/review-change.md` on
   them last.
3. Push and open the PR only under the operator's explicit authorisation;
   otherwise ask. Merge only with their named merge authorisation or their
   *In one go* instruction, then read back main and clean up as
   `studio/workflows/github-flow.md` says.
4. Give the paste-ready next-session prompt the workflow and
   `studio/workflows/response-guidance.md` require. For a new local session it
   can open with `/start-session` (Codex: `$start-session`).

If no repository write occurs, skip steps 2 and 3 and give a portable handoff
marked not integrated.
