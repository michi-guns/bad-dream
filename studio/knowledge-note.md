# Knowledge note conventions

Protocol: `knowledge-note` 1.0.0. Use UTF-8 Markdown and lowercase ASCII slugs.
Stable unique `id` values do not change merely because a display title changes.

Book notes use these properties: `id`, `type`, `status`, `chapter`, `sources`,
`protocol_id`, `protocol_version`, `protocol_revision`. The manifest resolves
protocol IDs. `bootstrap` resolves through [protocol history](changes.md) once
the initial immutable tag exists; until then provenance is explicitly pending.
Do not invent the commit that will contain a note. Future records can reference
an existing exact Git SHA or a registered immutable protocol tag.

Types describe content: `orientation`, `hypothesis`, `study`, `experiment`,
`decision`, `evidence`. Status describes lifecycle: `draft`, `exploratory`,
`accepted`, `superseded`, `retired`. A study can remain draft until observations
exist. An accepted decision requires actual acceptance provenance, whereas an
orientation may cite the bootstrap authority. Do not add these custom fields
to tool-managed Backlog.md records.

Use body Markdown links relative to the containing file, with exact case.
One reusable note may be linked by several chapter entry notes. Chapter entries
provide reading order; note bodies name relationships such as “Evidence from”,
“Applies to”, “Contradicts”, or “Supersedes”. Graph view is supplementary.
Keep YAML source entries as ordinary quoted strings; YAML link properties are
not required. Significant decision records may add `supersedes` and
`superseded_by` paths or equivalent body links.

See [templates](templates/index.md). Draft cleanup is routine; accepted or
referenced history needs a resolvable retirement path and a link check after moves.
