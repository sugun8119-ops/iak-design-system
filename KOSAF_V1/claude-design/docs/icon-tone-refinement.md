# KOSAF_V1 · Icon tone refinement (1.5.1)

Request: 아이콘의 채움·명암과 선택 상태 반영. Not a card/popup shadow change.

## Changes
- **Icon `variant`** (extension only, default `outline` — backward compatible): `duotone` = soft secondary face under the closed paths + sharp 2px stroke; `solid` = closed faces filled with the foreground, inner details knocked out (white; brand green when tone=inverse).
- **Supported geometry (10 closed)**: star, heart-outline, filter, calendar, user, store, home, help, grid, wallet. Registered per icon in `icons.ui.js` as `variants`, `closed` (face paths), `inner` (knock-out paths).
- **Open strokes (13)**: close, menu, plus, minus, chevron-left/right/up/down, sort, check-mark, list, refresh, chart-line → outline only. No forced polygon fills; other variants fall back to outline + console.warn and are labelled "선형만 (열린 획)" in the catalogue.
- **Tone policy** (`IconSoftTones`, existing tokens only): primary/secondary/muted → #EAEAEA · brand/positive → #EBFFE9 · disabled → #F7F7F7 · danger → #E23736 @14% · focus → #0047ED @12% · inverse → white @30% · current → currentColor @16%. `secondaryTone` overrides. No gradient, drop shadow or 3D.
- **Source icons**: untouched — `variant`/`tone` ignored; SHA-256 of 11 SVG + icons.data.js identical (`docs/icon-checksums.json`).
- **Legacy**: `filled` still works (= solid for star/heart-outline). Rating keeps its yellow fractional fill (own path rendering, unchanged).
- **IconButton**: state priority disabled > selected > active press > focus > hover > default.
  - selected / toggle pressed: #EBFFE9 background + 1px inset #059B00 (box-shadow inset, geometry unchanged) + brand icon, duotone for closed UI glyphs (`selectedVariant` = duotone | solid).
  - hover #F7F7F7 · active press #EAEAEA (+0.5px nudge) · focus-visible 2px #0047ED outline, offset 1 · disabled: neutral background, #A0A0A0 icon, native disabled, click blocked, overrides forced `state`.
  - `state="selected"` now renders; `data-state` exposes the resolved state. Source icons keep colours; the background carries the state. label / aria-pressed / 36 / 44 unchanged.
- **Usage**: MobileMenu quick icons → duotone. ProductCard (PC + mobile overlay), ProductTable, BottomActionBar like buttons → liked shows #EBFFE9 background + aria-pressed, original source heart kept; hit areas unchanged.
- **Cards** (count unchanged, 100): Icon catalogue gains a variant select + per-icon support label + comparison row (기본선형/두톤채움/선택/비활성 × 16/20/24/32), viewport 700×1060. IconButton card: state matrix incl. forced selected + disabled-over-selected + source selected; comparison rows at 16/20/24 (hit 36) and 24 (hit 44), viewport 700×560. guidelines/icon-states: comparison grid + live IconButton states, viewport 700×520.

## Representative verification (external, user)
- IconButton toggle → aria-pressed=true, background rgb(235,255,233) #EBFFE9, inset 1px rgb(5,155,0) #059B00, inner icon variant duotone, geometry 36px kept.
- disabled + forced selected → disabled wins.
- Follow-up fix: disabled background was transparent → now `--kosaf-color-bg-subtle` #F7F7F7 with #A0A0A0 icon (source icons keep colours, 40% opacity). Re-check pending.
- Full precise review of all 100 cards: **not done**.

## Verification (static only)
- 11 source SVG + icons.data.js checksums identical.
- Manifest 34 names, 10 variant-capable, 0 duplicates; all icon names referenced in edited cards/MobileMenu resolve.
- check_design_system: see final result.
- **Not verified by me**: browser rendering of duotone/solid, IconButton hover/press/focus in browser, card heights. Pending external review.
