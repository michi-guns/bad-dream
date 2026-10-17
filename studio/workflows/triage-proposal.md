# Triage a proposal

Protocol: `triage-proposal` 1.1.0. Apply [reconciliation](reconcile-context.md).

The operator accepts, rejects, defers or requests changes. The agent cannot
accept its own recommendation. Establish authorised reviewers from explicit
operator direction or repository policy; organisation membership alone is
insufficient. Bootstrap authority covers setup only. Additional reviewers have
not yet been nominated.

Record acceptance in the authoritative GitHub proposal thread with the accepting
operator identity, date, scope, numbered proposal revision and SHA-256 of the
accepted body. When acceptance is an explicit chat instruction, write “operator
acceptance recorded by agent” with the actual date/context. Do not impersonate
a human author or invent a conversation URL. A label is navigation, not evidence.
Remote recording still requires authorised publication access; if unavailable,
preserve the instruction and mark remote recording pending.

Material edits after acceptance need renewed acceptance of the changed scope.
Record editorial corrections without restarting review. Preserve accepted text
and rationale. Deferred ideas stay deferred; rejection is not deletion of history.
An investigation acceptance does not accept the feature it might discover.

After acceptance, follow [integration](integrate-proposal.md). Use one lifecycle
label (`status:proposed`, `status:accepted`, `status:deferred`, `status:rejected`,
`status:integrated`) when available and helpful. Never erase unrelated labels.

The simple human approval comment is `Accepted: revision N`. Agents handle
supporting provenance (identity/date/context, scope, exact revision/body SHA-256)
without demanding a longer human comment or approval scripts/parser. Agent
recordings must identify themselves truthfully. Read later acceptance comments:
an unchanged proposal snapshot may still say proposed. Acceptance does not grant
merge authority; use [GitHub Flow](github-flow.md).
