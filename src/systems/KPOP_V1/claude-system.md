# KPOP_V1 · OFFBEAT

## STYLE DNA
밝은 핑크의 에너지와 흰색 피드의 가독성을 결합한다. 큰 미디어 한 장, 짧은 제목, 작은 메타데이터 순으로 읽히며 카테고리와 콘텐츠 발견이 중심이다.

참조: [KPOP_V1 Behance 프로젝트](https://www.behance.net/gallery/105759817/Kpop-World_App_GUI). 2026-09-25 공개 화면 육안 검토.
관찰된 방향: Saturated pink masthead with category navigation; Large rounded image-led stories with editorial overlays; White and pale-gray feeds, compact author metadata and social actions.
정확한 폰트·색상·간격을 원본에서 추출한 패키지가 아니다. 아래 수치는 새로 정한 범용 규칙이다. 원본 로고, 실카피, 고객 이미지, 아이콘, 장비/IP/인물 데이터는 포함하지 않는다. 시스템 ID는 분류용이며 새 제품의 브랜드로 노출하지 않는다.

## Layout
Single-column 320–480 mobile canvas; max reading width 680 on desktop.
기준 프레임 390px, 4 columns, gutter 16px.
4px spacing base; 권장 간격 8/12/16/20/24/32/48/64. 콘텐츠가 많아지면 높이를 늘리고 글자를 임의 축소하지 않는다.
모바일 좌우 20px. 헤더 → 카테고리 → 피처 → 피드 순서. 카드 전체 라운드는 24px, 작은 썸네일 12px. 하단 탐색은 라벨을 유지하며 콘텐츠를 가리지 않는다.

## Typography
시스템 산세리프: Arial / Apple SD Gothic Neo / Noto Sans KR / sans-serif. 별도 폰트 다운로드 없음.
Display/Heading/Title/Body/Meta = 32 / 24 / 18 / 16 / 12px. 제목 700, 본문 400. 정확한 lineHeight는 JSON typography 참조.
한글 제목은 어절 단위 줄바꿈, 긴 ID는 overflow-wrap. 피드 제목은 두 줄 권장, 상세 제목·본문은 자르지 않는다. 본문 행간 약 1.6.

## Color & Shape
canvas #F3F3F7 · surface #FFFFFF · text #252438 · muted #666478 · border #DDDCE5 · accent #C91C52 · accentSoft #FFEAF1 · selection #C91C52 · success #176648 · warning #885500 · danger #B52C3B · white #FFFFFF
Radius sm/md/lg/xl = 4/12/24/32px.
핑크는 헤더·선택·주요 버튼에 집중한다. 뉴스 본문은 흰색에 짙은 글자. 장식 그라데이션 위에는 읽기용 텍스트를 무작정 올리지 않는다.

## Image Direction
실사용에는 권리가 확보된 공연·문화 사진을 배치한다. Hero 4:5, 상세 16:10, 목록 1:1. 인물 얼굴과 제목이 겹치지 않도록 focal point 지정. 제공 데모는 자체 CSS 추상 그래픽이며 실제 연예인·앨범·고객 이미지는 없다.

## Components
공통 source of truth: figma-system.json의 components. Anatomy, variants, Auto Layout, resizing, interaction, token bindings 포함.
- **MobileShell**: App header; scroll content; bottom navigation. 390 reference; 20 margins; 16 gutter; safe area bottom. Reading view scales to 680 on wide screens; gallery may show 390px frame.
- **AppHeader**: Generic wordmark; section label. Horizontal; min-height 64; padding 16/20. Back returns to feed; header does not obscure keyboard focus.
- **CategoryTabs**: Category buttons and selected underline. Horizontal; min-height 44; overflow auto; gap 8. Buttons expose aria-pressed; filtering is immediate and preserves focus.
- **FeatureStory**: Original media; category; title; metadata. 4:5 hero; 16:10 detail; radius 24; padding 24. Dark overlay behind white text; alt text if informative; link has explicit title.
- **StoryCard**: Media thumbnail; category; title; reading time. List: 88x88 media and flexible text; gap 16; min-height 112. Single descriptive link; avoid nested actions inside links.
- **AuthorMeta**: Initial avatar; generic author; date. Horizontal; gap 8; 32px avatar; 12px metadata. Do not use real artist identity in demonstration content.
- **RankingRow**: Rank; title; generic collection; trend text. Three columns 24/1fr/48; min-height 56. Rank and trend use text, not color alone.
- **ScheduleRow**: Date; event title; time. Horizontal; gap 12; min-height 56. State uses label; event data is fictional in preview.
- **ReactionBar**: Save button; local count or confirmation. Horizontal; gap 12; min-height 44. Save exposes aria-pressed and live status; no implied server persistence.
- **BottomNav**: Discover; category feed; story links. Three equal columns; min-height 64; safe-area padding. Use nav and aria-current=page; always show text labels.
- **Button**: Label; optional leading icon. Horizontal center; gap 8; min-height 44; padding 12/16. Enter/Space activates; disabled prevents input; visible 2px focus ring.
- **Field**: Visible label; input; help/error. Vertical; gap 8; input min-height 44; fill container. Label linked to input; error text with aria-describedby; never placeholder-only.

## Do
- semantic token을 먼저 사용하고 프로젝트별 변경은 토큰에서 한다.
- 키보드 포커스, 44px 최소 터치 영역, 명시적 상태 라벨을 유지한다.
- loading / empty / error / disabled 상태를 제품 연결 시 구현한다. components.html에 상태 샘플이 있다.
- 콘텐츠와 데이터는 프로젝트에서 새로 공급한다. 데모의 모든 수치는 가상이다.
- 읽기 흐름을 우선하고 저장 버튼은 현재 상태를 텍스트와 aria-pressed로 표시한다.

## Don't
- 원본 로고·문구·사진·아이콘·실제 데이터를 재사용하지 않는다.
- 모든 섹션에 강한 그림자, 과도한 라운드, 장식 그라데이션을 반복하지 않는다.
- 색만으로 상태를 구분하거나 작은 글자로 화면 밀도를 해결하지 않는다.
- 요구가 없는 DB, 로그인, Router, API, 상태관리 라이브러리를 추가하지 않는다.
- 데모 버튼이 실제 서버·장비·소셜 계정에 연결된 것처럼 표시하지 않는다.

## Default Pages
| Level | Template | Preview |
|---|---|---|
| Main | Discover | index.html |
| Sub | Category Feed | sub.html |
| Detail | Story Detail | detail.html |

Main → Sub → Detail 링크와 뒤로 가기를 유지한다. `preview/components.html`은 토큰·컴포넌트·상태 카탈로그다.
Main은 피처·순위·일정, Sub는 검색과 카테고리 필터, Detail은 기사·저장 상태·관련 글을 보여준다.

## Figma Handoff
이 JSON은 토큰 + 컴포넌트/템플릿 명세이며 네이티브 .fig 파일이 아니다.
1. `KPOP_V1` Light 컬렉션을 만든다.
2. tokens 경로를 `/`로 펼친다. 색상은 COLOR, px 값은 FLOAT, 폰트는 STRING에 대응한다.
3. typography와 effects로 Text/Effect Styles를 만든다.
4. components의 Auto Layout/variants/anatomy를 따라 핵심 컴포넌트를 만든다.
5. templates의 순서로 Main/Sub/Detail 프레임을 조합한다.
전체 manifest를 토큰 플러그인에 직접 넣지 않는다. 토큰 importer를 쓸 경우 `tokens` 하위 트리와 해당 importer의 지원 타입을 맞춘다.

## Quick Start for Claude
이 문서와 figma-system.json을 함께 컨텍스트로 제공한다. 요청 페이지를 Default Pages 중 선택한 뒤 기존 preview 구조를 재사용한다. 토큰·비율·정보 순서를 유지하고 프로젝트 콘텐츠만 교체한다. 런타임은 정적 HTML/CSS/JS로 시작한다.
`preview/index.html`을 브라우저에서 직접 열면 된다. 설치·빌드 불필요. 데모 상태는 새로고침 시 초기화된다.
