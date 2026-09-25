# Select

Native `<select>` in TextField's frame with a DEW chevron icon; the platform list keeps keyboard and screen-reader behaviour.

**Consumer provides:** `label`, `options[]` (`value`, `label`, `disabled`), optional `placeholder` (rendered as a disabled first option), `defaultValue`/`value`, `description`, `error`, `disabled`, `readOnly` (renders disabled + hint).

For richer choice lists with icons or destructive items use **Menu**; for 2–5 editorial topics use **CategoryNav**. Status: **derived-extension**.

**IAK cases (v1.3):** all 8 cases render in the `CoverageSelect` card (anchors `case-select-<id>`).
