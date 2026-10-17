# Integrate an accepted proposal

Protocol: `integrate-proposal` 1.1.0.

Read the actual accepted proposal revision and acceptance provenance. Re-read
current Git status, notes, chapter contracts and tasks. Use
[reconciliation](reconcile-context.md) for conflicting scope or stale notes.
Plan edits to existing notes before adding new ones; search proposal URL, note ID,
and task references to avoid duplicates on rerun.

Preserve accepted reasoning offline: context, evidence/assumptions, alternatives,
rationale, tradeoffs, reconsideration triggers and the real proposal URL. Adapt
to each chapter's shape. Update existing knowledge rather than duplicating it.
Accepted but deferred ideas do not become active implementation work.

Create or update tool-managed tasks only where action is justified and bounded.
Follow [task lifecycle](task-lifecycle.md), including an execution brief that states
how and on which surface each task is worked. An investigation needs a clear question
and useful completion criteria; incomplete design is allowed. Some integrations
produce no tasks. Record unresolved dispositions and conflicts explicitly.

Verify note links, unique IDs, protocol references and task readback. On rerun,
compare integration records and existing references; do not create another task
for the same accepted outcome. Commit within authorised scope. Record note paths,
task IDs (if any), actual implementation commit when known, and remaining work
in the issue. Mark integrated and close only when integration succeeded.
Closing means “proposal integrated”, never “all game work finished”.

Update [current state](../state/current.md) and write a [handoff](end-session.md).
Simulated acceptance is allowed only in disposable verification fixtures, never
as production provenance.
