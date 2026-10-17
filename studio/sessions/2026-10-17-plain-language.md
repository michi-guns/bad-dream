# Plain-language communication guide — 2026-10-17

The operator requested a durable communication guide after confirming that the
plain-language project overview was easy to understand. Authority is
[recorded in issue #3](https://github.com/michi-guns/bad-dream/issues/3#issuecomment-6232760639); the accepted revision-4 proposal snapshot is
unchanged and no merge was authorised.

Prepared [studio/communication.md](../communication.md), with links from the root
agent entry and studio guide so fresh agents can discover it. The guide applies
to replies, issues, PR descriptions, human-readable notes and handoff prompts.
It explains practical context before technical detail and preserves exact
references, decision status and existing approval boundaries.

This is a focused documentation change based on current main b2bf58a. It does
not include or modify the pending #4/#5 implementation, scripts or task records.
Those PRs may also edit the entry files: preserve both sets of instructions when
reconciling them. Hosted checks need the CI workflow from #4 on main before this
PR can be completed. Keep this change in draft until its base is updated and
checks/review are complete. Do not merge it ahead of the existing setup work.

Verification: repository file/link/metadata validation passed using the existing
verify() function under Node with a PyYAML adapter because Bun is unavailable in
this environment. This is not a claimed canonical bun run verify execution.
Remote readback is performed after publication. No code tests are needed for this
documentation-only change.

Next: finish #4, refresh/review #5, then reconcile and verify this small guide PR.
A normal merge commit is recommended for #4 to preserve the history shared with
#5; that advice is not a new repository-wide merge policy or merge permission.
