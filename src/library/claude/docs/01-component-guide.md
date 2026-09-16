# RAIS · Component Guide

## Naming convention

`Component / Role / Type / State`

Examples
- `Button / Action / Primary / Default`
- `Button / Action / Primary / Hover`
- `Card / Metric / Highlighted`
- `Input / Search / Focused`
- `Badge / Status / Success`
- `Toast / Notify / Error`

Use this exact format in Figma layer names, JSON variants, and AI prompts.

---

## Button

**Types.** `Primary` · `Secondary` · `Danger` · `Text` · `Icon`
**Sizes.** `Lg` (44 h) · `Md` (36 h) · `Sm` (28 h)
**States.** `Default` · `Hover` · `Pressed` · `Focused` · `Disabled` · `Loading`

| Spec | Value |
|---|---|
| padding | `Md` 8 × 16 (`spacing/2` × `spacing/4`) · `Lg` 12 × 20 (`spacing/3` × `spacing/5`) · `Sm` 4 × 12 (`spacing/1` × `spacing/3`) |
| gap (icon ↔ label) | 8 |
| radius | 8 (`md`) |
| icon size | 18 (`Md` / `Lg`), 16 (`Sm`) |
| label font | `type/button/default` (Pretendard 600 / 14 / 24) |
| auto-layout | hug content × hug · gap 8 · padding inside |

**Hover (subtle, 2026-05-10).** No outer glow. Background brightness +6 %, shadow tight (`shadow-sm`). Hover should feel responsive, not illuminated.

**Focus.** `border-color: focus-border` + `box-shadow: focus-ring` (inset 1 px). Never an outer halo.

**Loading.** Disable interaction, keep filled colour, swap label for an 18 px spinner. Width is preserved.

---

## Card

**Roles.** `Metric` · `Analytics` · `Info` · `AI` · `Alert` · `Empty`
**Variants.** `Default` · `Highlighted` _(variant, not state — opt-in accent treatment)_
**States.** `Default` · `Loading` · `Skeleton` · `Empty` · `Warning` · `Error`

**Common structure**
```
┌────────────────────────────────┐
│ Header   [icon] [title]  [act] │  padding 24 / 24 / 16 / 24
├────────────────────────────────┤
│ Body                           │
│   • metric value (data/lg)     │
│   • or list / chart            │
├────────────────────────────────┤
│ Footer (optional)              │  caption + delta chip
└────────────────────────────────┘
```

| Token | Value |
|---|---|
| background | `surface/card` |
| border | `border/default` 1 px |
| radius | `2xl` (24) |
| shadow | `shadow-lg` (resting) |
| internal gap | 16 (`spacing/4`) |

**Highlighted variant.** Adds a coloured icon plate (`color/data/blue` etc.) with `glow-{role}` underneath the plate only — never on the card.

---

## Input

**Types.** `Text` · `Search` · `Select` · `Checkbox` · `Toggle`
**States.** `Default` · `Hover` · `Focused` · `Error` · `Disabled`
_`Filled` is a content state (value present) and inherits `Default` styling — not part of the system state matrix._

| Spec | Value |
|---|---|
| height | 40 (`Md`) |
| padding | 10 × 14 |
| radius | `md` (8) |
| background | `surface/field` |
| border | `border/default` |
| focus | `border/focus` 1 px + `focus/ring` (inset) — no halo |
| error | `status/error` border + helper text in `text/error` with `eva:alert-circle-outline` |
| label | `type/label/default`, gap 6 above input |
| helper | `type/caption/default`, gap 6 below input |

---

## Badge

**Status.** `Success` · `Warning` · `Error` · `Info` · `New`
_`Status` replaces "Types" — values map 1:1 to `color/status/{role}`._

| Spec | Value |
|---|---|
| padding | 4 × 10 |
| radius | `pill` (500) |
| font | `type/overline/default` |
| icon | optional 12 px Eva/Solar solid, gap 4 |
| background | `status/{role}` @ 14 % opacity |
| text | `status/{role}` (light variant) |

---

## Toast

**Status.** `Success` · `Warning` · `Error` · `Info`
**Layout.** Icon plate (rounded-square, **not circle** — patched 2026-05-10) on the left, title + body stacked on the right, dismiss icon top-right.

| Spec | Value |
|---|---|
| width | 360 |
| padding | 16 |
| radius | `lg` (12) |
| icon plate | 36 × 36, radius 8, bg `status/{role}` @ 14 %, icon `status/{role}` |
| shadow | `shadow-floating` |
| dismiss | `eva:close-fill` 18 px, `text/muted` |

---

---

## Sidebar

**Types.** `Default` (280) · `Collapsed` (72)
**States.** `Default` · `Hover` · `Selected` · `Focused`

| Spec | Value |
|---|---|
| width | 280 / 72 (collapsed) |
| background | `surface/canvas` |
| right border | `border/subtle` 1 px |
| nav item padding | 10 × 10, gap 10 |
| nav item radius | `md` (8) |
| selected | `surface/selected` + 2 px left rule `border/focus` |

---

## Topbar

**States.** `Default` (only)

| Spec | Value |
|---|---|
| height | 64 |
| padding | 16 × 32 |
| background | `surface/canvas` |
| bottom border | `border/subtle` 1 px |
| anatomy | breadcrumb · search · icon-buttons · avatar |

---

## Modal

**Sizes.** `Sm` (480) · `Md` (640) · `Lg` (880)
**States.** `Default` (entered) · `Loading` · `Error`

| Spec | Value |
|---|---|
| padding | 24 |
| radius | `xl` (16) |
| background | `surface/card-alt` |
| shadow | `shadow-floating` |
| backdrop | `surface/overlay` |
| close | `eva:close-fill` 20 px, top-right |

_Modal also appears in `docs/03-layout-patterns.md` as Template § 9 — same component, framed there as a layout shell._

---

## Table

**Types.** `Default` · `Compact` · `Expandable`
**States.** `Default` · `Loading` · `Empty` · `Error`

| Spec | Value |
|---|---|
| container | `surface/card`, radius `2xl`, border `border/default` |
| header bg | `surface/card-alt` |
| header font | `type/overline/default`, colour `text/muted` |
| cell padding | 12 × 16 (`spacing/3` × `spacing/4`) |
| row separator | `border/subtle` 1 px |
| numeric cells | `font-feature-settings: "tnum"`, colour `text/strong` |

---

## Auto-layout rules (Figma + JSX parity)

1. Every component is **hug × hug** unless explicitly fixed-width.
2. Padding lives on the parent, never on children via margin.
3. Gap is the only inter-child spacing — no padding-fakes.
4. Icons resize via fixed pixel size, never by stretching.
5. Text containers wrap with `text-wrap: pretty`.
