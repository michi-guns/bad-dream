---
name: start-session
description: Start or resume a Bad Dream work session. Checks Git, loads the current repository state and newest handoff, and orients the operator on where things stand and the next decision. Use at the beginning of a new session, after a long break, or when the operator asks where things stand.
---

Follow the canonical workflow at `studio/workflows/start-session.md`; do not
maintain a second embedded version. Read `AGENTS.md` first and do what it asks.

1. Inspect Git status, branch, remotes and worktrees, and fetch. Report whether
   the checkout is clean and on an up-to-date main; never switch, pull, reset or
   discard anything to make it so without the operator's word.
2. Read the foundation, manifest, `studio/state/current.md` and the newest record
   in `studio/sessions/`, then the open PRs and issues that current state names.
   Reconcile any contradiction with `studio/workflows/reconcile-context.md`.
3. Orient the operator as the workflow's *Orient the human* section says, in the
   plain language of `studio/communication.md`, ending with the next decision
   and who makes it.

Stay read-only until the operator chooses what to work on. If they named a task
or topic when invoking this skill, load it through the pinned Backlog CLI and
`studio/workflows/task-lifecycle.md` before orienting.
