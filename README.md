# Bad Dream

A working-title horror PC game developed in free time by a solo-led,
AI-assisted studio with a friend and occasional specialists. This repository
holds durable knowledge and approved work. No engine or production mechanic
has been selected.

Start with the [studio guide](studio/README.md), [book](book/index.md), and
[current focus](studio/state/current.md).

## Local use

Open this repository root as a single Obsidian vault. See
[Obsidian setup](studio/tools/obsidian.md). Use Bun 1.4.3 or a compatible release:

```powershell
bun install --frozen-lockfile
bun run verify
bun run backlog -- task list --plain
codex -C .
```

In Codex, say “Use $refine-proposal to capture this discussion” and paste the
material. A fresh session discovers the project skill. Follow the
[proposal workflow](studio/workflows/refine-proposal.md) to publish, accept,
and integrate. Resume using [current state](studio/state/current.md), without
needing the original chat. Copy [these instructions](studio/chatgpt-project-instructions.md)
into ChatGPT project instructions. Repository and branch coordinates are filled.

The [verification report](studio/reports/setup-verification.md) distinguishes
verified results from pending checks. The [tool policy](studio/tools/backlog-md.md)
explains the exact pin and upgrade process.

For Claude Code, run `bun run skills:link` once in each Windows checkout.
[CLAUDE.md](CLAUDE.md) imports the shared agent instructions; the
[junction manager guide](scripts/skill-junction/README.md) explains how both tools
use the same skills under `.agents/skills/`.
