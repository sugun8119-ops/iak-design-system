# CategoryNav

A wrapping row of category links or filter buttons, gap 24, used above an ArticleList grid.

**Consumer provides:** `items[]` (`label`, `href` or `value`, `selected`), `label` for the nav landmark, and optionally `onSelect(value, index)` — when present the items render as `<button aria-pressed>` filters instead of links.

States:
- **Default** — `body` in `textSecondary`.
- **Selected** — `textPrimary`, weight 600, 2px `accent` underline (the one red mark in the row).
- **Hover** — `textPrimary` + underline.
- **Focus** — 2px `textPrimary` outline, 4px offset.

Every item is at least 44px tall. Mobile wraps to extra lines; nothing is hidden or scrolled off-screen. `state` on an item forces Hover/Focus for previews only.

**Don't** use pills, filled chips or rounded tabs.
