# Studio operating guide

Read [current state](state/current.md) to resume, then the [foundation](foundation.md).
[Project coordinates](project.yml) identify the intended repository and branch;
the [manifest](manifest.json) locates current versioned protocols.

The flow is brainstorm → [refine](workflows/refine-proposal.md) → explicitly
publish a GitHub proposal → [human triage](workflows/triage-proposal.md) →
[integrate](workflows/integrate-proposal.md) knowledge and justified tasks →
[execute and verify](workflows/task-lifecycle.md) → [handoff](workflows/end-session.md).
An integrated proposal closes because its knowledge/tasks were integrated;
resulting game work may still be unfinished.

| Authority | Owns |
| --- | --- |
| GitHub issues | Proposal revisions, discussion, acceptance and deferral |
| [Book](../book/index.md) | Current knowledge, evidence, rationale and decisions |
| Backlog.md `backlog/` | Approved tasks, status, criteria and hard dependencies |
| `studio/` | Operating protocols, templates, tooling and change history |
| Chat | Exploration and handoffs, with no implicit durable storage |

Use [startup](workflows/start-session.md) for a consistent snapshot and
[reconciliation](workflows/reconcile-context.md) for contradictions. See
[chapter contracts](chapters/index.md), [note conventions](knowledge-note.md),
[protocol changes](workflows/change-protocol.md), and [history](changes.md).
Notes stay in place when tasks are created. Git synchronises files; remote
issues are not automatically stored in a clone. Preserve accepted rationale
in the book so it remains understandable offline.

Templates in [the template index](templates/index.md) are starting points.
Tool setup is documented for [Obsidian](tools/obsidian.md) and
[Backlog.md](tools/backlog-md.md).
