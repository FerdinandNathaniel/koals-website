# Koals website — agent notes

Static portfolio site for Koals (science illustration / freelance creative
work), built with Astro, deployed to GitHub Pages at koals.eu.

## Stack

- **Astro** (no React/Vue/Angular) — components compile to static HTML/CSS
  with almost no shipped JS. Chosen deliberately: this is a static
  portfolio, not an app, and a full SPA framework would add build
  complexity nothing here needs.
- No CMS, no database, no backend. Content lives in plain files in this
  repo.
- Deployed via GitHub Actions (`.github/workflows/deploy.yml`) to GitHub
  Pages on every push to `main`.

## Before making design changes

Read `DESIGN.md` first — it captures the site owner's actual visual/UX
preferences (references, typography, color approach, layout principles),
gathered directly from her. Check new choices against it rather than
inventing a new direction.

## File structure

- `src/pages/` — one file per route: `index.astro` (home/portfolio),
  `about.astro`, `contact.astro`.
- `src/layouts/BaseLayout.astro` — the shared HTML shell (head, fonts,
  Header, Footer). Every page uses it.
- `src/components/` — `Header.astro`, `Footer.astro`, `PortfolioCard.astro`.
- `src/data/portfolio.js` — the portfolio items shown on the homepage grid.
  **To add/remove/reorder work, edit this array — nothing else needs to
  change.**
- `src/styles/tokens.css` — every color, font, spacing, and motion value as
  a CSS custom property. **This is the only file to touch when changing
  the color palette or type scale.** No component or page should hardcode
  a color/font/spacing value directly — reference the token instead.
- `src/styles/global.css` — base/reset styles and the paper-grain texture
  overlay (an inline SVG noise filter, not an image asset). Imports
  `tokens.css`.
- `public/placeholders/*.svg` — placeholder artwork tiles for the
  portfolio grid, referenced from `src/data/portfolio.js`. Replace with
  real images (drop files in `public/` or `src/assets/`, update the
  `image` path per entry) as real work becomes available. Their colors are
  hardcoded to match the current placeholder palette — no need to keep
  them in sync if the palette changes, since they'll be replaced anyway.
- `public/CNAME` — contains `koals.eu`, required by GitHub Pages for the
  custom domain. Don't delete it.

## Commands

- `npm run dev` — local dev server
- `npm run build` — production build to `dist/`
- `npm run preview` — serve the production build locally

## Deployment

Push to `main` → GitHub Actions builds and deploys automatically.
One-time repo setup: in **Settings → Pages**, source must be set to
"GitHub Actions" (not "Deploy from a branch"), with the custom domain set
to `koals.eu` and "Enforce HTTPS" enabled once DNS has propagated.

DNS (managed at netcup, outside this repo): 4 A records for the apex
domain pointing at GitHub Pages' IPs —
`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.

## Email

`hello@koals.eu` is hosted via Proton Mail (Proton Duo plan, custom
domain) — unrelated to this repo/hosting, noted here only so a future
session doesn't assume there's no inbox tied to the domain.

## Content status

Everything under `src/data/portfolio.js`, `about.astro`, and
`contact.astro` is placeholder copy — replace with real content when it's
ready. No structural changes should be needed to swap placeholders for
real content.
