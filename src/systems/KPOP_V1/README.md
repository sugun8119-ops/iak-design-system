# KPOP_V1 · OFFBEAT 1.5

Independent Mobile / Entertainment / Content design system. Pink masthead, white editorial feed, Pretendard. IAK provides the existing 30 case categories only.

- [Live preview](https://sugun8119-ops.github.io/iak-design-system/systems/KPOP_V1/preview/index.html)
- [Claude Design](https://claude.ai/design/p/b9b13fc9-3a4a-4815-b091-5eab5b27fa26)
- [Figma templates](https://www.figma.com/design/VR9GFAKIFEjLWuQonbJVYv?node-id=3-18)

## Start here
Read `claude-system.md`, then `figma-system.json`. Open `preview/index.html` through a static HTTP server. No build step, database or router is needed for this system's preview.

## Contents
- `figma-system.json`: tokens, 16 core components and Main/Sub/Detail contracts.
- `claude-system.md`, `CLAUDE.md`: generation rules and project entry point.
- `preview/`: Main, Explore, article/creator Detail, components, 30 cases and current Figma PNG exports.
- `assets/`: licensed Pretendard fonts, original abstract graphics and navigation icons.
- `docs/`: rules, components, states, layouts, QA, prompts, changelog and reference mapping.
- `figma-components.json`: editable native Figma component source map.
- `case-coverage.json`: 30-case coverage.
- `integrations.json`, `qa-results.json`: actual integration and verification records.

## Revision 1.5
Adds BrowseTile, CollectionRail and CreatorSpotlight. Main gains compact category shortcuts and curated collections. Explore gains two-column categories, search counts and Saved. Detail retains reading and adds a creator variant with follow and related content. Save/follow are current-tab sessionStorage demos, with a storage-blocked fallback.

The six user-selected Spotify 2023 press images inform content hierarchy only. Their logos, photos, album covers, copy and icons are not included. Newly authored poster, stage-light and collage graphics provide reusable placeholders.

## Use and limits
Suitable for K-pop editorial discovery, creator magazines, entertainment news and fan-content hubs. All demo data is fictional. The three surfaces share system rules but are separately authored, not pixel-identical copies. Figma is editable and has local components; team-library publication and interactive prototype wiring are not enabled. Browser previews contain actual demo interactions. See `qa-results.json` for checked and unverified behavior.
