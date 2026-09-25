# DEW_V1

용도: **Editorial / Premium / Content Web** · v1.3

> **IAK = coverage only · DEW = visual authority.** IAK Design Studio의 16 공통 family는 “어떤 항목·상태가 있어야 하는가”의 체크리스트로만 쓴다. 색·서체·간격·모서리·그리드·구성은 모두 DEW 값이다. IAK 다크 테마·오렌지·Pretendard·둥근 SaaS 카드는 쓰지 않는다. 원본에 없던 모든 것은 **derived-extension**으로 표시한다(`coverage.md`).

## 적용 규칙
`figma-system.json`의 foundation 값을 기준으로 작업한다. 색·타입·간격을 임의로 늘리지 않는다. 브랜드명, 콘텐츠, 제품 정보는 새 프로젝트의 것으로 교체한다. 이 문서를 디자인 작업 지침으로 사용하고 JSON을 함께 제공한다.

## Style DNA
따뜻한 바탕, 세리프 헤드라인, 작은 메타데이터, 비대칭 편집 그리드. 빨강(`accent`)은 선·장식 포인트로만 — 글자색으로 쓰지 않는다(eyebrow 글자는 textPrimary, 앞에 16×2px accent 선). 민트는 보조 면에만 사용한다.

## Layout / Typography / Image
- 데스크톱 12열 / 최대 콘텐츠 1200 / gutter 24, 태블릿 8열 / 20, 모바일 4열 / 16.
- 프레임 1440·834·390, 페이지 좌우 여백 48·32·24. 1024 이상 desktop, 768 이상 tablet, 나머지 mobile.
- 메인 피처는 5:7 비대칭 분할. 세리프는 display와 heading, 산세리프는 제목·본문·탐색에 사용한다. 목록 3열 → 2열 → 1열.
- 패션·문화·라이프스타일 사진을 넓게 크롭하고 사진과 여백으로 편집 리듬을 만든다.
- 미리보기의 도형은 직접 작성한 미디어 자리표시자다. 실제 프로젝트에서 사용권이 있는 사진으로 교체한다.
- 서체 매핑: Figma — Serif = Noto Serif KR Medium(display, heading), Sans = Inter(title, body, meta; 기존 Figma 스타일과 일치). 웹 — `Georgia, "Noto Serif KR", serif` / `Arial, "Noto Sans KR", sans-serif`. 크기·행간·굵기는 같지만 서체가 달라 자폭이 다르고 줄바꿈이 달라질 수 있다. Inter에는 한글 글리프가 없어 Figma 한글 본문은 대체 글꼴로 그려진다. 폰트 파일은 미포함.

## Components
| 이름 | 규격 | 변형 / 상태 |
|---|---|---|
| EditorialHeader | 가로 Auto Layout, 양끝 정렬, 최소 높이 80; 모바일 wrap | Default |
| CategoryNav | 가로 Auto Layout, gap 24; 모바일 wrap | Default, Selected, Hover, Focus |
| FeatureStory | 12열 중 텍스트 5열 + 미디어 7열; 모바일 세로 | Default |
| StoryCard | 세로 Auto Layout, gap 16, 테두리 없는 이미지 우선 구성 | Default, Hover, Focus |
| MediaCard | 세로 Auto Layout; 이미지 4:3 또는 3:4 | Landscape, Portrait |
| EditorialGrid | 큰 feature 1개 + 보조 2개 또는 3열; 모바일 1열 | Feature, ThreeColumn |
| QuoteBlock | 세로 Auto Layout, padding 48; 모바일 24 | Default |
| ImageCaption | 가로 Auto Layout, gap 8; meta 스타일 | Default |
| ArticleMeta | 가로 Auto Layout, gap 16, wrap; meta 스타일 | Default |
| EditorialCTA | 가로 Auto Layout, 높이 최소 44, 밑줄 텍스트 | Default, Hover, Focus |
| Footer | 가로 Auto Layout, 양끝 정렬, 상단 선; 모바일 세로 | Default |

상호작용 요소는 hover 시 밑줄 또는 색 변화, focus 시 2px 외곽선과 4px offset을 사용한다. 모든 입력에 label, 버튼에 읽을 수 있는 이름을 제공한다. 클릭 영역은 최소 44px. 모바일에서 정보를 숨기지 않는다. 얇은 border는 구획용이며 입력 경계는 textSecondary로 구분한다.

## 계승과 확장
- 계승(정규화본 v1.0): 팔레트 7, 타입 5, spacing 9, radius 3, 그리드·반응형, editorial 11, 템플릿 3. 공개 Behance 썸네일과 합의 방향을 바탕으로 정규화한 재사용 값이며 원본에서 정밀 추출한 값이 아니다.
- derived-extension(v1.1): 공통 16 family, 템플릿 상태 14, 아이콘 27, `scrim`, 이미지 누락·로딩, AlertDialog 오류+재시도, ArticleList 정렬 Menu·Pagination, 컨트롤 높이·대화상자 폭·모션·한글 줄바꿈.

## v1.3 — IAK 138 케이스 (derived-extension)
- 16 family × 138 케이스를 모두 DEW 스타일로 구현했다. code 114 · composition 8 · native 4 · preview-only 5 · design-only 7.
- `d-*` 7개(Button d-outlined / d-outlined-primary / d-soft, TextField d-floating, Badge d-status-dot / d-filter-chip, Toast d-snackbar-default)는 시각 샘플이다. 컴포넌트 API가 아니며 런타임에서 지원하지 않는다.
- 코드 보강: Table `pagination`·`virtual`(고정 행 높이, 키보드 행 이동, 전체 페이지 대안), ToastRegion `max`, AlertDialog Promise 기반 pending/error/retry, Dialog 초점 가두기·복귀·`maxHeight`, Menu 키보드·링크 항목, Icon 미해결 표시(대체 아이콘 금지), Skeleton `circle`, Badge `count`.
- 대응표 `preview/case-coverage.json`(138행), 정적 갤러리 `preview/coverage-138.html`, 디자인 시스템의 Coverage 138 카드(17장). 새 토큰 없음.

## Common families (16) — derived-extension
| 이름 | DEW 규격 | 케이스 |
|---|---|---|
| Button | sm44/md48/lg56, radius 0, body 600 | primary(textPrimary 채움)·secondary(1px 선)·danger(accent 선+아이콘, 빨간 채움 금지)·text(밑줄) × default/hover/focus/pressed/disabled/loading, 아이콘·아이콘전용·긴 라벨 |
| TextField / Textarea / Select | 라벨 body 600, 필드 48h surface 1px textSecondary radius 2 | label/description/error/disabled/readOnly/long, counter, placeholder |
| Checkbox / Switch | 20px 사각 / 44×24 트랙 + 켜짐·꺼짐 글자 | checked/indeterminate/error/disabled/long, on/off/disabled |
| Badge | meta 12/18, 사각 칩 | neutral·info·success·warning·danger (단어+아이콘 우선) |
| Card | plain(상단 선)·outlined·support, 가로 5:7 | hover/focus/selected/disabled/이미지 누락/긴 문구 |
| Skeleton | border 톤, 원본과 같은 형태 | text/heading/media/story/feature/row |
| Icon | 24 그리드 1.5 stroke square cap, 27종 | 16/20/24, accent는 danger/error만 |
| Dialog / AlertDialog | canvas 패널, 1px textPrimary, 세리프 heading 제목, `scrim` | 400/560/800, danger/default/loading/오류+다시 시도/long |
| Menu | surface, 1px 선, 44px 행 | selected/disabled+사유/danger/long/구분선 |
| Table | meta 헤더 + 1px textPrimary, 행 사이 border | sort/loading/empty/error/missing/long/narrow(가로 스크롤) |
| Pagination | 이전/다음 + 44px 숫자, 현재 2px accent 밑줄 | first/middle/last/single/disabled, 모바일 "n / total" |
| Toast | surface, 1px 선, 최대 400 | info/success/warning/error, 액션, 긴 문구 |

의미색은 새로 만들지 않는다: success=support 면, warning=border 면, info=surface+선, danger/error=accent 선·아이콘 + textPrimary 글자. 새 토큰은 `scrim` rgba(17,17,17,0.48) 하나(derived-extension).

### 조합 관계
- EditorialCTA는 이동 링크, Button은 동작. StoryCard는 이야기 티저 전용, Card는 비(非)이야기 콘텐츠와 상태 패널.
- Skeleton story/feature/row = StoryCard/FeatureStory/Table 로딩. Badge는 ArticleMeta 앞.
- ArticleList: CategoryNav(주제) + Menu(정렬) + EditorialGrid + Pagination.
- 페이지 오류·빈 상태 = Card(outlined) + Icon + heading + Button/EditorialCTA. 결과 알림 = Toast. 파괴적 확인 = AlertDialog.
- 이미지 누락: `media.missing` 또는 실패한 src → 점선 프레임 + "이미지 없음", 캡션 유지.

## Templates
- `EditorialHome` → `preview/index.html`
- `ArticleList` → `preview/list.html`
- `StoryDetail` → `preview/detail.html`

상태(derived-extension): `index-{loading,empty,error,long,missing}.html`, `list-{loading,empty,error,long,missing}.html`, `detail-{loading,error,long,missing}.html` (StoryDetail에는 empty 없음). 모든 컴포넌트 상태: `preview/components.html`(정적, 샘플 id는 family--case 접두사로 유일). 동작하는 소스: `preview/source/`. 검증 폭 1440 / 834 / 390 / 375.

## Do / Don't
- 큰 제목과 작은 메타데이터의 대비, 이미지 중심 구성, 의도적인 비대칭과 충분한 여백을 유지한다.
- 과도한 둥근 카드, 무거운 그림자, KPI 패널, 반복적인 대칭 SaaS 그리드를 피한다.
- 빨간 글자·빨간 채움 버튼 금지. 의미는 단어+아이콘으로 먼저 전달한다.
- 한글은 어절 단위 줄바꿈(keep-all), 긴 영문은 강제 줄바꿈. 긴 문구를 말줄임으로 자르지 않는다.
- 원본 로고·고유 카피·사진·실제 수치나 고객 데이터를 재사용하지 않는다.
- DB, Router, 인증, 결제, API를 추가하지 않는다. 기본 산출물은 정적 HTML/CSS이다.

## Figma로 옮기기
1. `preview/figma-board.svg`를 캔버스에 드래그해 편집 가능한 스타일 참조 보드를 배치한다.
2. JSON의 `figma.variables`로 `DEW_V1` 컬렉션 / Default 모드를 만든다. `color/…`는 Color, `space/…`·`radius/…`는 Number다. 값의 단위는 px다.
3. `figma.textStyles`를 로컬 Text Style로 만들고 위 서체로 매핑한다. 폰트 크기·행간·굵기를 각각 적용한다.
4. `foundation.grid`와 `responsive`로 화면 크기별 그리드를 만든다. 위 컴포넌트를 Auto Layout / Fill·Hug로 만들고 `templateSpecs` 순서로 인스턴스를 배치한다.
5. JSON은 커스텀 전달 명세다. Figma 기본 기능에 파일을 넣는 것만으로 변수나 컴포넌트가 자동 생성되지는 않는다. SVG 역시 변수·Auto Layout을 만들지 않는다.

## 실행 / 수정
`preview/index.html`을 브라우저에서 열면 된다. 설치와 빌드가 없다. preview/는 디자인 시스템 컴포넌트를 렌더링한 정적 스냅숏이며, `styles.css`는 tokens + 컴포넌트 CSS를 합친 것이다. `list.html`, `detail.html`은 일반 링크로 연결된다.
주제 링크는 목록의 해당 섹션으로 이동한다. 예시 글은 공통 상세 화면으로 연결된다.
JSON을 변경하면 `preview/styles.css`의 대응 CSS 변수도 갱신한다. SVG는 정적 참조이므로 함께 갱신한다.

## Reference / Scope
[Behance 공개 포트폴리오](https://www.behance.net/gallery/110574641/DEW-Webzine-Editorial-Web-Experience-Design) · 2026-09-25 확인.
상세 페이지 접근은 HTTP 403으로 제한되어 공개 썸네일과 이전 대화에서 확정된 방향을 기준으로 정규화했다. 색상·치수는 원본을 정밀 추출한 값이 아니라 이전에 합의한 재사용 토큰이다. 미리보기 카피와 도형은 이번 산출물용으로 새로 작성했다.


## v1.3.0 인계 기준

기존 프로젝트 스타일을 유지한다. IAK는 138개 사례 목록의 기준이다. 없는 폰트만 유사 서체로 대체하고 변경 내역을 기록한다. Figma의 Coverage 138 페이지와 preview/case-coverage.json을 대응표로 사용한다. 다른 design/p 버전의 스타일과 혼합하지 않는다. 동작 예시는 preview/coverage-live.html에서 열 수 있다(React CDN 연결 필요).


## Quality contract · 1.4

- 시작점은 preview/library.html. 138개 사례의 family/id를 변경하거나 임의로 합치지 않는다.
- 토큰과 스타일은 이 프로젝트의 foundation을 그대로 사용한다. IAK 스타일이나 다른 프로젝트 스타일을 섞지 않는다.
- preview/handoff/usage-rules.json의 구성요소별 사용 규칙을 따른다.
- 글자 수는 입력과 함께 갱신한다. 확인 작업의 동기 오류와 비동기 오류 모두 화면에 표시한다.
- 대화상자는 초점·배경 스크롤을 관리하고 닫히면 복귀시킨다. AlertDialog는 취소 버튼에 먼저 초점을 둔다.
- 키보드 메뉴는 첫 활성 항목으로 들어가며 비활성 항목을 건너뛴다. 폼 요소의 name을 실제 입력 요소에 전달한다.
- 긴 문구·375px 화면·키보드 조작을 확인하고 기존 스타일을 바꾸는 새 효과나 장식은 추가하지 않는다.
- vendor/의 라이선스 파일을 유지한다. design-only 사례를 동작하는 API라고 설명하지 않는다.
- Figma와 웹의 글자 폭 차이, 정적 상태 예시와 실제 동작의 차이를 숨기지 않는다.
