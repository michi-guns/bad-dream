# How to communicate with the human

Use this guide for chat replies, issues, pull request descriptions, project notes
the human needs to read, and prompts handed to another agent.

## Start with the practical point

Use everyday words and short sentences. The operator is a developer, but should
not have to decode dense Git or project-management language or remember the repo.

Explain:

- What we are trying to do and why it matters.
- What has already happened and what is still waiting.
- Which decision the human needs to make.
- Who does the next action and where it happens.

Give enough context to understand the decision. Do not assume the person remembers
previous sessions, proposal numbers, file contents or how the workflow works.

## Keep explanations easy to follow

- State the main point first, then add the detail needed to judge it.
- Prefer concrete verbs: “add these changes to main” is clearer than
  “complete integration”.
- Use short bullets, bold and small tables when they help. Avoid dense paragraphs,
  unexplained abbreviations and chains of technical terms.
- Explain unfamiliar terms the first time they matter. Being precise does not
  require sounding formal or treating the reader like a beginner.
- Name an issue or PR by its purpose as well as its number.
- Explain what a check proves and what remains unknown. Keep proposed, approved,
  prepared, added to main and verified states distinct.
- Put exact commit IDs, commands and other necessary details after the plain
  explanation or in the agent prompt. Keep them exact; do not make the human
  memorise or calculate them.
- Write handoff prompts in plain language too. Include the context and exact
  references the receiving agent needs.

Keep the already agreed brief bullet **Recap** and **Recommendation(s)** sections.
Use a stage header only when it helps orientation. Start with a simple stage
label; do not repeat a full arrow chain in ordinary replies.

## Helpful wording

| Technical term | Explain it as |
| --- | --- |
| Pull request (PR) | A set of file changes waiting to be reviewed and added |
| Merge into main | Add the reviewed changes to the main project version |
| Reviewed head SHA | The exact version of the changes that was reviewed |
| CI checks | Automatic checks that run on GitHub |
| Reconcile a dependent PR | Update the second set of changes to fit the first |
| Accepted scope | What the human agreed this work should cover |
| Protection enforcement | GitHub blocking changes that break the agreed rules |

These are explanations, not replacements for exact terms in commands or APIs.

## Example: help someone who lost track

“We are still setting up how you and the agents work together. You accepted two
proposals. The agent prepared their file changes, but they are not in main yet.

Issue #2 records the agreement about safer repository changes; PR #4 contains
the files that carry it out. PR #5 contains the agent communication improvements.

The next decision is whether to add PR #4 to main. After that, the agent updates
and checks PR #5, and you decide on it separately.”

Follow this with a short recap and one clear recommended next action. Do not
turn a recommendation into approval or add unnecessary approval steps.

## When the human loses track

Pause further changes and check the current facts. Explain the goal, what each
relevant item means, what is done, what is waiting and the next decision. Do not
respond by adding more jargon, IDs or another long agent prompt before restoring
that understanding.

## Why this guide exists

On 2026-10-17 the operator said earlier replies were too condensed and technical.
A plain-language overview made the project easy to understand, and the operator
explicitly requested a repository file so this preference survives new sessions.
[The recorded instruction](https://github.com/michi-guns/bad-dream/issues/3#issuecomment-6232760639) provides provenance.

This guide clarifies the accepted communication approach; it does not change
proposal acceptance, merge authority or task status. Refine examples when the
human gives feedback instead of adding a larger communication system.
