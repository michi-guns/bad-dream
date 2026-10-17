# Foundation

Protocol: `foundation` 2.0.0. Initial authority: the operator's 2026-10-17
setup request and supplied revision-2 setup brief. This authority establishes
the operating foundation without inventing a proposal or human acceptance event.

## Durable and explainable work

Neither human is expected to remember chats, data or process after long breaks.
Records must let a returning person explain location, status, rationale,
applicable procedure, next action and decision authority. Capture practical
rationale rather than complete conversations. Significant decisions retain
context, evidence and assumptions, alternatives, tradeoffs and reconsideration
triggers. Missing evidence remains an open question.

Agents reconstruct context from the repository; humans contribute ideas, judgment,
decisions and practical participation without memorising its contents. Before
substantive work, orient the operator using [session startup](workflows/start-session.md).
Tasks must explain how they are worked, using the
[execution brief](workflows/task-lifecycle.md). Prefer concise structured text:
bullets, bold and tables where useful; emojis are optional and should clarify.
Formatting must preserve reasoning, uncertainty and decision status.

The authorities are defined in [the studio guide](README.md). A link means
relevance unless its context names a stronger relation. Only explicit task
dependencies block execution; they must be acyclic. A completed task cannot
prove proposal acceptance. Acceptance cannot prove implementation completion.

## Precedence and contradictions

Within platform and permission constraints:

1. Current informed explicit operator direction governs current authorised work.
   Instructions and acceptance differ from speculation or exploring an option.
   An explicit change permits its routine recording without asking again.
2. Current accepted decisions govern their recorded scope. Verify the actual
   acceptance evidence and revision. An accepted change awaiting integration
   takes precedence over an older book note within that scope.
3. Current protocols govern new work. Historical versions explain older records.
   Chapter contracts add methods and shapes but cannot silently override foundation.
4. Old chats, generated summaries and memories are leads to verify. Neither
   recency nor enthusiasm establishes acceptance or correctness.

A request that appears to misremember an established workflow is not automatically
a policy override. First cite the current rule and explain the discrepancy.
If the operator insists after that correction, follow an explicit permanent
amendment or bounded exception, recording scope, reason and authority. Clarify
only when that distinction remains unclear. A bounded exception does not amend
the global workflow. Clear informed change instructions need no repeated approval.
See [protocol changes](workflows/change-protocol.md).

Use [reconcile-context](workflows/reconcile-context.md) to identify scope,
resolve clear authority, and ask only about a real remaining ambiguity.
Keep contradictory new evidence even when it challenges an accepted hypothesis;
propose reconsideration. Never suppress evidence to preserve a decision.

## Scope, acceptance and history

Recommendations and hypotheses are not commitments. An accepted investigation
authorises research, not its hypothetical feature. Accepted scope allows routine
integration and decomposition. Material additions return for human decision.
Task creation does not authorise executing every task immediately.

Significant accepted or referenced knowledge is retired with a replacement link
or short retirement record; update inbound links. Preserve superseded rationale,
actual acceptance provenance and replacement. Do not auto-cancel or mark tasks
complete because a source decision changed. Review their validity explicitly.

Use [knowledge-note](knowledge-note.md) vocabulary. Ordinary protocol changes
follow [change-protocol](workflows/change-protocol.md). Machine-specific state,
credentials, caches and dependencies are ignored. Keep the system modest and
human-triggered; no second tracker or always-on agent infrastructure.
