# Koals — design direction

This captures the site owner's (Koals') actual visual and UX preferences,
gathered directly from her before any design work started. Treat this as
the source of truth for design decisions — check new choices against it
rather than reinventing direction.

## What she does

Science illustration — spans journal cover art (life science journals),
sketches and doodles, product photography, and book work. Visual,
image-led work; the site's whole job is to show it well.

## References she gave, and what we took from each

- **[furrylittlepeach.com](https://www.furrylittlepeach.com)** — homepage
  is purely a portfolio grid: no hero copy, minimal nav (wordmark + menu).
  *Borrowed: work-first layout, minimal chrome.* Not borrowed: her
  specific bright illustrated palette — that's her own visual identity,
  not a fit here.
- **[remarkable.com/.../pure](https://remarkable.com/products/remarkable-paper/pure)**
  — warm cream backgrounds (never stark white), elegant serif display
  type, huge whitespace, muted tones. *Borrowed: the "paper," soft-on-the-
  eyes feel — the closest match to her own description.*
- **[kinto-europe.com journal](https://kinto-europe.com/blogs/journal/origins-of-futo-shiga)**
  — editorial magazine feel: serif headline and body copy, generous
  line-height, large imagery, muted neutral palette, minimal nav.
  *Borrowed: the clean, editorial calm, and proof that serif body copy can
  stay very legible when line-height and size are generous — relevant
  since she asked for serif that's still readable.*

## Principles

- **Work first.** The landing page shows the portfolio grid immediately —
  no hero section blocking it. Easy, minimal paths to About and Contact
  from the nav, nothing more.
- **Paper, not screen.** Warm off-white background, never pure white. A
  faint paper-grain texture (an inline SVG noise overlay in `global.css`,
  not an image file) gives it a tactile, hand-drawn quality without being
  literal or heavy.
- **Soft and calm.** Muted, low-saturation colors. Minimal motion — a soft
  opacity fade on portfolio image hover, nothing flashier.
- **Serif, but readable.** She specifically asked for serif fonts with
  legibility as a real constraint, not just a display headline for looks.
  Current pick: **Newsreader** (a serif designed for on-screen reading,
  with a text optical size for body copy and a display optical size for
  headings) for both headings and body copy, paired with **Work Sans**
  (sans) for small UI chrome — nav labels, captions, category tags —
  where a serif gets harder to read at small sizes. This mirrors how the
  Kinto reference actually uses type (serif headline + body, sans for the
  top nav).

## Color

**No brand colors exist yet.** The palette in `src/styles/tokens.css` is a
placeholder — warm cream paper, soft charcoal ink, muted sage accent —
deliberately picked to be easy to swap while real brand colors are found.
Alternate palettes are sketched out in commented-out blocks in that same
file as a starting point for experimenting.

The rule going forward: **every color used anywhere on the site should be
a `var(--color-...)` token**, never a hardcoded hex value in a component —
that's what makes swapping the whole palette a one-file change instead of
a site-wide hunt.

## Structure

- Home = portfolio grid (placeholder tiles spanning the four kinds of
  work: journal covers, sketches/doodles, product photography, book work)
- About = short bio (placeholder text for now)
- Contact = how to reach her (placeholder, currently a mailto link to
  hello@koals.eu)

## Content status

Everything is currently placeholder — portfolio images, bio copy, contact
copy — pending real material. The structure is built so dropping in real
content later doesn't require restructuring: swap image paths and text,
nothing else.

## Open / not yet decided

- Real color palette (pending — exploring options once there's real
  work/branding to base it on)
- Real logo/wordmark (currently just the site name "Koals" set in the
  serif type)
- Real portfolio images and bio/contact copy
