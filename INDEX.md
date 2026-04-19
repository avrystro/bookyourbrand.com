# Book Your Brand — Next.js Migration

**Status:** Stage A in progress. Scaffold complete. Porting components per PLAN-phase-2.md.

**Branch:** `migration/nextjs`
**Worktree:** `~/Developer/bookyourbrand.com-nextjs/`
**Live static site (reference):** `~/Developer/bookyourbrand.com/` on `main`
**Deploy target:** Vercel preview
**Brain:** `~/Developer/app.avry/consulting/David Strauss/bookyourbrand/`

## Stack

Next.js 16.2 · React 19.2 · TypeScript 5 · Tailwind CSS v4 · Playwright · Prettier

## Commands

```bash
npm run dev                          # local dev on :3000
npm run build                        # production build
npm run lint                         # ESLint
npx prettier --write .               # format
npx playwright test                  # visual regression (requires dev server running)
npx playwright test --update-snapshots  # refresh baseline screenshots
```

## Progress

See `~/Developer/app.avry/consulting/David Strauss/bookyourbrand/PLAN-phase-2.md` for task-by-task state.
