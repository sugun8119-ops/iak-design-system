<!-- Current release: 1.5.0. See the Current revision 1.5 section for the active discovery and persistence contracts. -->
# KPOP_V1 project entrypoint

Read `claude-system.md` and `figma-system.json` before generating UI.
Use only this system's tokens and components. Start with `preview/index.html`, `sub.html`, or `detail.html`. Do not mix IAK Brand/RAIS styling into this independent system.
Keep plain HTML/CSS/JS unless the user requests another stack. All sample content/data is fictional. Replace content with project-owned assets; do not copy original client logos, copy, photographs or icons.
Reference `preview/components.html` for states. Preserve visible labels, keyboard focus, minimum 44px controls, responsive reading order, and explicit demo-only behavior.


IAK Design Studio는 케이스 항목 구조만 제공한다. 색·서체·간격·라운드·그림자·레이아웃은 이 프로젝트의 figma-system.json을 따른다. IAK/RAIS 시각 토큰을 상속하지 않는다. 케이스 항목은 case-coverage.json 및 preview/cases.html, 운영 규칙은 docs/를 확인한다.


## Current revision 1.5 · Content discovery

The following supersedes earlier 1.3/1.4 layout and state descriptions. Keep KPOP pink/white/Pretendard and all 30 case categories. Total core components: 16 (13 existing + BrowseTile, CollectionRail, CreatorSpotlight). Main/Sub/Detail remain three template levels; Creator is a Detail variant.

Main: hero → category shortcuts → collection rail → creator entry → latest stories → ranking → schedule. Sub: search → 2-column browse tiles → category tabs → result count → list/empty. Saved is a filtered Sub, not an unrelated Detail page. Detail includes an article and creator variant.

Bottom navigation: Discover / Explore / Saved, original 24px SVG icons with 1.75px strokes and visible labels. Saved stories and followed creator persist with sessionStorage in the current tab; no account or server persistence. Storage-unavailable fallback is explicitly labelled.

Image Direction: original poster, stage-light and collage compositions supplement rings. User-supplied Spotify press images are 2023 reference material, not current 2026 screenshots and not shipped product assets. No real artist/album imagery or source copy is used. See docs/08-reference-1.5.md for mapping and component contracts.

Do: retain the pink masthead and white editorial feed; use artwork and hierarchy for variety; preserve 44px touch targets and visible keyboard focus. Don't: copy Spotify green, logo, icons or content; invent playback for static content; add DB/router or merge project styles.
