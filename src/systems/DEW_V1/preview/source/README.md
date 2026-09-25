DEW_V1은 **Editorial / Premium / Content Web**을 위한 편집형 웹 시스템이다. 매거진·웹진, 브랜드 저널, 프리미엄 커머스의 콘텐츠 영역, 문화·라이프스타일 아카이브처럼 사진과 글이 주인공인 화면에 쓴다. 대시보드, 관리자 도구, 데이터 밀도가 높은 SaaS 화면에는 쓰지 않는다.

> **IAK = coverage only · DEW = visual authority.** IAK Design Studio's 16 common families are used only as the checklist of *which* components and states must exist. Every colour, type, space, radius, grid and composition decision comes from DEW. No IAK dark theme, orange, Pretendard or rounded SaaS card styling is carried over. Anything not present in the original DEW source is labelled **derived-extension** (see the Coverage section).


## 출처와 계승

- **계승(정규화본 v1.0):** 팔레트 7색, 타입 5단계, spacing 9단계, radius 3단계, 그리드·반응형 값, editorial 컴포넌트 11개, 템플릿 3개는 이전에 합의한 DEW_V1 정규화 토큰(figma-system.json v1.0)을 그대로 계승했다. 공개 Behance 썸네일과 합의된 방향을 바탕으로 정규화한 재사용 값이며, 원본에서 정밀 추출한 측정값이 아니다.
- **derived-extension (v1.1):** 공통 family 16개, 템플릿 상태 14장, 아이콘 27종, `scrim` 토큰, 이미지 누락·로딩·AlertDialog 오류+재시도 같은 추가 상태, ArticleList의 정렬 Menu·Pagination, 컨트롤 높이·대화상자 폭·모션·한글 줄바꿈 규칙. 대응표는 Coverage 섹션에 있다.

## 사용 용도

- **Editorial** — 웹진 홈, 기사 목록, 긴 글 상세. 큰 세리프 제목과 작은 메타데이터의 대비로 읽는 리듬을 만든다.
- **Premium** — 브랜드 저널, 컬렉션 룩북, 캠페인 스토리. 넓은 여백과 크게 크롭한 이미지로 격을 만든다.
- **Content Web** — 문화·공간·사물 아카이브, 에세이 모음. 카테고리 탐색과 3 → 2 → 1열 목록.

## 스타일 DNA

- **따뜻한 바탕** — 페이지 바탕은 항상 `canvas` (#F7F3EA). 순백 `surface`는 바탕이 아니라 얹는 면이다.
- **세리프 제목** — `display`(64/68)와 `heading`(40/48)만 세리프(`--font-serif`). `title`·`body`·`meta`와 탐색은 산세리프(`--font-sans`).
- **이미지 중심 비대칭 편집 리듬** — 메인은 5 : 7 분할(텍스트 5열 + 미디어 7열), 목록은 큰 feature 1개 + 보조 2개. 사진과 여백이 구획을 만들고, 선은 `border` 1px 헤어라인 두 곳(헤더 아래, 푸터 위)뿐이다.
- **빨강 소량 / 민트 보조** — `accent`(#E3231C)는 선과 장식 포인트로만 쓴다: eyebrow 앞 16×2px 짧은 선, CategoryNav Selected 밑줄, CTA hover 밑줄. 글자색으로는 쓰지 않는다. 넓은 색면은 `support`(#A9E1D6) — QuoteBlock과 민트 미디어 톤 — 에만.
- **거의 각진 모서리** — 기본 `radius-sm` 0, 이미지·입력 `radius-md` 2px, 상한 `radius-lg` 4px. 그림자 없음.

## 컬러

| 토큰 | 값 | 쓰는 곳 |
|---|---|---|
| `canvas` | #F7F3EA | 페이지 바탕 |
| `surface` | #FFFFFF | 얹는 면, 라이트 미디어 톤 |
| `textPrimary` | #111111 | 제목·본문·링크·CTA·eyebrow·포커스 외곽선 |
| `textSecondary` | #6F6A63 | 메타·캡션·리드·입력 경계 (`canvas`·`surface` 위에서만) |
| `border` | #D8D2C8 | 구획 헤어라인, 기본 미디어 톤 |
| `accent` | #E3231C | 선·장식 포인트만 (eyebrow 앞 선, Selected·hover 밑줄) — 텍스트 금지 |
| `support` | #A9E1D6 | 인용 면, 민트 미디어 톤, success 배지·토스트 아이콘 면 |
| `scrim` | rgba(17,17,17,0.48) | **derived-extension** — Dialog / AlertDialog 배경막 전용 |

대비: `textPrimary`는 모든 면에서 12:1 이상. `textSecondary`는 `canvas` 4.84:1·`surface` 5.36:1 — `support` 위(3.68:1)에서는 쓰지 말고 `textPrimary`를 쓴다. `accent`는 텍스트로 쓰지 않는다 — 12px 글자로는 `canvas`에서 4.19:1로 AA(4.5)에 못 미치기 때문이다(토큰 값 #E3231C는 그대로 유지). 선·장식으로서는 `canvas` 4.19:1, `surface` 4.64:1로 비텍스트 기준 3:1을 넘는다. eyebrow 글자는 `textPrimary`(17:1), 그 밖의 12px 메타·캡션은 `textSecondary`(4.84:1)로 쓴다.

## 의미 표현 (상태 색)

새 상태색은 만들지 않는다. 의미는 **단어 + 아이콘**이 먼저, 기존 팔레트는 보조로 쓴다.

| 의미 | 표현 | 대비 |
|---|---|---|
| neutral | `textSecondary` 글자 + 외곽선 | 4.84:1 (canvas) |
| info | `surface` + `textPrimary` 외곽선, info 아이콘 | 18.9:1 |
| success | `support` 면 + `textPrimary`, check 아이콘 | 12.97:1 |
| warning | `border` 면 + `textPrimary`, alert 아이콘 | 12.56:1 |
| danger / error | `accent` 외곽선·아이콘·2px 상단선 + `textPrimary` 글자 | 표시 4.19:1 (canvas) / 4.64:1 (surface) ≥ 3:1, 글자 17:1 |

빨간 글자는 여전히 금지다. 입력 오류는 `accent` 경계 + 2px `accent` 밑선 + `textPrimary` 문장("오류:"는 스크린리더용)으로 표시한다.

## 타이포그래피

| 스타일 | 서체 | 크기 / 행간 / 굵기 | 모바일 |
|---|---|---|---|
| `display` | Serif | 64 / 68 / 500, 자간 -0.045em | 40 / 44 |
| `heading` | Serif | 40 / 48 / 500, 자간 -0.025em | 32 / 40 |
| `title` | Sans | 22 / 30 / 600 | — |
| `body` | Sans | 16 / 27 / 400 | — |
| `meta` | Sans | 12 / 18 / 500, 자간 0.06em | — |

| 역할 | Figma (기존 스타일) | 웹 스택 (tokens) |
|---|---|---|
| Serif — `display`, `heading` | Noto Serif KR Medium (500) | `Georgia, "Noto Serif KR", serif` |
| Sans — `title`, `body`, `meta` | Inter (400 / 500 / 600) | `Arial, "Noto Sans KR", sans-serif` |

크기·행간·굵기 값은 두 환경이 같지만 서체가 달라 **글자 폭(자폭)이 다르다**. 웹은 Georgia / Arial이 먼저 적용되고 한글은 설치된 Noto 서체나 시스템 서체로 대체되므로, Figma의 Noto Serif KR / Inter와 줄바꿈 위치·제목 줄 수가 다를 수 있다. Inter에는 한글 글리프가 없어 Figma의 한글 본문도 대체 글꼴로 그려질 수 있다. 폰트 파일은 포함하지 않는다. 한 화면에 `display`는 하나만 쓴다.

## Spacing · Radius · Grid

- Spacing: `space-4` `space-8` `space-16` `space-24` `space-32` `space-48` `space-72` `space-96` `space-128` — 이 9단계 밖의 값을 만들지 않는다. 섹션 리듬은 데스크톱 72, 모바일 48.
- Radius: `radius-sm` 0 (기본) · `radius-md` 2 (이미지·입력) · `radius-lg` 4 (상한).
- Grid: 데스크톱 12열 / 최대 콘텐츠 1200 / gutter 24 · 태블릿 8열 / gutter 20 · 모바일 4열 / gutter 16. 컨테이너는 `.dew-wrap` (최대 1296 = 1200 + 좌우 48).

## 반응형 규칙

| 구간 | 폭 | 프레임 | 페이지 좌우 여백 | 열 / gutter |
|---|---|---|---|---|
| desktop | 1024 이상 | 1440 | 48 | 12 / 24 |
| tablet | 768–1023 | 834 | 32 | 8 / 20 |
| mobile | 0–767 | 390 (검증: 375 포함) | 24 | 4 / 16 |

- FeatureStory: 5 : 7 유지(태블릿 gap 20) → 모바일은 텍스트 위·이미지 아래 세로 배치, 세로 이미지는 4:3으로.
- 목록(EditorialGrid ThreeColumn): 3열 → 2열 → 1열. Feature 변형은 모바일에서 1열.
- 제목: 모바일 `display` 40/44, `heading`·인용 32/40.
- 헤더·CategoryNav는 모바일에서 줄바꿈(wrap)한다. 햄버거로 숨기지 않는다 — 모바일에서도 정보를 숨기지 않는다.
- QuoteBlock padding 48 → 24, 푸터는 모바일에서 세로 배치.

## 상호작용과 접근성

- Eyebrow: 12px `meta` 스타일 글자는 `textPrimary`, 앞에 `accent` 16×2px 선 하나. 빨간 글자는 쓰지 않는다.
- Hover: 밑줄 또는 색 변화. CTA는 밑줄이 2px `accent`로 바뀌고 글자색은 `textPrimary`를 유지한다.
- Focus: 2px `textPrimary` 외곽선, offset 4px (모든 바탕에서 12:1 이상).
- 클릭 영역 최소 44px. 모든 입력에 label, 버튼에 읽을 수 있는 이름. 입력 경계는 `textSecondary`, `border`는 구획용이다.
- Pressed: primary는 `textSecondary` 면, secondary·danger는 `border` 면, text는 `textSecondary` 글자. Disabled: `border` 면/경계 + `textSecondary`. Loading: 회전 아이콘 + `aria-busy`, 라벨 유지(`prefers-reduced-motion`이면 정지).
- 한글은 어절 단위로 줄바꿈(`word-break: keep-all`), 끊김 없는 긴 영문은 강제 줄바꿈(`overflow-wrap: anywhere`) — derived-extension. 긴 문구는 말줄임으로 자르지 않는다.
- 미디어 자리표시자에는 `role="img"`와 `aria-label`이 있다. 실제 사진으로 바꿀 때는 `src` + `alt`를 준다.

## 이미지

패션·문화·라이프스타일 사진을 넓게 크롭해 크게 쓰고, 사진과 여백으로 리듬을 만든다. 이 시스템의 미디어는 모두 **직접 작성한 도형 자리표시자**(기본 `border` / 민트 `support` / 라이트 `surface` 3톤)다. 실제 프로젝트에서는 사용권이 있는 사진으로 교체한다. 원본 로고·고유 카피·사진·실제 수치나 고객 데이터는 쓰지 않는다. 로고가 없으므로 브랜드는 일반 텍스트(예시 `MASTHEAD`)로 둔다. 이미지가 없거나 불러오지 못하면 점선 프레임 + `image-off` 아이콘 + "이미지 없음"을 보여주고 캡션은 유지한다(derived-extension).

## 아이콘

원본에는 ↗ ← 텍스트 글리프만 있었다. EditorialCTA는 계속 이 글리프를 쓴다. 공통 family용으로 직접 그린 24px 라인 아이콘 세트(`Icon`, 1.5 stroke, square cap, 27종)를 추가했다 — **derived-extension**. 크기 16(meta 옆)·20(본문·컨트롤)·24(대화상자·상태 패널). 색은 `currentColor`; `accent`는 danger/error 표시에만.

## 콘텐츠 톤

짧고 조용한 문장. 제목은 두 줄 안쪽의 명사구나 짧은 문장("사소한 장면, 오래 남는 감각."), eyebrow·메타는 영문 대문자 + 가운뎃점("CULTURE · 예시 에세이"), CTA는 동사구("이야기 읽기", "전체 저널"). 느낌표·이모지·과장된 수치는 쓰지 않는다.

## Editorial 컴포넌트 (11)

| 이름 | 규격 | 변형 / 상태 |
|---|---|---|
| EditorialHeader | 가로, 양끝 정렬, 최소 높이 80; 모바일 wrap | Default |
| CategoryNav | 가로, gap 24; 모바일 wrap | Default, Selected, Hover, Focus |
| FeatureStory | 텍스트 5열 + 미디어 7열; 모바일 세로 | Default |
| StoryCard | 세로, gap 16, 테두리 없는 이미지 우선 | Default, Hover, Focus |
| MediaCard | 세로; 이미지 4:3 또는 3:4 | Landscape, Portrait |
| EditorialGrid | feature 1 + 보조 2, 또는 3열; 모바일 1열 | Feature, ThreeColumn |
| QuoteBlock | 세로, padding 48; 모바일 24 | Default |
| ImageCaption | 가로, gap 8; meta 스타일 | Default |
| ArticleMeta | 가로, gap 16, wrap; meta 스타일 | Default |
| EditorialCTA | 가로, 최소 높이 44, 밑줄 텍스트 | Default, Hover, Focus |
| Footer | 가로, 양끝 정렬, 상단 선; 모바일 세로 | Default |

모두 `window.DEW`의 React 18 컴포넌트이고 스타일은 `components/bundle.css`(`dew-` 접두사)에 있다. 페이지는 `.dew-wrap` 안에 조립한다. 각 컴포넌트의 `state` prop은 미리보기에서 Hover/Focus를 강제로 보여주기 위한 것이며, 실제 화면은 `:hover` / `:focus-visible`로 동작한다.

## 공통 컴포넌트 (16) — derived-extension

IAK 목록을 커버리지 기준으로 삼아 DEW 스타일로 새로 만든 family다. 모서리 0(입력·스위치 트랙 2px), 1px 선, 그림자 없음.

| 이름 | DEW 규격 | 케이스 (미리보기 카드) |
|---|---|---|
| Button | 채움 `textPrimary` / 1px 외곽선 / danger `accent` 외곽선 / 밑줄 text; sm 44 · md 48 · lg 56 | 4 variant × default·hover·focus·pressed·disabled·loading, 3 크기, 아이콘 시작·끝·아이콘 전용, 긴 라벨, 영문, full width |
| TextField | `body` 600 라벨, `surface` 필드, 1px `textSecondary`, 2px 모서리, 높이 48 | description, hover, focus, 필수+아이콘, error, disabled, readOnly, 긴 라벨·값 KO/EN |
| Textarea | TextField 동일, 최소 136, 글자 수 | counter, focus, error, disabled, readOnly, 긴 값 |
| Select | 기본 `<select>` + DEW 쉐브론 | placeholder, 선택됨, focus, error, disabled, 긴 옵션 |
| Checkbox | 20px 사각, 1px `textPrimary` | 해제, 선택, hover, focus, indeterminate, error, disabled(해제·선택), 긴 라벨 |
| Switch | 44×24 사각 트랙 + "켜짐/꺼짐" 글자 | off, on, focus, disabled(off·on), 긴 라벨+설명 |
| Badge | `meta` 12/18, 사각 칩 | neutral·info·success·warning·danger, 아이콘 없음, 긴 라벨, ArticleMeta와 조합 |
| Card | plain(상단 선) · outlined · support; 가로형 5 : 7 | default·hover·focus·selected·disabled·이미지 누락, 긴 제목, 가로형 |
| Skeleton | `border` 톤 펄스, 원본 컴포넌트와 같은 형태 | text, heading, media, story, feature(5 : 7), row |
| Icon | 24px 라인, 1.5 stroke | 27종 × 16/20/24, 색 규칙 |
| Dialog | `canvas` 패널, 1px `textPrimary`, 세리프 `heading` 제목, `scrim` | sm 400 · md 560(폼) · lg 800(5 : 7 본문, 긴 제목) |
| AlertDialog | sm, danger는 2px `accent` 상단선 | danger, default, loading, 오류 + 다시 시도, 긴 문구 |
| Menu | `surface` 패널, 1px 테두리, 44px 행 | 닫힘, 열림(selected·hover·focus·disabled+사유·danger·긴 항목·구분선), text 트리거 |
| Table | `meta` 헤더 + 1px `textPrimary` 선, 행 사이 `border` | 정렬(aria-sort)+선택 행+누락값, loading, empty, error, 긴 문구, 좁은 화면 가로 스크롤 |
| Pagination | 텍스트 이전/다음 + 44px 숫자, 현재 = 2px `accent` 밑줄 | first, middle, last, single, disabled, 모바일 "6 / 12" |
| Toast | `surface`, 1px 테두리, 최대 400 | info·success·warning·error, 액션, 긴 문구, 쌓기 |

### 기존 editorial 컴포넌트와의 관계

- **EditorialCTA vs Button** — EditorialCTA는 이야기로 *이동*하는 편집 링크(↗ ←), Button은 저장·재시도·확인 같은 *동작*. 한 영역에 둘 다 있으면 Button이 동작, EditorialCTA가 이동을 맡는다(예: 오류 패널의 "다시 시도" + "저널로 이동").
- **StoryCard vs Card** — 이야기 티저는 항상 StoryCard. Card는 안내·호(issue)·편지 같은 비(非)이야기 콘텐츠와 상태 패널에만 쓴다. Card 안에 StoryCard를 넣지 않는다.
- **Skeleton** — StoryCard(`story`), FeatureStory(`feature`), Table(`row`)의 로딩 대체물. 같은 비율을 써서 레이아웃이 튀지 않는다.
- **Badge vs ArticleMeta** — ArticleMeta는 글의 사실(주제·읽기 시간), Badge는 상태(새 이야기·저장됨). Badge는 ArticleMeta 앞에 둔다.
- **CategoryNav · Menu · Pagination** — ArticleList에서 CategoryNav는 주제 필터, Menu는 정렬, Pagination은 EditorialGrid 아래 페이지 이동. 셋 다 선택 표시는 같은 2px `accent` 밑줄.
- **MediaCard / FeatureStory / StoryCard의 이미지 누락** — `media.missing`(또는 실패한 `src`)이 점선 프레임을 그린다.
- **Dialog · AlertDialog · Toast** — 확인이 필요한 파괴적 동작은 AlertDialog, 끝난 동작의 결과는 Toast, 페이지 수준 실패는 템플릿의 오류 패널(Card + Icon + `heading` + Button).


## 템플릿 (3)

- **EditorialHome** — EditorialHeader → FeatureStory → EditorialGrid(ThreeColumn, 섹션 헤드 포함) → QuoteBlock → Footer.
- **ArticleList** — EditorialHeader → 페이지 인트로(eyebrow, `display` 제목, 리드) → CategoryNav → EditorialGrid(Feature, ThreeColumn) → Footer. 주제 링크는 목록의 해당 섹션으로 이동한다.
- **StoryDetail** — EditorialHeader → ArticleMeta + `display` 제목 + 리드 → MediaCard(Landscape) → 본문(최대 720, 가운데) → QuoteBlock → 돌아가기 CTA → Footer.

세 템플릿은 Templates 그룹에 1440 프레임 미리보기로 있다. 예시 글은 공통 상세 화면으로 연결되는 구조다. ArticleList 기본 화면에는 정렬 Menu와 Pagination을 더했다(derived-extension, 기존 섹션 순서는 유지).

### 템플릿 상태 (Template states 그룹, derived-extension)

| 템플릿 | 상태 카드 | 구성 |
|---|---|---|
| EditorialHome | Loading · Empty · Error · LongCopy · MissingImage | Skeleton feature/story · 대표 없음 인트로 + 상태 패널 · 오류 패널(다시 시도 + 저널로 이동) · KO/EN 긴 제목·인용 · 대표·카드 이미지 누락 |
| ArticleList | Loading · Empty · Error · LongCopy · MissingImage | Skeleton + Pagination disabled · 선택 주제 결과 없음 · 오류 패널 + 오류 Toast · 긴 주제·제목·메타 · 카드 이미지 누락 |
| StoryDetail | Loading · Error · LongCopy · MissingImage | 제목·미디어·본문 Skeleton · 이야기를 찾을 수 없음 · 긴 제목·메타·본문·캡션 · 본문 이미지 누락(캡션 유지). *Empty는 단일 글 화면에 해당하지 않아 만들지 않았다.* |

상태 패널은 새 컴포넌트가 아니라 `Card(outlined)` + `Icon` + `heading` + `Button`/`EditorialCTA` 조합이다.

## 검증 결과 (2026-09-25, 현재 버전)

- **라이브 카드:** 템플릿 17장(기본 3 + 상태 14) × 1440 / 834 / 390 / 375 = 68회, 컴포넌트 27장(editorial 11 + 공통 16) × 900 / 375 = 54회, 표지 1회 — 총 123회 렌더링. 가로 넘침 0, 스크립트 오류 0, `accent` 색 글자 0.
- **정적 preview/:** HTML 18개 × 4폭 = 72회, 가로 넘침·오류·빨간 글자 0.
- **대비(WCAG 2.1):** 글자 — `textPrimary` on canvas 17.05 / surface 18.88 / support 12.97 / border 12.56; `canvas` on `textPrimary` 17.05 (primary 버튼), on `textSecondary` 4.84 (pressed); `textSecondary` on canvas 4.84 / surface 5.36. 비텍스트 — `accent` 표시 canvas 4.19 / surface 4.64, 입력 경계 `textSecondary` 5.36, 포커스 외곽선 17.05. Disabled 상태(`textSecondary` on `border` 3.57)는 WCAG 예외.
- 표의 좁은 화면(343px)은 가로 스크롤 영역으로 동작하며 페이지 전체는 넘치지 않는다.
- 렌더링 환경에 Noto 서체가 없어 Georgia / Arial 대체 서체로 확인했다.


## Do

- 공통 컴포넌트도 editorial DNA를 따른다: 세리프 대화상자 제목, 1px 선, 모서리 0–4, 넉넉한 여백, 5 : 7 비대칭.

- 큰 제목과 작은 메타데이터의 대비를 유지한다.
- 이미지 중심으로 구성하고 의도적인 비대칭(5 : 7, 7 : 5)과 충분한 여백을 둔다.
- 빨강은 선·장식 포인트로 한 화면에 몇 군데만, 민트는 보조 면에만 쓴다.
- 모서리는 0–4px 안에서, 구획은 헤어라인과 여백으로 나눈다.
- 콘텐츠·브랜드명·제품 정보는 새 프로젝트의 것으로 교체한다.

## Don't

- 과도하게 둥근 카드, 무거운 그림자, 채워진 빨간 버튼.
- `accent` 글자(eyebrow·링크·본문 포함) — 빨강은 선과 장식에만.
- KPI 패널, 통계 카드, 반복적인 대칭 SaaS 그리드.
- 원본 로고·고유 카피·사진·실제 수치나 고객 데이터 재사용.
- 새 색·타입·간격 값 추가(예외: 파생 `scrim` 1개), 다크 모드.
- IAK의 다크 테마·오렌지·Pretendard·둥근 SaaS 카드 스타일.
- DB, Router, 인증, 결제, API — 기본 산출물은 정적 HTML/CSS다.
