# DEW_V1 · Project Design System

A light editorial design system based on the DEW Webzine reference: white paper, black serif mastheads, red used only for calls to action, thin rules, angular cards. IAK/RAIS originals are kept in `archive/` and are not part of the active system.

- Tokens: `dew/tokens.css` (all hex and size values are derived; see `dew/source-observations.md`)
- Component CSS: `dew/dew-ui.css` · site/card chrome: `dew/dew-site.css`
- Runtime: load `dew/lib/icons.js` and `dew/lib/dew-ui.js` before using the components
- Fonts (actual use, loaded from Google Fonts): Libre Caslon Display (display/mastheads) · Libre Caslon Text (serif headings/body serif) · Roboto (UI/body) · Noto Sans KR (Korean). The DEW source names Big Caslon; Libre Caslon is the approved substitute (see `dew/source-observations.md`).

## Components
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
- Toast (ToastProvider, useToast)
- AlertDialog

## Usage rules (active — full version in `dew/claude-system.md`)
- Light only: white paper canvas #FFFFFF, black type #111111, greys for secondary text. No dark theme.
- Red #E1261C only for one primary CTA per view, red overlines and one highlighted data point. Never body text or large fills.
- Cream/mint are photo backgrounds only, never UI colors.
- Radius 0 everywhere (avatars/dots excepted). Thin rules instead of shadows; shadows only on menu/toast/dialog.
- Focus: 2px solid #111, 2px offset. Motion 120/180/240ms, reduced-motion 1ms.
- Grid: max 1440px, padding/gutter 24px (16px ≤640px), 12/8/4 columns at 1024/640 breakpoints.
- Brand: "DEW" as live text in --dew-font-display. Never draw logos; client logos only from supplied files.
- Archived IAK/RAIS rules (orange action, dark UI, Pretendard, gem mark) in `archive/` are inactive and must not be applied.
