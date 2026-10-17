# End a session

Protocol: `end-session` 3.1.0.

For substantive work create a concise dated record in `studio/sessions/` using
[the handoff template](../templates/handoff.md). Include what changed, decisions
and actual provenance, verification, uncertainty/blockers, next concrete action,
and relevant paths/issues/tasks. Link to full notes instead of duplicating them.
Update [current state](../state/current.md) with the shortest useful resume context.
[Review](review-change.md) the handoff and current state last, before asking to merge.

Inspect Git diff and ignored files; keep credentials and machine noise out.
Distinguish local files, commits, pushed branches and merged content. Push or open
a PR only under explicit authorisation. If no repository write occurred, provide
a portable handoff explicitly marked not integrated.

Follow [GitHub Flow](github-flow.md): report PR links, dependencies, reviewed
head SHAs, checks, settings evidence/blockers and exact human actions. Keep
accepted-but-unmerged proposals open. Deliver updated ChatGPT instructions and
local migration guidance when coordinates change. Never treat PR preparation as
merge authorisation.

When returning work to another surface, follow
[response guidance](response-guidance.md): explicitly announce **Continue in
ChatGPT** or **Continue in the local agent**, explain why and provide a complete
paste-ready receiving prompt using [handoff](../templates/handoff.md). Include
actual stage/progress, results/evidence, scope/status, source revisions, pending
human decisions and authority boundaries. Local paths alone are insufficient
for chat. Every final response also has brief bullet Recap and Recommendation(s).
