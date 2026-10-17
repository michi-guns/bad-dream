# Refine a proposal

Protocol: `refine-proposal` 1.0.0.

Read foundation, current state, [reconciliation](reconcile-context.md), relevant
chapter contracts and existing related notes/issues/tasks. Use pasted material
and accessible context; do not claim access to earlier chats or the whole account.

Extract the problem and intended player or studio outcome. Separate observations,
assumptions, hypotheses, recommendations, decisions and unanswered questions.
Retain practical rationale, alternatives (including useful rejected options),
tradeoffs, evidence, scope boundaries and reconsideration triggers. Identify
duplicates; suggested destinations stay tentative when repository access is absent.
Split independent changes for separate review while retaining coherent scope.

Use [the proposal template](../templates/proposal.md) to prepare a reviewable draft.
Include successful integration criteria and task candidates only when justified.
Drafts live in `studio/drafts/` when a file is useful and are non-authoritative.
“Refine” means draft. Publication or updating a remote issue requires an explicit
request or existing authorisation; once given, do not ask redundantly.

Before publishing, re-read the relevant remote revision and search for duplicates.
Discover labels first; preserve unrelated labels. Use `type:proposal` and one
available lifecycle label if useful. If unavailable, record publication pending
and never auto-publish a queue on reconnect. For multiline CLI bodies use a
UTF-8 body file with `gh issue create --body-file`, not shell interpolation.

Number material proposal revisions and fingerprint the exact UTF-8 proposal body
with SHA-256. Preserve accepted revision text in history/comments or an immutable
record before making a material change. Proceed to [triage](triage-proposal.md).
