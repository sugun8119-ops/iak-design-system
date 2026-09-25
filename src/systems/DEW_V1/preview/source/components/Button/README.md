# Button

The action control for forms, dialogs and utilities: square, hairline or ink-filled, label in `body` 600 — never a rounded pill or a red fill.

**Consumer provides:** `children`/`label`, `variant` (`primary` | `secondary` | `danger` | `text`), `size` (`sm` 44 · `md` 48 · `lg` 56 — every size keeps the 44px target), optional `icon` + `iconPosition`, `iconOnly` (then `label` becomes `aria-label`), `loading` + `loadingLabel`, `disabled`, `fullWidth`, `type`, `onClick`.

- **primary** — `textPrimary` fill, `canvas` label (17:1). One per view.
- **secondary** — 1px `textPrimary` outline on the page ground.
- **danger** — 1px `accent` border and `accent` icon, label stays `textPrimary`; hover underline turns 2px `accent`.
- **text** — underlined label; hover underline 2px `accent` (same rule as EditorialCTA).
- States: hover underline · pressed `textSecondary` fill (primary) / `border` fill (secondary, danger) · focus 2px `textPrimary` outline, 4px offset · disabled `border` / `textSecondary` · loading spinner + `aria-busy`, label kept.
- Long labels wrap inside the button; they are never truncated.

**Relationship:** EditorialCTA stays the editorial *link* (↗, navigates to a story); Button is for *actions* (save, retry, confirm). Don't swap them. `state` forces hover/focus/pressed for previews only.

Status: **derived-extension** (IAK coverage family, DEW visuals).
