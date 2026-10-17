# Backlog.md tool policy

Decision dated 2026-10-17: exact project-local `backlog.md` **1.54.0**, installed
with existing **Bun 1.4.3**, committed `bun.lock`. The Windows x64 package reports
1.54.0. Use `bun install --frozen-lockfile` on another machine and
`bun run backlog -- <arguments>` from this repository. The wrapper checks the
package's exact pin and binary version, directly invoking the installed platform
binary without a global fallback, package download, or Node launcher.

Selected mode: short-lived CLI only. No browser server, watch process, resident
MCP server, gateway or auto-start is configured. This bounds process lifetime;
it does not establish that the CLI is leak-free. Browser use would require a
separate disposable bounded memory evaluation before enabling it.

Why this version: upstream release and npm metadata agree; 1.54 contains relevant
archive identity/link and noninteractive validation changes. No earlier version
was installed to retain. Reports affect older releases too, so rollback is not
automatically safer. Disposable archive/restore and dependency checks passed on
this Windows binary. See the [health report](../reports/backlog-health-2026-10-17.md).

Supported configuration: `autoCommit=false`, `remoteOperations=false`,
`checkActiveBranches=false`, `autoOpenBrowser=false`, cleared `defaultEditor`,
and statuses `To Do`, `In Progress`, `Done`. Init skipped agent instruction
generation to preserve our concise root instructions. Configuration is tool-managed
under `backlog/config.yml`. No editor or browser starts during these commands.

Branch scanning is disabled to keep task mutations local to the intentional
branch and avoid cross-branch corpus/diagnostic overhead. Git still synchronises
task files. Before simultaneous collaboration, fetch and reconcile task IDs and
content explicitly; do not assume disabled scanning prevents cross-clone collisions.
Serialise edits to the same task and inspect readback. Keep book decisions outside
Backlog's optional docs/decisions subsystem; avoid unsupported frontmatter.

Upgrade: repeat the release/registry and focused issue health review, choose a
candidate deliberately, read its migration notes/help, run disposable functional
checks, and inspect the exact dependency/lockfile diff. Change the exact pin using
`bun add --dev --exact backlog.md@VERSION` only after selecting a real version.
Never run that placeholder literally. Commit the reviewed report and lockfile.
Reconsider on archive/readback failure, relevant released fixes, platform changes,
or proposed resident-mode/collaboration use. Preview `doctor` output before any
repair; `doctor --fix` is not a routine upgrade step. Roll back by a reviewed
Git change and frozen install only after confirming storage compatibility.
