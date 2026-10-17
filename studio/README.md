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

Agents reconstruct project state and orient returning humans. Tasks carry a
[working method](workflows/task-lifecycle.md), not just completion criteria.
Use concise structured text. Explain a misremembered workflow before treating it
as an override; distinguish permanent amendments from bounded exceptions.

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
Codex and Claude Code share canonical skills through the
[Windows skill junction manager](../scripts/skill-junction/README.md).

Repository content follows [GitHub Flow](workflows/github-flow.md): working
branches and PRs into main, independent advisory agent review, and separate
human merge authorisation for a named PR/head SHA. See
[settings evidence](reports/github-flow-settings.md) for verified protection.

Use [response guidance](workflows/response-guidance.md) for useful stable stage
labels, truthful progress, brief recaps/recommendations in every response and
explicit Chat ↔ Local Agent prompts. Acceptance is distinct from integration.
