# KOSAF_V1 · Project Design System

KOSAF_V1 is the standalone design system for **농산물 온라인 도매시장** (an online agricultural-produce wholesale market). It is a public / enterprise B2B commerce service: buyers and sellers search products, compare lots in dense tables, negotiate prices, bid (입찰거래) or buy at fixed price (정가거래), and go through cart → checkout → completion. Light mode only. Base font Noto Sans KR. Primary #059B00.

This system is independent. It reuses only the *management structure* of IAK Design Studio (Foundation → Semantic Token → Component → State → Pattern → Template). No visuals from Agri Market, IAK or IAK GameofMind (dark/orange) are used.

## Sources (2026-09-25 verified export)
- **Source of Truth** — final revision: https://www.figma.com/design/MOEAkEbXtwHdE3xveg2Gto/?node-id=1-85779 (`2023-07-21_화면 Screen ID_진행중`)
- **Management system**: https://www.figma.com/design/SZ7AweGiHxzEDmEmuNi3LY/?node-id=218-570 (Core Components 218:570, Foundations 217:570; sections 1:69548, 1:69947, 1:70749, 1:107843, 213:712)
- **GitHub**: https://github.com/sugun8119-ops/iak-design-system/tree/main/KOSAF_V1 — commit `e384bfa`
- Attached exports (copied to `docs/source/`): `figma-inventory.json` (81 variables, 69 text styles, 11 components + node IDs), `kosaf-component-geometry.json` (82 nodes of 218:570: size, radius, fill, stroke, font), `figma-system.json`, `source-map.json`, `migration-status.md`, `migration-qa.json`, `claude-system.md`.
- Reference captures (`assets/reference/`): Core Components board, Button Status, Desktop Headlines, mobile 상품상세 (1:85416). These are for visual cross-checking only.

Direct Figma access was not used; the exports above are the ground truth. Where an export and a capture disagree, the export wins.

## Index
- `styles.css` — global entry; `@import`s only
- `tokens/` — `fonts.css`, `colors.css` (81 Figma vars incl. layout in spacing/layout), `typography.css`, `typography-source.css`, `spacing.css`, `layout.css`, `source-extended.css` (observed raw colours, not Figma vars), `base.css`
- `components/<name>/` — 46 React components, one folder each: `.jsx|.tsx` + `.d.ts` + `.prompt.md` + its own `@dsCard` (use, source node, props, states, PC/Mobile examples)
- `guidelines/docs/` — **Start here** cards: 01 시작 가이드, 02 카테고리 인덱스, 03 상태 매트릭스, 04 레이아웃 가이드, 05 QA, 06 AI 생성 가이드, 07 변경 이력
- `guidelines/` — foundation specimen cards; `card-kit.js` (card chrome)
- `ui_kits/` — 10 product UI kits × PC 1920 (`index*.html`) + Mobile 390 (`mobile*.html`), plus `core-components/` board 218:570; see `ui_kits/README.md`
- `docs/source-coverage.md` (all 91 frames mapped), `docs/source-map.md`, `docs/migration-qa.md`, `docs/changelog.md`, `docs/source/` (raw exports)
- `assets/` — `icons/` (11 source SVGs), `brand/` (logo 1:86099), `products/` (1:91190, 1:91522), `reference/` captures; provenance in `assets/README.md`
- `SKILL.md` — Agent Skill entry

## Components
46 components. Provenance: **master** = Figma component in 218:570 · **source** = derived from 1:85779 frames/geometry/captures (not a Figma master) · **ext** = KOSAF extension (behaviour/styling defined here).

**Actions** — Button (master 218:590) · Badge (master 218:621) · Icon (source, 11 SVG) · FilterChip (source) · BottomActionBar (source)
**Forms** — Input (master 218:600) · Search (master 218:601) · Checkbox (master 218:608) · Radio (master 218:614) · Select (source 1:98823/1:98859) · Textarea (source 1:87378) · FormField (source 1:89853) · FileUpload (source 1:89966) · DateField (source; native picker) · DateRange (source) · QuantityStepper (source Spinner) · SegmentedControl (ext, 기간 Toggle)
**Navigation** — Tab (master 218:620) · PaginationItem (master 218:631) · Pagination (source) · Stepper (master 218:642) · ProgressSteps (source 1:90125) · Breadcrumb (ext) · SideNav (source 1:90423) · Header (source 1:86081) · Footer (source 1:86051) · MobileHeader (source) · MobileMenu (source 1:93205)
**Data Display** — TableRow (master 218:637) · ProductTable (source 1:97566) · DescriptionList (source 1:94245) · MetricCard (source 1:87886, = SmallDataCard) · CompareTable (source 1:90204) · PriceTrend (source frame 1:86445; example data) · Rating (ext, ★ glyph) · Accordion (source 1:90254)
**Commerce** — ProductCard (source 1:91180 / 1:91517) · ProductListItem (source) · CartItem (source) · OrderSummary (source) · ReviewItem (source) · FilterPanel (source 1:97566 / 1:93119)
**Feedback & Overlay** — Modal (master 218:639) · AlertDialog (source 1:103625) · EmptyState (source copy) · NotificationList (source 1:92553)

Helper exports (not separate families): `IconRegistry`, `DealBadge` (ProductCard), `CloseX` (CSS close mark), default data constants.

**Still not built:** custom Calendar popover (DateField uses the native picker — unverified range), image zoom/lightbox, 가입안내, 공동인증서, main/home pages, the 7.8k-px 판매자 거래 등록 forms (controls exist). The earlier "11 only" limit was lifted by the 2026-09-25 expansion request.

**Intentional web additions**: `state` prop to force states in specs; Input error line; TableRow `header`/`selected`/`columns`; Modal footer/backdrop; Search `leading`; keyboard handling everywhere (listbox, radiogroup, accordion arrows, Esc on overlays, AlertDialog focus trap).

## CONTENT FUNDAMENTALS
- **Language**: Korean first. English only in system labels (Button, Disabled) and units.
- **Tone**: plain, administrative, transactional — a public wholesale service, not a lifestyle brand. No exclamation in UI chrome; exclamation appears only in user-generated review text ("싱싱하고 맛있는 사과!!").
- **Voice**: impersonal, polite imperative for prompts: "입력값을 입력하세요", "검색어를 입력하세요". Neither "I" nor "you"; the service never talks about itself.
- **Labels are nouns**, short and domain-precise: 품목, 품종, 거래단위, 거래수량(잔여수량), 최소구매수량, 운임, 배송가능지역, 배송출발일, 보증금설정. Actions are 2–4 syllable verbs/nouns: 구매하기, 가격협상, 수정, 입찰거래, 정가거래.
- **Numbers**: comma thousands + 원 (190,000원); units glued (15kg, 300개, 5%); dates ISO `2023-03-23`; ranges with `~` (58~62개). Product names use slashes: 양파/태극황/15Kg망.
- **Steps** are zero-padded: 01 장바구니 · 02 주문/결제 · 03 주문완료.
- **Masking**: user IDs partially masked (abc***).
- **Emoji**: never. Unicode: only the "✓" glyph inside Checkbox (as in source) and "·" as a separator ("상품명 · 상태").

## VISUAL FOUNDATIONS
- **Colour**: one brand hue — green #059B00 for primary actions, selected states and current step; #02AC5A is its *hover* (lighter, slightly teal). #17BF56 positive, #EBFFE9 / #D5FFBA soft fills. Everything else is neutral grey (text #333 / #707070 / #888, strokes #DDDDDD / #C1C1C1, subtle fill #F7F7F7, disabled #EAEAEA). Focus is always blue #0047ED; danger red #E23736 → hover #FF5858. Info-soft lavender #F4EBFF and warning yellow #FFE326 exist as tokens but are rarely used.
- **Type**: **Canonical rule for new UI** — Noto Sans KR 400/500/700 with the 9 canonical styles. The 60 `KOSAF/Source/*` styles (sizes/line-heights/−0.4px tracking from the final source) are a **separate preservation exception** for keeping existing screens from reflowing, not part of the canonical rule. Canonical ladder Display 40/52 B, H1 30/40 B, H2 24/34 B, H3 22/34 M, Title 20/30 M, Body 18/30 · 16/24 · 14/20, Caption 12/16. Letter-spacing 0 (source styles sometimes −0.4px). Control labels are Medium 14–16.
- **Spacing**: 4 / 8 / 10 / 12 / 16 / 20 / 24 / 30 / 32 / 40 / 50 / 60. Section rhythm 20 / 30 / 50. Measured in 218:570: controls inset 14–24, tab gap 16, pagination gap 12, stepper gap 15, modal inset 30.
- **Layout**: separate explicit desktop (1920) and mobile (390–391) designs — never scale one into the other. Desktop keeps wide tables (1500px rows) and multi-column work areas; mobile collapses to stacked 50px rows and a fixed bottom action bar with two equal buttons (가격협상 / 구매하기).
- **Sizes**: Button 34/42/45/50/70 (master 164×45), Input 287×45, Search 579×50, Tab 124×44, Pagination 42×42, TableRow 70/50, Stepper blocks 205×50, Modal 706×630.
- **Corners**: small and consistent — 5px for buttons, inputs, tabs, pagination, stepper; 3px checkbox; 10px modal; 15px badge (pill); 25px search (pill). Table rows are square.
- **Borders**: 1px #DDDDDD everywhere; 2px only for focus (#0047ED) and the Search outline (#059B00). Hover never changes stroke colour (Primary hover keeps #059B00 stroke).
- **Shadows**: none in the source components. Separation is by 1px stroke and #F7F7F7 fills, never elevation.
- **Backgrounds**: flat white canvas; #F7F7F7 for subtle panels and table headers. No gradients, patterns, textures or blur. Imagery is real product photography (produce on white or natural backgrounds, saturated, warm) — used full-width on mobile detail pages; not supplied here.
- **Cards**: none as a component. Content grouping = bordered table rows or #F7F7F7 blocks.
- **Hover**: fill shifts only — green → lighter green, white → #F7F7F7, red → #FF5858. **Press**: no pressed state in source. **Focus**: 2px blue stroke. **Disabled**: grey fill + #A0A0A0 text; never opacity alone.
- **Selected**: fill change *and* text colour/weight change (Tab, PaginationItem, Stepper) — never colour-only.
- **Motion**: none specified. Web components use a 150ms colour transition only; no bounces, slides or fades.
- **Transparency**: none except the web modal backdrop.
- **Contrast (source values, computed)**: white on #059B00 3.69:1 · on #02AC5A 2.98:1 · on #17BF56 2.44:1 · on #E23736 4.35:1. These are the original colours reported as-is; this system makes **no accessibility-conformance judgement**.

## ICONOGRAPHY
- **11 source SVGs** exported verbatim from 1:85779 (`kosaf-source-icons.json`), stored as `assets/icons/<name>__<figma-id>.svg` and exposed via `<Icon name>` + `IconRegistry` (ids preserved): analytics 1:88929 · search 1:86084 · check 1:88348 (white) · shopping-bag 1:88810 (white fill) · heart 1:91526 (#FF5858) · navigate 1:90282 (points left; rotate for next/chevrons) · purchase 1:88868 · bell 1:86136 · time-history 1:87530 · document-edit 1:88822 · cart 1:91528.
- Colours are baked into the source SVG and preserved; components only apply rotation or a CSS filter (e.g. white-on-green in MetricCard, grey for un-liked heart).
- **Not exported → not drawn:** star, close ×, hamburger, shop, person, trade, calendar, list/grid view, social icons. Substitutes: ★ text glyph (Rating), CSS bars/× (MobileHeader, CloseX), dashed empty slots (MobileMenu quick menu), text labels (view toggle).
- Unicode used: ✓ (Checkbox, as in 218:605), · separator, ▼/▾ menu carets (Polygon 18×18 in header), − / +, ~. Emoji: never.

## Brand & logo
- **Logo wordmark** 1:86099 supplied as 2× transparent PNG (`assets/brand/logo-wordmark__1-86099@2x.png`, native 292×33, "농산물 온라인 도매시장" set in S-Core Dream ExtraBold). Use at 292×33 (Header) or proportionally; never recolour, stretch or re-typeset. The Footer keeps its source #888 text version.
- **Product images** 1:91190 (desktop 278) and 1:91522 (mobile 155) are the only photos; everything else is a placeholder slot. Not a full brand kit or photo export.
- S-Core Dream (34 missing-font nodes) and Poppins (6) remain Figma-only; not shipped.

## Preserved exceptions
- **Observed raw colours** used by source-derived components live in `tokens/source-extended.css` (footer #202020, login bg #F1F3F8, panels #F5F5F5, etc.) — they are part of the unclassified set, not Figma variables.
- **Disabled fill**: measured Figma value is #EAEAEA (`gray/100`) for Button and Checkbox Disabled; the semantic token `color/surface/disabled` resolves to #D9D9D9 (`gray/250`). Components keep the measured #EAEAEA. The difference is an explicit source exception and has not been unified.
- **Typography**: 60 `KOSAF/Source/*` styles are preserved separately from the canonical 400/500/700 × 9-style rule.
832 unclassified raw-colour nodes, 34 missing S-Core Dream nodes, 40 brand-text nodes, legacy 23px pagination / 30px spinner / 20px selection controls — documented in `docs/migration-qa.md`, not auto-resolved.

## Fonts
Noto Sans KR 400/500/700 is loaded from Google Fonts (`tokens/fonts.css`); no binaries were provided. It is the same family bound in Figma (`typography/font-family`).
