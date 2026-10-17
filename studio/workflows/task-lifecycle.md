# Task lifecycle

Protocol: `task-lifecycle` 1.0.0.

Use `bun run backlog -- instructions overview` and the relevant creation,
execution or finalization guide. The wrapper checks the pinned binary version
before invoking it; never fall back to a global tool or unqualified `npx`.

Each approved task has a purpose, bounded scope, note and proposal references
where applicable, verifiable acceptance criteria, and an owner or “owner needed”
in its description. Include a useful session-sized effort band when feasible and
state uncertainty. Hard dependencies name actual unfinished prerequisites,
not relevant reading; keep them acyclic. Later roadmap objectives stay broad.

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
