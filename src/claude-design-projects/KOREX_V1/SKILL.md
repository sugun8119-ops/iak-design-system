---
name: korex-design
description: Use this skill to generate interfaces for KOREX_V1, a light-only industrial/commercial real-estate design system (deep-green brand surfaces, white pages, bold Korean sans, pill category chips, listing cards). Contains tokens, 16 React components, 13 screens and generation rules.
user-invocable: true
---

Read README.md and master/claude-system.md first; master/claude-system.md is the single rule source. Ignore archive/ (inactive previous system, not a rule source). Link `styles.css`, load `master/lib/kx-icons.js` + `kx-ui.js` after React, and compose with `window.KX.*` components. Start new screens from `master/lib/kx-patterns.js`. Use tokens only; never invent colors. Identity is the text wordmark "KOREX". Use fictional sample content only.

If invoked without guidance, ask what the user wants to build, then produce HTML artifacts or production code.
