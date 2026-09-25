# QuoteBlock

A pull quote on the mint `support` plane — the one place a large tinted area is allowed.

**Consumer provides:** `quote` (or children) and `cite` (the speaker's role or source line).

- Quote in `heading` (40/48, max 28ch; mobile 32/40); cite in `meta` style but `textPrimary`, because `textSecondary` on `support` is only 3.68:1.
- Padding 48; mobile 24. Square corners (`radius-sm`).
- In templates, follow it with 72px of space before the next band.

**Don't** add quotation-mark icons, a colored left border, or more than one QuoteBlock per screen.
