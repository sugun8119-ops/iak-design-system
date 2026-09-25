# UI kit — KOSAF_V1 / Core Components board (218:570)

Rebuild of the management board `SZ7AweGiHxzEDmEmuNi3LY / 218:570` using the 11 React components. Positions (x/y) come from `docs/source/kosaf-component-geometry.json`; every component instance is the real system component with its state forced.

- Verified against: geometry export (82 nodes) + `assets/reference/core-components-218-570.png`.
- Board background uses `--kosaf-color-bg-subtle` (the frame fill is not in the export; chosen from the capture).
- Additions not in the Figma board: a "live" checkbox/radio row (y=670) and a live 1–5 pagination row (x=780) to demonstrate interaction. Tabs and Stepper are clickable.
