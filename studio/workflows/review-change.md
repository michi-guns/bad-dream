# Review a change

Protocol: `review-change` 1.0.0.

A fresh reviewer finds what the author, who has been staring at the problem,
cannot see. This loop is the independent advisory agent review that [GitHub
Flow](github-flow.md) asks of every PR. Reviews run only inside a human-started
session; nothing runs on a schedule, hook or service, and a reviewer's approval
is never proposal acceptance or merge authorisation.

## When

Every non-trivial change runs the full loop below with the reviewer its row
names, before the gate its row names; no review type is optional. Non-trivial
means it changes behaviour or meaning, or adds or changes a test. Typos,
formatting and link fixes skip the loop. Explicit operator direction may waive
a review or accept an unresolved change for merge; record the waiver and what
stays unreviewed in the handoff and PR.

| Change | Reviewer | Closed before | Rounds |
| --- | --- | --- | --- |
| `scripts/` and their tests | `code-reviewer` | merge request | 5 |
| Foundation, workflows, chapter contracts, conventions, templates, manifest | `protocol-reviewer` | merge request | 5 |
| `AGENTS.md`, `CLAUDE.md`, skills, subagent definitions, ChatGPT bootstrap | `agent-context-reviewer` | merge request | 5 |
| Refined proposal | `proposal-reviewer` | publication or triage | 5 |
| Notes, decisions and tasks written while integrating a proposal | `knowledge-reviewer` | merge request | 5 |
| Other book notes, studies, experiments and tasks | `knowledge-reviewer` | merge request | 3 |
| Handoff, current state, orientation or README for humans | `resumability-reviewer` | merge request | 3 |

Definitions live in `.claude/agents/`. A tool that cannot load them (Codex,
ChatGPT) passes the definition's body as a fresh subagent's or session's brief.
When no fresh session is available, the change may be pushed marked not reviewed
in the handoff and the PR; the next session that can review owes the loop before
it is relied on, published, triaged or put to the operator for merge. A change
that spans two rows, such as the authority table in `studio/README.md`, gets
both reviewers in the same round.

## The loop

1. Finish the change and its gates: `bun test` for scripts, `bun run verify`
   for everything else.
2. Spawn a fresh reviewer with the diff or path and the head SHA under review,
   the request behind it, the round number, the round's two lead lenses, and every earlier report with
   the author's disposition of each finding. Take the pair from the
   reviewer's table for that round (the code table is below; each other
   definition holds its own); name another pair only with a reason. The
   reviewer covers every lens and reports a Blocking finding from any of them.
3. Fix every **Blocking** and **Material** finding. Decide **Minor** and
   **Note** items on merit and write the disposition down. Re-run the gates.
4. Repeat with a new reviewer while the verdict is FINDINGS with Blocking or
   Material work. Stop on PASS (code) or APPROVED (all others).
5. Limit: the row's rounds; a change spanning rows takes the larger. A last
   round that still reports Blocking or Material work ends the loop with the
   change reported as unresolved, never as done, and escalated to the operator.

The loop is closed only when the last edit has been reviewed. After the
approving round the author may apply that round's Minor and Note fixes; any
other edit, or a gate that newly fails, reopens the loop at the next round.
A change that spans two rows closes when both reviewers approve. Recording a
review's outcome in the handoff or history does not reopen it, so the
handoff's own review runs last.

The loop converges on the absence of defects, not on the reviewer running out
of words. A reviewer that re-raises a declined Minor or Note says why it
disagrees.

## Escalation

When a loop ends unresolved, the author sends the operator one push through
their user-level `pushover-notify` skill; the operator has authorised this push
for every unresolved loop. Codex lists the skill; Claude Code reads its
`SKILL.md` under `~/.codex/skills/pushover-notify/` and runs its send script
by the absolute path, as the skill's example does. Pass `-Priority 1` and
`-Title "Bad Dream review"`. Keep the message under 1,024 characters: the
change, the round count, and one short line per open Blocking or Material
finding (severity and `file:line`); never credentials or note contents.

Then say the same in the conversation and record it in the handoff and PR; the change
waits for the operator, who may waive the remaining findings. A validation
error sends nothing and may be corrected and sent once. If the skill is not
installed or configured, or the request fails or times out, say so in the
handoff and do not retry. The skill is personal to the operator's machine and
is not part of this repository.

## Code lenses

Every code review covers all six and leads with two per round.

1. **Reachability.** The `package.json` script and documented command actually
   run the changed code.
2. **Correctness and edge states.** Sibling commands and paths, idempotence,
   missing, stale and dangling inputs, paths with spaces, other platforms.
3. **Irreversibility.** Nothing can delete or overwrite canonical skills, notes,
   tasks or settings through a link, or fall back to an unpinned tool.
4. **Tests that test.** Each new test fails with its implementation removed;
   filesystem behaviour uses real disposable fixtures, not mocks.
5. **Failure visibility.** Errors exit nonzero with a useful message; nothing
   reports success after a failure; partial work is rolled back.
6. **Simplicity and hygiene.** Smallest sound change; LF endings; no local
   paths or secrets; documentation matches behaviour.

| Round | Leads with |
| --- | --- |
| 1 | Reachability; Tests that test |
| 2 | Correctness and edge states; Irreversibility |
| 3 | Failure visibility; Simplicity and hygiene |
| 4–5 | The reviewer's own choice, stated up front |

## What the author reports

In the PR's Verification section: the number of rounds per loop, each verdict,
every Blocking and Material finding with what was done, every declined Minor
with why, the final gate results and the reviewed head SHA. Minor and Note fixes
pushed after the approving round are listed with the final head SHA. Record the
same briefly in the session handoff. "Reviewed, APPROVED in round 2 at <SHA>" is
a valid summary; "reviewed" alone is not. Agent review stays advisory; merging
needs the operator's separate authorisation naming the PR and head SHA.

## What the reviewer never does

Edits, commits, publishes, writes tasks, records acceptance, sends a
notification, spawns agents, runs anything that mutates the repository or a
remote, or prints a secret.
