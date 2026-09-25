# TextField

Single-line input: `body` label above, optional `meta` description, `surface` field with a 1px `textSecondary` boundary and `radius-md` (2px).

**Consumer provides:** `label` (always visible — no placeholder-as-label), optional `description`, `placeholder`, `defaultValue`/`value`+`onChange`, `type`, `icon`, `required`/`optional`, `error` (message string), `disabled`, `readOnly`, `id`/`name`.

- Error: boundary switches to `accent` with a 2px `accent` underline, and the message is `textPrimary` text after an `accent` error icon — the colour is never the only signal (text says "오류:" to screen readers).
- Disabled: `canvas` fill, `border` boundary, `textSecondary` text. ReadOnly: dashed `border` boundary + "읽기 전용" label hint, still focusable.
- Focus: 2px `textPrimary` outline, 4px offset. Height 48, target ≥ 44.
- Long labels and values wrap; long unbroken strings break.

Status: **derived-extension**.
