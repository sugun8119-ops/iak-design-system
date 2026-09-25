# ZEM_V1 · Project Design System

Light-only design system for a kids' mobile service. It is derived from observing a public Behance board (SKT ZEM Kids Service App UI). The source colours are measured approximately; fonts, exact hex values and sizes are unconfirmed and marked as derived. No photos, characters, logos or original copy from the source are used. Identity is the text "ZEM_V1" only.

- Hub: `zem/index.html` (screen × state × 375/834/1440) · QA: `zem/qa.html`
- Tokens: `zem/lib/zem-tokens.css` (via `styles.css`) · UI: `zem/lib/zem-ui.js`, `zem-ui.css`
- Handoff: `zem/figma-system.json`, `zem/claude-system.md`, `zem/coverage.json`, `zem/source-observations.md`
- Archive (not active, no cards): `archive/iak/` (the former IAK Master / RAIS copy)

## Components
Button, TextField, Textarea, Select, Checkbox, Switch, Badge, Card, Skeleton, Icon, Dialog, Menu, Table, Pagination, Toast (+ ToastProvider, useToast), AlertDialog.

## Patterns (ZEM-style derived extensions)
Dashboard, Analytics, Table, Detail, Settings, Billing, AI Chat, Builder, Modal, Empty.

## UI kits
Parent (`zem/ui_kits/parent.html`), Schedule (`schedule.html`), Activity (`activity.html`).
