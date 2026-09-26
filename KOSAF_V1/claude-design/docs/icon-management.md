# KOSAF_V1 · Icon management (1.5.0)

## Model
| Layer | Count | Where | Colour | Provenance |
|---|---|---|---|---|
| Source | 11 | `assets/icons/*.svg`, `components/icon/icons.data.js` | baked, verbatim | Figma MOEAkEbXtwHdE3xveg2Gto 1:85779 (ids preserved) |
| KOSAF extension | 23 | `components/icon/icons.ui.js` | currentColor / tone | authored 1.5.0 — **not** extracted from Figma |
| Aliases | see manifest | `KOSAF_ICON_ALIASES` | — | duplicate / legacy names |

Catalogue: `components/icon/icons.manifest.json` (name, 한국어 label, category, provenance, nativeSize/viewBox, colorPolicy, allowedSizes, aliases, status, usage).

## API (backward compatible)
- `<Icon name size title rotate style>` — unchanged 1.0–1.4 behaviour for the 11 source names.
- New: `mode` = `source` (default) | `ui`; `tone` (extension only) = current · primary · secondary · muted · disabled · brand · positive · danger · focus · inverse; `filled` (star, heart-outline); `strokeWidth` 1.75–2.
- Extension sizes 16 / 20 / 24 / 32 (other sizes render + console.warn).
- Unknown name → dashed red "?" box (`data-icon-missing`) + one `console.warn`. Previously returned `null` silently.
- Decorative by default (`aria-hidden`); `title` → `role="img"` + `aria-label`.
- New helpers: `UIIconRegistry`, `IconAliases`, `IconTones`, `resolveIcon`.

## IconButton (new family, KOSAF extension)
Required `label`; hit area desktop ≥36 / mobile ≥44; icon 16/20/24; states default · hover #F7F7F7 · focus 2px #0047ED · pressed #EAEAEA · selected brand green · disabled (#A0A0A0, click blocked, native disabled); `toggle` → `aria-pressed`.

## Rules
1. Never edit, recolour or CSS-`filter` a source SVG. White source glyphs (check, shopping-bag, purchase, document-edit) only on green/filled grounds.
2. No text glyphs (× − ★ ▾) or CSS-drawn bars as icons.
3. Icon-only controls → IconButton with a Korean label (or an existing component's labelled button).
4. Expand hit areas only where the surrounding layout is safe; small source controls (Checkbox 20, PaginationItem 42) are preserved.
5. No brand/social icons without a supplied source file.

## Adding / deprecating
- Add: 24 grid, 2px round cap/join, single-colour paths → `icons.ui.js` + manifest entry + changelog line. Check the name is not already a source name or alias.
- Deprecate: `status: "deprecated"` + alias to the replacement for ≥1 minor version.

## Migration (1.5.0)
| Component | Before | After |
|---|---|---|
| MobileHeader | CSS 3-bar menu | `Icon menu` |
| MobileMenu | CloseX CSS; quick slots dashed placeholders (5/6) | `Icon close`; home/store/list/heart-outline/help/user |
| CloseX (export) | CSS × | deprecated wrapper → `Icon close` |
| CartItem · NotificationList · FilterPanel | CloseX | `Icon close` |
| FileUpload | "×" text in 16px dot | `Icon close` in 16px dot, 24px hit area |
| FilterChip remove | "×" text | `Icon close` 16 |
| QuantityStepper | "−" / "+" text | `Icon minus/plus` 16 (sm) / 20 (lg) |
| Rating | "★" text glyph | extension star path, half fill via clip, keyboard unchanged |
| Header scope | "거래방식 ▾" | `Icon chevron-down` 16 |
| Select | source navigate rotated | `Icon chevron-down/up` 20 |
| FilterPanel close bar | navigate + CSS invert filter | `Icon chevron-up tone=inverse` |
| ProductCard · ProductTable · BottomActionBar (like) | heart + grayscale/brightness filter | liked = source heart; unliked = `heart-outline tone=muted` |
| BottomActionBar cart | shopping-bag + brightness(0) filter | source `cart` (black, as exported) |
| MetricCard examples, buyer-mypage, seller-myshop | purchase/analytics + invert filter | extension `wallet` / `chart-line` / `list` tone=inverse |
| checkout (Mo) close | KS.CloseX | `Icon close` |

Kept on purpose: Pagination / Accordion / MobileMenu section / FilterPanel group arrows and MobileHeader back use the **source** `navigate` (1:90282) — it is the exported arrow.

## Verification (static only)
- SHA-256 of 11 SVG + icons.data.js identical before/after (`docs/icon-checksums.json`).
- Manifest: 34 names, 0 duplicates, 0 aliases pointing to missing names.
- Grep over components/ + ui_kits/: 0 remaining × − ★ ▾ text glyph icons, 0 CSS filter recolouring, 0 CloseX call sites (only the deprecated definition).
- Every `<Icon name="…">` literal in components/ui_kits resolves to a manifest name.
- **Not verified**: rendering/visual check of the new icons, IconButton states in browser, keyboard/focus in browser. Pending external review.

## Representative verification (external, user, 1.5.0 bundle)
- 11 source SVG + icons.data.js SHA-256 identical; token files identical; 97 prior cards preserved; 100 cards / 50 families.
- Manifest 34 names, 0 duplicates, 0 broken aliases.
- Icon card: Korean search "닫기" → 1 result (close); source filter → 11.
- IconButton: toggle aria-pressed, 카드→목록 switch, click counter 0→1, disabled = native attribute, hit area PC 36×36 / Mobile 44×44, keyboard Tab focus outline rgb(0,71,237) 2px.
- 1.5.1 card follow-up (after this check, not yet re-verified): category select (intersects search + source filter), white + #333 preview per icon instead of the green toggle, labelled "미등록 이름 처리 예시".

- MobileMenu 6 quick icons render correctly; Rating 3 → ArrowRight → 4 with aria-checked (external, user).
- Copy cleanup: MobileMenu card/d.ts and Rating card/d.ts/prompt/tsx/readme now say "KOSAF extension SVG (not extracted from Figma)" — no remaining ★-glyph / dashed-slot wording.

## Remaining
- Search.d.ts comment still mentions "▾" as a description of the source frame (text only).
- OrderSummary "+" / "=" operators are content, not icons — unchanged.
- Checkbox "✓" is the source master's text glyph (218:605) — preserved.
- Custom calendar icon usage in DateField: native picker, not changed.
