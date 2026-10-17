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

Before substantive work, orient the human: what, why now, established/open context,
working method/surface, roles and durable result. Use concise bullets, bold and
tables where useful. Read or reconstruct the task execution brief under
[task lifecycle](studio/workflows/task-lifecycle.md); use supported task text,
not custom frontmatter. Humans need not memorise the repository.

If a request appears to misremember a workflow, cite and explain the established
rule first. After an informed insistence, record a permanent amendment or bounded
exception under [protocol changes](studio/workflows/change-protocol.md). Do not
repeat approval requests for clear informed instructions.

Read [the communication guide](studio/communication.md) before writing for the
human. Explain the situation and next decision in plain language; put necessary
technical details after the practical explanation.
