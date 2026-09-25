# Quality refinement — 1.3.0 (2026-09-26)

## Improvements (web refinement — not source values)
- **ImageSlot** (new helper export in ProductCard.tsx): same-ratio fallback (#F7F7F7 + 1px #EAEAEA + "이미지 준비중") for missing src **and** load errors. Used by ProductCard, ProductListItem, CartItem, CompareTable, kits.
- **ProductCard**: 2-line title clamp with reserved height, label/value meta grid, tabular prices, 36px icon hit areas, 판매종료 overlay, mobile heart moved to image corner.
- Tabular numerals in ProductTable, OrderSummary, CartItem, MetricCard, QuantityStepper, DescriptionList, all tables (base.css).
- DescriptionList mobile label column 110 → 124 + keep-all (fixes "단위/포장/크기" wrapping).
- **Kit data**: one shared catalogue (`ui_kits/_shared/shell.jsx` PRODUCTS). Apple photos only on 사과 items; other items show ImageSlot. Totals = 단가 × 수량 everywhere (checkout: 52,000×10 + 45,000×4 = 700,000원, computed live). "Total 00" replaced by real counts.
- **Mobile frame**: width 100% ≤ 391, `overflow-x: clip`, bottom padding = CTA height + 24, fixed bars follow frame width, safe-area inset.
- **PageHead** (title → description → action) in search, cart, checkout, signup.
- Product detail PC/Mobile rebuilt around one apple product (name, 단가 52,000원, 수량 → 총 상품금액), keyboard ←/→ tabs.
- Signup: every required field shows error state + message; mobile email row wraps cleanly.
- Component cards: Korean meta header (이름 · provenance chip · node · 용도 · 상태), props moved to collapsible "Props · 사용 노트"; real-size crops (KCrop) added for Header, Footer, FilterPanel, ProductTable next to the scaled overview.

## Preserved (unchanged)
- 11 Figma masters' dimensions, 81 variables, 69 styles, Disabled #EAEAEA exception, contrast values, 832/34 preservation exceptions, colours/font weights.
- All component APIs (only additive: ImageSlot export).

## Actually verified this turn
- Rendered with the **previously published bundle**: search-results/mobile.html and product-card card (before changes) → found the issues fixed above.
- **Not verified after edits**: all changed component sources (they compile into the bundle at end of turn), the 46 cards, and all 22 kit cards (11 PC + 11 Mobile). The earlier report of "PC 12 / Mobile 12" was wrong; the manifest has 11 + 11 = 22 kit cards.

## Pass 2 (same day)
- Kits login / buyer-mypage / seller-myshop / support: PageHead title→description hierarchy, 16px mobile insets, shared PRODUCTS data (orders/deals = 단가 × 수량), "Total 00" → real counts, realistic Q&A titles, login error state on empty fields + separated account links.
- Foundation (18) + Start-here (7) cards: shared `guidelines/doc.css` baseline (padding 18/20, 13/19 body, 14/700 section heads, table/th rules, tabular numbers). 94 cards unchanged in count.
- **Desktop product image check (1:91190)**: pixel analysis of `product-desktop__1-91190.png` (556×556) → 99.9% opaque, 72.7% non-white pixels, i.e. the asset has real content (not blank). Also rendered in the ProductCard card (apple visible). Kept as the PC apple image; 1:91522 remains the mobile image. If a white box appears it is a load/timing issue, and ImageSlot now shows "이미지 준비중" on load error instead of white.

## Remaining gaps
- Representative visual review of pass-2 kits: by user in browser (not done by me).
- No accessibility audit; keyboard handling is implemented, not certified.

## Files changed
Pass 2: ui_kits/{login,buyer-mypage,seller-myshop,support}/screens.jsx, guidelines/doc.css (new), 25 guideline/doc cards (+doc.css link).
components/product-card/{ProductCard.tsx,ProductCard.d.ts,product-card.card.html}, product-list-item, cart-item, compare-table, description-list, order-summary, product-table, metric-card, quantity-stepper (.tsx), all 46 *.card.html (meta), guidelines/card-kit.js, tokens/base.css, ui_kits/_shared/shell.jsx, ui_kits/{search-results,product-detail,cart,checkout,seller-signup}/screens.jsx.
