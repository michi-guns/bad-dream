# Review a change

Protocol: `review-change` 1.0.0. Authority: accepted proposal
[#7 revision 1](https://github.com/michi-guns/bad-dream/issues/7).

A fresh reviewer finds what the author, who has been staring at the problem,
cannot see. This loop is the independent advisory agent review that [GitHub
Flow](github-flow.md) asks of every PR. Reviews run only inside a human-started
session; nothing runs on a schedule, hook or service, and a reviewer's approval
is never proposal acceptance or merge authorisation.

## When

Every non-trivial change runs the full loop below with the reviewer its row
names, before the gate its row names; no review type is optional. Non-trivial
means it changes behaviour or meaning, or adds or changes a test. Typos,
formatting and link fixes skip the loop. Explicit operator direction may waive a
review or let an unresolved change go forward for merge, which still needs
separate merge authorisation; record the waiver and what stays unreviewed in the
handoff and PR.

| Change | Reviewer | Closed before | Rounds |
| --- | --- | --- | --- |
| `scripts/` and their tests | `code-reviewer` | asking to merge | 5 |
| Foundation, workflows, chapter contracts, conventions, templates, manifest | `protocol-reviewer` | asking to merge | 5 |
| `AGENTS.md`, `CLAUDE.md`, skills, subagent definitions, ChatGPT bootstrap | `agent-context-reviewer` | asking to merge | 5 |
| Refined proposal | `proposal-reviewer` | publication or triage | 5 |
| Notes, decisions and tasks written while integrating a proposal | `knowledge-reviewer` | asking to merge | 5 |
| Other book notes, studies, experiments and tasks | `knowledge-reviewer` | asking to merge | 3 |
| Handoff, current state, orientation or README for humans | `resumability-reviewer` | asking to merge | 3 |

Definitions live in `.claude/agents/`. A tool that cannot load them (Codex,
ChatGPT) passes the definition's body as a fresh subagent's or session's brief.
The frontmatter does not carry over there: the brief runs with that tool's own
model and permissions, so the body's read-only rules are what bind it. When no
fresh session is available, the change may be pushed marked not reviewed in the
handoff and the PR; the next session that can review owes the loop before it is
relied on, published, triaged or put to the operator for merge. A change that
spans two rows, such as the authority table in `studio/README.md`, gets both
reviewers in the same round.

## The loop

1. Finish the change and its gates: `bun test` for scripts, `bun run verify`
   for everything else.
2. Spawn a fresh reviewer with the worktree path, base and head SHA under
   review, the request behind it, the round number, the round's two lead lenses,
   and every earlier report with the author's disposition of each finding. Take
   the pair from the reviewer's own table for that round; name another pair only
   with a reason. The reviewer covers every lens and reports a Blocking finding
   from any of them.
3. Fix every **Blocking** and **Material** finding. Decide **Minor** and
   **Note** items on merit and write the disposition down. Re-run the gates.
4. Repeat with a new reviewer while the verdict is FINDINGS with Blocking or
   Material work. Stop on PASS (code) or APPROVED (all others).
5. Limit: the row's rounds; a change spanning rows takes the larger. A last
   round that still reports Blocking or Material work ends the loop with the
   change reported as unresolved, never as done, and escalated to the operator.

The loop is closed only when the last edit has been reviewed. After the
approving round the author may apply that round's Minor and Note fixes; any
other edit, or a gate that newly fails, reopens the loop at the next round. An
edit reopens only the loops whose rows cover the files it touches. A change that
spans two rows closes when both reviewers approve. Recording a review's outcome
in the handoff or history does not reopen a loop, so the handoff's own review
runs last.

The loop converges on the absence of defects, not on the reviewer running out
of words. A reviewer that re-raises a declined Minor or Note says why it
disagrees.

## Escalation

When a loop ends unresolved, the author sends the operator one push through
their user-level `pushover-notify` skill; the operator has authorised this push
for every unresolved loop. Codex and Claude Code both list the skill on the
operator's machine; follow its own instructions, with high priority and the
title "Bad Dream review". Keep the message within the skill's length limit: the
change, the round count, and one short line per open Blocking or Material
finding (severity and `file:line`); never credentials or note contents.

Then say the same in the conversation and record it in the handoff and PR; the
change waits for the operator, who may waive the remaining findings. A
validation error sends nothing and may be corrected and sent once. If the skill
is not installed or configured, or the request fails or times out, say so in the
handoff and do not retry. The skill is personal to the operator's machine and is
not part of this repository.

## What the author reports

In the PR's Verification section: the number of rounds per loop, each verdict,
every Blocking and Material finding with what was done, every declined Minor
with why, the final gate results, and each approving round's head SHA. List any
Minor and Note fixes pushed after approval. Record the same briefly in the
session handoff. "Reviewed, APPROVED in round 2 at <SHA>" is a valid summary;
"reviewed" alone is not. Agent review stays advisory.

## What the reviewer never does

Edits, commits, publishes, writes tasks, records acceptance, sends a
notification, spawns agents, runs anything that mutates the repository or a
remote, or prints a secret.
