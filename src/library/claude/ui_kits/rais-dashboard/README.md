# RAIS Dashboard — UI Kit

A high-fidelity recreation of the **RAIS State System** dashboard from the source Figma.

## What's here
- `index.html` — the dashboard prototype. Sidebar nav, top bar with search + bell + avatar, KPI row, mailing campaign workflow with stepper, recipient table.
- `Sidebar.jsx` — fixed left nav (280 px).
- `TopBar.jsx` — header bar (72 px) with command-K search, bell, avatar.
- `MetricCard.jsx` — single-stat card.
- `Stepper.jsx` — horizontal three-step indicator (Active / Disabled / etc).
- `Toast.jsx` — snackbar component, 5 severities.
- `Button.jsx`, `Field.jsx`, `Chip.jsx` — form primitives matching the State System matrix.

All components reach for tokens from `../../colors_and_type.css`. Compose them — don't extend. The kit is presentational; wire your own state.

Open `index.html` directly to see the kit running.
