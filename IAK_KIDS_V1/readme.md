# IAK KIDS_V1 · Little Everyday

Light-only Kids/Friendly mobile design system, v2.2. Original accessible palette — Leaf green #487538 (primary), Sky blue #9DDCED (secondary, dark-blue #184957 text), Playful purple #7954AD (accent, focus), Sand cream #FFF9E8 canvas, deep-leaf #293F2D text. 62 semantic colour roles + 32 raw palette values from `zem/figma-system.json`. No logos, characters, images or third-party screens; Pokopia was a colour-mood reference only.

- Hub / Overview: `zem/index.html` (palette + button states, screen × state × 375/834/1440) · QA: `zem/qa.html` (live measurement)
- Tokens: `zem/lib/iak-kids-tokens.css` (62 roles, via `styles.css`) · role aliases `zem/lib/zem-tokens.css` · UI: `zem/lib/zem-ui.js`, `zem-ui.css`, `zem-shell.css`
- Rules: `SKILL.md` = `zem/claude-system.md` · Spec: `zem/figma-system.json` (v2.2 + webImplementation) · Inventory: `zem/coverage.json`
- Fonts: web = Nanum Barun Gothic 400/700 (`fonts/`, OFL); Figma = Pretendard (Figma file only)
- Figma: https://www.figma.com/design/O7wy74Ds5S9rV8WopyCe5d
- Compatibility: the `zem/` folder, `--zem-*` names and `window.ZEM` namespace are kept so existing links/imports work. They are not the brand.
- Inactive history: `archive/zem-v1/` (ZEM_V1 v1), `archive/iak/` (IAK Master copy). Uploaded package: `uploads/IAK_KIDS_V1/` (its audit/browser-check files are prior-environment records).

## Components (16)
Button (+accent), TextField, Textarea, Select, Checkbox, Switch, Badge (+accent), Card, Skeleton, Icon, Dialog, Menu, Table, Pagination, Toast (+ ToastProvider, useToast), AlertDialog.

## Patterns (10)
Dashboard, Analytics, Table, Detail, Settings, Billing, AI Chat, Builder, Modal, Empty.

## UI kits (3)
Parent (`zem/ui_kits/parent.html`), Schedule (`schedule.html`), Activity (`activity.html`).

## Reusable templates

[Parent dashboard, weekly schedule and child activity](templates/README.md) are registered through Claude @template. Their `static DATA` is editable. Native `startingPoints` remains empty.
