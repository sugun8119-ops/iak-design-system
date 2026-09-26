# AI Prompt Guide

이 프로젝트의 claude-system.md와 figma-system.json을 먼저 읽고 case-coverage.json에서 필요한 케이스를 찾으세요. KPOP_V1의 독립 시각 스타일로 Main/Sub/Detail 중 요청한 화면을 만드세요. IAK Design Studio는 케이스 항목 구조만 제공한다. 색·서체·간격·라운드·그림자·레이아웃은 이 프로젝트의 figma-system.json을 따른다. IAK/RAIS 시각 토큰을 상속하지 않는다.

기존 컴포넌트와 토큰을 재사용하며 콘텐츠만 새로 공급합니다. 새 업무 케이스가 필요하면 의도적 추가로 기록합니다. DB/Router/API 연동은 요청 없으면 추가하지 않습니다.


## Quality revision 1.4 · 2026-09-26

콘텐츠 아트 방향: Music pink / Stage blue / Culture green. 이는 콘텐츠 그래픽 팔레트이며 브랜드와 상태 토큰은 기존 값을 유지한다. Main은 hero → Latest stories 2개 → ranking → 일정으로 구성한다. 제목·카테고리·읽기 시간은 상세 화면과 일치시킨다. 웹 일정은 월/일 블록과 내용 열, Figma 일정은 기존 ScheduleRow 인스턴스를 재사용한다.

BottomNav는 자체 제작 compass/feed/bookmark 24px, stroke 1.75px 아이콘과 텍스트를 조합한다. SVG는 장식이고 접근 가능한 이름은 텍스트가 제공한다. active는 연분홍 배경과 aria-current로 표시하며 웹 링크 높이는64px, Figma 항목64px/전체96px다. 미디어 없음 변형은 그래픽 대신 중립 플레이스홀더를 유지한다.


## Current revision 1.5 · Content discovery

The following supersedes earlier 1.3/1.4 layout and state descriptions. Keep KPOP pink/white/Pretendard and all 30 case categories. Total core components: 16 (13 existing + BrowseTile, CollectionRail, CreatorSpotlight). Main/Sub/Detail remain three template levels; Creator is a Detail variant.

Main: hero → category shortcuts → collection rail → creator entry → latest stories → ranking → schedule. Sub: search → 2-column browse tiles → category tabs → result count → list/empty. Saved is a filtered Sub, not an unrelated Detail page. Detail includes an article and creator variant.

Bottom navigation: Discover / Explore / Saved, original 24px SVG icons with 1.75px strokes and visible labels. Saved stories and followed creator persist with sessionStorage in the current tab; no account or server persistence. Storage-unavailable fallback is explicitly labelled.

Image Direction: original poster, stage-light and collage compositions supplement rings. User-supplied Spotify press images are 2023 reference material, not current 2026 screenshots and not shipped product assets. No real artist/album imagery or source copy is used. See docs/08-reference-1.5.md for mapping and component contracts.

Do: retain the pink masthead and white editorial feed; use artwork and hierarchy for variety; preserve 44px touch targets and visible keyboard focus. Don't: copy Spotify green, logo, icons or content; invent playback for static content; add DB/router or merge project styles.
