---
name: kosaf-v1-design
description: Use this skill to generate well-branded interfaces and assets for KOSAF_V1 (농산물 온라인 도매시장), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for protoyping.
user-invocable: true
---

Read the readme.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Key rules:
- Link `styles.css`; use `--kosaf-*` tokens. Noto Sans KR 400/500/700, light mode only.
- 46 components in `components/` (11 Figma masters + 35 source-derived/extension). Check provenance in each card/prompt.md before claiming a Figma master. Start from `ui_kits/` (10 kits, PC + Mobile).
- Primary #059B00 → hover #02AC5A; focus 2px #0047ED; danger #E23736 → #FF5858; strokes 1px #DDDDDD; radius 5 for controls.
- Heights: Button 34/42/45/50/70, Input 45, Search 579×50 r25, TableRow 70 desktop / 50 mobile. Desktop 1920, mobile 390–391 as separate layouts.
- Assets: 11 source SVG icons (`<Icon>`), logo PNG 1:86099, 2 product photos. Do not draw other icons/logos; use placeholder slots. Korean, plain administrative copy, no emoji.
- Traceability: `docs/source-map.md`, `docs/migration-qa.md`, raw exports in `docs/source/`.
