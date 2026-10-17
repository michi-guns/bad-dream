# Response guidance verification — illustrative fixtures

These are disposable behavioural examples, not task execution, human decisions,
proposal acceptance, or production task progress. They exercise accepted #3
revision 4. TASK-1 remains unstarted.

## Brainstorming start and same-stage exchange

> **Stage: Brainstorming**
>
> We are exploring a disposable example of a bounded study. The human supplies
> preferences; the agent facilitates one question at a time. No study is approved.
>
> **Recap**
> - The study topic remains open; no decisions are resolved.
>
> **Recommendation**
> - Human: discuss which feeling the study should investigate first.

A following reply in that same stage omits the header:

> That preference suggests a useful comparison; it remains exploratory.
>
> **Recap**
> - We clarified the candidate feeling without accepting a study.
>
> **Recommendation**
> - Compare two possible observations to collect.

Pass: useful initial simple label, stable stage, no invented fraction or repeated
orientation. The full stage flow lives in the working method, not each reply.

## Unknown total

> **Stage: Implementation**
>
> The search scope is still open.
>
> **Decisions resolved: 5 · Scope still open**
>
> **Recap**
> - Five previously evidenced human choices are resolved; no total is known.
>
> **Recommendation**
> - Check the next candidate source before bounding the remaining work.

Pass: no invented denominator/percentage; the fixture stipulates actual choices,
not a count of agent questions or recommendations. No integration is implied.

## Reopened outcome and changed total

> **Task decisions: 4/8 resolved**
>
> **Recap**
> - One of the five previously resolved fixture choices was reopened by the human.
>
> **Recommendation**
> - Human: revisit that choice before implementation continues.

A later reply, still in the same stage:

> **Task decisions: 4/9 resolved**
>
> **Recap**
> - A newly discovered decision expands the known scope from eight to nine.
>
> **Recommendation**
> - Resolve the reopened choice next; the new choice remains pending.

Pass: numerator and denominator changes are explained; separate work types would
use separate counters. A suggestion is not counted as a human resolution.

## Short clarification

> Yes, the local agent can prepare the branch after loading current instructions.
>
> **Recap**
> - This clarifies the working surface; no scope or merge decision changed.
>
> **Recommendation**
> - Use the complete local-agent prompt below when ready to switch surfaces.

Pass: no header for clarification, but recap/recommendation remain.

## Chat → Local Agent

**Continue in the local agent** to inspect the checkout and prepare authorised
repository changes. Paste this complete fixture prompt:

```text
Prepare accepted response guidance for michi-guns/bad-dream. Stage: Implementation.
Scope: #3 revision 4, accepted at https://github.com/michi-guns/bad-dream/issues/3#issuecomment-6232010464;
body SHA-256 692fa0055adb5dfc3a9657a8056a03b38bbc77f8b610ca5711b49d3d47f78736.
Context: returning humans need useful stable labels, truthful progress, concise
Recap/Recommendation(s) in every response and complete handoffs in both directions.
Preparation authority includes branches/PRs, not merge. No game work is approved.
#2 revision 1 is accepted; its prerequisite PR is https://github.com/michi-guns/bad-dream/pull/4.
No implementation completion is asserted by this illustrative prompt. Re-read
current PR/issue heads/comments rather than trusting a possibly stale handoff.
Inspect Git status, branches and remotes first. Locate the actual checkout; load
AGENTS.md, studio/README.md, foundation, manifest and current state. Reconcile
accepted scope with current files and studio/workflows/github-flow.md,
start-session.md, task-lifecycle.md, end-session.md and response-guidance.md
(the last may still be pending). Preserve existing work; use working branches/PRs;
never silently switch/reset/overwrite. Do not hand-edit Backlog.md tasks; leave
TASK-1 unstarted. Update affected protocols/templates/bootstrap/manifest/history
and offline rationale within scope. Run bun install --frozen-lockfile, bun run
verify and relevant tests. Obtain independent advisory review. Return PR links,
reviewed heads, actual checks, blockers and exact human actions. Then provide a
Local Agent → Chat prompt for the remaining decisions. Do not merge, close issues
as integrated, purchase upgrades, change visibility or bypass protections.
```

Pass: self-contained scope/source/revision, method, outputs/checks and boundaries;
no assumed conversation access, guessed checkout or extra authority.

## Local Agent → Chat

**Continue in ChatGPT** to discuss the protection blocker and human approval
boundary. Paste this complete fixture prompt:

```text
Discuss the pending operating changes for michi-guns/bad-dream. Stage: PR review.
#2 revision 1 and #3 revision 4 were accepted; no merge is authorised. Read their
complete issues/comments: https://github.com/michi-guns/bad-dream/issues/2 and
https://github.com/michi-guns/bad-dream/issues/3. #2 fingerprint is
32b58f93ce115abb0f60e042cf0e73ee33425d8adaed335508600b2f79b2e86f;
#3 is 692fa0055adb5dfc3a9657a8056a03b38bbc77f8b610ca5711b49d3d47f78736.
PR #4: https://github.com/michi-guns/bad-dream/pull/4. Local evidence: remote
default renamed to main at unchanged b2bf58aec9e5a5cd11107d6f27b80e27f7b918a1.
#2 reviewed preparation head was 4986c99b92939c9b5e098a1ac474e32feda281f8;
CI run 39019785481 passed Linux, Windows and Required checks. A later evidence
commit may exist: refresh PR heads/checks/reviews before any approval discussion.
All preparation remains unmerged. TASK-1 is unstarted. Admin access is true, but
protection GET/PUT and rulesets return HTTP 403 on private organisation Free;
no enforcement, plan purchase, visibility change or bypass was performed.
Load AGENTS.md, studio/README.md, foundation, manifest/current state and GitHub
Flow/response guidance at a consistent retrieved revision. Pending files may be
on a PR branch; main does not yet contain them. If repository access fails, use
these supplied essential results and disclose inability to verify fresh state.
Discuss whether an organisation owner wants to enable compatible private-repo
protection plan support or propose revised scope. Do not infer either decision.
Summarise options and the next human action; produce a paste-ready local-agent
prompt if repository work follows. Merge still requires separate authorisation
naming the PR and reviewed head SHA. Do not merge, close issues as integrated,
purchase upgrades, change visibility or bypass protections. Every reply needs
brief bullet Recap and actionable Recommendation(s); useful stage labels only.
```

Pass: local results and pending decisions are inline, sources are retrievable,
revision status is explicit, freshness is required and no new authority granted.

## Result

Manual walkthrough passed all six scenarios against response-guidance 1.0.0.
No task/model runtime session was simulated as real work. Canonical link/manifest
verification and independent review are recorded in the operating handoff/PR.
