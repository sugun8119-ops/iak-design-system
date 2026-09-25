# Textarea

Multi-line input sharing TextField's anatomy and states; min height 136, vertical resize only, optional character counter.

**Consumer provides:** `label`, `description`, `rows`, `maxLength` (turns on the `meta` counter, announced politely), `error`, `disabled`, `readOnly`, value props.

Use for reader letters, notes and captions. Error, disabled and readOnly follow TextField exactly. **Don't** auto-grow beyond the viewport or hide the counter on mobile.

Status: **derived-extension**.

**IAK cases (v1.3):** all 9 cases render in the `CoverageTextarea` card (anchors `case-textarea-<id>`).
