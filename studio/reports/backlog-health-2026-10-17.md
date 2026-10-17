# Backlog.md health review — 2026-10-17

Accessed upstream through authenticated GitHub CLI 2.102.0 and official npm
registry metadata. No existing Backlog executable, global installation, or matching
named running process was found in the inspected standard routes. This was a new,
empty project, with no project server to stop. Inspection was bounded to relevant
application metadata and known paths, not an unrestricted drive/process-command scan.

## Sources and search coverage

[Upstream releases](https://github.com/MrLesk/Backlog.md/releases) and
[v1.54.0 notes](https://github.com/MrLesk/Backlog.md/releases/tag/v1.54.0) identify
stable 1.54.0, published 2026-10-16 15:16 UTC. The
[official npm metadata](https://registry.npmjs.org/backlog.md) reports latest
1.54.0, published 15:29 UTC, with matching Windows x64 optional package.
Recent releases inspected: 1.54.0, 1.53.0, 1.52.0, 1.51.0, 1.50.1 and 1.50.0
through the release listing; migration details read for the selected 1.54.0.

Read-only queries used `gh issue list --repo MrLesk/Backlog.md --state all
--search QUERY --limit N --json number,title,state,updatedAt,url` with focused
queries: `memory`, `leak`, `RSS RAM OOM`, `crash`, `hang`, `corruption`,
`"data loss"`, `"task ID" archive`, `dependency`, `Windows`, `MCP`, `browser`,
and `is:open sort:updated-desc`. Also reviewed open `bug` labels. Initial compound
queries were sparse, so individual terms were used. Limits were 5–15 results for
focused/recent results and 8 for the initial searches; this is a bounded review,
not an exhaustive audit. Labels are incomplete. Empty results prove little.

Read issue bodies and all returned comments using `gh issue view NUMBER --json
number,title,state,body,comments,url` for 1038, 939, 997, 1065, 1091, 1042, 918,
1040, 1048, 1049, 843, 640 and 1052. Initial use of `--comments` with `--json`
was rejected by installed CLI; rerun successfully with the JSON `comments` field.

## Relevant evidence and applicability

| Report | Affected environment/mode and evidence | Decision / released-fix evidence |
| --- | --- | --- |
| [1038](https://github.com/MrLesk/Backlog.md/issues/1038) open | Linux x64 1.53 browser, about 105 active/190 completed tasks; later six-wave Linux comment continues rising; macOS ARM64 maintainer run plateaued. Older 1.47.1 Windows browser growth also reported. | Mode/platform-specific unresolved evidence. No 1.54 release claim of a browser memory fix. Disable resident mode; do not extrapolate a clean CLI bill of health. |
| [939](https://github.com/MrLesk/Backlog.md/issues/939) open | Shared stdio MCP gateway on 1.50.1, about 350 active/700 completed; separate processes multiply memory across sessions. | Distinct from browser retention. No gateway or resident MCP enabled. |
| [997](https://github.com/MrLesk/Backlog.md/issues/997), [1052](https://github.com/MrLesk/Backlog.md/issues/1052) open | Archive ID reuse reproduced on macOS 1.51/1.52, with comments covering 1.50.1 and dependency ambiguity. | 1.54 release explicitly preserves archive identity via linked PRs 1094–1096. Windows local smoke test reserved TASK-1 and allocated TASK-3 after archive; do not infer from issue status alone. |
| [1042](https://github.com/MrLesk/Backlog.md/issues/1042) closed | Proposed opt-in archive-ID reservation, not independent packaged proof. | Use selected release semantics/help and actual test; closed does not prove a released fix. |
| [1065](https://github.com/MrLesk/Backlog.md/issues/1065), [1091](https://github.com/MrLesk/Backlog.md/issues/1091) open | Linux 1.53 decisions HTTP section/body loss; 1.52 doc unknown-frontmatter loss. Maintainer says API/views need overhaul. | Rich decisions remain in book, no optional docs/decisions API use. Do not equate the new status-edit feature with a full fix. |
| [918](https://github.com/MrLesk/Backlog.md/issues/918) open | macOS CLI 1.49.3 unknown task frontmatter loss; later fork discussion. | No unsupported custom task metadata. Fork comments do not prove packaged preservation. |
| [1040](https://github.com/MrLesk/Backlog.md/issues/1040) open | Multiline AC parsing, confirmed 1.53 after 1.49.3 report; no corpus size dependence established. | Repeat one single-line `--ac` per criterion. No verified 1.54 fix claimed. |
| [1048](https://github.com/MrLesk/Backlog.md/issues/1048), [1049](https://github.com/MrLesk/Backlog.md/issues/1049) open | Linux 1.53 closed-stderr-pipe CPU spin and launcher signal propagation. | Do not truncate pipe readers midcommand; wrapper bypasses JS launcher. Windows applicability and released fix unverified. |
| [843](https://github.com/MrLesk/Backlog.md/issues/843) closed | macOS 1.49.3 concurrent same-task lost writes, including 100-task corpus tests in comments. | Serial writes/readback; closure alone does not prove every sibling path fixed. |
| [640](https://github.com/MrLesk/Backlog.md/issues/640) closed | Windows 11 1.45 MCP document hang, 1.44 workaround in report; task tools not tested there. | No MCP/docs enabled; no blanket claim about current Windows tasks based on old report. |

Additional open bugs reviewed from listing: 1045 browser cleanup age mismatch,
1020 missing-origin TUI warning, 919 unmatched milestones, and 1035 incomplete
list/search JSON fields. Avoid optional UI/virtual milestone assumptions; use
task-view JSON when detailed dependencies matter.

## Candidate and verification

Choose project-local 1.54.0, Windows x64 native binary, Bun 1.4.3, short-lived CLI.
There was no installed version to retain; untested rollback to older known-affected
versions is unjustified. Package pin is exact and `bun.lock` is committed.

In a disposable Git repository, installed help guided every mutation. Verified
noninteractive initialization, tool-managed configuration, a two-criterion task
with description/note references, a dependent task, additive reference/doc edits,
preserved content on readback, archived unfinished blocking, restore identity,
Done satisfying dependencies, archived Done still satisfying them, and allocation
of TASK-3 rather than reuse of archived TASK-1. Task-view/list output parsed as
schemaVersion 1. A later edit/readback and paginated output check are recorded in
the setup report. Git commit count stayed zero; remote operations and branch
scanning were false, no remote was configured, and no editor/browser started.

No long-lived mode was enabled, so no browser memory stress was run. This bounded
functional check says nothing about long-term stability or every corpus size.
Unknown metadata round-trip, closed-pipe stress, concurrent races and MCP were
not retested. Rich book reasoning avoids those optional tool-owned record paths.
Reconsider on failed readback, relevant packaged fixes, runtime/platform upgrade,
or any request to enable a resident mode. Repeat the health review before upgrades.
