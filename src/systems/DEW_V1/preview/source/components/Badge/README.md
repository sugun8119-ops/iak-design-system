# Badge

A short status label in `meta` type (12/18, 500) on a square chip. Meaning is carried by the **word and icon first**, colour second.

**Consumer provides:** `children`/`label`, `tone` (`neutral` | `info` | `success` | `warning` | `danger`), optional `icon` override (`null` removes it).

- neutral — `textSecondary` text and outline (4.84:1). info — `surface` + `textPrimary` outline, info icon. success — `support` fill, check icon. warning — `border` fill, alert icon. danger — `surface` + `accent` outline and `accent` icon; text stays `textPrimary`.
- **Relationship:** ArticleMeta lists facts about a story; Badge marks a *state* (새 이야기, 저장됨). Place a Badge before ArticleMeta, never inside it.

Status: **derived-extension**.
