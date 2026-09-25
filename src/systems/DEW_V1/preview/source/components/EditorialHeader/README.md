# EditorialHeader

Text-only masthead and primary navigation in one horizontal row, justified to both ends, at least 80px tall with a `border` hairline beneath.

**Consumer provides:** `brand` (plain text — never an original logo), `brandHref`, `links[]` (`label`, `href`, `current`), optional `navLabel` (defaults to "주 탐색").

- Brand is set in the serif family at 22/30, weight 600, tracking .08em; links use `body` in `textPrimary`, each at least 44px tall.
- Mark the current page with `current: true` → `aria-current="page"` and an underline (offset 7px).
- Mobile (<768): the row wraps; brand and links stay visible — never collapse into a hidden menu.
- Place inside `.dew-wrap` so the page padding (48 / 32 / 24) applies.

**Do** keep the brand in plain type. **Don't** add icons, a search bar, a colored bar or a shadow.
