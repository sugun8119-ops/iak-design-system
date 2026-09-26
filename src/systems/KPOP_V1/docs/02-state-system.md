# State System

Default → hover → pressed → focus를 구분한다. Focus는 selection 색의 2px outline, offset 3px. Disabled는 native disabled이며 색만 흐리게 하지 않는다. Loading은 aria-busy와 동일 크기 skeleton, Empty는 이유와 reset, Error는 메시지와 retry 및 입력 보존.

Toast: info/success/neutral은 role=status, warning/error는 role=alert. 자동 소멸 없음. 닫기는 44px 이상, 키보드 가능. 알림 발생 시 포커스 이동 없음. 미리보기는 서버 저장 없이 로컬 상태만 바뀐다.

선택 카테고리는 aria-pressed, 현재 탐색은 aria-current, 저장은 aria-pressed와 텍스트로 표시한다. 실제 소셜 계정에 연결되지 않는다.


## Current revision 1.5 · Content discovery

The following supersedes earlier 1.3/1.4 layout and state descriptions. Keep KPOP pink/white/Pretendard and all 30 case categories. Total core components: 16 (13 existing + BrowseTile, CollectionRail, CreatorSpotlight). Main/Sub/Detail remain three template levels; Creator is a Detail variant.

Main: hero → category shortcuts → collection rail → creator entry → latest stories → ranking → schedule. Sub: search → 2-column browse tiles → category tabs → result count → list/empty. Saved is a filtered Sub, not an unrelated Detail page. Detail includes an article and creator variant.

Bottom navigation: Discover / Explore / Saved, original 24px SVG icons with 1.75px strokes and visible labels. Saved stories and followed creator persist with sessionStorage in the current tab; no account or server persistence. Storage-unavailable fallback is explicitly labelled.

Image Direction: original poster, stage-light and collage compositions supplement rings. User-supplied Spotify press images are 2023 reference material, not current 2026 screenshots and not shipped product assets. No real artist/album imagery or source copy is used. See docs/08-reference-1.5.md for mapping and component contracts.

Do: retain the pink masthead and white editorial feed; use artwork and hierarchy for variety; preserve 44px touch targets and visible keyboard focus. Don't: copy Spotify green, logo, icons or content; invent playback for static content; add DB/router or merge project styles.
