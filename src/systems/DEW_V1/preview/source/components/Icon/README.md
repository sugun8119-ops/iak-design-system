# Icon

A small, self-drawn line icon set on a 24px grid: 1.5px stroke, square caps, mitred joins — matching DEW's hairlines. Sizes 16 (inline with `meta`), 20 (body, controls), 24 (dialogs, empty/error states).

**Consumer provides:** `name` (see the preview), `size`, `tone` (`accent` for danger/error marks only, `muted` for `textSecondary`), `label` (only when the icon carries meaning alone — it then gets `role="img"`; otherwise it is `aria-hidden`).

- Icons inherit `currentColor`; `accent` icons meet 3:1 on `canvas` (4.19) and `surface` (4.64).
- Editorial links keep the text glyphs ↗ ← inside EditorialCTA; this set serves Buttons, fields, Menu, Table, Pagination, Toast and Dialog.
- No IAK or third-party icon font is used. Status: **derived-extension** (the source had only ↗ ← glyphs).

**IAK cases (v1.3):** all 7 cases render in the `CoverageIcon` card (anchors `case-icon-<id>`).
