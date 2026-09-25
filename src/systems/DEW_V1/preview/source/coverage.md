# Coverage — IAK checklist → DEW

IAK Design Studio는 **어떤 항목과 상태가 있어야 하는지**만 정한다(coverage only). 표현은 모두 DEW 토큰과 editorial 규칙을 따른다(visual authority). `source` = 이전에 합의한 DEW_V1 정규화본(figma-system.json v1.0 / claude-system.md)에서 계승한 것 — 공개 Behance 썸네일 기반 정규화 값이며 원본에서 정밀 추출한 값이 아니다. `derived-extension` = 이번에 추가한 것.

## 16 공통 family

| IAK family | 요구 케이스 | DEW 컴포넌트 | 미리보기 카드 | 상태 | 기존 컴포넌트와의 조합 |
|---|---|---|---|---|---|
| Button | primary/secondary/danger/text · sm/md/lg · default/hover/focus/pressed/disabled/loading · icon start/end/only · long label · KO/EN · full width | Button | Actions › Button | derived-extension | EditorialCTA = 이동 링크, Button = 동작 |
| TextField | label/description/error/disabled/readOnly/long · hover/focus · required · icon | TextField | Forms › TextField | derived-extension | Dialog 폼 |
| Textarea | label/description/error/disabled/readOnly/long · counter · focus | Textarea | Forms › Textarea | derived-extension | Dialog 폼 |
| Select | placeholder/selected/focus/error/disabled/long option | Select | Forms › Select | derived-extension | Menu(풍부한 선택) · CategoryNav(주제) |
| Checkbox | unchecked/checked/hover/focus/indeterminate/error/disabled/long | Checkbox | Forms › Checkbox | derived-extension | — |
| Switch | off/on/focus/disabled off·on/long+description | Switch | Forms › Switch | derived-extension | — |
| Badge | neutral/info/success/warning/danger (5) · no icon · long | Badge | Status › Badge | derived-extension | ArticleMeta 앞, Card badges |
| Card | plain/outlined/support · default/hover/focus/selected/disabled · missing image · long · horizontal 5:7 | Card | Layout › Card | derived-extension | StoryCard = 이야기 티저 전용; 템플릿 상태 패널 |
| Skeleton | text/heading/media/story/feature/row | Skeleton | Status › Skeleton | derived-extension | StoryCard·FeatureStory·Table 로딩 |
| Icon | 27 glyphs × 16/20/24 · colour rules · labelled vs decorative | Icon | Foundations › Icon | derived-extension (원본은 ↗ ← 글리프만) | EditorialCTA는 글리프 유지 |
| Dialog | sm 400 / md 560 / lg 800 · form · long title · mobile bottom sheet | Dialog | Overlays › Dialog | derived-extension (+ scrim 토큰) | MediaCard(lg 본문) |
| AlertDialog | danger/default/loading/error + retry/long | AlertDialog | Overlays › AlertDialog | derived-extension | Button danger |
| Menu | closed/open · selected/hover/focus/disabled+reason/danger/long/separator · text trigger | Menu | Overlays › Menu | derived-extension | ArticleList 정렬 |
| Table | sort(aria-sort)/selected/missing/loading/empty/error/long/narrow scroll | Table | Data › Table | derived-extension | StoryDetail 사양표·아카이브 색인 |
| Pagination | first/middle/last/single/disabled · mobile compact | Pagination | Navigation › Pagination | derived-extension | ArticleList EditorialGrid 아래 |
| Toast | info/success/warning/error (4) · action · long · stack | Toast + ToastRegion | Status › Toast | derived-extension | ArticleList Error |

## 기존 editorial 11 (source)

| 컴포넌트 | 원본 변형 | 이번 추가 |
|---|---|---|
| EditorialHeader | Default | — |
| CategoryNav | Default, Selected, Hover, Focus | — |
| FeatureStory | Default | 이미지 누락, Skeleton feature 로딩 (derived-extension) |
| StoryCard | Default, Hover, Focus | 이미지 누락, Skeleton story 로딩 (derived-extension) |
| MediaCard | Landscape, Portrait | 이미지 누락 + 캡션 유지 (derived-extension) |
| EditorialGrid | Feature, ThreeColumn | — |
| QuoteBlock | Default | — |
| ImageCaption | Default | — |
| ArticleMeta | Default | — |
| EditorialCTA | Default, Hover, Focus | — |
| Footer | Default | — |

## 템플릿 상태

| 템플릿 | default | loading | empty | error | 긴 문구 | 이미지 누락 |
|---|---|---|---|---|---|---|
| EditorialHome | source | ext | ext | ext | ext | ext |
| ArticleList | source (+ 정렬 Menu·Pagination ext) | ext | ext | ext (+ Toast) | ext | ext |
| StoryDetail | source | ext | 해당 없음 | ext | ext | ext |

## 토큰·규칙 확장

| 항목 | 값 | 상태 |
|---|---|---|
| `scrim` | rgba(17,17,17,0.48) — Dialog 배경막 | derived-extension (유일한 새 토큰) |
| 아이콘 세트 | 24px 라인 27종 | derived-extension |
| 컨트롤 높이 | 44 / 48 / 56 | derived-extension (원본 44px 최소 클릭 영역에서 파생) |
| 대화상자 폭 | 400 / 560 / 800 | derived-extension |
| 한글 줄바꿈 | `word-break: keep-all` + `overflow-wrap: anywhere` | derived-extension |
| 모션 | 스피너 900ms, 스켈레톤 펄스 1.4s, 스위치 150ms, reduced-motion에서 정지 | derived-extension (모션 토큰 없음) |
| AlertDialog 오류 + 다시 시도 | surface + 1px accent 상자, accent 아이콘, 확인 버튼 → "다시 시도" | derived-extension |
| 팔레트·타입·spacing·radius·grid | 정규화본 v1.0 값 그대로 | source (정규화 계승) |

## 서체 매핑

| 역할 | Figma | 웹 | 비고 |
|---|---|---|---|
| Serif (display, heading) | Noto Serif KR Medium | Georgia → Noto Serif KR | 자폭 차이로 줄바꿈이 다를 수 있음 |
| Sans (title, body, meta) | Inter | Arial → Noto Sans KR | Inter에는 한글 글리프가 없음; 자폭 차이 있음 |

## 가져오지 않은 IAK 요소

다크 테마, 오렌지 계열, Pretendard, 둥근 SaaS 카드·그림자, IAK 기능 앱 화면 구성.

## v1.3 — IAK 138 케이스

정확한 138개 케이스(Button 19 · TextField 13 · Textarea 9 · Select 8 · Checkbox 7 · Switch 6 · Badge 10 · Card 6 · Skeleton 4 · Icon 7 · Dialog 7 · Menu 6 · Table 11 · Pagination 8 · Toast 11 · AlertDialog 6)를 모두 구현했다. referenceType: code 114 · composition 8 · native 4 · preview-only 5 · design-only 7. 신규 케이스는 모두 derived-extension이다. `d-*` 7개는 시각 샘플로만 있고 런타임 API가 아니다. 행별 export·props·예시 경로·앵커·검증 결과는 `preview/case-coverage.json`, 렌더링은 Coverage 138 카드와 `preview/coverage-138.html`에 있다.
