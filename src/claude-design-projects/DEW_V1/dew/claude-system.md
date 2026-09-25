# DEW_V1 · claude-system.md — generation rules

Use these rules whenever you generate UI with DEW_V1. Where they conflict with older IAK/RAIS material, these rules win. That material is archived in `archive/` and is inactive: never apply orange action color, dark surfaces, Pretendard, the gem mark or the chrome motif.

## 1. Identity
- Light only. The canvas is white paper `--dew-canvas` (#FFFFFF). There is no dark theme.
- Type is black `--dew-fg` (#111111). Secondary text uses `--dew-fg-2` / `--dew-fg-3` only.
- Red `--dew-action` (#E1261C) is limited to:
  - a single primary button per view;
  - red overline section labels;
  - one "latest" data point in a chart.
- Never use red for body text or large fills.
- Cream and mint appear in the reference photos only. Never use them as UI colors.
- Brand: `DEW` is a live-text wordmark set in `--dew-font-display`.
  - Never draw a logo or symbol.
  - Place client logos only from their supplied files.
  - The IAK gem and chrome motif are retired.

## 2. Type
- Mastheads, display text and headings use `--dew-font-display`. The actual family is Libre Caslon Display (display) / Libre Caslon Text (serif headings). The source used Big Caslon; Libre Caslon is the approved substitute. It is lighter and narrower than Big Caslon, so do not compensate by faking bold. Do not reference Big Caslon in tokens or CSS.
- UI and body text use `--dew-font-sans` (Roboto). Korean text falls back to Noto Sans KR.
- Use the scale tokens (`--dew-text-*`). Do not invent sizes.
- Overlines are uppercase with 0.18em tracking.
- Numerals use `--dew-text-numeral` with lining and tabular figures.

## 3. Shape, line, depth
- Radius is 0 for every control, card and overlay. Only avatars and dots are round.
- Separate content with rules instead of shadows:
  - hair: 1px #DADADA;
  - rule: 1px #111;
  - heavy: 3px #111 at the top of each section.
- Shadows are allowed only on floating layers (menu, toast, dialog), using their tokens.
- No glows, gradients or neon.

## 4. Layout
- Container max 1440px.
- Padding and gutter are 24px, dropping to 16px at ≤640px.
- Columns: 12 above 1024px, 8 from 641 to 1024px, 4 at ≤640px.
- Magazine rhythm: asymmetric 7/5 or 8/4 splits, one large photo per section, staggered story grids.
- Photos:
  - use `.dew-photo` placeholders labelled with their ratio (16:10, 4:5, 3:2, 4:3);
  - never invent imagery;
  - never draw illustrations in SVG.

## 5. Components
- Use only the 16 components in `dew/components/` with their real props:
  - Button
  - TextField
  - Textarea
  - Select
  - Checkbox
  - Switch
  - Badge
  - Card
  - Skeleton
  - Icon
  - Dialog
  - Menu
  - Table
  - Pagination
  - Toast (ToastProvider / useToast)
  - AlertDialog
- Editorial pages use the 11 parts in `dew/lib/editorial.js` (`window.DEW_ED`):
  - EditorialHeader, CategoryNav, FeatureStory, StoryCard, MediaCard, EditorialGrid, QuoteBlock, ImageCaption, ArticleMeta, EditorialCTA, Footer.
  - Reference pages: EditorialHome, ArticleList, StoryDetail (`dew/kits/front-page.html?view=home|list|story|parts`).
  - Do not replace editorial pages with SaaS dashboards.
- Design-only variants are listed in `dew/preview/mapping.html`. In product code, use the mapped props instead.
- Preview-only props must never ship to product code: `inline`, `previewState`, `highlightedId`, `ToastView`, `data-preview-state`.
- Include only the states that matter for each component:
  - default, hover, focus, pressed, disabled, loading, error, empty, success;
  - long text and missing data (`—` or `미지정` in `.dew-miss`).
- Focus: 2px solid #111 with a 2px offset. Never remove the focus outline.

## 6. Motion
- Durations: 120ms (color/border), 180ms (switch/position), 240ms (overlay).
- Easing: `cubic-bezier(.2,0,0,1)`.
- `prefers-reduced-motion` drops durations to 1ms and stops the shimmer.

## 7. Data and copy
- Use fictional newsroom data only (articles, writers, readers). Keep UI copy in Korean.
- Never reuse historical QA scores. Report only what the current render check measures (`dew/qa.html`).

## 8. Honesty labels
- Mark every value as **observed** (confirmed from the DEW module image) or **derived** (designed here).
- Only these are observed:
  - the 5 palette roles;
  - the 3 font names;
  - the serif masthead, sans UI, asymmetric photo layout and thin rules.
- Everything else is derived. See `dew/source-observations.md`.
