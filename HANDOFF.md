# Handoff — Arsh Vasani Portfolio

For the next agent. Read this before touching anything. Last updated: 2026-09-12.

## Current status

Working Next.js 16.3.5 (App Router) + Tailwind CSS v4 portfolio. Build, lint, and the Impeccable detector all pass clean. Zero console errors. Dev server runs at http://localhost:3000.

This session's work (core + polish) is all verified. The one thing flagged as "not yet answered by user" is an Impeccable version update prompt (details below).

## Stack & conventions (do NOT break these)

- **Conventions overrides in AGENTS.md**: this is Next.js 16.3.5 with breaking changes. Read the relevant guide under `node_modules/next/dist/docs/` before writing code. It also auto-regenerates its own block on `next dev` — don't fight it.
- **No square-bracket Tailwind classes** in app code (e.g. `bg-[#fff]`). Everything tokenized. If a token doesn't exist, add it to `@theme` in `app/globals.css`.
- **No code comments** unless asked.
- **Fonts**: `--font-display` = Mona Sans, `--font-body` = Work Sans. Body uses `font-body text-ink`.
- Nav structure: `components/NavBar.tsx`. Icons via `lucide-react`.
- Full token list lives in `app/globals.css` (lines 7–80): `cardinal`, `ink`, `paper` (white bg), `charcoal`, `ash`, `mist`, `fog`, `leaf`, type scale (`text-hero/title/role/h3/footer/avatar/17/15/13/11/2xs/3xs/4xs/7`), tracking (`open/hi/ultra/max/mega`), shadows (`stage/card/mock/nav`), layout (`max-w-site`, `pl-hero-indent`), animations (`float/breathe/spin-slow`), eases (`out-expo/soft`), plus custom classes `.mask-line`, `.reveal`, `.bg-noise`, `.dotted`, `.work-card` media dolly, `.mock-bar`.
- All section bgs are `bg-paper` (white) except the charcol footer (`contact`).
- shadcn components in `components/ui/`. **Base UI quirks**: `Button` used as `<a>` requires `nativeButton={false}`; the `cn` helper drops custom `--text-*` tokens on shadcn primitives, so size classes go on inner spans; the Tooltip was removed from EmailButton because Base UI Trigger swallows onClick.

## What exists

- `app/layout.tsx` — fonts, metadata, `scroll-smooth`.
- `app/page.tsx` — single page, all sections in one file (~463 lines): hero (`#about`), `#skills`, `#experience`, `#works`, footer (`#contact`, charcol). Data arrays inline. Landing type (`text-hero`/`text-avatar`) lets the names strip to "AV" on the avatar card.
- `components/NavBar.tsx` — fixed top bar (below).
- `components/Clock.tsx` — "Now is X in Ahmedabad" clock, moved below the nav bar in hero.
- `components/EmailButton.tsx` — shadcn Button, copies email, flips label to "Copied", toggles `email-copied border-leaf bg-leaf`.
- `components/WorkCard.tsx`, `components/Mockups.tsx`, `components/Reveal.tsx` — work display, CSS mockups, scroll reveal.
- `components/ui/` — avatar, badge, button, separator (+ `components.json` + `lib/utils.ts` `cn`).

## Navigation (just redesigned — done and verified)

Replaced the left floating pill with a **minimal fixed top bar** in `components/NavBar.tsx`:
- `header.fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-paper/80 backdrop-blur-md`, inner row `h-12 max-w-site px-6 sm:px-10 lg:px-30`.
- Brand left: `Arsh Vasani` (font-display lowercase, `Arsh` only on mobile, `Vasani` from `sm`), hover → `text-cardinal`.
- Links right: uppercase `text-2xs sm:text-11`, `tracking-hi`; active = `text-ink` + a `h-0.5 bg-leaf` underline, idle = `text-ink/60 hover:text-ink`. Active-section tracking via IntersectionObserver-style scroll probe at `window.innerHeight * 0.42`.
- Nav is always visible over the white hero (previous pill was invisible until you left the hero — the bug this fixed).
- Declutter: removed `.nav-link`, `.nav-dot`, `.nav-squiggle` CSS from globals.
- Hero: `scroll-mt-12` added to all 4 sections + footer so anchors land under the 48px bar (row is h-12). Clock moved to `pt-14` so it sits below the bar.

## Hero layout (done earlier)

Two-column at `lg`: names left (Arsh / Vasani with `pl-hero-indent`), right column stacked avatar card ("Open to work" badge) + summary + tech list (tech now visible on mobile too, `items-start lg:items-end`). Removed old absolute-positioned identity mark. Container `lg:px-30`, `pb-12`, hero scroll hint `pt-6`. Intentional: hero content center sits ~68px above viewport center to leave room for the pinned Scroll label + bottom fade.

## Oversight / polish fixes applied this session

- **Reveal robustness** (`components/Reveal.tsx`): IO `threshold 0.12`, `rootMargin 0px 0px -6%`; reveals on `isIntersecting` OR element scrolled past viewport top (`boundingClientRect.top < 0`) via scroll fallback. Fixes content staying `opacity:0` forever after instant jumps / fast flings / jump-past. Verified: instant & multi-jump flings end with 0 hidden `.reveal:not(.is-in)`.
- **AA contrast fixes** (text tokens, verified by computation):
  - Ink on white: `text-ink/40`, `/45`, `/50`, `/55` → raised to `/55` (4.73:1) or `/60` (5.7:1) where needed — Scroll hint, section labels, exp period/dates/point numbers, hero/mock index numbers.
  - Footer mist on charcoal: `/30`→`/60`, `/40`→`/60`, `/50`→`/60`, `/55`→`/60` (4.83:1) — Contact eyebrow, tagline, base text, copyright.
  - Kept `text-cardinal/15` ghost numerals (decorative/aria-hidden) as-is.
  - rule of thumb: ink needs ≥ `/55` on white; mist needs ≥ `/60` on charcoal for small text. A scan table: ink on white `/45`=3.34, `/50`=3.96, `/55`=4.73, `/60`=5.7, `/70`=8.45, `/80`=12.52; mist on charcoal `/45`=3.32, `/50`=3.78, `/55`=4.28, `/60`=4.83, `/70`=6.08, `/75`=6.78. Use these to pick the lightest passing token.

## Verification workflow

Git status is dirty (uploads, `.playwright-mcp/`, a few stray PNGs at repo root like `polish-hero.png`, `anri-full.png`, downloadable `Arsh_Vasani_Resume.pdf`). Nothing committed beyond the initial Create Next App commit.

- `npm run lint` and `npx tsc --noEmit` and `npm run build` — all pass.
- Visual/DOM verification via the Playwright MCP tools (browser at localhost:3000). **This model cannot read images** — verify via DOM/computed-style checks, bounding boxes, and console-errors reads instead of screenshots.
- Contrast ground truth: compute in-browser by converting the oklch token to sRGB and blending over the bg (white `#ffffff`, charcoal `#1f1d1f`). The obvious canvas/screenshot methods give wrong ratios for alpha tokens — don't trust them.
- After UI changes, run the Impeccable detector once: `C:\Users\Rajan\.claude\skills\impeccable\scripts\impeccable.cmd detect --json <changed files>` (expected `[]`). On Windows run the `.cmd`, not a bare `impeccable`.

## Impeccable skill context (read if continuing the polish)

- Ran `impeccable context`: **NO_PRODUCT_MD** (no `PRODUCT.md`/`DESIGN.md`), **SCOPED_EXISTING_ALLOWED** (refinement may use the incumbent design as authority, no blocking), **MANUAL_DETECTOR_REQUIRED** (run the detector above after UI work).
- Playbook: `C:\Users\Rajan\.claude\skills\impeccable\reference\polish.md`, routing in `reference\routing.md`. Principle: refine, never a concealed redesign; fix at the narrowest correct level; verify in bounded passes (build fully → inspect once → fix in one batch → confirm once).
- **Pending user question**: "A newer Impeccable (v4.3.1) is available. Update now? It runs `npx impeccable update`." — not yet answered. Ask the user before running.
- Renoving the auto-generated AGENTS.md block only re-creates it on `next dev`; commit it with work to keep the tree clean.

## Next steps (natural candidates)

1. Answer/run the Impeccable 4.3.1 update prompt.
2. Optionally `$impeccable init`/`document` to create `PRODUCT.md`/`DESIGN.md` (was offered, not requested).
3. Clean up uncommitted debris (stray screenshots/resumes at repo root) and restructure if a cleaner git state is wanted.