# Current state

Last reviewed: 2026-10-17.

GitHub Flow from accepted proposal #2 revision 1 was added to main through
[PR #4](https://github.com/michi-guns/bad-dream/pull/4), merge commit
`1fb2f845bc1e9746c73417cb8d7b8dc76695bfa3`. Its
[post-merge checks](https://github.com/michi-guns/bad-dream/actions/runs/39025055645)
passed. The repository is public, main is the default, and protection was
configured and verified through administrator readback. See
[settings evidence](../reports/github-flow-settings.md).

Current focus: resolve and check
[PR #5](https://github.com/michi-guns/bad-dream/pull/5), which carries accepted
proposal #3 revision 4. It has been reconciled with current main without losing
response rules or protection evidence. Its new changes still need fresh
hosted checks, independent review and separate human merge authorisation.
Do not describe this response guidance as added to main yet.

[PR #6](https://github.com/michi-guns/bad-dream/pull/6) separately prepares the
plain-language communication guide requested by the operator. Keep it in draft;
update and verify it after #5. Neither #5 nor #6 has merge authorisation.
Issues #2 and #3 remain open. Automatic PR-template population and the final
integration records remain pending; passing CI alone does not close those items.

The original local checkout was preserved on setup/studio-foundation at 0d5cb38.
Implementation used separate worktrees. Follow the
[local migration guidance](../workflows/github-flow.md) deliberately; never
silently reset or overwrite local work. This conflict fix was prepared separately
and did not access or change the operator's checkout.

TASK-1 remains To Do and unstarted. No Backlog.md files were modified. Reconstruct
its execution brief through the pinned CLI before eventual execution. No creative
mechanic, engine or production scope is accepted.

After the response-guidance changes are merged and checked, the human should paste
[the current ChatGPT instructions](../chatgpt-project-instructions.md) into project
settings. Repository edits do not change app settings. Earlier setup checks remain
in [setup verification](../reports/setup-verification.md).

Resume from [the guide](../README.md),
[GitHub Flow](../workflows/github-flow.md),
[response guidance](../workflows/response-guidance.md) and
[the operating handoff](../sessions/2026-10-17-operating-proposals.md).
