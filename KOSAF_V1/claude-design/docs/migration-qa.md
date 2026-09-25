# KOSAF_V1 — Migration & web QA

Figma migration: 2026-09-25, status **completed-with-preserved-exceptions** (full report: `docs/source/migration-status.md`, machine QA: `docs/source/migration-qa.json`).

## Figma migration figures
- Management descendants scanned: 16,787 (398 + 808 + 15,581). Modified 5,115 · created 54 · deleted 0.
- Variables 81 (65 kept + 16 added) · text styles 69 (9 + 60) · Button instance replacements 25.
- Broken aliases 0 · ALL_SCOPES variables 0 · duplicate names 0 · Core Components unbound paints 0.

| Area | Descendants | Texts | Font-governed | Styled | Unclassified paints |
|---|---:|---:|---:|---:|---:|
| Common_최종 양식 | 414 | 184 | 184 | 98 | 25 |
| Common_진행중 | 842 | 299 | 299 | 273 | 40 |
| Interaction | 15,581 | 2,395 | 2,355 | 1,976 | 767 |
| Core Components | 82 | 35 | 35 | 35 | 0 |

## Preserved exceptions (documented, not resolved)
1. **832 unclassified raw-colour nodes** — not recoloured; IDs in migration-qa.json `rawPaintNodes`/`rawColors`.
2. **Brand text 40** — S-Core Dream 34 (missing font in tool) + Poppins 6. Logo type not substituted. New UI uses Noto Sans KR.
3. Illustrations/photos/icons/data colours untouched.
4. Only 25 Button samples are instances; Toggle/Spinner are samples, not KOSAF families.
5. Danger Focus, Pressed, Input Success, full keyboard interactions — **not in source, not built**.
6. Small source controls (23px pagination, 30px spinner, 20px selection) preserved; touch-area not guaranteed.
7. 판매정보_02 `1:69878` returned a 1×1 render — not visually verified.

## Web reconciliation against `kosaf-component-geometry.json` (218:570, 82 nodes)
| Component | Figma geometry | Web implementation |
|---|---|---|
| Button | 164×45, r5, sw1, Medium 16. Hover keeps base stroke (#059B00 / #E23736). Disabled #EAEAEA/#DDDDDD/#A0A0A0. Focus sw2 #0047ED | Matches; default `size=45`. 34/42/50/70 heights are documented rules only (label 14 at 34 is a web choice). Label centred (master text x is not centred — layout NONE) |
| Input | 287×45, r5, inset 14, Regular 14 #707070 placeholder; Focus sw2; Error sw1 #E23736; Disabled #F7F7F7 | Matches; adds error message text (state rule) |
| Search | 579×50, r25, white, sw2 #059B00, text x=24, Regular 14 #707070 | Matches; focus switches stroke to #0047ED (web) |
| Checkbox | 20×20 r3; stroke #C1C1C1 (also on Checked); ✓ glyph Bold 14 white; Focus sw2; Disabled #EAEAEA | Matches (uses ✓ text glyph like source) |
| Radio | 20×20 r10; #C1C1C1; Checked = ring + 10px #059B00 dot; Focus sw2; Disabled stroke #D9D9D9 | Matches |
| Tab | 124×44 r5, Medium 16; Selected #059B00 fill+stroke, white | Matches; no hover (none in source) |
| Badge | 88×30 r15, #EBFFE9, Medium 14 #059B00, x=18 | Matches (content width) |
| PaginationItem | 42×42 r5, Medium 14, #DDDDDD stroke all states; Hover #F7F7F7; Selected #059B00; Disabled text #A0A0A0 | Matches |
| TableRow | Desktop 1500×70 r0, Regular 16 x=24 · Mobile 350×50, Regular 14 x=16 | Matches; `header`/`selected`/`columns` are web additions |
| Modal | 706×630 r10 #DDDDDD; title Bold 22 at (30,28); divider 646×1 at y=82 | Matches; body padding, footer, backdrop are web additions |
| Stepper | 645×50: 3×205×50 r5, gap 15; inactive #F7F7F7/#707070, current #059B00/#FFF, Medium 14 x=24 | Matches |

### Source exception — Disabled fill
Measured geometry: Button/Checkbox Disabled fill #EAEAEA (`gray/100`). Semantic token `color/surface/disabled` = #D9D9D9 (`gray/250`), used here only for the Radio Disabled stroke (measured #D9D9D9). Web keeps the measured values; the mismatch is recorded as an explicit exception and **not unified**.

### Typography rule
Canonical for new UI: Noto Sans KR 400/500/700 + 9 styles. Separate exception: 60 `KOSAF/Source/*` preservation styles.

### Contrast
White text: Primary 3.69:1, Hover 2.98:1, Positive 2.44:1, Danger 4.35:1. Reported values only — not an accessibility-conformance judgement.

## Web verification (1.2.0, 2026-09-25)
- check_design_system: 0 issues; 46 components with .d.ts/.prompt.md and one card each.
- Pre-compile harness render (source transpiled in-browser, not the published bundle): Search results PC, Product detail PC, Cart PC rendered without runtime errors; header/table widths measured at 1920 (no overflow).
- **Not yet verified:** the published `_ds_bundle.js` build of the 35 new components (compiles after the generation turn), all 46 component cards, and the remaining 7 PC + 11 mobile kit pages. Treat these as unverified until checked in the browser.
- No accessibility audit beyond native semantics + keyboard handlers.
