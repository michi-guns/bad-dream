# Response orientation and handoffs

Protocol: `response-guidance` 1.0.0. Authority: accepted
[#3 revision 4](https://github.com/michi-guns/bad-dream/issues/3#issuecomment-6232010464).
Extends [guided task execution](task-lifecycle.md), preserving its opening context.

## Useful stage visibility

Print a stage header at the start/resumption of substantive work, when its stage
changes, or when the human asks where we are. Omit it for ordinary questions,
clarifications, acknowledgements and repeated exchanges within the same stage.
Default to **Stage: Proposal review**. Short arrow chains are optional when they
help, with the current stage bold and optional emoji; link the complete workflow
through the working method. Headers locate current work, not a proposed action list.

Use these stable values for the proposal-to-integration flow:
**Brainstorming → Proposal preparation → Proposal review → Implementation → PR review → Integrated**.
Proposal review includes human acceptance. Implementation prepares accepted
files/notes/tasks. PR review includes checks and the separate merge decision.
Integrated requires actual completed integration/readback, not a pushed branch.
Do not rename the stage while the underlying work is unchanged. Other task types
use stable stage names from their documented workflow/working method; do not force
them into proposals or invent micro-flows per reply. If none exists, establish a
small task-level workflow once in its brief, then keep those values stable.

## Truthful progress

Add a labelled count only when useful and the total is meaningful and known,
e.g. **Checks: 3/4 verified**. Count actual outcomes, not questions asked or agent
recommendations. Human decisions resolve only when the human decides. Never invent
a denominator or percentage. With open scope, omit the fraction or use
**Decisions resolved: 5 · Scope still open**. Separate different kinds of counts.
Explain denominator changes or reopened outcomes briefly. Local progress does not
imply repository integration, acceptance or completion. Keep the display compact.

## Every response

Every user-visible response, including short replies and progress updates, has a
brief **Recap** section with bullets and **Recommendation(s)** identifying the next
useful action. One bullet can suffice. Name the actor/surface when relevant; if
blocked, recommend the missing human decision/external prerequisite. Keep this
proportionate and avoid duplicating history. Agent recommendations and advisory
reviews grant neither acceptance nor merge authority.

## Both handoff directions

When the next step belongs elsewhere, explicitly say **Continue in the local
agent** or **Continue in ChatGPT**, explain why, and supply a complete paste-ready
prompt. Do not assume shared conversation or local-file access. Use
[the handoff template](../templates/handoff.md). Include:

- Objective, current stage and actual progress; essential context/rationale.
- Accepted versus proposed scope, sources and exact relevant revisions,
  proposal/task/PR links and repository entry/applicable workflows.
- Concrete next steps, expected outputs/verification, unresolved questions and
  authority boundaries. A handoff carries existing authority, granting none.
- For local agents: inspect current Git status/branch/remotes; load current
  instructions and reconcile; preserve work, use branches/PRs, never silently
  switch/reset/overwrite. Identify the checkout path only when known.
- For ChatGPT: supply local results/evidence, publication/integration status,
  pending human decisions and useful discussion prompts. Link retrievable files;
  inline essential excerpts if access is unavailable. Do not assume local paths
  are accessible in chat.

State what the receiver returns and the next handoff when relevant. Never include
credentials or invent paths/URLs. See [verification examples](../reports/response-guidance-verification.md).
