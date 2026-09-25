# KOSAF_V1 — Source map

Every web artifact in this design system traces to a Figma node. Raw exports live in `docs/source/`.

## Files
- Source of Truth (final revision): https://www.figma.com/design/MOEAkEbXtwHdE3xveg2Gto/?node-id=1-85779 — `2023-07-21_화면 Screen ID_진행중`, 21,768 descendants scanned, not mutated.
- Management system: https://www.figma.com/design/SZ7AweGiHxzEDmEmuNi3LY/?node-id=218-570 — `KOSAF_V1 / Core Components` (218:570), `KOSAF_V1 / Foundations` (217:570).
- Management sections: Common_최종 양식 `1:69548`, Common_진행중 `1:69947`, Interaction `1:70749`; untouched references `1:107843` (Main), `213:712` (Data).
- GitHub: https://github.com/sugun8119-ops/iak-design-system/tree/main/KOSAF_V1 (commit `e384bfa`, 2026-09-25).

## Tokens → Figma variables (81)
| Web file | Figma collection | Count |
|---|---|---|
| `tokens/colors.css` (primitives) | KOSAF/Primitives `216:570` | 26 |
| `tokens/colors.css` (semantic aliases) | KOSAF/Semantic `216:571` | 22 |
| `tokens/spacing.css` | KOSAF/Layout `216:572` — spacing/*, radius/* | 22 |
| `tokens/layout.css` | KOSAF/Layout — viewport/*, control/*, table/* | 10 |
| `tokens/typography.css` | KOSAF/Layout — typography/font-family `220:570` | 1 |

Each CSS line carries its `VariableID` in a comment. Naming: Figma `color/action/primary` → `--kosaf-color-action-primary` (matches the `web` field in figma-inventory.json). `tokens/layout.css` also holds 8 web-only documented rules (Button 50, Search 579/25, Modal 706×630, section gaps) that are **not** Figma variables.

## Text styles (69)
- 9 canonical (`KOSAF/Display/40` … `KOSAF/Caption`) → `tokens/typography.css`, `--kosaf-type-*` + `.kosaf-*` classes.
- 60 `KOSAF/Source/*` → `tokens/typography-source.css`, each with its source node ID. Preservation only.

## Components (11) → Figma nodes
| React export | File | Figma node | Variants in source |
|---|---|---|---|
| Button | components/actions/Button.jsx | 218:590 (set) | 11: Primary/Secondary/Danger × Default/Hover/Disabled + Primary/Secondary Focus (223:570, 223:572) |
| Search | components/actions/Search.jsx | 218:601 | 1 |
| Badge | components/actions/Badge.jsx | 218:621 | 1 |
| Input | components/forms/Input.jsx | 218:600 (set) | Default/Focus/Error/Disabled |
| Checkbox | components/forms/Checkbox.jsx | 218:608 (set) | Unchecked/Checked/Focus/Disabled |
| Radio | components/forms/Radio.jsx | 218:614 (set) | Unchecked/Checked/Focus/Disabled |
| Tab | components/navigation/Tab.jsx | 218:620 (set) | Default/Selected |
| PaginationItem | components/navigation/PaginationItem.jsx | 218:631 (set) | Default/Hover/Selected/Disabled |
| Stepper | components/navigation/Stepper.jsx | 218:642 | 1 (3 steps) |
| TableRow | components/data/TableRow.jsx | 218:637 (set) | Device=Desktop/Mobile |
| Modal | components/overlay/Modal.jsx | 218:639 | 1 |

## Not built (plannedComponents — out of scope)
Dropdown, Calendar, Header, Footer, ProductCard, SmallDataCard. Patterns (TransactionStepper, ProductSearch, DesktopDataTable, MobileDataList, ProductDetail, AuthenticationForm, BuyerDashboard, SellerDashboard, ModalWorkflow) are screen references, not component families.

## Reference captures (`assets/reference/`)
- `core-components-218-570.png` — management board 218:570
- `button-status.png` — Button Status guide
- `desktop-headlines.png` — Typography guide
- `mobile-product-detail-1-85416.png` — mobile 상품상세 screen (final source 1:85416)
