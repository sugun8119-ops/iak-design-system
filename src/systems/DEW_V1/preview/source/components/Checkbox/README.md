# Checkbox

Square 20px box with a 1px `textPrimary` boundary (17:1); checked fills `textPrimary` with a `canvas` check. The whole row is the 44px target.

**Consumer provides:** `label`, optional `description`, `defaultChecked`/`checked`+`onChange`, `indeterminate`, `required`, `error`, `disabled`, `name`/`value`.

Error: `accent` doubled boundary + text message with icon. Disabled: `border` boundary on `canvas`. Status: **derived-extension**.

**IAK cases (v1.3):** all 7 cases render in the `CoverageCheckbox` card (anchors `case-checkbox-<id>`).
