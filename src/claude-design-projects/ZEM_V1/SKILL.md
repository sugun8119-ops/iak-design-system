---
name: zem-v1-design-system
description: ZEM_V1 · Project Design System. A light-only design system for a kids mobile service. Periwinkle header, white rounded cards, cyan/lime point tiles, Nanum Barun Gothic 400/700.
---

# ZEM_V1 · claude-system.md — rules for generating screens

Use this when Claude (or any generator) builds screens with ZEM_V1. If a rule here conflicts with an old chat summary or an IAK/RAIS document, this file and the actual CSS/API win.

## 0. Identity and source
- Name: **ZEM_V1 · Project Design System**. Identify it with the text "ZEM_V1" only. Do not draw logos, mascots or characters.
- Source: observations of the public Behance board "SKT ZEM Kids Service App UI Design" (see `source-observations.md`). Only colour roles were observed; their hex values are approximate pixel samples (±4 per channel). The font family label "Nanum Barun Gothic" was observed and is self-hosted at 400/700. **Exact hex values, sizes and the weights used on the board are unconfirmed.** Treat everything marked DER as a ZEM_V1 decision, not as the source.
- Never copy photos, characters, the ZEM wordmark, original copy, real data, or map/gift imagery. Use self-written sample text and generic function icons (`zem/lib/icons.js`) only.
- Inactive: IAK orange, dark theme, Pretendard, gem, chrome motif, RAIS naming (`archive/iak/`).

## 1. Setup
```html
<link rel="stylesheet" href="styles.css">        <!-- zem-tokens + zem-ui + zem-shell -->
<script src="zem/lib/icons.js"></script>
<script src="zem/lib/zem-ui.js"></script>          <!-- window.ZEM.{Button,…} -->
```
Light only. Page background `--zem-bg`, surfaces `--zem-surface` (#FFF).

## 2. Colour roles (do not swap)
Roles are observed in the source. Hex values are approximate pixel samples (±4), not source spec values. Tints, shades and text tones are derived (DER).
| Role | Token | Note |
|---|---|---|
| Brand header / hero background | `--zem-header` (role observed · hex ≈#708CF8 estimated) | White text only at 18px bold or larger (3.09:1) |
| Action: CTA, link, focus, selected | `--zem-action` (hex ≈#4368E2 estimated from a button sample) | White text 4.86:1 |
| Action hover/highlight text on soft | `--zem-action-hover` on `--zem-action-soft` | Required for text (the base action colour is 4.04:1, which fails) |
| Progress / data | `--zem-progress` on `--zem-progress-track` | 600 used instead of the observed 500 to reach 3:1 |
| Point icon tiles | cyan-500 · lime-300 · violet-500 · mint-500 | Icon ink uses dark tones (e.g. lime-800). Never used as a text colour |
| Done check | `--zem-point-done` (mint) | |
| Status | success mint-700 · warning orange-700 · error coral-700 · info sky-700 on their 100 backgrounds | |
Do not use yellow as a brand colour, and do not generalise pink or green. Coral/pink are for timetable categories and errors only.

## 3. Type
- Family: `--zem-font` = "Nanum Barun Gothic" (label seen on the board). Self-hosted from `fonts/NanumBarunGothic.ttf` (400) and `fonts/NanumBarunGothicBold.ttf` (700).
- Scale (DER): display 700 28/36 (only 400 and 700 exist — never use other weights) · h1 700 22/30 · h2 700 18/26 · title 700 16/24 · body 400 15/22 · caption 400 13/18 · overline 700 11/16.

## 4. Shape, space, elevation, motion
- Radius: xs 6 · tile 10 · control 12 · card 20 · sheet/header 28 · pill (CTA, chip).
- Spacing is 4-based: 4 8 12 16 20 24 32 40. Page padding 16 (<640) / 24. Gutter 12 / 16 / 24. Columns 4 / 8 / 12 (breakpoints 640 / 1024). Container max 1200.
- Borders: 1px divider, 1.5px control, 2px dashed drop zone. Cards have no border; they are separated by `--zem-shadow-card` (periwinkle-tinted).
- Focus: `outline 2px var(--zem-focus-color)` + `outline-offset 2px`. Always keyboard-visible.
- Motion: 120 (hover) / 180 (focus, menu, toast) / 240 (dialog, progress) ms with `--zem-ease`. Reduced motion is 1ms.

## 5. Layout recipe (375 first)
1. `.zs` shell: bottom tab bar with 4 tabs (<640), a left rail of 88px (640–1023), a sidebar of 220px (≥1024).
2. `.zs-header`: periwinkle, bottom radius 28, profile chip + hero h1 + sub.
3. `.zs-body` overlaps the header by -40px. White `Card`s go in a `.zs-grid` (classes t4/t8 for tablet, d4/d6/d8/d12 for desktop).
4. List rows: `.rows li` = colour tile (40px, radius 10) + title/sub + right side (Badge, check circle, or sm Button).
5. Touch targets are at least 44px. The sm size (32px) is only for dense rows and tables.

## 6. Components (API = `zem/components/*.d.ts`)
Button(variant primary|secondary|danger|text, size sm|md|lg, loading) · TextField / Textarea / Select(label, description, error, required) · Checkbox / Switch(label) · Badge(tone neutral|info|success|warning|error) · Card(title, footer) · Skeleton(width, height, circle) · Icon(name, size, label) · Dialog(trigger, title, description, footer, size, open, onOpenChange) · Menu(trigger, label, items) · Table(caption, columns, rows, rowKey, sort, loading, error, emptyMessage, pageSize, virtual) · Pagination(page, pageCount, onPageChange) · ToastProvider + useToast().notify({tone, title, description, action}) · AlertDialog(title, description, confirmLabel, danger, onConfirm).
Design-only visuals (Point lime button, on-header button, etc.) have no prop. Use the mapping in `zem/foundations/props-map.html`.

## 7. States
Include only the states that make sense for the screen: default · loading (Skeleton/aria-busy) · empty (`.empty` plate + CTA) · error (`.banner` role=alert + retry) · success (toast/banner.ok) · missing data ("—", "미정", "미지정" in `--zem-fg-placeholder`) · long text (`overflow-wrap:anywhere`, keep nowrap only on buttons).

## 8. Patterns
Dashboard, Analytics, Table, Detail, Settings, Billing, AI Chat, Builder, Modal and Empty are **ZEM-style derived extensions**. Never claim they existed in the source. Reference: `zem/patterns/screen.html?p=<key>&s=<state>`.

## 9. Checks before shipping
Run `zem/qa.html`: cases render, no horizontal overflow at 1440/834/375, no elements under 32px at 375, and contrast pairs pass. Do not cite historical IAK scores.


---
Source of truth: `zem/claude-system.md` (this file mirrors it). The inactive archive `archive/iak/` stores its notes as `.md.txt`, and they are not rules.
