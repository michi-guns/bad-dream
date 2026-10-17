# GitHub Flow settings evidence

Observed 2026-10-17 using authenticated GitHub CLI as jimzord12.

- Before: default `setup/studio-foundation`, remote HEAD
  `b2bf58aec9e5a5cd11107d6f27b80e27f7b918a1`; no open PRs; clean local
  checkout at `0d5cb38`, behind the remote. Fetch confirmed ancestry.
- Admin permission: true. Organisation `michi-guns` plan: `free`.
- Branch rename succeeded; GET repository returns default `main`; its head is
  unchanged. Existing history and `studio-v1.0.0` tag were preserved.
- GET `repos/michi-guns/bad-dream/branches/main/protection` and GET
  `repos/michi-guns/bad-dream/rulesets`: HTTP 403, “Upgrade to GitHub Pro or
  make this repository public to enable this feature.” This generic API message
  is recorded verbatim; the repository is owned by an organisation on Free.
- Protection enforcement is **blocked**, not verified. No visibility or plan
  change was made; no bypass is approved. Keep #2 open.

## Exact owner actions

An organisation owner must decide whether to provide a plan supporting protected
branches for private organisation repositories (GitHub Team or Enterprise), or
explicitly propose/accept revised scope. No upgrade or visibility change is
authorised by this implementation. After compatible plan support is available:

1. Open repository Settings → Branches → Add branch protection rule for `main`.
2. Enable Require a pull request before merging, with zero required approving
   reviews (one GitHub identity); disable bypass allowances. Require status
   checks, select the observed GitHub Actions `Required checks` context, and
   require branches to be up to date.
3. Enable Do not allow bypassing the above settings (including administrators).
   Leave force pushes and deletions disabled. Check organisation rules/bypass
   actors too; agents using this account must have no routine bypass.
4. Read back settings/API enforcement and record results through a PR. Do not
   test with an unauthorised direct main push. Re-run checks and obtain separate
   human authorisation for the PR and reviewed head SHA before any merge.

CI execution/results and first-template verification are tracked in the session
record. Automatic template population remains pending until #2 is merged and a
subsequent PR is opened. Main-push confirmation also requires a later authorised
merge. Neither pending verification nor plan blocking is implementation success.

Attempted PUT of the required protection configuration also returned HTTP 403
with the same plan message. No enforcement configuration was applied.
