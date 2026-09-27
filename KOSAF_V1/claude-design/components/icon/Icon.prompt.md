Single entry point for every KOSAF glyph — 11 verbatim Figma source icons plus the KOSAF extension UI set; use it instead of text glyphs (×, −, ★, ▾) or CSS-drawn shapes.

```jsx
<Icon name="search" />                         {/* source 1:86084, baked #059B00 */}
<Icon name="close" size={20} tone="secondary" /> {/* extension, currentColor */}
<Icon name="star" filled tone="#FFE326" />
<IconButton icon="close" label="닫기" />         {/* icon-only controls always go through IconButton */}
```

- `mode="source"` (default) keeps Figma colours exactly; `tone` is ignored with a warning. Source colours are never replaced or filtered.
- Extension icons: sizes 16/20/24/32, 2px round stroke on a 24 grid, `tone` = current|primary|secondary|muted|disabled|brand|positive|danger|focus|inverse.
- White source icons (check, shopping-bag, purchase, document-edit) are drawn for green/filled backgrounds — don't place on white.
- `variant` (extension only): `outline` default · `duotone` soft face (#EAEAEA neutral, #EBFFE9 brand) + sharp stroke · `solid` for closed glyphs. Open strokes (close, plus, minus, chevrons, menu, sort, list, refresh, check-mark, chart-line) have outline only → fallback. `filled` = legacy solid for star/heart-outline.
- Unknown name → dashed red "?" + `console.warn`. Add names to `icons.ui.js` + `icons.manifest.json`; don't hand-draw inline.
- Decorative by default (`aria-hidden`). Pass `title` only for standalone meaningful icons.
- Aliases (x→close, hamburger→menu, prev/next→chevron-*, like→heart …) are in `IconAliases`.
