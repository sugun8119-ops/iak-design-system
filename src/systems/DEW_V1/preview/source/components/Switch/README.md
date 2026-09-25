# Switch

An immediate on/off setting: a 44×24 rectangular track (`radius-md`) with a square thumb, plus a visible "켜짐 / 꺼짐" word so state never relies on position alone.

**Consumer provides:** `label`, optional `description`, `defaultChecked`/`checked`, `onChange(checked)`, `disabled`, custom `onLabel`/`offLabel`.

Use Switch for settings that apply at once; use Checkbox inside forms that are submitted. Status: **derived-extension**.

**IAK cases (v1.3):** all 6 cases render in the `CoverageSwitch` card (anchors `case-switch-<id>`).
