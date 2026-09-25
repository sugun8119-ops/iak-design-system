# FeatureStory

The lead story: an asymmetric 5 : 7 split — text on 5 of 12 columns, a portrait image on 7 — that opens EditorialHome.

**Consumer provides:** `eyebrow` (meta, text in `textPrimary` after a 16×2px `accent` rule — red never as text), `title` (set in `display`, 64/68; mobile 40/44), `description` (max 38ch), `cta` (EditorialCTA props), `media` (`tone`, `label` for the placeholder's accessible name, or `src` + `alt` for a licensed photo; `caption`, `credit`). `as` picks the heading level (default `h1`).

- Column gap 48 on desktop, 20 on tablet; padding 48 top / 72 bottom.
- Mobile (<768): stacks text above image, gap 32; the portrait image becomes 4:3.
- One FeatureStory per page. Keep the title short (two lines) so the scale contrast with the 12px meta reads.

**Don't** mirror it into a centered hero, put text over the image, or add a filled button.

**States (derived-extension):** loading → `Skeleton variant="feature"` (same 5 : 7 geometry); missing image → `media.missing`; long titles wrap by word (`keep-all`) and never truncate.
