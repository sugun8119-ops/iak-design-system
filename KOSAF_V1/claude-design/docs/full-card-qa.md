# KOSAF_V1 · Full card QA (1.5.2)

## Input
External DOM inspection (Codex) of the 1.5.1 export: all 100 cards at their manifest viewport. Result: 99 rendered content, 1 blank (Icon catalogue), broken images 0, horizontal overflow 0. UI kit vertical scroll is expected (1920 / 390 viewports kept).

## Fixes
1. **Icon catalogue blank** — `icon.card.html` destructured `iconVariants` from the bundle namespace, but lowercase exports are not exposed (bundle metadata: unexposedExports). Replaced with a card-local `iconVariants` derived from the exposed `UIIconRegistry` / `IconRegistry` / `IconAliases`. Bundle not edited. Grid 4 → 3 columns so Korean meta isn't clipped; viewport 1060 → 1900. `guidelines/icon-states.html` only uses `Icon` / `IconButton` (exposed) — unchanged.
   - Note: `iconVariants`, `resolveIcon` remain module exports used inside components; they are **not** on `window.<Namespace>`. Cards/consumers should use the PascalCase registries.
2. **Clipped heights** — IconButton 560→720 · ProductTable 1580→2300 · Rating 280→310 · EmptyState 720→800 · FormErrorSummary 620→690 · MobileFilterSheet 760→810 · PageHeader 430→610 · Core board 900→1940 · icon-states 520→700 · docs/02 630→680 · docs/05 450→1060 · docs/07 520→860.
3. **Accessible names**
   - Input card: 5 inputs get `aria-label` per state (기본/포커스/오류/비활성, 아이디).
   - FormField: backward-compatible auto id — without `htmlFor`, the first element child without an id receives an auto id, so `<label for>`, `aria-describedby`, `aria-invalid` connect. Existing `htmlFor` usage unchanged. Covers the 2 unlabelled card inputs.
   - Core board: 4 inputs, 3 checkboxes, 4 radios (state matrix) get `aria-label`; the state radios share `name="rs"`.
   - FileUpload: native file input now has `name` (default "files") and `aria-label` (default "첨부파일 선택"); card (3) and seller-signup PC/Mobile (2 each via shared screen) pass explicit names/labels.
4. **Figma status (final, 2026-09-27)** — 166 unique nodes changed in Figma: 160 in the 3 management sections bound to semantic variables (border #DDD, guide text #888/#707070, 계약거래 badge #059B00, input error #E23736) + 6 Poppins nodes, verified to be screen annotations rather than the logo (수의거래 설정 3 captions; GNB 메뉴 카테고리 / 최종시안 / GNB), changed to Noto Sans KR Bold with the font-family variable and primary text token. Unbound raw-paint nodes 832 → 666 (Common 13 / 진행중 22 / Interaction 631). Brand-font exception now S-Core Dream 34 only (Poppins 0). Source/chart/brand exceptions preserved. Unchanged: child nodes 414/842/15581, 6 close reactions, 81 variables, 69 styles, 11 Figma families. **Not** a full component migration. Past snapshots in `docs/source/` and `uploads/` untouched.

## Re-verification (external, final 1.5.2 export)
- 100/100 cards: body not empty · broken images 0 · pending images 0 · horizontal overflow 0 · unnamed controls (in the inspected set) 0.
- 11 source SVG + icons.data.js and canonical tokens: SHA identical. 100-card list preserved.
- Last 3 height fixes: preservation 190→300 (measured 240) · Icon catalogue 1900→2100 (measured 1997) · docs/05-qa 1060→1400 (measured 1109 + room). UI kit vertical scroll is expected and kept.
- Scope: DOM-level checks only — not a precise review of every state, not screen-reader certification, not a full pixel verification.

## Preserved
11 source SVG + icons.data.js, tokens, 100 cards, 50 families, 22 kit cards.

## Scope / not claimed
DOM-level inspection of 100 cards only. Not a precise review of every interactive state, not screen-reader certification. Re-verification of 1.5.2 on the new export: pending (user).
