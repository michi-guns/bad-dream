# Start a session

Protocol: `start-session` 1.0.0.

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
