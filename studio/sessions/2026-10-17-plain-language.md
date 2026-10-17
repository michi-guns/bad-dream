# Plain-language communication guide — 2026-10-17

The operator requested a lasting communication guide after confirming that the
plain-language project overview was easy to understand. The request is
[recorded in issue #3](https://github.com/michi-guns/bad-dream/issues/3#issuecomment-6232760639).
The accepted revision-4 proposal snapshot is unchanged.

Prepared [studio/communication.md](../communication.md), with links from the root
agent entry and studio guide so fresh agents can find it. It applies to replies,
issues, PR descriptions, human-readable notes and handoff prompts. It explains
the situation before technical details and preserves exact references, decision
status and existing approval boundaries.

## Update after #4 and #5 merged

PR #4 added GitHub Flow through merge commit
`1fb2f845bc1e9746c73417cb8d7b8dc76695bfa3`. PR #5 added the response rules
through squash commit `2112dcc8dc838de0aeec783363e1696e97af0f0e`.
[Main-push checks after #5](https://github.com/michi-guns/bad-dream/actions/runs/39025700980)
passed. This guide's branch was updated to that main revision, keeping both the
new response/approval rules and the communication links.

This guide remains pending in [PR #6](https://github.com/michi-guns/bad-dream/pull/6).
No merge of #6 is authorised. The original checkout, task records, scripts and
dependency pins were not changed. TASK-1 remains unstarted. Issues #2 and #3
remain open; automatic template population and final integration records remain
pending.

## Verification and next action

The existing file/link/metadata checker passes using Node with a PyYAML adapter
because Bun is unavailable here. This is not a claimed canonical local Bun run.
Fresh hosted Linux/Windows checks and independent review are recorded on PR #6.
Verify their actual result before deciding to merge.

After separate human authorisation, add this small guide through PR #6, check
the result on main, and provide the updated ChatGPT instructions for manual
pasting. Finish remaining setup records before moving on to TASK-1.
