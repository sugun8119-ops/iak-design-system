# RAIS · Change Log

Reverse-chronological. Every patch logged with date, scope, files touched.

---

## 2026-05-10e · System operationalisation
**Scope.** Non-destructive: documentation + token JSONs only. No visual change.
**Added.**
- `tokens/colors.json` — semantic colour tokens with state variants.
- `tokens/typography.json` — type-role tokens.
- `tokens/spacing.json` — spacing / radius / shadow / glow / focus.
- `docs/00-design-rulebook.md` — five non-negotiables, do/don't.
- `docs/01-component-guide.md` — naming convention + component specs.
- `docs/02-state-system.md` — twelve-state matrix + animation specs.
- `docs/03-layout-patterns.md` — ten templates + responsive grid.
- `docs/04-qa-checklist.md` — handoff checklist.
- `docs/05-ai-prompt-guide.md` — Claude/AI re-generation rules.
- `docs/06-changelog.md` (this file).
- `index.html` — system hub linking everything.

## 2026-05-10d · Brand mark page refinement
**Scope.** `preview/brand.html`.
- Restored bad-treatment previews (stretched / cropped / tinted) inside Don't tiles.
- Renamed rule list classes (`.rule-col.is-do` / `.rule-col.is-dont`) to break collision with tile `.dont`.
- DO/DON'T columns now sit in matched boxes (neutral / red-tint).

## 2026-05-10c · Brand mark page rebuilt to documentation-only
**Scope.** `preview/brand.html`.
- Removed chrome-motif overlay and blue-glow background from guideline cards.
- Aligned all logo cards (24 px padding, vertical-centre logo, baseline-aligned meta).
- Logo previews +15 % (sidebar) / +10 % (identity).
- Don't cards: subtle red tint, low-opacity red border, solid-fill DON'T badge.

## 2026-05-10b · Pretendard-only typography
**Scope.** `colors_and_type.css`, every `preview/*.html`, `ui_kits/rais-dashboard/index.html`.
- Roboto / Barlow / Public Sans removed.
- Pretendard wired across weights 100 – 900 via local `@font-face`.
- Google-Fonts `<link>` tags stripped from every preview & kit.
- Weight ladder: display 700–800 / section + card 600–700 / body 400–500 / caption 400.

## 2026-05-10a · Update Rules patch (initial)
**Scope.** Non-destructive. 5 rule areas.
- **Iconography** — single Eva + Solar solid family across sidebar / topbar / cards / inputs / toasts / empty states.
- **Toast** — icon plate moved from circle to rounded-square (`radius/md`).
- **Focus** — outer halo replaced by 1 px accent border + inset 1 px ring.
- **Brand mark** — gem logo (identity) and chrome motif (decorative) split into two asset families with separate Do/Don't.
- **Buttons** — focus state subtle (border + inset, no outer stroke); hover responsive not illuminated.

## 2026-05-09 · Initial RAIS Design System
**Scope.** Bootstrap from Figma `RAIS_State_System` page.
- Colour palette (orange primary, info/success/warning/error roles, grey scale).
- Pretendard fonts copied locally; legacy Google fonts loaded.
- Foundation, Core Screens, Component System, State System scaffolding.
- `ui_kits/rais-dashboard/` reference Mailing dashboard.
- 19 preview cards under `preview/`.
