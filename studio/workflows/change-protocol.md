# Change an operating protocol

Protocol: `change-protocol` 3.1.0.

Explain the reason, affected records, compatibility plan, verification and rollback
path. Use [reconciliation](reconcile-context.md) when existing decisions conflict.
Use a GitHub proposal for substantive operating changes:
proposal issue → human acceptance → durable decision/rationale → versioned
file updates → verification → integration record and closure.
Search for duplicates first. Explicit informed operator direction can supply
acceptance; record it truthfully in the issue using [triage](triage-proposal.md)
without asking for the same approval again. An unapproved recommendation remains
a proposal. Editorial corrections within accepted scope need no new proposal.

If a request appears to misremember the established flow, first explain and cite
the current rule using [reconciliation](reconcile-context.md). If the informed
operator insists, distinguish:

- **Permanent amendment:** use the proposal path, update affected rules and versions,
  and record compatibility/migration and superseded rationale.
- **Bounded exception:** record the exact rule bypassed, affected task/session,
  reason, operator authority, duration or expiry, implications and follow-up in
  the task/session or existing issue. Link the unchanged rule; this is not a
  global amendment. Create a separate proposal if a permanent change follows.

Ask only if the intended scope is unclear. Neither an exception nor an amendment
overrides platform permissions. Do not reinterpret an exception as blanket approval.

Use semantic versions: patch clarifies, minor adds compatible behaviour, major
changes requirements needing migration or reinterpretation. Update the manifest
and [change history](../changes.md). Ordinary research edits do not bump the whole
operating version. Current protocols guide new work; historical Git content
explains old notes. Update legacy notes when touched unless a concrete issue needs
immediate migration. Add a legacy adapter only for a real interpretation need.

After committing the initial baseline, create an annotated `studio-v1.0.0` tag
and register it as `bootstrap`. Never move an existing version tag to different
content. Resolve enclosing snapshot SHAs through Git externally, avoiding
self-referential hashes. If tagging is unavailable, provenance remains pending.
Git history/tags provide archives; do not copy an archive directory for every edit.

Verify links, manifest, affected content and workflows. Reload changed instructions
and invalidate affected caches by exact content hash. Roll back through a reviewed
revert or corrective commit, preserving unrelated work and historical evidence.

The file-update and rollback portions of the proposal path use [GitHub
Flow](github-flow.md): working branch → PR/checks/advisory review → separate
human authorisation of named PR/head SHA or *In one go* → merge/readback →
integration record and closure. Neither direct primary-branch content writes nor
a pushed branch satisfy integration. Preserve historical protocol and tag
provenance.
