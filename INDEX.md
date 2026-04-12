# Book Your Brand — Website

David Lloyd Strauss's ghost writing business website. Static HTML/CSS, vanilla JS, deployed to Vercel.

## Status

**Phase:** 1 — Showcase Website Rebuild (Light Literary Aesthetic)
**Branch:** `redesign/light-literary` (in development; existing dark build remains on `main`)
**Deploy:** Vercel preview URL only — domain `bookyourbrand.com` NOT yet connected
**Reference site:** [markdavidgerson.com](https://www.markdavidgerson.com/)

## Brain

All planning, decisions, vision, pipeline, sources, and architectural thinking live in the brain dir:

```
~/Developer/app.avry/consulting/David Strauss/bookyourbrand/
```

**Read these brain files before working on this codebase:**

| File | What it contains |
|---|---|
| `PROJECT.md` | The 9-stage BYB pipeline, horizons, non-negotiables, sources. Authoritative definition. |
| `PLAN.md` | **Current phase build plan.** Creative brief, sitemap, wireframes, style tile, build sequence, Definition of Done. |
| `INDEX.md` (brain) | Navigation and overall project status |
| `HANDOFF.md` | Active session state and next actions |
| `OFFER.md` | Pricing tiers reference |
| `material/author-interview-18-questions.md` | David's 18-question form (used in Phase 2) |
| `material/david-strauss-byb-client-journey.pdf` | David's own client journey PDF |

The brain/body split rule: planning and decisions stay in the brain, code and dev onboarding stay in the body. See `~/Developer/app.avry/rules/architecture.md` for the full convention.

## Key Files (Body)

| File | Purpose |
|------|---------|
| `index.html` | Homepage — single-page, anchored sections (Phase 1 will rewrite this on the redesign branch) |
| `books/` | 17 individual book pages |
| `assets/images/` | Book covers + David's headshot |
| `AGENTS.md` | Universal AI agent instructions — points back to brain |
| `README.md` | Developer onboarding |

## Phase 1 Backlog

Tracked in detail in `PLAN.md` (brain). Summary:

- [ ] Pre-flight: AGENTS.md and INDEX.md updated to point to brain (this file is part of that)
- [ ] Pre-flight: David's transparent headshot copied to `assets/images/`
- [ ] Pre-flight: Avry's sign-off on PLAN.md
- [ ] Build: New homepage on `redesign/light-literary` branch
- [ ] Build: Restyle 17 book pages to match new theme
- [ ] Build: Favicon + Open Graph image
- [ ] Build: Mobile QA (375px / 768px / 1440px)
- [ ] Ship: Deploy branch to Vercel preview URL
- [ ] Ship: Send David the URL for approval

## Phase 2 (Deferred)

The AI Sample Writing Tool — David's 18-question form embedded in the website with a Claude API backend that generates a sample manuscript for prospects in real-time. Plan TBD.

## Phase 3 (Deferred)

Real domain connection (`bookyourbrand.com` → Vercel) after David approves the Phase 1 design.

## Out of Scope

n8n workflows, Bookalope integration, ElevenLabs, CRM, book editor — all live in PROJECT.md horizons 2 and 3 in the brain. Not part of this code repo.
