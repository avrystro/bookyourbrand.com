<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Book Your Brand — Next.js Migration (Body)

This is the code repo body. The brain lives at:
`~/Developer/app.avry/consulting/David Strauss/bookyourbrand/`

## Start here

- [SPEC-phase-2-migration.md](../app.avry/consulting/David%20Strauss/bookyourbrand/SPEC-phase-2-migration.md) — design spec with all decisions
- [PLAN-phase-2.md](../app.avry/consulting/David%20Strauss/bookyourbrand/PLAN-phase-2.md) — implementation plan (12 tasks)
- [PROJECT.md](../app.avry/consulting/David%20Strauss/bookyourbrand/PROJECT.md) — BYB strategic context

## Phase

Phase 2: migration from static HTML (in `~/Developer/bookyourbrand.com/` on `main`) to Next.js 16 + React.

- Branch: `migration/nextjs`
- Do not merge to `main` until David approves the Vercel preview URL.
- Static HTML version stays live at bookyourbrand.com until cutover.

## Stack

- Next.js 16.2 (App Router)
- React 19.2
- TypeScript 5
- Tailwind CSS v4 (CSS-based config via `@theme` in `app/globals.css`)
- Playwright for visual regression
- Prettier + ESLint
- Vercel deployment

## Non-negotiables

- Pixel parity with Phase 1 at 1920 / 1440 / 768 / 375 breakpoints
- All David-approved copy preserved verbatim
- No em dashes anywhere (use regular hyphens only)
- No net-new features in Stage A (design iteration = Stage B)

## Commands

```bash
npm run dev              # local dev on :3000
npm run build            # production build
npm run lint             # ESLint
npx prettier --write .   # format all
npx playwright test      # visual regression
```
