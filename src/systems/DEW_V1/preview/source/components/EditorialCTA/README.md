# EditorialCTA

The system's only action style: underlined text with a direction mark, at least 44px tall — never a filled button.

**Consumer provides:** `label` (or children), `href`, optional `direction` (`forward` ↗ after the label, `back` ← before it) or a custom `arrow`. Use `as: 'span'` inside a card that is already a link.

- `body` at weight 600 in `textPrimary`, 1px underline offset 7px, 24px between label and arrow.
- **Hover** — the underline turns 2px `accent` (red as a small action cue; the text itself stays `textPrimary` for contrast).
- **Focus** — 2px `textPrimary` outline, 4px offset.

Write labels as a verb phrase: "이야기 읽기", "전체 저널". **Don't** box it, fill it red, or use more than one per section head.
