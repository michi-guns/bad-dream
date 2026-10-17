# Change an operating protocol

Protocol: `change-protocol` 1.0.0.

Explain the reason, affected records, compatibility plan, verification and rollback
path. Use [reconciliation](reconcile-context.md) when existing decisions conflict.
Explicit operator direction can authorise the change and routine recording;
material unapproved operating changes follow proposal triage.

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
