# RAIS Design System

A dark-first dashboard design system for **Iak Design Studio**, codenamed **RAIS** (the page label in the source Figma is "RAIS_State_System"). The system is built around a single bold orange accent (`#FFA726`), heavily layered black surfaces, and a strict three-family typographic hierarchy. It exists primarily to back analytics, mailing, billing and account-settings dashboards, with a rich state catalogue (button / toggle / input / toast / skeleton) reused across screens.

> 이것은 다크모드 기반 대시보드 디자인 시스템입니다. — User brief, May 8 2026

---

## Update — 2026-05-10b (Pretendard-only)

A second pass on the same day: Pretendard is now the **only UI typeface**. Roboto, Barlow and Public Sans are retired. The hierarchy / sizes / line-heights are identical — only the family resolved.

**Weight logic**

| Role | Weight | Pretendard cut |
|---|---|---|
| Display + page titles | 700 – 800 | Bold / ExtraBold |
| Section + card titles | 600 – 700 | SemiBold / Bold |
| Body text | 400 – 500 | Regular / Medium |
| Captions + helper | 400 | Regular |

`@font-face` covers 100 → 900 (Thin → Black). All preview pages and the dashboard kit have had their Google-Fonts `<link>` tags stripped — every page inherits Pretendard via `colors_and_type.css` only.

---

## Update — 2026-05-10 (per `05_Update-Rules`)

A small, surgical revision applied to the existing system. **Dark-first remains the primary visual direction**; the Minimal Web reference is structural only. None of the previous tokens / spacing / radii / state catalogue were thrown out.

| # | Rule | Where it landed |
|---|---|---|
| 1 | **Minimal Web** icon style is the canonical icon system | `preview/iconography.html` — confirms Eva (nav) + Solar (objects), all solid, single-colour, 16/20/24 only. Same family already used in the Figma — locked in. |
| 2 | Toast severity-icon backing is a **rounded square**, not a circle | `preview/toasts.html` and `ui_kits/rais-dashboard/index.html` — `border-radius: 6px` on `.toast-icon`. Glow underneath is unchanged. |
| 3 | **No outer focus halo.** Replace with **border + subtle inset ring** | New `--focus-ring` / `--focus-border` tokens in `colors_and_type.css`. Applied in `preview/inputs.html` and `preview/buttons.html`. Resting glow under coloured surfaces (toast icons, metric plates) is preserved — focus ≠ decoration. |
| 4 | UI body type → **Pretendard** | `--font-ui` now resolves to Pretendard first. `--font-display` (Roboto) and `--font-section` (Barlow) are unchanged — they still own hero numerals and tiny uppercased docs labels. **Type scale, weights and hierarchy are identical.** |
| 5 | **Brand-mark usage rule** added | `preview/brand.html` rebuilt as a usage card with three sanctioned variants: full glowing gem (presentation only), simplified small gem (sidebar / top-bar / product UI, no glow), wordmark + small mark (light-background presentation). Clear-space rule: ≥ ½ × mark height on every side. |
| 6 | **Don't redesign the IAK Studio logo** | Existing raster files (`assets/iak-mark.png`, `brand-mark-rgb.png`, `brand-noise.png`) are canon. Variants are about which file ships where — not new artwork. |

What did **not** change:
- Orange (`#FFA726`) primary action.
- Blue (`#4C9AEC` / `#005AFF`) data role.
- Spacing scale (4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 64 / 80).
- Radii (4 / 6 / 8 / 12 / 16 / 24 / pill).
- State catalogue: button × 5, toggle × 4, input × 5, toast × 5, skeleton × 2.
- All glow-tokens (`--glow-primary` etc.) — they remain valid for **resting** decoration under coloured surfaces; they're forbidden only as a focus indicator.

---

## Sources

| Source | Where it lives now |
|---|---|
| `Untitled.fig` (mounted virtual filesystem) | Read with `fig_ls`, `fig_read`, `fig_screenshot`. Page of record is `/RAIS_State_System` (20 frames). The `00_Foundation`, `01_Core-Screens`, `02_Component-System`, `03_State-System`, `04_System-Preview` sub-frames are the canonical map. |
| Pretendard font family (9 weights) | `fonts/Pretendard-*.otf` |
| `unnamed.png` (brand mark sample) | `assets/iak-mark.png` |
| `9d865bb8bf75.png` brand logo art | `assets/brand-noise.png` |
| `cfe3566f61d2.png` colored brand mark | `assets/brand-mark-rgb.png` |
| Avatar specimen | `assets/avatar-sample.jpg` |

The user gave us a single Figma page (no live URL — it was attached as `Untitled.fig`). Treat the JSX in the VFS as the source of truth.

---

## Index — what's in this folder

```
README.md                       ← you are here
SKILL.md                        ← cross-compatible Agent Skills entrypoint
colors_and_type.css             ← all design tokens (CSS custom properties)
fonts/                          ← Pretendard 9 weights (.otf)
assets/                         ← brand marks, sample imagery, logos
preview/                        ← Design System tab cards (one HTML per token group)
ui_kits/
  rais-dashboard/
    README.md
    index.html                  ← interactive dashboard prototype
    *.jsx                       ← composable React pieces
```

Browse the **Design System** tab in the side panel to see every token + component card register itself automatically.

---

## CONTENT FUNDAMENTALS

The Figma deck is bilingual (Korean + English) but every product surface is rendered **in English**, with terse, dashboard-clipped copy. Korean appears only in section narration / annotations.

**Voice & tone**
- **Direct, declarative, no exclamations.** "Select Recipients", "Add Filter", "View detailed analysis", "Create Mailing Campaign". Verbs first. Never "Let's…", never "✨".
- **Title Case for actions and titles**, sentence case for body. ("Create Mailing Campaign", "From Database", "Selected Recipients (2)")
- **No first person. Second person only when explaining a setting.** Most strings are imperative ("Search", "Next") or label-only ("Mailing Settings", "Edit message").
- **Counts are inline, in parentheses.** "Selected Recipients (2)", not "2 recipients selected".
- **No emoji in product chrome.** The single emoji that appears in the Figma (♦️ in the Foundation / Typography header) is a docs decoration, not a product element. Don't carry it into screens.
- **Numbers do the talking.** Stat blocks (e.g. "$18,765" / "+2.6%") are large, paired with a one-word context label ("Sales this month") and a delta chip. No editorialising next to them.
- **Status copy is single-word.** Online · Active · Disabled · Enabled · Error · Hover · Focused — these match the state-system labels and are reused literally as chip / badge text.
- **Specimen string for type proofing:** "Almost before we knew it, we had left the ground." (Roboto, 64/80, 700) — keep it; it's the canon ABC string for any new weight added.

**Casing rules**
- Section dividers in docs use a tiny uppercased Barlow line ("STATES", "OUTLINED", "CONTAINED") — that's the `.rais-overline` token.
- Page-level docs headers ("Typography", "Colors", "Brand") use Title Case in **Barlow Bold 32**, with a 1px tracking.
- Body / form copy uses Public Sans natural case.

**Vibe**
Studio-grade analytics. Bloomberg-meets-Linear: black, dense, confident, the orange does the work of every emoji you'd otherwise need.

---

## VISUAL FOUNDATIONS

### Color
Six families, all defined in `colors_and_type.css`:

| Family | Role | Anchor swatch |
|---|---|---|
| **Primary (Orange)** | The accent. Buttons, active states, focus rings, accent text. | `#FFA726` |
| **Grey scale** | 99% of the system. Dark canvas through to light foreground. | `#0D0D0D` → `#D1DAE3` |
| **Info** | Cyan/blue chip / status. | `#4C9AEC` |
| **Success** | Mint. Status dot, success toast, positive deltas. | `#33C488` (`#27DA68` for the live dot) |
| **Warning** | Amber-yellow (distinct from primary by being more saturated/yellow). | `#FAAE3E` |
| **Error** | Coral red. | `#FF665B` |
| **Secondary (Purple/Blue)** | Documentation only — appears in Foundation as the contrast pair to the orange primary block. **Do not introduce on product surfaces** unless explicitly asked. | `#8E33FF` / `#005AFF` |

Surfaces stack: `--bg-canvas (#0D0D0D)` → `--bg-elevated (#121212)` → `--bg-card-alt (#161616)` → field surfaces at `#1C222B`. Layering by 2–4% lightness, never with borders alone.

### Typography
Three families, three jobs.

- **Roboto** — display / hero numerals. The "Aa 64/80" specimen, the giant H1, big stat readouts.
- **Barlow** — section headers and overlines. Always Bold or SemiBold, often with `letter-spacing: 0.03em`–`0.12em`. This is what the docs use for "Typography", "Colors", and the tiny "states" tag.
- **Public Sans** — UI workhorse. 11–18px, Regular / SemiBold / Bold. Buttons, fields, table cells.
- **Pretendard** (uploaded) — covers Korean glyph fallback for any string that includes Hangul; metrics line up well with Public Sans for mixed runs.

The full scale lives in `colors_and_type.css` under `--text-*` tokens.

> **Substitution flag:** The Figma uses Public Sans, Roboto, and Barlow as primary families. The user supplied **Pretendard** (a Korean-first family) but did not include the others. We load Public Sans / Roboto / Barlow from Google Fonts CDN and fall back to Pretendard for Korean. **Ask the user for licensed `.otf`/`.woff2` files if this system is going to production.**

### Spacing & layout
4 px base. Common increments: 4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 64 / 80. The page macro grid is **240 px side gutter at 1440 px width**, **content card 1118 px wide** within a **1166 px header bar**, sidebar **280 px**. Cards inside cards step down by 16–24 px.

### Backgrounds
- **Solid black layers**, no gradients on surfaces. The only "gradient" feel comes from the radial **brand-mark colored noise** image (`assets/brand-noise.png`) used as the brand specimen — don't tile it as a page background.
- No hand-drawn illustrations, no patterns, no full-bleed photography in product surfaces. Imagery is reserved for empty-states, brand specimens, and avatars.
- Imagery vibe: **deep black, high contrast, prismatic flare** — see `uploads/unnamed.png` (the Iak gem-mark sample). Cool-leaning, never warm.

### Animation
- **Subtle, brisk.** 120–180 ms ease-out for hover, 200–240 ms for toast slide-in, 400 ms for skeleton shimmer.
- No bounces, no parallax, no springy overshoot.
- Toasts slide up from the bottom and fade out. Modals fade-scale 0.96 → 1.

### Hover / Press / Focus states
Lifted directly from the State System frame in Figma:

- **Hover (button):** background brightens by ~one step (e.g. `#FFA726` → unchanged base + `--accent-glow` shadow becomes more visible), or fill alpha drops to ~0.92.
- **Hover (icon button / chip):** background `--rais-alpha-08` wash.
- **Pressed:** scale stays the same — no shrink. Background steps to `darker` token (e.g. `--rais-primary-darker`).
- **Focused:** 2 px outline in `--accent` with 4 px outer halo (`--accent-glow`).
- **Disabled:** `color: --fg-muted`, `background: --rais-alpha-12`, no shadow, cursor `not-allowed`.
- **Active (selected):** orange fill `--accent`, fg `--accent-fg` (black).

### Borders
- `1 px solid var(--border-default)` (alpha 0.12 grey) is the default divider.
- Heavier emphasis: `var(--border-strong)` (alpha 0.20).
- **Dashed borders are decorative**, used inside the `wrap-container` foundation cards (`2 px dashed rgba(145,158,171,0.16)`). Don't use dashed for real form fields.

### Shadows / Glows
Two systems running in parallel — a neutral **shadow** for elevation and a **colored glow** for accent surfaces. They never combine.

| Token | Use |
|---|---|
| `--shadow-card` | Most cards. `0 12 24 -4 rgba(145,158,171,.12), 0 0 2 rgba(145,158,171,.20)`. |
| `--shadow-soft` | Toggle pills, small icon buttons. |
| `--shadow-toast` | Toasts, popovers — heavier black shadow. |
| `--glow-primary` | Under the orange accent block / primary CTA's resting state. |
| `--glow-info` / `--glow-success` / `--glow-warning` / `--glow-error` | Under each colored surface in the Foundation card. |
| `--glow-secondary` | Docs-only purple/blue specimen. |

The orange glow is `0 8 16 0 rgba(255,171,0,.24)` — that's the **canonical glow strength**. Don't change it per surface; only swap the hue.

### Transparency / Blur
- Used for top-bar / nav overlays in the dashboard frames (`backdrop-filter: blur(12px)` on the 72 px header).
- Modals dim with `--bg-overlay` (`rgba(0,0,0,0.25)`).
- Hover washes are alpha greys, not blur.

### Radii
Full scale in tokens: 4 / 6 / 8 / 12 / 16 / 24 / 500 px.
- 4 px — tiny color swatches in the foundation grid.
- 8 px — chips, buttons, inputs, fields. **Default for any interactive element.**
- 16 px — foundation card outer.
- 24 px — primary content card on dark canvas (the big rounded panel inside dashboards).
- 500 px — pills, status dots, circular avatars.

### Cards
- Surface: `--bg-card` or `--bg-card-alt` depending on nesting depth.
- Radius: 16–24 px.
- Shadow: `--shadow-card` for any card that floats over another surface; **no shadow** for cards that share their parent surface.
- Border: skipped if the card is on a different background; otherwise `1 px solid var(--border-subtle)`.
- Padding: 24 px (compact) or 40 px (foundation-style).
- Title sits 16 px above body, follows `--text-title` (Public Sans Bold 18/28).

### Layout rules
- The dashboard layout has **fixed left sidebar (280 px)** and **fixed top header bar (72 px)**. Content scrolls within the remaining area.
- Foundation docs lay out frames at fixed sizes (1440 × NN) on a giant 5154-wide canvas — that's a Figma-only artifact, not a product target.

---

## ICONOGRAPHY

The Figma uses **Eva Icons** (`eva:arrow-ios-back-fill`, `eva:arrow-ios-downward-fill`, `eva:arrow-ios-forward-fill`) and **Solar** (`solar:close-circle-bold`) extensively — these are pulled from the Iconify catalog. They're **all SVG, all solid (filled)** style, 24 px nominal box, ~16 px optical glyph.

We don't ship the icon font in this system — it's served from the **Iconify CDN** at runtime so the same token works in design and code:

```html
<!-- 24px solid icon, currentColor inherited -->
<span class="iconify" data-icon="eva:arrow-ios-back-fill" data-width="24" style="color: var(--fg-secondary)"></span>

<script src="https://code.iconify.design/iconify-icon/2.1.0/iconify-icon.min.js"></script>
```

**Rules**
- Solid (filled) icons only. **No outline / hairline icons** — they read as broken in this dark, high-contrast system.
- Single color, inherits `currentColor`. Never multi-color.
- 16 / 20 / 24 px sizes only (matches the Figma `Size=S - 20` / `Size=M - 24` / `Size=XS - 18` instances).
- No emoji in product. The lone exception is the diamond emoji (♦️) used as a docs masthead glyph — kept as legacy, not extended.
- The brand mark itself (the gem hexagon) is a raster PNG specimen (`assets/iak-mark.png` and `brand-mark-rgb.png`). When the brand mark is needed in product chrome (e.g. the docs header in Foundation: "Minimal Design System") it appears as a 40 × 40 colored hexagon glyph followed by 12 px Barlow Bold wordmark.
- Status indicators (online / focused / error) are colored circles, not icons. 8–12 px, `--radius-pill`.

> **Substitution flag:** No icon SVGs were copied out of the Figma — they're all instances of external Iconify components. We're substituting via the Iconify CDN by name (which is the canonical source for Eva and Solar anyway). If the user wants the icons bundled, ask for the npm packages.

---

## Component System (high level)

The Figma defines a **three-card content vocabulary** under `02_Component-System`:

1. **Card / Chart** — title + chart slot (line / bar / donut). 1118 × 480.
2. **Card / List** — title + scrollable list of post-card rows. 1118 × variable.
3. **Card / Insight** — title + dense KPI grid + "View detailed analysis" CTA. 1118 × 480.
4. **Card / Metric** — single-stat block, used in 4-up rows.

The State System frame catalogues **5 component families × 5 states**:

- **Button**: Contained / Outlined / Soft × Enabled / Hover / Focused / Active / Disabled.
- **Toggle (Button group)**: Contained / Outlined / Text / Soft, two-color (inherit / primary).
- **Input (Text field)**: Default / Filled / Focused / Disabled / Error, with and without label.
- **Toast (Snackbar)**: Default / Info / Success / Warning / Error severity, 420 × 46.
- **Skeleton**: Rectangle / Circular placeholders for cards mid-load.

The full state matrix is recreated as live React in `ui_kits/rais-dashboard/`.

---

## How to use

1. Read this file and `colors_and_type.css`. Variables are the contract.
2. Browse the **Design System** tab — every token has a card with its real swatch / specimen.
3. Pull components from `ui_kits/rais-dashboard/`. They are presentational only — wire your own state.
4. For new screens: stay on `--bg-elevated`, build cards on `--bg-card`, accent with **one** orange element per visual unit (a CTA, a tab, an active row — not all three at once).
