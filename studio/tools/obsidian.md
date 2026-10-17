# Obsidian

Official Windows app 1.14.4 detected through installed-app registration and its
known application executable on 2026-10-17. It was not running during inspection.
Do not infer app absence from a missing shell command or install an npm substitute.

Open the repository root as one vault through “Open folder as vault”, then open
[the book index](../../book/index.md). Do not create a nested vault.
`.obsidian/` is ignored so local sessions/settings remain local. Built-in links,
backlinks, graph, search and properties suffice; community plugins are optional.
No additional task tracker is configured.

Recommended: use relative Markdown links, and exclude `node_modules/`, `.git/`,
`.local/` and caches from navigation/search where supported. Retain `backlog/`
task references. Use lowercase ASCII filenames. YAML link properties are not used.

File-level acceptance: the book index links to a chapter, which links to a section;
`dream-concept` is reached from both concept-laboratory and horror-studies chapters
without duplication. The checker validates exact-case links and task references.

One GUI verification remains: open the root vault, render the index and both
chapter paths to the concept note, inspect its backlinks, and follow a bootstrap
task's repository-relative reference to its note. Native app automation is not
available in this session; visual rendering and backlinks are not claimed passed.

The [official CLI](https://obsidian.md/help/cli) is optional. Current documentation
describes app-based CLI registration and desktop-app involvement. No CLI is
registered by this setup. Before enabling it, recheck installer/version guidance
and explicitly target this vault to avoid an unrelated active vault. File editing
needs neither a subscription nor a sync daemon.
