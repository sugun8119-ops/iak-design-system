# RAIS · Layout Pattern System

Ten templates cover every screen in the system. Build new screens by composing from these — never invent a new shell.

## Global grid

| Token | Value |
|---|---|
| Container max-width | 1440 |
| Sidebar width (default) | 280 |
| Sidebar width (collapsed) | 72 |
| Topbar height | 64 |
| Page padding | 32 (`spacing/8`) |
| Section gap | 32 (`spacing/8`) |
| Card gap | 16 (`spacing/4`) |
| Column grid | 12-col, 16 px gutter |
| Responsive breakpoints | `sm 640` · `md 960` · `lg 1280` · `xl 1440` |

---

## Templates

### 1 · Dashboard
```
┌─────────┬─────────────────────────────────────────────┐
│         │ Topbar                                      │
│         ├─────────────────────────────────────────────┤
│ Sidebar │ Page-head (title + breadcrumb · actions)    │
│         │                                             │
│         │ ┌───────┐┌───────┐┌───────┐┌───────┐  row-4 │
│         │ │Metric ││Metric ││Metric ││Metric │        │
│         │ └───────┘└───────┘└───────┘└───────┘        │
│         │                                             │
│         │ ┌───────────────────────┐┌──────────┐ row-2 │
│         │ │ Panel · Table         ││ Side     │       │
│         │ └───────────────────────┘└──────────┘       │
└─────────┴─────────────────────────────────────────────┘
```
Reference: `ui_kits/rais-dashboard/index.html`

### 2 · Analytics
Same shell as Dashboard. Replaces `row-2` with `chart + filter rail`. Header may host a chrome-motif analytics-header (right-aligned, cropped).

### 3 · Table
Page-head → filter chip-rail → bulk-action bar (when rows selected) → table → footer pager. Table cell padding 12 × 16.

### 4 · Detail
Page-head → primary card (Hero / Identity) → tabbed sub-pages → activity feed in a side rail.

### 5 · Settings
2-col within content: nav rail (200 px) on the left, form column on the right. Section gap 32, form-row gap 16, label above input.

### 6 · Billing
Settings shell + `Card / Plan / Highlighted` for current plan + `Table / Invoices`.

### 7 · AI Chat
2-col: left is conversation list (240 px), right is the message thread. Composer is sticky bottom, 56 px tall, `surface/field` background, send button is `Button / Action / Primary / Md`.

### 8 · Builder
3-col: left node palette (240 px), centre canvas (fluid), right inspector (320 px). Canvas uses `surface/elevated` with a 24 px dot grid at `border/subtle`.

### 9 · Modal
- Width: `sm 480` · `md 640` · `lg 880`.
- Padding: 24.
- Radius: `xl` (16).
- Shadow: `shadow-floating`.
- Backdrop: `surface/overlay`.
- Close: `eva:close-fill` 20 px, top-right.

### 10 · Empty
Centred. Illustration or icon (96 px) → headline (`type/section/title`) → sub (`type/body/md`) → primary CTA. Container has `border-dashed` + `surface/elevated` background.

---

## Sectioning rules

- A section = `[overline] + [section title] + [optional helper] + [content]`.
- Always wrap related cards in a single section to allow consistent gap.
- Two consecutive sections are separated by `section-gap` (32). No extra dividers.
- Page-head is always the first section, never has a card around it.

## Responsive rules

| Breakpoint | Behaviour |
|---|---|
| ≥ 1440 | Full sidebar, 12-col grid |
| 1280–1440 | Collapse sidebar to 240 px |
| 960–1280 | Collapse sidebar to icon-only (72 px) |
| 640–960 | Sidebar becomes top drawer; metric row-4 → row-2 |
| < 640 | Single column; cards stack; tables horizontal-scroll inside their card |
