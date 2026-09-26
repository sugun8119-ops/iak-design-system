# 1.4.0 — Reference-based enhancement (2026-09-27)

Scope: reusable patterns reinforced from public references, applied **inside KOSAF rules** (Noto Sans KR 400/500/700, Primary #059B00 / Hover #02AC5A / Positive #17BF56, Focus #0047ED, 1px #DDDDDD, small radius, dense tables, PC 1920 / Mobile 390–391). No marketing scale, blue/cream/serif/dark/gradient styling was carried over. 11 masters, 81 variables, 69 styles unchanged.

| Ref | Source | Applied as | Files | Screens |
|---|---|---|---|---|
| R1 | https://mobbin.com/glossary/text-field | FormField aria-describedby/aria-invalid wiring, help above error, keep-all wrapping; Input rest-prop override; Select id/aria | components/form-field/FormField.tsx, components/select/Select.tsx, ui_kits/seller-signup/screens.jsx, ui_kits/login/screens.jsx | 판매자 회원가입 PC/Mo, 로그인 PC/Mo |
| R2 | https://mobbin.com/glossary/table · https://styles.refero.design/style/b136f0a0-8064-4978-a18e-db54b9362c24 | ProductTable numericAlign, onSort/aria-sort, selectable, loading/empty/error; mobile list tabular price | components/product-table/ProductTable.tsx, components/product-table/product-table.card.html, ui_kits/search-results/screens.jsx | 검색 결과 PC (표) |
| R3 | https://mobbin.com/glossary/empty-state | EmptyState variant noResults/emptyCart/noHistory; search 0-result + reset | components/empty-state/EmptyState.tsx, components/empty-state/empty-state.card.html, ui_kits/search-results/screens.jsx | 검색 결과 PC/Mo 0건 |
| R4 | https://mobbin.com/glossary/error-message | New FormErrorSummary (error/submitError/loading/success, focusKey, first-field focus) | components/form-error-summary/*, ui_kits/seller-signup/screens.jsx | 판매자 회원가입 PC/Mo |
| R5 | https://mobbin.com/glossary/bottom-sheet · https://mobbin.com/glossary/chip | New MobileFilterSheet (draft≠applied, Esc/cancel revert, reset, focus trap/return, scroll lock, live count, fixed apply bar); FilterPanel bare prop; applied chips + 전체 초기화 | components/mobile-filter-sheet/*, components/filter-panel/FilterPanel.tsx, ui_kits/search-results/screens.jsx | 검색 결과 Mo |
| R6 | https://styles.refero.design/style/6fb648be-cc69-4a84-a798-9f0f006922a0 | No geometry change: Search 579×50 r25 and ProductCard source spec kept; search kit keyword + category/filter state unified in one data path | ui_kits/search-results/screens.jsx | 검색 결과 PC/Mo |
| R7 | https://land-book.com/websites/99034-ai-hrs-for-frontline-workforce-management-hunar-ai · https://land-book.com/websites/99527-meeting-scheduling-software-and-ai-meeting-tools-calendly | New PageHeader; shell PageHead delegates to it (search, mypage, myshop, cart, checkout, support, signup); signup completion centered | components/page-header/*, ui_kits/_shared/shell.jsx, ui_kits/seller-signup/screens.jsx | all kits using PageHead |

## New components (KOSAF extension — not Figma masters)
- **PageHeader** — title → description → actions; left for work screens, center for completion.
- **FormErrorSummary** — field-error list (links focus fields) vs submit failure (retry); loading/success.
- **MobileFilterSheet** — bottom sheet around source FilterPanel mobile; draft ≠ applied.

## Changed components (additive, API-compatible)
- FormField: aria-describedby/aria-invalid on the `id === htmlFor` child; help above error; field errors no longer `role="alert"`.
- Select: `id`, `aria-describedby`, `aria-invalid` pass-through.
- ProductTable: `numericAlign` (default right; `center` = source), `sort/onSort`, `selectable`, `state` (loading/empty/error). Header labels, columns, 50+50 header heights unchanged.
- EmptyState: `variant` noResults / emptyCart / noHistory, `secondaryLabel`.
- FilterPanel: `bare` (drops dialog role when wrapped).

## Kits
- 검색 결과 PC: filters actually filter (demo), keyword search, table sort + selection, 0 results → EmptyState 필터 초기화 (resets panel/keyword/only-on-sale). Pick 거래방식 ‘역경매’ to reach 0.
- 검색 결과 Mo: MobileFilterSheet connected; chips removable + 전체 초기화; live count on apply button; 0 → EmptyState.
- 판매자 회원가입 PC/Mo: FormErrorSummary + first-error focus once per submit; help text moved out of placeholders; loading → success/submit-failure (demo toggle); phone/email grids fit 390; completion uses centered PageHeader.
- 로그인: specific error message, focus first empty field, error linked via aria-describedby.

## Verification (honest)
- Done: static edits, check_design_system (see QA card).
- **대표 외부검증 (user, Published bundle, 2026-09-27)**: 모바일검색 취소=2결과유지+focus복귀 · 정가 적용=1결과+칩 · 초기화=5결과 · Esc 닫기/scroll lock 복원 · CSS 390/391 search 가로 overflow 0 · signup 390/391 overflow 0, 빈 제출 7오류→m-name focus, 이름 수정 후 재제출 6오류→m-id focus, aria-invalid/describedby 정상 · ProductTable 가격 right + tabular-nums, loading/error/empty 렌더 · 97카드/49family 파일 존재, 토큰 파일 변경 0.
- Still pending: full precise visual QA of all 97 cards; PC search/table sort & selection states beyond the above.
- Not claimed: accessibility conformance; full precise visual QA of all 97 cards (not done).

## Remaining gaps
- Mobile ProductTable remains a stacked list (no sort/selection on mobile).
- Checkout/order-complete body kept; only PageHead unified.
- FormField describedby applies only to direct children with matching id (grouped inputs wire manually).
