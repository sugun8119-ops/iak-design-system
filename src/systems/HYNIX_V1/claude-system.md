# HYNIX_V1 · Relay Control

## STYLE DNA
차가운 회색 작업면 위에 부드럽게 돌출된 장비 타일. 좌측 장비 트리와 중앙 멀티 뷰어가 주인공이며, 주황 액션과 파랑 선택 상태를 분리한다.

참조: [HYNIX_V1 Behance 프로젝트](https://www.behance.net/gallery/107517297/SK-hynix-system-ic-Device-Control-GUI-Design). 2026-09-25 공개 화면 육안 검토.
관찰된 방향: Cool pale-gray raised surfaces with rounded remote-screen tiles; Left equipment tree, compact session strip, multi-view workspace; Orange action emphasis, blue active screens, inset input fields.
정확한 폰트·색상·간격을 원본에서 추출한 패키지가 아니다. 아래 수치는 새로 정한 범용 규칙이다. 원본 로고, 실카피, 고객 이미지, 아이콘, 장비/IP/인물 데이터는 포함하지 않는다. 시스템 ID는 분류용이며 새 제품의 브랜드로 노출하지 않는다.

## Layout
4 device columns above 1200px, 2 at 601–1200px, 1 at <=600px; sidebar stacks at <=900px.
기준 프레임 1440px, 12 columns, gutter 24px.
4px spacing base; 권장 간격 8/12/16/20/24/32/48/64. 콘텐츠가 많아지면 높이를 늘리고 글자를 임의 축소하지 않는다.
데스크톱 사이드바 208px, 주요 작업면 24px 패딩. 선택 장비와 세션 상태는 항상 명시한다. 태블릿은 2열, 모바일은 1열. 모니터링 값과 제어 입력을 시각적으로 분리한다.

## Typography
Pretendard 1.3.9를 기본 글꼴로 사용한다. 실제 WOFF2와 SIL OFL 라이선스를 assets/fonts/에 포함한다. 기존 크기·굵기·행간은 유지한다. Figma에도 공식 Pretendard 9개 굵기를 업로드하고 전체 텍스트와 스타일에 실제 적용했다.
Display/Heading/Title/Body/Meta = 32 / 24 / 18 / 14 / 12px. 제목 700, 본문 400. 정확한 lineHeight는 JSON typography 참조.
한글 제목은 어절 단위 줄바꿈, 긴 ID는 overflow-wrap. 수치는 tabular-nums, 단위와 갱신시각을 함께 표시.

## Color & Shape
canvas #E9EDF3 · surface #F4F6FA · text #202B3D · muted #546277 · border #CAD2DF · accent #A94408 · accentSoft #FFF0DF · selection #235DD2 · success #176648 · warning #885500 · danger #B52C3B · white #FFFFFF
Radius sm/md/lg/xl = 4/8/16/24px.
뉴모피즘은 장비 타일과 입력면에 제한한다. 텍스트·테두리·선택 링으로 대비를 보완한다. 주황은 실행, 파랑은 선택/포커스, 상태는 별도 의미색.

## Image Direction
합성 장비 다이어그램과 자체 제작 차트만 사용한다. 실제 원격 데스크톱 캡처, 고객 설비 이미지, IP 주소를 가져오지 않는다. 화면 비율 16:10.

## Components
공통 source of truth: figma-system.json의 components. Anatomy, variants, Auto Layout, resizing, interaction, token bindings 포함.
- **AppShell**: Session header; equipment sidebar; main workspace. 1440 reference; 208 sidebar; 24 outer margin; 24 gutter. Below 900 stack sidebar as horizontal navigation; below 600 single column.
- **EquipmentTree**: Group; child equipment links; counts. Vertical; 44px rows; 16px child indent; width 208. Use disclosure button and links, keyboard tab order follows visual order.
- **SessionBar**: Workspace name; connection; demo label. Horizontal; space-between; height min 56; wrap on small screens. Reconnecting shows stale timestamp; do not imply live data.
- **DeviceTile**: Generated screen; device name; status; last update. Vertical; gap 12; padding 16; min-width 200; radius 16. Open inspector on activation; offline disables commands, retains history.
- **StatusBadge**: Dot; textual state. Horizontal; gap 4; padding 4/8; hug content. Always show text; unknown is not healthy.
- **MetricCard**: Label; value; unit; supporting text. Vertical; gap 8; padding 20; fill width. Use tabular numerals; unavailable value is em dash.
- **TrendChart**: Title; line; axis units; accessible summary. Fill width; 180px plot; 16px padding. Supply text summary; never encode series only by color.
- **ViewerPanel**: Toolbar; synthetic machine graphic; caption. Vertical; 16:10 viewport; min-width 0. Remote control is integration-only; demo viewport is illustrative.
- **CommandPanel**: Mode; setpoint; primary command; result. Vertical; gap 16; padding 24; min-width 240. Production commands need explicit target and confirmation; demo updates only local state.
- **EventRow**: Time; severity label; description. Horizontal wrapping; gap 16; min-height 48. Chronological list; time and message readable without color.
- **Button**: Label; optional leading icon. Horizontal center; gap 8; min-height 44; padding 12/16. Enter/Space activates; disabled prevents input; visible 2px focus ring.
- **Field**: Visible label; input; help/error. Vertical; gap 8; input min-height 44; fill container. Label linked to input; error text with aria-describedby; never placeholder-only.

## Do
- semantic token을 먼저 사용하고 프로젝트별 변경은 토큰에서 한다.
- 키보드 포커스, 44px 최소 터치 영역, 명시적 상태 라벨을 유지한다.
- loading / empty / error / disabled 상태를 제품 연결 시 구현한다. components.html에 상태 샘플이 있다.
- 콘텐츠와 데이터는 프로젝트에서 새로 공급한다. 데모의 모든 수치는 가상이다.
- 제어는 대상 장비와 변경값을 확인한 후 실행한다. 연결 끊김 시 최신값처럼 표시하지 않는다.

## Don't
- 원본 로고·문구·사진·아이콘·실제 데이터를 재사용하지 않는다.
- 모든 섹션에 강한 그림자, 과도한 라운드, 장식 그라데이션을 반복하지 않는다.
- 색만으로 상태를 구분하거나 작은 글자로 화면 밀도를 해결하지 않는다.
- 요구가 없는 DB, 로그인, Router, API, 상태관리 라이브러리를 추가하지 않는다.
- 데모 버튼이 실제 서버·장비·소셜 계정에 연결된 것처럼 표시하지 않는다.

## Default Pages
| Level | Template | Preview |
|---|---|---|
| Main | Fleet Overview | index.html |
| Sub | Equipment Group | sub.html |
| Detail | Device Inspector | detail.html |

Main → Sub → Detail 링크와 뒤로 가기를 유지한다. `preview/components.html`은 토큰·컴포넌트·상태 카탈로그다.
Main은 그룹/가동 요약과 타일, Sub는 검색 가능한 장비 목록, Detail은 뷰어/트렌드/로컬 제어 데모/이벤트를 보여준다.

## Figma Handoff
이 JSON은 토큰 + 컴포넌트/템플릿 명세이며 네이티브 .fig 파일이 아니다.
1. `HYNIX_V1` Light 컬렉션을 만든다.
2. tokens 경로를 `/`로 펼친다. 색상은 COLOR, px 값은 FLOAT, 폰트는 STRING에 대응한다.
3. typography와 effects로 Text/Effect Styles를 만든다.
4. components의 Auto Layout/variants/anatomy를 따라 핵심 컴포넌트를 만든다.
5. templates의 순서로 Main/Sub/Detail 프레임을 조합한다.
전체 manifest를 토큰 플러그인에 직접 넣지 않는다. 토큰 importer를 쓸 경우 `tokens` 하위 트리와 해당 importer의 지원 타입을 맞춘다.

## Quick Start for Claude
이 문서와 figma-system.json을 함께 컨텍스트로 제공한다. 요청 페이지를 Default Pages 중 선택한 뒤 기존 preview 구조를 재사용한다. 토큰·비율·정보 순서를 유지하고 프로젝트 콘텐츠만 교체한다. 런타임은 정적 HTML/CSS/JS로 시작한다.
`preview/index.html`을 브라우저에서 직접 열면 된다. 설치·빌드 불필요. 데모 상태는 새로고침 시 초기화된다.

## Registered design resources

실제 Figma 파일과 Claude Design 등록 상태는 `integrations.json`, 컴포넌트별 링크는 `figma-components.json`을 참고한다. Figma에서 Templates 페이지의 Main/Sub/Detail 프레임을 복제해 시작한다. 네이티브 Figma는 편집 가능한 로컬 컴포넌트이며 팀 라이브러리 게시는 별도다. HTML preview와 Figma는 동일 토큰과 컴포넌트 계약을 따르는 별도 렌더링 예시이며 픽셀 단위 복제본은 아니다.

## Case structure inheritance

IAK Design Studio는 케이스 항목 구조만 제공한다. 색·서체·간격·라운드·그림자·레이아웃은 이 프로젝트의 figma-system.json을 따른다. IAK/RAIS 시각 토큰을 상속하지 않는다.

`case-coverage.json`은 IAK 원본 30항목의 대응표이며 `preview/cases.html`에서 모두 탐색한다. `docs/`의 7개 문서는 이 프로젝트 전용이다. 원본 감사 점수는 복사하지 않는다.

추가 컴포넌트 **Toast**: info/success/warning/error/neutral, 44px 닫기, 프로젝트 surface/의미색/radius.md 사용. status/alert 구분, 자동 닫기 없음.
