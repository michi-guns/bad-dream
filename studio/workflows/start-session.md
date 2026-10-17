# Start a session

Protocol: `start-session` 2.0.0.

Inspect Git status, current branch and remotes before editing. Read the root
agent entry, foundation, manifest and current state, then relevant workflows,
notes, issues, tasks and chapter contract. Identify the branch intentionally;
never auto-switch, pull, reset or discard local work.

When remote access is authorised and reachable, fetch metadata and compare the
local HEAD to its remote branch. For offline work, identify the local revision
and disclose stale-state limitations only for affected facts. Uncommitted
protocol edits are changed content: read them when intentionally working on
them and disclose that they differ from the base commit.

ChatGPT resolves the configured branch to a commit and reads the entry,
manifest and relevant instructions from that same commit. If exact-revision
fetching is unavailable, disclose the limitation instead of claiming a consistent
snapshot. Fresh chats require the supplied bootstrap and available authenticated
repository access.

Recheck relevant revisions before consequential remote writes. Use
[reconciliation](reconcile-context.md) for changed or contradictory records.
Cache instruction bytes only under repository identity, path and exact
commit/blob/content hash; check the branch revision before reuse. Read issue,
task and focus data separately for current freshness. Git's object store is
enough; no cache service is needed. A new session cannot assume old cache bytes exist.

## Orient the human before substantive work

Assume the operator has little or no recall of repository contents and workflows.
The agent loads context; the human should not need to study files before taking part.

Give a brief, structured orientation covering:

- **What:** the task or topic and its intended outcome.
- **Why now:** its purpose and connection to the current focus.
- **Current understanding:** established decisions, exploratory ideas and open questions.
- **How:** work type, working surface(s), steps and human/agent roles.
- **Result:** expected output, recording route, decision gate and completion evidence.

Use [task lifecycle](task-lifecycle.md) to reconstruct or read the execution brief.
Link sources for detail without requiring the human to open them. Scale the
orientation to the work; a small task may need only a few bullets. Refresh it
after a long break or material change, not before every exchange.

For guided brainstorming, discuss one question at a time and explain its purpose
when useful. Supply context and examples without silently deciding for the operator.
If the current surface lacks a required capability, explain the handoff and provide
the next agent with the task, relevant revision, working method and pending outputs.

Use [GitHub Flow](github-flow.md). Resolve main and the selected working branch
separately; read open PRs and protection evidence. Recheck remote heads before
administrative writes. Preserve an occupied checkout with an isolated worktree;
announce its path/base. Never treat a working-branch file as integrated main.

Apply [response guidance](response-guidance.md): on substantive start/resumption,
show the actual stable stage with a simple label by default; do not repeat it
mechanically during the same stage. Give counts only for meaningful known totals.
Every response still carries brief bullet Recap and Recommendation(s). A surface
transition explicitly announces its destination/reason and includes a complete
paste-ready prompt; the receiving agent reloads/reconciles current authority.
