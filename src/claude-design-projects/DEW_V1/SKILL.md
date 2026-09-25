---
name: dew-design
description: Use this skill to generate interfaces and editorial pages in the DEW_V1 light editorial design system (white paper, black serif mastheads, red CTA, thin rules, angular cards).
user-invocable: true
---

Read `readme.md` and `dew/claude-system.md` (generation rules) first. Tokens live in `dew/tokens.css` (via `styles.css`); components in `dew/components/`; editorial parts in `dew/lib/editorial.js`; patterns in `dew/patterns/`.

Rules: light only; black #111 type on white; red #E1261C only for one primary CTA/overline/highlight; radius 0; thin rules; Libre Caslon Display/Text + Roboto + Noto Sans KR. Never apply archived IAK/RAIS rules (orange, dark UI, Pretendard, gem mark) from `archive/`.

If invoked without guidance, ask what they want to build, then output HTML artifacts or production code accordingly.
