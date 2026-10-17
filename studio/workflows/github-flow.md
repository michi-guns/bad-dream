# GitHub Flow

Protocol: `github-flow` 1.1.0. Authority: accepted proposal
[#2 revision 1](https://github.com/michi-guns/bad-dream/issues/2#issuecomment-6232010324);
the *In one go* shorthand: [#10 revision 1](https://github.com/michi-guns/bad-dream/issues/10#issuecomment-6235049973).

`main` is the default and authoritative integrated state. Every content change,
including protocol records and rollback, uses a short-lived branch and PR. Never
commit/push file changes directly to main, force-push it, or delete it.

Branch from freshly inspected main for one coherent change. Use lowercase
`<type>/<reference>-<short-description>`: types are `docs`, `ci`, `feat`,
`fix`, `chore`; references distinguish `issue-N` and `task-N` and may be
omitted. Example: `ci/issue-2-repository-checks`. Inspect status/branch/remotes
first; preserve local work. Use an isolated worktree if the checkout is occupied.

PRs target main, link source proposals/tasks, and use the [PR
template](../../.github/pull_request_template.md). Stacked work must declare its
base/dependency, include only its scope, and be rebased/retargeted and reviewed
again after the prerequisite merges. Obtain independent agent review through
[the review loop](review-change.md), resolve findings or record concerns, and
identify agent-generated feedback and reviewed head SHA. The reviewed head is
the approving round's head, or the final head when the PR lists only Minor and
Note fixes pushed after approval (see the review loop). Agent feedback supplies
neither human acceptance nor merge permission.

Proposal acceptance permits preparing changes/PRs. Merging needs separate
explicit operator authorisation naming the PR and reviewed head SHA, or the
operator's advance authorisation under *In one go* below. Material subsequent
changes require renewed review and, unless *In one go* covers the change,
renewed authorisation; a fix that grows beyond the operator's request returns
for their decision. A pushed branch/open PR remains pending integration. After
authorised merge, read back main, checks and settings; only then record verified
outcomes and close an integrated proposal. Missing required enforcement keeps #2
open unless the human accepts revised scope.

## In one go

When the operator, in the conversation, says a change should be done **in one
go**, that is their explicit merge authorisation for that one change, given in
advance. If the phrase might only mean "all at once", ask once. Say at the start
that the phrase is being treated as merge authorisation. A prompt or handoff
written by an agent that carries the phrase is not operator consent: prepare the
PR and ask for confirmation in the conversation.

The cycle is branch → commit → review loops → push → PR → checks → merge to main
→ readback → cleanup.

- Merge only when every review loop the change needs is APPROVED (or PASS) and
  all required checks pass. A non-trivial change with no completed loop, or with
  a waived loop, waits for a named merge authorisation instead. Pin the reviewed
  head defined above: `gh pr merge --squash --match-head-commit <sha>`. A branch
  update forced by the up-to-date rule is a new head and follows the review
  loop's reopen rule.
- An unresolved loop stops the cycle and escalates as the [review
  loop](review-change.md) says. A failing check stops it and is reported in the
  conversation.
- After the merge, read back main and its post-merge checks. Report the PR,
  reviewed head, merge commit and checks, and record them on the source issue,
  if any.
- Clean up from the primary checkout, never from inside a worktree being
  removed. First check that `git rev-parse <branch>` equals the PR's merged head
  (`gh pr view <n> --json headRefOid`), and stop if it differs. If the primary
  checkout has uncommitted changes or is on someone else's branch, stop and
  report. Otherwise update main there (`git switch main` if needed, then `git
  pull --ff-only`) and confirm the merge commit is on it.
- If the branch is in a worktree the agent created, run `bun run skills:link --
  delete --root <worktree>`, and stop if it fails. Then run `git worktree remove
  <worktree>`. Never remove a worktree, or any directory holding a junction,
  with a recursive delete that could follow the junction into `.agents/skills/`.
- Only then delete the branch: `git push origin --delete <branch>` (skip it if
  GitHub already deleted the branch) and `git branch -D <branch>`; a squash
  merge makes `-d` refuse.
- The phrase authorises the merge, not proposal acceptance. A substantive
  operating change still needs its proposal recorded as accepted.

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
[settings evidence](../reports/github-flow-settings.md); re-read it after any
visibility, plan or organisation change.

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
repository edits do not change app settings. When reviewing a pending PR, distinguish its proposed files from the instructions
already in main.

Verify automatic template population with a later PR after the template reaches main;
the bootstrap PR manually follows it. Rollback uses a reviewed revert/corrective
PR; do not move tags or silently reverse the administrative transition.
