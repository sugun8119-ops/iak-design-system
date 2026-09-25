# IAK KIDS_V1 · Little Everyday — rules for generating screens

Use this when Claude (or any generator) builds screens with this design system. If a rule here conflicts with an older chat summary or a ZEM_V1 / IAK Master document, this file and the actual CSS/API win.

## 0. Identity
- Name: **IAK KIDS_V1 · Little Everyday** (v2.2). Kids/Friendly light mobile system. Identify it with the text "Little Everyday" or "IAK KIDS_V1" only. No logos, mascots or characters.
- Palette: Leaf green / Sky blue / Playful purple / Sand cream — an original accessible palette. Pokopia was only a mood reference for bright, calm nature colours: **no game characters, logos, images or screens.**
- Never use ZEM source assets or ZEM-specific screen/component combinations (periwinkle curved header + overlapping cards, etc.). ZEM_V1 v1 material is inactive history in `archive/zem-v1/`.
- Colour source of truth: `zem/figma-system.json` → `foundation.colors`, emitted as `zem/lib/iak-kids-tokens.css`.

## 1. Setup
```html
<link rel="stylesheet" href="styles.css">   <!-- iak-kids-tokens + zem-tokens(role aliases) + zem-ui + zem-shell -->
<script src="zem/lib/icons.js"></script>
<script src="zem/lib/zem-ui.js"></script>     <!-- window.ZEM.{Button,…} (namespace kept for compatibility) -->
```
The `zem/` paths, `--zem-*` role names and `window.ZEM` are a **compatibility API only**, not a brand. New work should prefer `--iak-kids-*` semantic tokens.

## 2. Colour roles (62 semantic tokens — never swap by nearest old hue)
| Role | Token | Value | On-colour |
|---|---|---|---|
| Page | `--iak-kids-background-canvas` / `-alternate` | #FFF9E8 / #F4F0DD | text-primary #293F2D |
| Card / raised | `--iak-kids-surface-default` / `-raised` | #FFFFFF | text-primary / text-secondary #50634C |
| Primary action | `--iak-kids-primary-default → -hover → -pressed` | #487538 → #39612C → #2B4D23 | white |
| Secondary action | `--iak-kids-secondary-default → -hover → -pressed` | #9DDCED → #83CDE2 → #6BBBD3 | **#184957** (never white) |
| Accent | `--iak-kids-accent-default → -hover → -pressed` | #7954AD → #684395 → #56347F | white |
| Danger | `--iak-kids-status-error-solid → -hover → -pressed` | #B34B37 → #983B2B → #7E2E21 | white |
| Soft fills | `primary-soft / secondary-soft / accent-soft` | #EAF4CA / #E5F6FB / #F0E8F8 | matching `*-on-soft` |
| Status | `status-{success,warning,error,info}-{foreground,background,solid,on-solid}` | see token card | always with text/icon |
| Selected | `--iak-kids-state-selected` + `primary-on-soft` text + primary indicator line | #EAF4CA | #2B4D23 |
| Hover (neutral) | `--iak-kids-state-hover` | #F4F0DD | |
| Disabled | `state-disabled-background` / `state-disabled-text` | #E5E6D8 / #626B56 | |
| Focus | `--iak-kids-border-focus` 3px + `state-focus-gap` 2px | #7954AD + #FFFFFF | |
| Borders | `border-subtle` (decorative only) · `border-default` (inputs, checkboxes, switch track) · `border-strong` (hover) | #D9DFC6 · #7A8469 · #50634C | |
| Progress | `progress-fill` on `progress-track` | #487538 on #EAF4CA | |
| Overlay | `overlay-scrim` | #293F2D7A | |
Contrast: small text ≥ 4.5:1; required control boundaries, focus and progress ≥ 3:1. `border-subtle` never carries meaning. Disabled controls are exempt from WCAG contrast requirements; our internal disabled-text target is 3:1 (current pair 4.43:1).

## 3. Type
- Web: `--zem-font` = "Nanum Barun Gothic", self-hosted `fonts/NanumBarunGothic.ttf` (400) + `NanumBarunGothicBold.ttf` (700). Only 400 and 700 — Figma "600" renders as 700.
- Figma file uses **Pretendard** (Figma-side only; never load it on web).
- Scale: display 700 28/38 · h1 700 24/32 · h2 700 18/26 · title 700 16/24 · body 400 16/26 · caption 400 13/20 · overline 700 12/16.
- Korean line breaking: `word-break: keep-all` globally + `overflow-wrap: break-word`; `anywhere` only inside narrow chips/badges/labels. `text-wrap: balance` for headings, `pretty` for paragraphs.

## 4. Shape, space, elevation, motion
- Radius: sm 8 · md 12 (buttons, inputs, tiles) · lg 16 (cards, tables, toasts) · xl 24 (dialogs) · pill only for switch/progress/profile chip.
- Spacing 4 8 12 16 20 24 32 40. Mobile margin 20, gutter 12, 4 columns (ref 390, min 320). 640+: 8 cols, 24/16. 1024+: 12 cols, gutter 24. Container 1200.
- Cards: white + 1px `border-subtle` + `--iak-kids-shadow-card`. Menus/toasts: `shadow-raised`. Dialog: `shadow-modal`.
- Motion 120 / 180 / 240 ms, ease cubic-bezier(.2,.8,.2,1); reduced motion → 1ms.

## 5. Layout recipe (375 first)
1. `.zs` shell: floating BottomNavigation (<640, 4 text+icon tabs, 72px), rail 96px (640–1023), sidebar 232px (≥1024). Selected tab = selected background + indicator line + bold.
2. `.zs-header` = TopAppBar on canvas with dark title; profile chip (secondary-soft) + h1 + sub. No curved coloured header, no card overlap.
3. Cards in `.zs-grid` (t4/t8 tablet, d4/d6/d8/d12 desktop).
4. Rows: soft tile (40px, radius 12, role-soft background + on-soft ink) + title/sub + right side (Badge, check circle, sm Button).
5. Touch targets ≥ 44px (buttons/inputs 48). sm 36 only in dense rows/tables.

## 6. Components (API = `zem/components/*.d.ts`)
Button(variant primary|secondary|accent|danger|text, size sm|md|lg, loading) · TextField / Textarea / Select(label, description, error, required) · Checkbox / Switch(label) · Badge(tone neutral|info|success|warning|error|accent) · Card(title, footer) · Skeleton · Icon · Dialog · Menu · Table · Pagination · ToastProvider + useToast() · AlertDialog.
Figma component names map as: TopAppBar → .zs-header · BottomNavigation → .zs-tabbar/.zs-rail · ProfileCard → .ava + Card · StatusCard → Card + .banner/Badge · ActionCard → Card + Button · ProgressCard → Card + .prog · ScheduleItem/SettingRow → .rows li · Toggle → Switch · FriendlyModal → Dialog/AlertDialog.

## 7. States
default · hover (*-hover / state-hover) · pressed (*-pressed, scale .98) · focus-visible (3px accent + white gap) · disabled (#E5E6D8/#626B56) · loading (Skeleton / aria-busy) · empty (.empty + CTA) · error (.banner role=alert + retry) · success (toast / .banner.ok) · selected · missing data ("—", "미정" in text-muted). Status is never colour-only.

## 8. Patterns
Dashboard, Analytics, Table, Detail, Settings, Billing, AI Chat, Builder, Modal, Empty are Little Everyday compositions of the 16 components — examples, not external service screens. `zem/patterns/screen.html?p=<key>&s=<state>`.

## 9. Checks before shipping
Open `zem/qa.html` in the current environment: all cases render, no horizontal overflow at 1440/834/375, no targets under 36px at 375, 66 contrast pairs pass, Nanum 400/700 loaded. Never cite uploaded or historical QA records as current results.
