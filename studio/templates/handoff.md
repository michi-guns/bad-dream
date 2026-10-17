# Dated session handoff

Changed: concise outcomes with paths and actual commit/remote state.

Decisions: scope and provenance, distinguishing explicit direction from suggestions.

Verified: actual checks and limitations.

Open: uncertainties, blockers and unintegrated work.

Next action: one concrete step with relevant notes/issues/tasks.

## User-facing handoff

Announce **Continue in the local agent** or **Continue in ChatGPT** and explain
why. Fill the prompt completely; remove placeholders before delivery. Do not
assume the receiver sees the conversation or can open local files.

```text
Continue work on [objective] in repository [owner/name].
Stage: [stable value]. Actual progress: [verified outcomes; pending/blocked work].
Context/rationale: [essential background]. Accepted scope: [revision/acceptance
links]; proposed/unaccepted scope: [if any]. Sources: [proposal/task/PR URLs,
head SHAs and retrievable paths; inline essential results if inaccessible].
Load AGENTS.md, studio/README.md, foundation, manifest, current state and the
applicable workflows [paths]. Reconcile this handoff with current authority.
Next: [concrete actions]. Return: [expected outputs and verification/evidence].
Pending human decisions: [specific questions]. Boundaries: [existing authority;
no implied acceptance or merge; named PR/head authorisation if already granted].
[Local receiver: inspect Git status/branch/remotes first, preserve existing work,
use working branches/PRs, never silently switch/reset/overwrite local changes.]
[Chat receiver: local results are [uncommitted/pushed/unmerged/integrated], with
[evidence/checks/blockers]. Discuss [useful questions] before [next handoff].]
```

Every user-visible reply includes concise bullet **Recap** and actionable
**Recommendation(s)**. Follow [response guidance](../workflows/response-guidance.md).
