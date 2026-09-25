# Source coverage — 91 frames of 1:85779

Generated from `kosaf-source-patterns.json`. Honest status per frame:
- ✅ **kit** — an interactive UI kit screen recreates the frame (composition from exported structure/geometry; not a pixel-verified clone).
- 🧩 **component** — the frame IS a reusable component (popup/menu/panel) now in the system.
- ◐ **pattern only** — covered by existing components, but no dedicated screen was built.
- ✗ **gap** — not reproduced (reason given).

Totals: ✅ 38 · 🧩 8 · ◐ 28 · ✗ 17 = 91

| Node | Frame | Size | Covered by | Components | Status |
|---|---|---|---|---|---|
| 1:86264 | 거래방식별_정가거래_상품상세_기본정보_가격정보_UI-LB-TP-C01-04 | 1920×2155 | Kit: 상품상세 (PC) | DescriptionList, QuantityStepper, Button 70, Tabs | ✅ kit |
| 1:87593 | 거래방식별_정가거래_상품상세_기본정보_가격정보_Mo_UI-LB-TP-C01-04 | 390×1142 | Kit: 상품상세 (Mo) | DescriptionList, QuantityStepper, BottomActionBar | ✅ kit |
| 1:87639 | 거래방식별_정가거래_상품상세_기본정보_가격정보_01_Mo_UI-LB-TP-C01-04 | 390×1142 | Kit: 상품상세 (Mo) | DescriptionList, QuantityStepper, BottomActionBar | ✅ kit |
| 1:87151 | 거래방식별_입찰거래_상품상세_상세_UI-LB-TP-C07-04 | 1920×2155 | Pattern (via 상품상세 PC) | DescriptionList, Tabs; long 상세정보 images not exported | ◐ pattern only |
| 1:87393 | 맴버쉽_로그인_UI-LB-CO-H04-01/UI-LB-CO-H04-02 | 1920×1080 | Kit: 로그인 | Input, Button, Checkbox, AlertDialog | ✅ kit |
| 1:87494 | 맴버쉽_로그인_Mo_UI-LB-CO-H04-01/UI-LB-CO-H04-02 | 390×844 | Kit: 로그인 | Input, Button, Checkbox, AlertDialog | ✅ kit |
| 1:87520 | 거래방식별_입찰거래_상품상세_상세_Mo_UI-LB-TP-C07-04 | 390×1118 | Pattern (via 상품상세 Mo) | Same components as 정가 상품상세; bid-specific fields not reproduced | ◐ pattern only |
| 1:87752 | 거래방식별_입찰거래_상품상세_상세정보_UI-LB-TP-C07-04 | 1920×21931 | Pattern (via 상품상세 PC) | DescriptionList, Tabs; long 상세정보 images not exported | ◐ pattern only |
| 1:87784 | 구매자 마이페이지_마이페이지 홈_Mo_UI-LB-TP-D01-01 | 390×2203 | Kit: 구매자 마이페이지 | SideNav, MetricCard, ProductListItem | ✅ kit |
| 1:88132 | 구매자 마이페이지_마이페이지 홈_UI-LB -TP-D01-01 | 1920×2622 | Kit: 구매자 마이페이지 | SideNav, MetricCard, ProductListItem | ✅ kit |
| 1:90864 | 입점 판매샵 목록_판매자 Shop_UI-LB-A04-02 | 1920×3588 | Pattern | ProductCard grid + DescriptionList shop info (not built as kit) | ◐ pattern only |
| 1:91465 | 입점 판매샵 목록_판매자 Shop_Mo_UI-LB-A04-02 | 391×4322 | Pattern | ProductCard grid + DescriptionList shop info (not built as kit) | ◐ pattern only |
| 1:91890 | 입점 판매샵 목록_판매자shop _이용후기_목록_No Result_UI-LB-TP-A07-01 | 1920×1295 | Kit: FAQ · 공지 · 후기 (결과없음) | EmptyState | ✅ kit |
| 1:92143 | 거래방식별_입찰거래_상품목록_상세_상품사진 확대하기_Mo_UI-LB-TP-C07-04 | 390×844 | Not reproduced | Image zoom/lightbox not built — only 2 product photos exported | ✗ gap |
| 1:92154 | 마이샵관리_게시판관리_이용후기(리뷰)_Mo_UI-LB-TP-F23-01 | 390×2119 | Kit: FAQ · 공지 · 후기 (후기) | ReviewItem, Select, Pagination | ✅ kit |
| 1:92411 | 입점 판매샵 목록_판매자shop _이용후기_목록_ No Result_MoUI-LB-TP-A07-01 | 321×844 | Unmapped | — | ✗ gap |
| 1:92506 | 입점 판매샵 목록_판매자Shop_이용후기_상세_Mo_UI-LB-TP_A07-02 | 391×1001 | Pattern | ReviewItem(mobile) | ◐ pattern only |
| 1:92553 | 메인화면_알림 아이콘 클릭 시_Mo_UI-LB-TP-B01-01 | 390×906 | Component | NotificationList (geometry 1:92553) | 🧩 component |
| 1:92625 | 통합검색_필터 적용상태_Mo_UI-LB-TP-A14-00 | 390×2460 | Kit: 검색 결과 (Mo) | ProductCard(mobile), FilterChip, Pagination(mobile) | ✅ kit |
| 1:92883 | 통합검색_필터 미적용 상태(default)_Mo_UI-LB-TP-A14-00 | 390×2402 | Kit: 검색 결과 (Mo) | ProductCard(mobile), FilterChip, Pagination(mobile) | ✅ kit |
| 1:93119 | 통합검색_필터_Mo_UI-LB-TP-A14-00 | 390×845 | Kit: 검색 결과 (Mo, filter overlay) | FilterPanel(mobile) | ✅ kit |
| 1:93205 | 모바일 메뉴_Mo_UI-LB-TP-B01-01 | 390×845 | Component | MobileMenu (geometry 1:93205) | 🧩 component |
| 1:93319 | 휴면 계정 안내_Mo_UI-LB-TP-B02-03 | 391×604 | Component + Kit: 로그인 | AlertDialog (source geometry 1:103625) | 🧩 component |
| 1:93353 | 판매자 마이샵관리_게시판관리_공지사항_Mo_UI-F21-01 | 390×684 | Kit: FAQ · 공지 · 후기 (공지) | TableRow, Pagination, Select, Input | ✅ kit |
| 1:93451 | 구매자 마이페이지_주문관리_주문_배송내역_Mo_UI-LB-TP-D06-01 | 390×666 | Pattern | ProductListItem / TableRow + SegmentedControl (list screen not built as kit) | ◐ pattern only |
| 1:93514 | 판매자 마이샵관리_게시판관리_공지사항_UI-F21-01 | 1920×1502 | Kit: FAQ · 공지 · 후기 (공지) | TableRow, Pagination, Select, Input | ✅ kit |
| 1:93671 | 마이샵관리_게시판관리_이용후기(리뷰)_UI-TP-LB-F23-01 | 1920×1780 | Kit: FAQ · 공지 · 후기 (후기) | ReviewItem, Select, Pagination | ✅ kit |
| 1:93894 | 가격협상 상세보기_UI-LB-TP-F05-02 | 1320×1236 | Pattern | Modal + DescriptionList + Button (협상승인/거절) | ◐ pattern only |
| 1:93966 | 교환완료_UI-LB-TP-F11-04 | 1108×1012 | Pattern | AlertDialog/Modal completion (not built) | ◐ pattern only |
| 1:93985 | 비밀번호 변경 안내_UI-LB-B02-04 | 653×590 | Component | AlertDialog (variant) | 🧩 component |
| 1:94021 | 거래방식별_정가거래_상품상세_이용후_상세_UI-LB-TB-C03-03 | 1138×980 | Pattern | ReviewItem (detail variant not separately reproduced) | ◐ pattern only |
| 1:94060 | 한도관리_한도약정관리_UI-IN-CL-E01-01 | 1896×460 | Pattern | DescriptionList/TableRow (not built) | ◐ pattern only |
| 1:94102 | 구매자 마이페이지_거래관리_역경매거래_상세(진행중,입찰취소)_UI-LB-TP-D04-04 | 1784×901 | Pattern | DescriptionList + Button actions (detail screen not built) | ◐ pattern only |
| 1:94171 | 구매자 마이페이지_거래관리_입찰거래_상세_UI-LB-TP-D03-02 | 1784×901 | Pattern | DescriptionList + Button actions (detail screen not built) | ◐ pattern only |
| 1:94233 | 판매자 마이샵관리_거래관리_정가거래_상세_UI-LB-TP-F05-02 | 1110×290 | Kit: 판매자 마이샵 (상세 modal) | DescriptionList, Button (geometry 1:94233) | ✅ kit |
| 1:94245 | 구매자 마이페이지_거래관리_발주거래_등록_UI-LB-TP-D05-02 | 1158×358 | Pattern | DescriptionList + DateField date/time (geometry 1:94245) | ◐ pattern only |
| 1:94277 | 입점 판매샵 목록_UI-LB-TP-A04-01 | 1724×544 | Pattern | Shop list cards (not built) | ◐ pattern only |
| 1:94381 | 구매자 마이페이지_거래관리_발주거래_목록_UI-LB-TP-D05-01 | 1862×508 | Pattern | TableRow list (not built) | ◐ pattern only |
| 1:94403 | 판매자 마이샵관리_상품관리_정가상품등록_목록_UI-LB-TP-F03-01 | 1808×805 | Pattern | TableRow + Checkbox + Button (not built) | ◐ pattern only |
| 1:94517 | 판매자 마이샵관리_거래관리_정가거래_목록_UI-LB-TP-F05-01  | 1372×808 | Kit: 판매자 마이샵 (목록) | TableRow, Badge, Pagination | ✅ kit |
| 1:104312 | 거래방식별_정가거래_주문_결제_완료_UI-LB-TP-C05-03 | 1920×1784 | Kit: 주문 완료 | Stepper, DescriptionList, Button, Icon(check) | ✅ kit |
| 1:104518 | 거래방식별_정가거래_주문_결제_완료_Mo_UI-LB-TP-C05-03 | 390×904 | Kit: 주문 완료 | Stepper, DescriptionList, Button, Icon(check) | ✅ kit |
| 1:104584 | 장바구니_정가거래(상품이 없을 경우)_UI-LB-TP-C06-01 | 1920×1295 | Kit: 장바구니 (없음) | EmptyState, Stepper | ✅ kit |
| 1:104690 | 구매자 마이페이지_주문관리_주문_배송내역_UI-LB-TP-D06-01 | 1920×2168 | Pattern | ProductListItem / TableRow + SegmentedControl (list screen not built as kit) | ◐ pattern only |
| 1:105292 | 구매자 마이페이지_주문관리_주문_배송내역(데이터 없는 경우)UI-LB-TP-D06-01 | 1920×1633 | Pattern | EmptyState within mypage | ◐ pattern only |
| 1:105535 | 구매자 마이페이지_주문관리_주문_배송내역(데이터 없는 경우)_Mo_UI-LB-TP-D06-01 | 390×844 | Pattern | EmptyState within mypage | ◐ pattern only |
| 1:105606 | 심사안내_UI-LB-TP-B02-02 | 602×552 | Component | AlertDialog (variant) | 🧩 component |
| 1:105628 | Frame 105 | 804×370 | Not reproduced | Unnamed working frame | ✗ gap |
| 1:105665 | 로그인 후(핀메자화면) | 1920×5082 | Not reproduced | Main/home landing pages (4.3k–6.2k px, banners/photos not exported) | ✗ gap |
| 1:106436 | Frame 108 | 36×110 | Not reproduced | Unnamed working frame | ✗ gap |
| 1:106437 | Frame 109 | 1488×432 | Not reproduced | Unnamed working frame | ✗ gap |
| 1:85780 | 거래방식별_정가거래_주문_결제_UI-LB-TP-C05-01 | 1920×2191 | Kit: 주문·결제 | Stepper, CartItem, OrderSummary, Radio, BottomActionBar | ✅ kit |
| 1:87329 | 이용후기 등록_UI-LB-TP-C03-02 | 1008×1286 | Pattern | Rating(input), Textarea (geometry 1:87378), FileUpload | ◐ pattern only |
| 1:87434 | 이용후기 등록_Mo_UI-LB-TP-C03-02 | 391×1210 | Pattern | Rating(input), Textarea (geometry 1:87378), FileUpload | ◐ pattern only |
| 1:94265 | 부류별_과실류_상품목록(목록형)_UI-LB-TP-C01-01  | 1246×294 | Component | ProductListItem (desktop) | 🧩 component |
| 1:86729 | 거래방식별_정가거래_상품상세_기본정보_품종 시세동향보기_테이블_UI-LB-TP-C01-04 | 1920×2155 | Kit: 상품상세 (시세동향 modal) | PriceTrend (example data), Modal | ✅ kit |
| 1:90749 | 거래방식별_정가거래_상품상세_기본정보_품종 시세동향보기_테이블_Mo_UI-LB-TP-C01-04 | 390×1142 | Kit: 상품상세 (시세동향 modal) | PriceTrend (example data), Modal | ✅ kit |
| 1:86445 | 거래방식별_정가거래_상품상세_기본정보_품종 시세동향보기_그래프_UI-LB-TP-C01-04 | 1920×2155 | Kit: 상품상세 (시세동향 modal) | PriceTrend (example data), Modal | ✅ kit |
| 1251:1314 | 거래방식별_정가거래_상품상세_기본정보_품종 시세동향보기_그래프_UI-LB-TP-C01-04 | 1920×2155 | Kit: 상품상세 (시세동향 modal) | PriceTrend (example data), Modal | ✅ kit |
| 1:86964 | 거래방식별_정가거래_상품상세_기본정보_상품사진 확대하기_UI-LB-TP-C01-04 | 1920×2155 | Not reproduced | Image zoom/lightbox not built — only 2 product photos exported | ✗ gap |
| 1:92479 | 거래방식별_정가거래_상품상세_기본정보_가격정보_장바구니 팝업_Mo_UI-LB-TP-C01-04 | 572×400 | Pattern | AlertDialog / Modal (confirm) — exact popup not reproduced | ◐ pattern only |
| 1:88758 | 판매자 마이샵 관리_마이샵 홈_Mo_UI-LB-TP-F01-00 | 390×2305 | Kit: 판매자 마이샵 | SideNav(seller), MetricCard, DescriptionList, TableRow | ✅ kit |
| 1:89065 | 판매자 마이샵 관리_마이샵 홈_UI-LB-TP-F01-00 | 1920×2622 | Kit: 판매자 마이샵 | SideNav(seller), MetricCard, DescriptionList, TableRow | ✅ kit |
| 1:89639 | 판매자 회원가입_기본정보입력_Mo_UI-LB-CO-H03-02 | 390×3108 | Kit: 판매자 회원가입 | FormField, Input, Select, FileUpload, ProgressSteps | ✅ kit |
| 1:89853 | 판매자 회원가입_기본정보입력_UI-LB-CO-H03-02 | 1920×3241 | Kit: 판매자 회원가입 | FormField, Input, Select, FileUpload, ProgressSteps | ✅ kit |
| 1:90144 | 맴버쉽_공동인증서 등록_UI-LB-CO-H07-00 | 1920×1080 | Not reproduced | Certificate registration flow (external module) | ✗ gap |
| 1:90168 | 판매자 회원가입_회원가입완료_UI-LB-CO-H03-09 | 1920×1080 | Kit: 판매자 회원가입 (완료) | ProgressSteps, Icon, Button | ✅ kit |
| 1:90204 | 상품 비교하기_UI-LB-TP_A14-03 | 1046×896 | Component | CompareTable inside Modal | 🧩 component |
| 1:90254 | 고객센터_FAQ_목록_UI-LB-TP-A12-01 | 1920×1784 | Kit: FAQ · 공지 · 후기 (FAQ) | SideNav, Tab, Accordion, Pagination | ✅ kit |
| 1:90520 | 멤버쉽_회원가입_UI-LB-CO-H01-01 | 1920×1080 | Not reproduced | 가입안내 (구매자/판매자 선택 + 서비스 소개) — structure known, screen not built | ✗ gap |
| 1:90685 | 멤버쉽_회원가입_Mo_UI-LB-CO-H01-01 | 390×861 | Not reproduced | 가입안내 (구매자/판매자 선택 + 서비스 소개) — structure known, screen not built | ✗ gap |
| 1:94576 | 판매자_거래(딸기)_등록페이지 | 1920×8166 | Not reproduced | Very long seller registration forms (7.8k–8.2k px); FormField/Select/FileUpload/DateField cover the controls | ✗ gap |
| 1:95166 | 판매자_거래(배추)_등록페이지 | 1920×7991 | Not reproduced | Very long seller registration forms (7.8k–8.2k px); FormField/Select/FileUpload/DateField cover the controls | ✗ gap |
| 1:95759 | 판매자_거래(버섯)_등록페이지 | 1920×7984 | Not reproduced | Very long seller registration forms (7.8k–8.2k px); FormField/Select/FileUpload/DateField cover the controls | ✗ gap |
| 1:96353 | 판매자_거래(딸기)_등록페이지 | 1920×7847 | Not reproduced | Very long seller registration forms (7.8k–8.2k px); FormField/Select/FileUpload/DateField cover the controls | ✗ gap |
| 1:96981 | 거래방식별_입찰거래_상품목록_상세정보_UI-LB-TP-C07-04 | 1920×5686 | Pattern (via 상품상세 PC) | DescriptionList, Tabs; long 상세정보 images not exported | ◐ pattern only |
| 1251:729 | 거래방식별_입찰거래_상품목록_상세정보_UI-LB-TP-C07-04 | 1920×5686 | Pattern (via 상품상세 PC) | DescriptionList, Tabs; long 상세정보 images not exported | ◐ pattern only |
| 1:97566 | 통합검색_테이블_UI-LB-TP-A14-00 | 1920×2844 | Kit: 검색 결과 (PC, table) | FilterPanel, ProductTable, Select, SegmentedControl, Pagination, Header, Footer | ✅ kit |
| 1:98118 | 통합검색_카드리스트_UI-LB-TP-A14-00 | 1920×3320 | Kit: 검색 결과 (PC, card) | FilterPanel, ProductCard, Pagination | ✅ kit |
| 1:98635 | 통합검색_카드_UI-LB-TP-A14-00 | 1920×2877 | Kit: 검색 결과 (PC, card) | FilterPanel, ProductCard, Pagination | ✅ kit |
| 1:99237 | 로그인 후(구매자, 배너O)_-UI-LB-TP-B01 | 1920×6244 | Not reproduced | Main/home landing pages (4.3k–6.2k px, banners/photos not exported) | ✗ gap |
| 1:100887 | 메인 (구매자)_로그인 후_UI-LB-TP-B01 | 1920×5741 | Not reproduced | Main/home landing pages (4.3k–6.2k px, banners/photos not exported) | ✗ gap |
| 1:101811 | 메인_로그인전_UI-LB-TP-B01 | 1920×4317 | Not reproduced | Main/home landing pages (4.3k–6.2k px, banners/photos not exported) | ✗ gap |
| 1:102483 | 거래방식별_입찰거래_상품목록_상세_구매후기_UI-LB-TP-C07-04 | 1920×3237 | Kit: 상품상세 (구매후기 tab) | ReviewItem, Rating, Pagination | ✅ kit |
| 1:102797 | 거래방식별_입찰거래_상품목록_상세_상품문의_UI-LB-TP-C07-04 | 1920×2939 | Kit: 상품상세 (tab placeholder) | Tabs present; body content not supplied → EmptyState placeholder | ◐ pattern only |
| 1:103041 | 거래방식별_입찰거래_상품목록_상세_배송_반품_교환정보_UI-LB-TP-C07-04 | 1920×3525 | Kit: 상품상세 (tab placeholder) | Tabs present; body content not supplied → EmptyState placeholder | ◐ pattern only |
| 1:103267 | 거래방식별_입찰거래_상품목록_상세_Mo_UI-LB-TP-C07-04 | 391×3128 | Pattern (via 상품상세 Mo) | Same components as 정가 상품상세; bid-specific fields not reproduced | ◐ pattern only |
| 1:103625 | 휴면 계정 안내_UI-LB-TP-B02-03 | 640×775 | Component + Kit: 로그인 | AlertDialog (source geometry 1:103625) | 🧩 component |
| 1:103657 | 장바구니_정가거래(상품이 담긴 경우)_UI-LB-TP-C06-01 | 1920×2005 | Kit: 장바구니 | CartItem, OrderSummary, Checkbox, Stepper | ✅ kit |
| 1:103945 | 장바구니_정가거래(상품이 담긴 경우)_Mo_UI-LB-TP-C06-01 | 390×1806 | Kit: 장바구니 | CartItem, OrderSummary, Checkbox, Stepper | ✅ kit |
| 1:104139 | 거래방식별_정가거래_주문_결제_Mo_UI-LB-TP-C05-01 | 390×1988 | Kit: 주문·결제 | Stepper, CartItem, OrderSummary, Radio, BottomActionBar | ✅ kit |

## Evidence levels
- Geometry-verified (kosaf-expanded-geometry.json, 18 patterns): header, Footer, List_Card_02, Card_01 ×2, 발주거래 등록, 휴면 계정 안내, 정가거래 상세, 로그인, 통합검색 필터 Mo, Step_Navi, 알림, Input(textarea), 모바일 메뉴, Drop down ×2, LNB, 첨부파일.
- Capture-only (PNG): 통합검색 table/card, 판매자 회원가입, 마이페이지 Mo, 주문/결제 Mo, 모바일 메뉴, 필터 Mo.
- Text/structure-only: remaining frames (names, sizes, copy, group structure).

Screenshot-only screens are **not** counted as completed components.
