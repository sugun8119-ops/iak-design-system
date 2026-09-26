# KPOP 1.6 · Visual refinement

## What changed
- Replaced specification-only catalog cards with16 live visual specimens and optional contracts.
- Added editorial library introduction, original-art triptych, curated palette and Pretendard specimens.
- Refined section spacing, story alignment, feature overlays and article reading hierarchy.
- Unified control corners12px / media24px, primary touch height48px, selected tile ring and label.
- Added native Figma showcase57:477; reused existing component instances. Grouped template sections and moved the guidance board below all screens to prevent overlap.

## Scope
KPOP only; HYNIX and other project styles unchanged. No new product feature, DB or router. Original assets and fictional copy retained. Spotify2023 images remain references only. Shared system rules do not mean pixel-identical examples in Claude, Figma and HTML.

## Verification
Local Main/Explore/article/creator/catalog checked at320,390,430px: no document horizontal overflow or visible controls below44px. Category selection, save/Saved navigation, follow specimen and toast dismiss/restore checked. Figma exported Main/Sub/Detail/Creator and showcase reviewed; text uses Pretendard. Repository49 tests passed and build passed.

## Feedback scope
KPOP is a systems entry, not one of the regular template registry IDs. The template-workflow CLI validates regular template IDs only, so the verified rule is recorded beside this system in `quality-feedback.json`, rather than creating a duplicate template entry.

## Limits
No physical-device, screen-reader or cross-browser certification. Figma team library remains unpublished and prototype interactions are not wired. Browser demos are functional.
