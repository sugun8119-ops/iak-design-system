---
name: rais-design
description: Use this skill to generate well-branded interfaces and assets for the RAIS / Iak Studio dark dashboard design system, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files (`colors_and_type.css` for tokens, `preview/` for system cards, `ui_kits/rais-dashboard/` for ready-to-compose components, `assets/` for brand marks).

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. For the orange accent and shadow/glow system, reach for the CSS custom properties — never invent new colors. The system is dark-first; build on `--bg-elevated`, accent with **one** orange element per visual unit, and use Public Sans / Roboto / Barlow (or Pretendard for Korean copy).

If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
