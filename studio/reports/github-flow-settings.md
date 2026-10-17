# GitHub Flow settings evidence

## Current: protection enforced on public main — 2026-10-17

Observed using authenticated GitHub CLI as jimzord12 (admin permission true),
after the operator made the repository public. The agent did not change
visibility or plan; organisation `michi-guns` plan remains `free`.

- Before: visibility `public`, default `main`, head
  `b2bf58aec9e5a5cd11107d6f27b80e27f7b918a1`, `protected: false`. GET
  protection returned HTTP 404 “Branch not protected” (no longer 403).
  Repository rulesets: `[]`. Effective rules for main
  (`rules/branches/main`): `[]`, so no repository or organisation ruleset
  applies. Listing organisation rulesets directly needs the `admin:org` scope,
  which was not requested.
- PUT `repos/michi-guns/bad-dream/branches/main/protection` returned HTTP 200.
- REST readback: required status check `Required checks` bound to GitHub
  Actions (app_id 15368, the app producing the observed check runs); `strict`
  (branch up to date) true; `enforce_admins` true; pull request required with
  zero required approving reviews (one GitHub identity) and no bypass
  allowances; no push restrictions; force pushes and deletions false.
- GraphQL readback agrees: pattern `main`, admin enforced, status checks and
  strict checks required, PR reviews required with count 0; force-push bypass,
  PR bypass and push allowances each 0. Branch reports `protected: true`, head
  unchanged.
- Enforcement is **verified by settings readback**. It was not tested by a
  direct main push, which would be unauthorised. Explicit human merge
  authorisation naming the PR and reviewed head SHA still applies.

Change or rollback these settings only through accepted scope and a recorded PR;
do not grant routine bypasses. Re-read them after any organisation, plan or
visibility change.

## History: blocked while private — 2026-10-17

Observed earlier the same day using authenticated GitHub CLI as jimzord12.

- Before: default `setup/studio-foundation`, remote HEAD
  `b2bf58aec9e5a5cd11107d6f27b80e27f7b918a1`; no open PRs; clean local
  checkout at `0d5cb38`, behind the remote. Fetch confirmed ancestry.
- Admin permission: true. Organisation `michi-guns` plan: `free`.
- Branch rename succeeded; GET repository returns default `main`; its head is
  unchanged. Existing history and `studio-v1.0.0` tag were preserved.
- GET `repos/michi-guns/bad-dream/branches/main/protection` and GET
  `repos/michi-guns/bad-dream/rulesets`: HTTP 403, “Upgrade to GitHub Pro or
  make this repository public to enable this feature.” This generic API message
  is recorded verbatim; the repository was then a private organisation
  repository on Free. Attempted PUT of the required configuration also returned
  HTTP 403; no enforcement configuration was applied.
- The operator then chose to make the repository public; no upgrade was bought.
  Afterwards the ChatGPT GitHub integration could list rulesets (`[]`) but not
  read legacy protection (“Resource not accessible by integration”), an
  integration restriction rather than an administrator limitation.

## Follow-up after PR #4 merged

PR #4 merged at `1fb2f845bc1e9746c73417cb8d7b8dc76695bfa3`.
The [main-push CI run](https://github.com/michi-guns/bad-dream/actions/runs/39025055645)
completed successfully. Automatic template population with a newly prepared PR
remains pending. Keep issue #2 open until its remaining checks and final
integration record are complete. The administrator protection readbacks above
remain their recorded evidence; this follow-up does not claim a new admin read.

## Closure on 2026-10-17

The operator asked for #2 to be closed. Protection was read back again: the
`Required checks` status check is required, and force pushes and deletions are
off. Template population was verified on the signed-in new-PR page for branch
`docs/close-proposals-2-3`: the description box held the template unchanged
(738 characters). #2 is closed with its integration record; see [the closure
record](../sessions/2026-10-17-close-proposals-2-3.md).
