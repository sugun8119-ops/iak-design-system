# Dialog

A modal on the warm `canvas`, framed by a 1px `textPrimary` rule with square corners, over the `scrim` backdrop. The title is set in `heading` (serif 40/48; 32/40 on mobile) — DEW's editorial voice even in utility moments.

**Consumer provides:** `open`, `onClose`, `title`, optional `eyebrow`, `description`, `children` (body), `footer` (Buttons, primary last), `size` (`sm` 400 · `md` 560 · `lg` 800, body split 5 : 7), `inline` (docs/preview only — renders in flow).

- Focus moves to the panel on open; `Esc` and the backdrop close it (`dismissable: false` to prevent); close icon button has `aria-label="닫기"`.
- Mobile (<768): sheet aligned to the bottom, 16 gutter, footer buttons stack full-width with the primary on top.
- Only token added for this family: `scrim` (derived-extension).

**Don't** use a rounded card, drop shadow or a dark panel. Status: **derived-extension**.
