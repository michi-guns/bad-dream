# Task lifecycle

Protocol: `task-lifecycle` 2.0.0.

Use `bun run backlog -- instructions overview` and the relevant creation,
execution or finalization guide. The wrapper checks the pinned binary version
before invoking it; never fall back to a global tool or unqualified `npx`.

Each approved task has a purpose, bounded scope, note and proposal references
where applicable, verifiable acceptance criteria, and an owner or “owner needed”
in its description. Include a useful session-sized effort band when feasible and
state uncertainty. Hard dependencies name actual unfinished prerequisites,
not relevant reading; keep them acyclic. Later roadmap objectives stay broad.

## Execution brief: how this task is worked

Every new task must supply a short **Working method** in supported description
or plan text. Use [the execution-brief template](../templates/task-execution-brief.md)
as a starting point. Answer:

| Field | Required information |
| --- | --- |
| Work type | Guided brainstorming, research, implementation, playtest, review, etc. |
| Working surface | Chat app, local agent, engine, play session, or an ordered sequence; required capabilities and handoff points |
| Roles | Human input, practical participation and decisions; agent preparation, facilitation, execution and recording |
| Preparation | Relevant notes, decisions, chapter/workflow paths and necessary tools/material |
| Procedure | Concrete task-specific steps or questions; reference shared protocols rather than copying them |
| Outputs and destination | What is produced, where it is recorded, and any proposal/acceptance gate |
| Completion verification | Evidence showing the output meets the task's acceptance criteria |

These are descriptive task metadata in supported text sections, not custom YAML
frontmatter, new Backlog.md fields or a second tracker. A work-type label alone
does not explain the method. Choose surfaces by required capabilities; name a
particular app only when it matters.

Before execution, read the brief and use
[start-session orientation](start-session.md) to guide the human. Check that the
specified surface can do the work. If work crosses surfaces, make the handoff
explicit and preserve what remains unintegrated. A discussion alone does not
complete a task whose output must be stored.

**Legacy tasks:** existing tasks remain valid. Reconstruct a missing brief from
current approved records before starting; do not invent creative commitments.
Persist it through the pinned CLI before the next substantive task write.
If the CLI is unavailable, present the brief and provide a local handoff,
explicitly marking task metadata/status changes pending. Do not hand-edit managed
task files, claim a status update, or bulk-migrate unrelated tasks.

References stored by `--ref`/`--doc` are explicit repository-relative paths and
are resolved from repository root and remain valid when a task is archived.
Prefer those supported reference fields for durable task-to-note references.
If body Markdown links are useful, resolve them from the actual task file and
review them before moving the task: archive adds another directory level. Additive
edits use `--add-ref`/`--add-doc`; `--ref`/`--doc` replace entire lists. Read back
each write. Use repeated single-line `--ac` values, avoiding multiline AC input.
Keep extra context in supported text sections, not custom frontmatter.

Read current priorities before execution; creation is not permission to execute
the entire backlog. Move started work to `In Progress`, record plan and evidence,
and update knowledge if results alter it. Serialise writes to the same task and
re-read before each edit. A useful negative research result can satisfy research
criteria; generated code alone cannot satisfy implementation criteria.

Verify outcomes and record actual results, limitations and a next action before
marking `Done`. Use `task archive` afterward only when useful. In 1.54.0 archive
preserves IDs and links; restore before editing. An archived unfinished task is
not a satisfied prerequisite. `task complete` is removed. Permanent deletion
releases identity and has no second confirmation: do not use it for routine cleanup.
Never run `doctor --fix` on real records as a routine step.
