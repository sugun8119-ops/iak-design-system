# HYNIX_V1 · Relay Control 1.5

## STYLE DNA
Industrial / Device Control / Monitoring. IAK shares its 30 case categories only; visual identity remains specific to this project. Pale cool-gray canvas #E9EDF3, raised equipment tiles, flat analytical panels. Orange #A94408 means action; blue #235DD2 means selection/focus. Navy #162337 is for charts and device viewports. Never copy customer branding, photos, icons, copy or operational data.

## Layout
Main: four KPIs → attention summary → time series + state history → device cards. Sub: search + connection/attention filters → table/cards → explicit empty state. Detail: Overview / Telemetry / Events tabs → viewer and separate local command form. Main/Sub/Detail are the three default page levels. Sidebar 208px; workspace 32px; panel 24px; related gap 16px; major gap 24/32px. At 1100px use two KPI/device columns and stack analysis; at 800px horizontal navigation; at 480px single column. Scroll wide data tables inside a labelled region only.

## Typography
Self-hosted Pretendard 1.3.9, SIL OFL included in assets/fonts. Body 14px/21px; metadata 12px/18px; section 20px/28px; page 32px/40px. Catalogue display may use 48px. Values 36px/48px with tabular figures. Never shrink operational text below 12px. Use Korean explanatory copy and concise English operational labels.

## Image Direction
Original SVG charts and CSS device schematics only. No photography, customer logos, remote desktop screenshots or decoration that implies a live connection. Navy panels carry crisp lines, labelled thresholds and explicit units. Earlier Figma schematic variants remain compatible and editable.

## Components
AppShell, EquipmentTree, SessionBar, DeviceTile, StatusBadge, MetricCard, TrendChart, ViewerPanel, CommandPanel, EventRow, Button, Field, Toast, SegmentTabs, ProgressMeter, StateTimeline, TelemetryTable (17).
SegmentTabs: linked tab/panel IDs and Arrow/Home/End navigation. ProgressMeter: 0 is valid; null is unavailable. StateTimeline: interval length reflects duration; missing spans are explicit. TelemetryTable: connection and health are separate columns. Existing EquipmentTree is optional in the compact monitoring shell.

## State system
Alarm / Critical / Warning / Success / Info / Neutral use symbol + text + color. Offline is a connection status and cannot establish equipment health. Selection is independent of severity. Focus uses visible blue outline. Every interactive control is at least 44px; badges are noninteractive. No automatic blinking. Reduced motion supported.
All data is a fixed synthetic snapshot, 26 SEP 2026 09:42 KST. Six modules, five online: 03 Warning, 05 Critical, 06 Offline. Current unavailable data is an em dash. Last seen is 09:38 for 06. Online utilization values 64/72/86/55/91 average 73.6%, rounded to 74%. Thresholds 85% load and 75°C critical temperature are demo policies, not industrial standards.

## Do / Don't
Do keep the scope, unit and timestamp beside metrics; provide chart text summaries; make missing data explicit; preserve input after validation. Do use real links and semantic controls. Do not add DB/router/API to this starter; imply actual remote control; turn unknown into zero; reuse original customer assets; or apply KPOP/IAK Brand styling.

## Default Pages
preview/index.html — Main, fleet overview.
preview/sub.html — Sub, searchable and filterable equipment, table/card toggle.
preview/detail.html?device=06 — Detail, offline example with commands disabled.
preview/components.html — 17 component specimens and usage contracts.
preview/cases.html — existing 30-case coverage catalogue.
Current browser implementation: industrial.css + industrial.js. Legacy styles.css/app.js remain for the 30-case catalogue. Figma page 24 Monitoring Templates 1.5 is current; page 20 preserves the earlier revision. Native Figma templates are static editable compositions; runtime interactions are verified in the HTML preview.

## Reference normalization
Siemens iX Badge, Tabs, Card and KPI informed status semantics and component organization; Grafana examples informed time-series and state-history structure. Their branded palette, icons, layouts and data are not bundled. These are newly authored interpretations, not extracted source tokens.
