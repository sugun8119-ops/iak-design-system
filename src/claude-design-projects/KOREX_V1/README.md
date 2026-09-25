# KOREX_V1 · Project Design System

Light-only design system for an industrial and commercial real-estate site and partner console. It is based on qualitative observation of the Behance "KOREX Brand Website UXUI Design" (see `master/source-observations.md`). Every exact value is a derived-design-value.

## Look
Deep-green brand surfaces (hero, search panel, sidebar, stat panel) on white and light-grey pages. Bold Korean sans (Noto Sans KR as the derived substitute). Green rectangular primary and outline CTAs, pill category chips, mint icon tiles, listing cards with the photo on the left, outline heart save toggle. Wide whitespace.

## Files
- `colors_and_type.css` holds the tokens. `styles.css` is the entry point (tokens + `master/lib/kx-ui.css` + `kx-shell.css`). `tokens/*.json` holds the same tokens as JSON.
- `master/lib/` contains `kx-ui.js` (16 React components), `kx-icons.js` (line icons), `kx-patterns.js` (13 screens), `kx-specs.js` / `kx-card.js` (card specs).
- `master/preview/` has the 16 component cards plus `.jsx`/`.d.ts` exports. `master/patterns/` has 10 pattern cards plus `screen.html`.
- `ui_kits/korex-site`, `korex-console` and `korex-inquiry` are the three UI kits.
- `master/figma-system.json`, `claude-system.md`, `coverage.json` and `source-observations.md` are the handoff files.
- `index.html` is the system hub for all 62 items. `master/index.html` is the integrated preview (screen × state × 1440/834/375).
- `archive/iak-master/` holds the previous IAK/RAIS system. It is inactive and no longer registered as cards.

## Components
- Button
- TextField
- Textarea
- Select
- Checkbox
- Switch
- Badge
- Card
- Skeleton
- Icon
- Dialog
- Menu
- Table
- Pagination
- Toast (ToastProvider)
- AlertDialog

## Rules
See `master/claude-system.md`.
