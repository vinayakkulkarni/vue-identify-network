# AGENTS.md - vue-identify-network

> **For AI Coding Assistants (Claude Code, Cursor, Copilot, etc.)**

---

## Overview

**vue-identify-network** (`vue-identify-network`) -- Identify the network your users are using.

- **Owner**: vinayakkulkarni
- **npm**: `vue-identify-network`
- **Framework**: Vue 3 (Composition API + `<script setup>`)

---

## Project Structure

```
vue-identify-network/
├── src/
│   ├── components/     # VueIdentifyNetwork component
│   ├── utils/          # Helper utilities
│   ├── index.ts        # Public exports
│   └── install.ts      # Vue plugin installer
├── dist/               # Built output (ESM only)
├── package.json
├── vite.config.ts
├── tsconfig.json
└── AGENTS.md
```

---

## Tech Stack & Tooling

| Need        | Tool                              |
| ----------- | --------------------------------- |
| Build       | vite-plus (vp pack)               |
| Types       | rolldown-plugin-dts (via vp pack) |
| Linting     | vp lint (oxlint bundled)          |
| Formatting  | vp fmt (oxfmt bundled)            |
| Package Mgr | pnpm                              |
| Git Hooks   | Husky + lint-staged + commitlint  |
| Release     | release-please                    |
| Node        | 24                                |

---

## Commands

```bash
pnpm run lint          # vp lint
pnpm run lint:fix      # vp lint --fix
pnpm run format        # vp fmt
pnpm run format:check  # vp fmt --check
pnpm run build         # vp pack (tsdown + dts)
pnpm run test          # Tests
```

---

## Rules

### Rule #1: TypeScript Required

All code must be TypeScript. No `.js` files except configs.

### Rule #2: No `any` Type

Use proper types. Never use `as any`, `@ts-ignore`, or `@ts-expect-error`.

### Rule #3: Vue 3 Composition API Only

Use `<script setup lang="ts">` exclusively. No Options API.

### Rule #4: ESM Only

Output is ES modules only. No CommonJS or UMD.

### Rule #5: Compiler Macros

`defineProps`, `defineEmits`, `defineModel`, `defineExpose` are compiler macros -- do NOT import them from 'vue'.

### Rule #6: Conventional Commits

All commits must follow conventional commit format with `Signed-off-by` trailer.

---

## Dependencies

| Dependency | Type |
| ---------- | ---- |
| `vue`      | peer |

---

**Last Updated:** 2026-02-08
**Maintainer:** Vinayak Kulkarni
