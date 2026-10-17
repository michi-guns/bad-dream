# Bad Dream agent entry

Read [studio/README.md](studio/README.md), [foundation](studio/foundation.md),
[manifest](studio/manifest.json), and [current state](studio/state/current.md).
Follow [session startup](studio/workflows/start-session.md), then load only the
workflow and chapter contract relevant to the request. Reconcile conflicting
context with [this procedure](studio/workflows/reconcile-context.md).

Use the pinned CLI through `bun run backlog -- <arguments>`; read its
`instructions overview` before managing tasks. Task files are tool-managed.
Run `bun run verify` after changing knowledge or protocols, and `bun test`
after changing the checker. Preserve existing work and inspect Git status first.

Author shared skills only in `.agents/skills/`. Claude Code reads them through
the local `.claude/skills` junction; run `bun run skills:link` after cloning or
moving a checkout. See [shared skill instructions](scripts/skill-junction/README.md)
for create/update/delete commands. Run `bun test` after changing script behaviour.

Brainstorming is exploratory. Refinement prepares a draft; publication needs an
explicit request. Human acceptance authorises routine integration within scope,
not execution of every task. Keep proposal acceptance, knowledge, and task status
in their respective authorities. End substantive sessions with a durable handoff.
