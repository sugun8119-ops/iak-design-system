# RAIS · Design Rulebook

**System direction.** AI-native SaaS · premium dark UI · high readability · minimal structure · reusable component system · accessibility-conscious · Claude/AI re-generation friendly.

> _"Do not introduce new visual ideas. Reach for the existing token, component, or pattern. Patches before redesigns."_

---

## 1 · The five non-negotiables

| # | Rule | Why |
|---|------|-----|
| 1 | **One accent.** Orange (`#FFA726`) is the system's only accent. Blue is a data/info role, never a brand colour. | Keeps CTAs readable across dense dashboards. |
| 2 | **Pretendard only.** No Roboto / Barlow / Public Sans. Korean, English and numerals all share one face. | Visual consistency between scripts. |
| 3 | **Focus = border + inset ring.** Never an outer halo or bloom. | Dark UI is already glow-heavy; focus must be precise. |
| 4 | **State = colour + text + icon.** Never colour alone. | Accessibility floor (WCAG 1.4.1). |
| 5 | **Logo and motif are different families.** Gem mark = identity (sidebar/topbar). Chrome motif = decorative (hero/header). They never appear together. | Brand integrity. |

## 2 · Visual DNA

- **Surface stack.** `canvas (#0D0D0D)` → `elevated (#121212)` → `card (#0D0D0D)` → `card-alt (#161616)` → `field (#1C222B)`. Cards sit on the elevated layer; fields nest one level deeper.
- **Border.** `rgba(145,158,171,0.08–0.20)` only. No solid hex borders.
- **Glow.** Resting decoration under coloured icon plates / metric tiles. Tight, low-opacity (≤ 24 %), close to the element. Never as a focus signal.
- **Density.** 4 px base spacing. Card padding 24. Section gap 32. Page padding 32.
- **Radius.** Buttons/inputs `md (8)`, mid cards `xl (16)`, primary cards `2xl (24)`, pills `500`.

## 3 · Do / Don't

| Do | Don't |
|---|---|
| Use semantic tokens (`color/action/primary/default`). | Drop raw hexes into product code. |
| Use `text-wrap: pretty`, `font-feature-settings: "tnum"` on numerics. | Bold body copy for emphasis. |
| Use a single primary CTA per surface. | Stack two filled-orange buttons next to each other. |
| Pair every status colour with text and an icon. | Communicate state with colour alone. |
| Use the chrome motif right-aligned, cropped, with left→right dark gradient. | Tile the motif, centre it, or use it as full-page texture. |
| Render the gem logo as a flat raster on canvas. | Apply glow / halo / drop-shadow / blue-bg to the gem. |

## 4 · Token reference

- `tokens/colors.json` — semantic colour roles + states
- `tokens/typography.json` — type roles
- `tokens/spacing.json` — spacing, radius, shadow, glow, focus
- `colors_and_type.css` — runtime CSS custom properties (the source of truth at runtime)

## 5 · Living artefacts

- `preview/*.html` — each token group has a visual proof card
- `ui_kits/rais-dashboard/index.html` — the canonical full-screen reference
- `docs/06-changelog.md` — every patch logged here, dated
