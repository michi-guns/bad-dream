# Setup verification — 2026-10-17

## Environment and authority

Native Windows 11 build 26200 x64, PowerShell 7.6.7. This is a native host session,
not WSL or a container. Codex CLI 0.163.0; Bun 1.4.3; GitHub CLI 2.102.0 with
authenticated `jimzord12` and repo/read-org scopes. No standard Git installation
was found. Winget Git 2.55.0.5 installer was cancelled at elevation, exit code 2.
Official portable MinGit 2.55.0.windows.5 was then downloaded and matched the
GitHub asset SHA-256 `56d7b226b7693196cfc71fef26568f536c4a021ab6c37ff2db4287bed908e96e`.
Installed per-user, with existing user PATH preserved and relevant tool paths added.
No Node/npm or working Python runtime was present; Python was only a Store alias.
No unrelated settings, branches, worktrees or tracked files existed at the target.
Inspected ancestor and Codex-home agent guidance locations were absent.

The setup brief and explicit current instruction authorise foundation work.
Repository identity remains pending owner selection. A path names the local
checkout, not its remote owner. No throwaway issue was published to test writes.
Git identity is repository-local `jimzord12` with GitHub's account-ID noreply address.
Private machine paths and credentials are excluded from these records.

## Passed

- Obsidian official app registration and known executable: 1.14.4; existing app preserved.
- Git initialized; project-local Backlog package exact 1.54.0 and lockfile created
  with existing Bun; platform binary reports 1.54.0. [Health review](backlog-health-2026-10-17.md)
  completed before selection/install.
- Disposable Git repository: noninteractive init, task descriptions, repeated AC,
  references/docs, dependency creation, additive link edits preserving prior content,
  archive/restore identity, no archived-ID reuse, unfinished archive blocking and
  Done/archived Done satisfying dependencies. JSON task-view/list schemaVersion 1.
- No auto-commits (zero fixture commits), no remote configuration/operations,
  cross-branch scan disabled, editor cleared and no browser started.
- Three production bootstrap tasks created through the tool and read back. No
  speculative game task or acceptance event entered production records.
- Checker fixture test: broken/case-wrong links, duplicate IDs and unresolved
  protocol detected; valid relative link accepted. Final workspace check is
  recorded below after completion.
- Current official [instruction discovery](https://learn.chatgpt.com/docs/agent-configuration/agents-md)
  and [skill discovery](https://learn.chatgpt.com/docs/build-skills) pages read.
  Root agent entry is concise; skill uses `.agents/skills/` and canonical workflow.
- Fresh Codex app-server process, no model turn: `skills/list` with this checkout
  and `forceReload=true` returned `refine-proposal`, enabled, scope `repo`, errors
  empty. Process was stopped after the read. This verifies discovery, not model behaviour.
- Bun YAML validation of skill metadata passed. Companion instructions measure
  7,924 characters before coordinate replacement, below the conservative target.
- Manual disposable refinement produced an unaccepted draft with rationale,
  alternatives, uncertainty and an investigation-only scope, without publishing.
  Simulated acceptance was explicitly marked and stayed outside the repository.
  Integration updated one existing note and created one linked research task;
  rerunning retained one note update and one task. A deliberate production-scope
  conflict was left unresolved rather than manufacturing approval.
- Manual reconciliation exercise: old chat loses to accepted scope; newer
  brainstorming stays exploratory; ambiguous accepted scope needs a scoped
  question; an accepted unapplied change is integrated within scope. These were
  procedure walkthroughs, not independent model behaviour tests.
- Both chapter methods exercised with disposable prompts: horror event/reaction/
  interpretation/test versus technology question/baseline/method/measurement/result/
  decision. No playtest or benchmark result was fabricated in the book.
- Paginated fixture JSON parsed with one item and `nextSkip`; edit/readback retained
  implementation notes. Read-only `doctor` on the real backlog reported no duplicate
  IDs, self-dependencies or dependency cycles.

## Pending / not run

- GitHub owner choice, remote creation, default branch/visibility/issues/permission
  metadata, push and remote readback. Authentication alone does not prove writes.
- Obsidian GUI acceptance: open root vault, render book index and chapter links,
  inspect shared-note backlinks and task-to-note reference. File validation does
  not establish GUI rendering. Native UI automation is unavailable in this session.
- Fresh Codex model-session instruction loading and skill invocation behaviour.
  App-server discovery passed, but no additional model agent was started.
- Bundled Python skill validator cannot run without a Python runtime. YAML/name/
  description checks can be performed with the existing Bun parser; disclose the
  alternative rather than claim the Python tool ran.
- ChatGPT bootstrap coordinates and actual UI field limit. Conservative length
  target passed; actual field limit remains a GUI check.
- Resident-mode memory test, concurrent-write stress, closed-stderr-pipe stress,
  MCP integration and unsupported-metadata round trips: not run. These modes and
  metadata are not enabled. Short-lived functional tests do not prove long-term
  stability, absence of leaks or safety for every workload.

## Final workspace checks

All manifest JSON, used YAML, unique book-note IDs, required paths, current
protocol references and exact-case internal file links passed. `bun run verify`
currently exits 1 solely because the required GitHub owner/repository placeholder
remains unresolved. It is intentionally not suppressed. Checker fixture test
passes (1 test, 5 assertions); frozen install reports no dependency changes.

Rerunning init with the first-install `--backlog-dir` flag is refused safely;
installed help/error says to omit that flag after initialization. Rerun without
it succeeded, preserved root AGENTS content and retained exactly three tasks.
No duplicate structures were created. Read-only doctor found no task-ID or cycle
problems. Staged whitespace check passed, staged source/config/lockfile diff was
reviewed, and a bounded credential/machine-path pattern scan found no hits.
`node_modules/` is the only present ignored payload; test fixtures remain in the
OS temporary directory outside the knowledge/task graph.

Resume exercise from the entry and current state: this is an exploratory horror
project with its studio foundation prepared, no selected engine/AI feature, and
TASK-1 as the next creative-brief review. Startup identifies the local branch and
remote limitation; proposal refinement drafts before publication; acceptance
evidence is checked before integration. Old chat cannot silently approve a mechanic.

Local preparation is reviewable on `setup/studio-foundation`. No remote exists
yet, and nothing has been pushed or merged. Repository creation needs the owner
choice, not renewed approval for the already-authorised setup. After that choice,
check/create the exact private remote, verify metadata, fill the bootstrap,
rerun verification and publish the authorised initial contents. The annotated
baseline tag and actual commit IDs are recorded through Git and protocol history.

Initial foundation commit is `68e4708`; annotated tag `studio-v1.0.0` was created
and verified locally. GitHub publication remains pending. Follow-up verification
records may be committed after the tagged baseline without moving that tag.
