# KOSAF_V1 UI kits

Each kit composes the design-system components (no re-implemented primitives). PC = 1920 (index*.html), Mobile = 390 (mobile*.html). Shared frames/demo data: `_shared/shell.jsx`.

| Kit | Files | Source nodes | Interactions |
|---|---|---|---|
| 검색 결과 | search-results/index.html · mobile.html | 1:97566 · 1:98635 · 1:92883 · 1:93119 | Filter panel, table ⇄ card toggle, sort/count selects, pagination |
| 상품상세 | product-detail/index.html · mobile.html | 1:86264 · 1:87593 · 1:86445 | Info table, quantity → total, 시세동향 modal, tabs with reviews |
| 장바구니 | cart/index.html · mobile.html | 1:103657 · 1:103945 | Select/remove lines, quantities update total |
| 장바구니 (없음) | cart/index-empty.html · mobile-empty.html | 1:104584 | Empty cart state |
| 주문·결제 | checkout/index.html · mobile.html | 1:85780 · 1:104139 | Order lines, 결제정보 radio, 결제하기 → 완료 |
| 주문 완료 | order-complete/index.html · mobile.html | 1:104312 · 1:104518 | Completion message + 결제정보 |
| 로그인 | login/index.html · mobile.html | 1:87393 · 1:87494 · 1:103625 | General + certificate login, validation, 휴면 계정 dialog |
| 판매자 회원가입 | seller-signup/index.html · mobile.html | 1:89853 · 1:89639 · 1:90168 | Form rows with required validation, file attach, completion |
| 구매자 마이페이지 | buyer-mypage/index.html · mobile.html | 1:88132 · 1:87784 | LNB, metric cards, order flow, recent orders, Q&A list |
| 판매자 마이샵 | seller-myshop/index.html · mobile.html | 1:89065 · 1:88758 · 1:94517 | Seller LNB, metrics (example), deals table, 협상 modal |
| FAQ · 공지 · 후기 | support/index.html · mobile.html | 1:90254 · 1:93514 · 1:93671 | FAQ accordion by category, notices, reviews + empty, 알림 panel |
| Core Components board | core-components/index.html | 218:570 | state catalog |

**Status:** recreations built from exported geometry (18 patterns), text/structure (91 frames) and 7 PNG captures. They are **not pixel-verified clones** of every source frame; see `docs/source-coverage.md`. Backend actions (login, 결제, 업로드, 중복 확인) are client-side demos. Values marked 예시/데모 are illustrative.
