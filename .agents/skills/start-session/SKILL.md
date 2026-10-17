---
name: start-session
description: Start or resume a Bad Dream work session. Checks Git, loads the current repository state and newest handoff, and orients the operator on where things stand and the next decision. Use at the start of a new session or after a long break, not for a mid-session status question.
---

Follow the canonical workflow at `studio/workflows/start-session.md`; do not
maintain a second embedded version. Read `AGENTS.md` first and do what it asks.

1. Inspect Git status, branch, remotes and worktrees; fetch when remote access is
   authorised and reachable. Report whether the checkout is clean and on an
   up-to-date main; never switch, pull, reset or discard anything to make it so
   without the operator's word.
2. Read the files `AGENTS.md` lists, `studio/state/current.md`, the newest record
   in `studio/sessions/`, the open PRs, and the issues current state names.
   Reconcile any contradiction with `studio/workflows/reconcile-context.md`.
3. Orient the operator as the workflow's *Orient the human* section says, in the
   plain language of `studio/communication.md`, including the next decision
   and who makes it.

Do no substantive work until the operator chooses what to work on. If they named
a task when invoking this skill, load it through the pinned Backlog CLI and
`studio/workflows/task-lifecycle.md`; for a topic, search the book and issues.
