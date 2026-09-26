# KPOP 1.5 · Content discovery

2026-09-26. User-selected references are six Spotify press images whose filenames identify them as 2023 assets. They are not evidence of a 2026 Spotify mobile refresh.

Primary style remains the independently normalized Behance Kpop World direction: pink masthead, white editorial feed, Pretendard, original content and artwork. IAK contributes only its existing 30 case categories.

## Reference mapping
- 5-phones / only-music: compact category shortcuts, two-column browse tiles, curated collection rail, saved list.
- Phone-Artist: large creator media, name overlay, metadata, follow action and related content. Implemented as a Detail variant, not an extra top-level template.
- NPV / 3-phones: media-first hierarchy. No fake audio playback.
- Phone-pattern: composition reference only; diagonal device mockups do not become application UI.

## Components and layout
BrowseTile: 2 columns, 12 gap, 12 radius, 16 padding, category/selected/saved states; text remains readable without media.
CollectionRail: 156px cards, 12 gap, square media, horizontal scrolling confined to the rail, keyboard-visible focus.
CreatorSpotlight: 4:5 media, 24 radius, title overlay, metadata, 48px follow action. Detail retains article variant.
Main: heading > hero > shortcuts > collections > creator entry > latest stories > ranking > schedule.
Sub: search > browse grid > category tabs > count > results. Saved uses the same list with a filter.
Detail: article and creator variants. No DB/router. Saved/follow use sessionStorage in the current tab, with graceful fallback when storage is blocked.

## Image direction
Newly authored poster, stage-light and collage SVG compositions complement the existing ring artwork. Source Spotify logos, people, covers, copy and icons are not distributed or embedded in previews. The uploaded reference images stay in the Claude project as reference material only.

## Integration status
Claude is the first authoring surface. Figma and GitHub status must be recorded only after each actual update and validation.

## Surface contracts
The GitHub preview, Claude templates and Figma frames are separately authored examples of the same system, not pixel-identical generated copies. Figma has native editable components and variables; its frames are not wired as an interactive prototype. The browser preview implements search, saved stories and follow state. Claude carries additional long-content stress fixtures.

## Recommended use
K-pop editorial discovery, artist/creator magazines, entertainment news, curated cultural content and fan-content hubs. Replace fictional content with project-owned material; playback, authentication, moderation and subscriptions require product-specific implementation.
