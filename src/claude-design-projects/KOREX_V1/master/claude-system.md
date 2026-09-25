# KOREX_V1 · Claude generation rules

Read order: user request → `master/source-observations.md` → `colors_and_type.css` → `master/lib/kx-ui.css` / `kx-ui.js` (real API) → this file. The previous IAK/RAIS system is under `archive/` and must not be used.

## 1. Fixed rules
- **Light only.** Page = `--bg-canvas` light grey, surfaces = white `--bg-surface`. Deep green `--bg-brand` only for hero, search panel, sidebar and stat panels. Text on it: `--fg-on-brand` / `--fg-on-brand-muted`.
- **Color roles:** green `--action` = primary action and selected state. Mint = tint, selected rows, icon tiles. Data series: `--data-1..3` (green / mint / grey). Semantic red/amber/blue only for status, always with text.
- **Type:** `--font-ui` (Noto Sans KR 100–900). Headings 700–900, body 400, buttons 700. Use the `--text-*` shorthands only.
- **Radius:** 2 for buttons, inputs and badges. 4 for tiles and the toast icon. 6 for cards and dialogs. Pill for category chips, the heart toggle and the switch track only.
- **Focus:** `:focus-visible` gets a 2px outline with 2px offset. Green on light surfaces, white on deep green.
- **Layout:** max 1280, padding 40 / 24 (≤1024) / 16 (≤640), 12/8/4 columns. Verify at 1440 / 834 / 375 with no horizontal overflow.
- **Motion:** 140 / 200 / 280 ms, `--motion-ease`, 1 ms under reduced-motion.
- **Spacing:** 4-base scale only (`--space-*`).
- **Contrast:** `--fg-muted` (3.85:1) is for icons and disabled text only, never body text.

## 2. Components (16, real API in figma-system.json › components[].api)
Button (primary / secondary / outline / chip / danger / text · sm 32 / md 40 / lg 48 · selected · loading), TextField, Textarea, Select, Checkbox, Switch, Badge (neutral / success / warning / error / info / brand), Card (default / brand / mint), Skeleton, Icon (kx:*), Dialog, Menu, Table, Pagination, Toast (ToastProvider / useToast), AlertDialog.
- Do not invent props. `data-preview-state`, `inline`, `previewState` and `highlightedId` are preview-only.
- Missing data: show a reason ("협의", "중개사 미입력", "—"). Never leave a cell blank.
- Long text wraps and is never clipped. Button labels do not wrap, so keep them short.

## 3. Screens
`master/patterns/screen.html?p=<id>&s=<state>`. Site screens: home, search, product. Console patterns: dashboard, analytics, table, detail, settings, billing, chat, builder, modal, empty. Start new screens from the nearest one.

## 4. Identity and content
- Identity is the text wordmark "KOREX" (`.kx-wordmark`). Do not draw logos and do not use original Behance images or copy.
- Photos are neutral placeholders ("매물 사진").
- Use fictional data only: invented company names, KX-### listing IDs.
- Report only current QA results from `master/qa.html`. Never cite stored scores.
