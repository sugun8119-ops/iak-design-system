# RAIS · State System

Twelve states are defined for every interactive component. Each state is expressed by **at least three signals**: colour, text, and icon. Colour alone never communicates state.

| State | Colour | Border | Icon | Opacity | Interaction | Text tone | CTA |
|---|---|---|---|---|---|---|---|
| **Default** | `surface/card` | `border/default` | role icon `text/secondary` | 1.0 | enabled | `text/primary` | available |
| **Hover** | bg +6 % brightness | `border/strong` | tint to `text/strong` | 1.0 | cursor `pointer` | `text/strong` | available |
| **Pressed** | bg `action/primary/pressed` | `border/strong` | — | 1.0 | active | `text/strong` | available |
| **Focused** | unchanged | `border/focus` 1 px **+ inset 1 px ring** | — | 1.0 | tabindex visible | unchanged | available |
| **Selected** | `surface/selected` (`#FFA726` @ 10 %) | left-rule `accent` 2 px | role icon `accent` | 1.0 | persistent | `text/strong` | available |
| **Loading** | unchanged | unchanged | replace icon w/ 18 px spinner | 1.0 | non-interactive | `text/secondary` | disabled |
| **Skeleton** | `surface/elevated` shimmer | none | none | 1.0 | none | placeholder bars | hidden |
| **Empty** | `surface/elevated` | dashed `border/default` | illustration / Eva outline | 1.0 | enabled CTA | `text/secondary` headline + `text/muted` sub | "Add first…" primary CTA |
| **Success** | bg `status/success` @ 8 % | `status/success` 1 px | `eva:checkmark-circle-2-fill` | 1.0 | enabled | `text/strong` headline | "Continue" |
| **Warning** | bg `status/warning` @ 8 % | `status/warning` 1 px | `eva:alert-triangle-fill` | 1.0 | enabled | `text/strong` headline | "Review" |
| **Error** | bg `status/error` @ 8 % | `status/error` 1 px | `eva:close-circle-fill` | 1.0 | enabled | `text/strong` headline | "Retry" |
| **Disabled** | `surface/card` | `border/subtle` | tint `text/disabled` | 0.6 | `cursor: not-allowed` | `text/disabled` | hidden / disabled |

## Animation specs

| Trigger | Property | Duration | Easing |
|---|---|---|---|
| Hover | background, border-color | 120 ms | `ease-out` |
| Focus | box-shadow, border-color | 0 ms | none — instant for accessibility |
| Pressed | transform `scale(0.98)` | 80 ms | `ease-in` |
| Loading spinner | rotate 360 ° | 800 ms | linear, infinite |
| Skeleton shimmer | gradient sweep | 1500 ms | linear, infinite |
| Toast in / out | translateY + opacity | 200 / 160 ms | `cubic-bezier(0.2,0.8,0.2,1)` |

## Accessibility

- Contrast: every text+bg pair must clear **WCAG AA 4.5:1** (3:1 for ≥ 18 px).
- Focus must be keyboard-visible without a mouse hover.
- Status colours always paired with an icon for users who can't perceive hue.
- Click targets ≥ 44 × 44 px on touch surfaces.

## Naming for AI prompts

`State / {Role} / {Component} / {State}`

Examples
- `State / Action / Button / Pressed`
- `State / Status / Toast / Error`
- `State / Field / Input / Focused`
- `State / Empty / Card / Default`
