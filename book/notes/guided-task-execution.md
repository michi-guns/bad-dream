---
id: guided-task-execution
type: decision
status: accepted
chapter: studio-operations
sources:
  - "https://github.com/michi-guns/bad-dream/issues/1"
  - "Operator instruction in this ChatGPT session, 2026-10-17"
protocol_id: knowledge-note
protocol_version: 1.0.0
protocol_revision: 0d5cb381eb46dd9e9d03be7ec391363ac4fe5e8b
---

# Guided task execution and workflow corrections

**Decision:** require task execution briefs, orient the human before substantive
work, prefer structured text and correct a misremembered workflow before inferring
an override. The repository preserves agent state and human-readable rationale;
humans contribute ideas, judgment, decisions and practical work without memorising it.

## Context and reasoning

TASK-1's outcome was understandable, but its method was not: whether to brainstorm
in chat, work locally, what to read, what to discuss and how to save the result.
Acceptance criteria explain completion; they do not explain participation.
A work-type label alone cannot close that gap.

Keep shared methods in [protocols](../../studio/workflows/task-lifecycle.md).
Each task adds its own preparation, surface(s), roles, steps, outputs and evidence
using supported task text. [Session orientation](../../studio/workflows/start-session.md)
supplies context and purpose before the first question. Structured bullets, bold
and tables improve scanning while preserving rationale and uncertainty.

## Operator authority and informed changes

A mistaken recollection must not silently change the workflow. First verify and
explain the established rule. After informed insistence, record either a permanent
amendment or a bounded exception; clarify only if ambiguous. Exceptions do not
amend global policy. Already informed explicit instructions need no repeated
approval. See [reconciliation](../../studio/workflows/reconcile-context.md) and
[protocol changes](../../studio/workflows/change-protocol.md).

## Acceptance provenance

The operator explicitly requested workflow updates before TASK-1 and asked to
publish a proposal, record the change and update the repository on 2026-10-17.
They also specified structured formatting and the workflow-correction rule.
**Operator acceptance recorded by agent**, not autonomous agent acceptance:
[issue #1 acceptance record](https://github.com/michi-guns/bad-dream/issues/1#issuecomment-6231506770).
Scope is proposal revision 1, SHA-256
`ec37a168c58f21b43773468abadfea209050b07b0cd2b88f1e6ab22df3604bdd`.
The fingerprint covers the exact UTF-8 proposal body including its trailing newline.

## Alternatives, tradeoffs and migration

- Global templates alone miss task-specific method; duplicating full workflows in
  every task creates drift. Link protocols and supply concrete local details.
- Rigid forms add overhead. Use brief text proportionate to the task.
- New tasks carry a brief; legacy tasks gain one before execution and persist it
  through the pinned CLI before the next substantive task write. No bulk rewrite
  or custom Backlog.md metadata is required.
- The rule introduces new required behaviour and changes contradiction handling:
  operating version 2.0.0 explicitly records this migration. Git retains 1.0.0.
- No creative mechanic is approved and no game task is executed by this decision.

## Reconsider when

Try the convention on TASK-1 when it starts. Simplify fields if they duplicate
protocols or obstruct small tasks. Revise if fresh agents still cannot choose a
working surface, guide the human or identify completion evidence.
