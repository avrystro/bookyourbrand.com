# Book Your Brand

David Lloyd Strauss's premium ghost writing business website. Static HTML/CSS, deployed to Vercel.

## Brain / Body Split

This is the **body** (code, deployable artifact). The **brain** lives at:

```
~/Developer/app.avry/consulting/David Strauss/bookyourbrand/
```

All planning, decisions, vision, pipeline, sources, and architectural thinking live in the brain. This repo only carries code + dev onboarding (README) + project status (INDEX) + this AGENTS.md.

**Read these brain files before working on this codebase:**

- `PROJECT.md` — The 9-stage BYB pipeline, horizons, non-negotiables, sources. Authoritative definition of what BYB is and where it's going.
- `PLAN.md` — Current phase build plan (creative brief, sitemap, wireframes, style tile, build sequence). Read this to know what to build right now.
- `INDEX.md` — Navigation and current status.
- `HANDOFF.md` — Active session state.

## Brand Identity

Per `PROJECT.md` non-negotiables:

- **Visually and verbally separate from EVB and TLB.** No blob characters anywhere near it.
- **Premium literary aesthetic.** Sophisticated, warm, quietly elite. Not corporate, not aggressive, not transformation-coach hype.
- **David's voice in his own words.** Tagline: *Vox · Verbum · Fabula — Voice · Word · Story.* Origin story (rock, runaway, books saved his life) is the through-line.

## Color Palette (Phase 1 — Light Literary, approved Session 78)

Per `PLAN.md` style tile:

```css
--cream: #f5f0e8;        /* primary background */
--cream-dark: #e8e0d2;   /* card backgrounds, dividers */
--charcoal: #141821;     /* primary text */
--charcoal-soft: #2a2e38;/* secondary text */
--text-muted: #6a655e;   /* captions, subheadings */
--gold: #c9a55c;         /* accent: links, CTAs, decorative dividers */
--gold-dark: #a8863d;    /* hover states */
--gold-light: #dcc088;   /* active states */
```

This is a **value flip from the previous dark build on `main`.** If you're picking up work after a break, the brand colors stayed the same — only the background/text relationship inverted to match the Mark David Gerson reference site David approved.

## Typography

- Headings: Playfair Display (serif, editorial)
- Body: Inter (sans-serif, modern, readable)
- Both fonts loaded via Google Fonts in `<head>`

## Tech Stack

- Static HTML / CSS / vanilla JS — no framework
- No build step. Edit HTML directly.
- Google Fonts (Playfair Display, Inter)
- Deployed to Vercel
- Domain: bookyourbrand.com (NOT yet connected — Phase 1 ships to a Vercel preview URL only, domain connection happens after David approves)

## Structure

- `index.html` — Homepage (single-page, anchored sections)
- `books/` — 17 individual book pages (one per book in David's catalog)
- `assets/images/` — Book cover images + David's headshot
- No backend. No database. No build step.

## Phase 1 Branch

Active development happens on `redesign/light-literary`. The previous dark-themed build remains on `main` until the new direction is approved by David. Do NOT merge to main without explicit approval.

## Reference Site

David explicitly asked for the site to be modeled on:

**[markdavidgerson.com](https://www.markdavidgerson.com/)**

Layout, hero pattern, book showcase grid, credibility strip, single-page architecture all come from there. Color palette does NOT — David wanted his own brand colors.

## Out of Scope (Phase 1)

Per `PLAN.md` Section 9:

- AI Sample Writing Tool (Phase 2)
- n8n workflows (Phase 3)
- Bookalope integration
- Real domain connection (waits for David's approval)
- Real testimonials (waits for David)
- Calendar booking integration
- Blog or content section
- Newsletter signup
- Contact form (mailto: is enough for Phase 1)
