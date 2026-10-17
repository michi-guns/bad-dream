# Guided task execution — 2026-10-17

## Changes and authority

- [Proposal #1](https://github.com/michi-guns/bad-dream/issues/1), revision 1;
  [operator acceptance recorded by agent](https://github.com/michi-guns/bad-dream/issues/1#issuecomment-6231506770)
  from the explicit request in this ChatGPT session. No invented conversation URL.
- [Accepted decision and rationale](../../book/notes/guided-task-execution.md)
  preserves the problem, tradeoffs, migration and reconsideration triggers offline.
- Operating version 2.0.0 adds task execution briefs, structured human orientation,
  structured communication and correction of workflow memory errors before
  informed amendments or bounded exceptions.
- Relevant foundation/workflows, agent entry, ChatGPT bootstrap, template, manifest,
  operating history, book navigation and current state are updated.
- Existing TASK-1/2/3 contents and statuses are unchanged. No game work started.
  No new Backlog.md task is necessary for this directly requested, completed
  operating update. The initial immutable baseline tag is unchanged.

## Verification

- The repository's unchanged `verify()` function passes on the full snapshot:
  manifest, YAML, note IDs/protocol references, internal file links and bootstrap
  length. Because Bun is unavailable in this environment, this was invoked with
  Node's TypeScript support and a PyYAML-backed adapter for `Bun.YAML.parse`.
  This is a fallback check, not a claimed `bun run verify` execution.
- Protocol declarations match manifest versions; accepted proposal fingerprint
  matches the published body. Bootstrap is below 8,000 characters.
- Diff whitespace check passes. No scripts/dependencies or managed task files changed.
- Reviewed workflow scenarios: missing task method → reconstruct and persist via
  CLI; brainstorming → orient then one question at a time; memory error → explain
  current rule; informed permanent change → proposal path; bounded exception →
  scope/expiry recorded without changing global rules.
- First real guided task/session and actual ChatGPT instruction-field paste remain
  pending. Existing GUI/agent invocation checks remain pending as previously recorded.

## Publication and next action

These files are published on the existing configured branch `setup/studio-foundation`.
The actual implementation commit and integration outcome are recorded in issue #1
after readback. No PR, merge, new tag or app-settings change is implied.

Next: the operator pastes
[the updated ChatGPT instructions](../chatgpt-project-instructions.md) into project
settings. Then reconstruct TASK-1's working method, orient the human and hold a
guided brainstorming session. Persist task metadata/status through the pinned
CLI; give a local handoff if that capability is unavailable. Discuss creative
commitments through the proposal workflow rather than assuming acceptance.
