# GitHub Flow

Protocol: `github-flow` 1.0.0. Authority: accepted proposal
[#2 revision 1](https://github.com/michi-guns/bad-dream/issues/2#issuecomment-6232010324).

`main` is the default and authoritative integrated state. Every content change,
including protocol records and rollback, uses a short-lived branch and PR. Never
commit/push file changes directly to main, force-push it, or delete it.

Branch from freshly inspected main for one coherent change. Use lowercase
`<type>/<reference>-<short-description>`: types are `docs`, `ci`, `feat`,
`fix`, `chore`; references distinguish `issue-N` and `task-N` and may be
omitted. Example: `ci/issue-2-repository-checks`. Inspect status/branch/remotes
first; preserve local work. Use an isolated worktree if the checkout is occupied.

PRs target main, link source proposals/tasks, and use the
[PR template](../../.github/pull_request_template.md). Stacked work must declare
its base/dependency, include only its scope, and be rebased/retargeted and reviewed
again after the prerequisite merges. Obtain independent agent review, resolve
findings or record concerns, and identify agent-generated feedback and reviewed
head SHA. Agent feedback supplies neither human acceptance nor merge permission.

Proposal acceptance permits preparing changes/PRs. Merging needs separate explicit
operator authorisation naming the PR and reviewed head SHA. Material subsequent
changes require renewed review and authorisation. A pushed branch/open PR remains
pending integration. After authorised merge, read back main, checks and settings;
only then record verified outcomes and close an integrated proposal. Missing
required enforcement keeps #2 open unless the human accepts revised scope.

## Canonical checks and enforcement

[CI](../../.github/workflows/verify.yml) runs every main PR and main push with
read-only permissions, pinned actions/Bun 1.4.3, frozen dependencies, bounded
jobs and no path filters. Both Linux and Windows run `bun run verify` and
`bun test`; Windows executes real junction tests. `Required checks` runs
with `always()` and accepts only successful prerequisites, rejecting failure,
cancellation and unexpected skips. Do not use privileged PR execution or secrets.

Require PRs and the observed `Required checks` context on main, up-to-date
branches, administrator enforcement, no routine bypass, no force pushes and no
deletion. Do not require another account's formal approval in this solo-account
workflow: explicit human merge authorisation still applies. Record settings
readback; policy text alone does not establish enforcement. See
[settings evidence and owner steps](../reports/github-flow-settings.md).

## Administrative transition and local migration

On 2026-10-17 the existing default branch `setup/studio-foundation` was renamed
through GitHub's branch-rename API to `main`, preserving
`b2bf58aec9e5a5cd11107d6f27b80e27f7b918a1` and immutable tags. No content
was committed to main. The original local checkout was left on its original
branch at `0d5cb38`; isolated worktrees contain implementation work.

For a clean checkout still on the old branch, inspect before choosing to migrate:

```powershell
git status --short
git branch -avv
git remote -v
git fetch origin
# Only after checking local commits/changes and confirming the intended branch:
git branch -m setup/studio-foundation main
git branch --set-upstream-to=origin/main main
git remote set-head origin -a
git merge --ff-only origin/main
bun install --frozen-lockfile
bun run skills:link
bun run verify
```

If main already exists or work diverges, reconcile explicitly; do not overwrite
or reset. These are operator guidance, not commands silently applied to the
original checkout. New clones use main. Paste the updated
[ChatGPT instructions](../chatgpt-project-instructions.md) into project settings;
repository edits do not change app settings. Until the PR merges, main still
contains the previous bootstrap: identify this pending PR when reviewing it.

After #2 merges, verify automatic template population with a subsequent PR;
the bootstrap PR manually follows it. Rollback uses a reviewed revert/corrective
PR; do not move tags or silently reverse the administrative transition.
