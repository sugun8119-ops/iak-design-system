# KOREX_V1

**용도: Corporate / Brand / Product Web.** 브랜드 이야기와 실용적인 제품 검색·탐색을 한 사이트에서 균형 있게 다루는 기업·브랜드·제품 웹을 위한 시스템이다. 이 시스템의 색·타입·간격·반경 값이 확정 기준이며, 임의로 늘리지 않는다. 브랜드명·콘텐츠·제품 정보·사진은 새 프로젝트의 것으로 교체한다.

## 기준의 구분 — IAK = coverage only, KOREX = visual authority

- **IAK Design Studio = coverage only.** IAK의 16개 common family(Button · TextField · Textarea · Select · Checkbox · Switch · Badge · Card · Skeleton · Icon · Dialog · Menu · Table · Pagination · Toast · AlertDialog)는 “어떤 항목과 상태가 있어야 하는가”의 공통 체크리스트로만 쓴다.
- **KOREX = visual authority.** 색·타입·반경·간격·레이아웃·표현은 전부 KOREX 기준이다. 각 Behance 프로젝트 시스템은 독립 스타일을 유지한다.
- **가져오지 않은 것**: IAK dark 테마, orange 강조색, Pretendard, IAK 로고, SaaS/대시보드 스킨.
- 정규화 preview에 없던 컴포넌트·상태는 카드와 문서에 **derived-extension**으로 표기한다. `observed`는 이전에 정규화한 KOREX_V1 preview(`preview/` — 합의된 재사용 토큰 + 2026-09-25 공개 썸네일 기준)에서 계승한 요소라는 뜻이다. **Behance 원본을 정밀 추출·측정했다는 뜻이 아니다**(원본 상세 페이지는 HTTP 403으로 열람하지 못했다). 전체 대응표는 “IAK coverage 대응표” 섹션(coverage.md)에 있다.

## Style DNA

- **딥 그린 중심.** `primary`(#07523D) 한 가지 브랜드 색이 전체 인상을 만든다. `primaryDark`는 hover와 히어로 패널, `primarySoft`는 차분한 보조 면에만 쓴다. 나머지는 중성 `canvas`·`surface`·`textPrimary`·`textSecondary`·`border`.
- **산세리프 한 가족.** 5개 역할(display · heading · title · body · meta) 모두 산세리프(`sans`)다. 제목은 굵고(700) 약간 좁은 자간, meta는 12px 대문자 성격의 넓은 자간.
- **이미지 우선.** 큰 미디어가 화면을 이끌고 텍스트는 옆이나 아래의 단색 면에 둔다. 사진 위에 텍스트를 얹지 않는다.
- **정돈된 검색 / 제품 탐색.** 항상 보이는 label의 SearchBar, 텍스트+밑줄 CategoryNav, select 하나의 FilterPanel, 3열 ContentGrid.
- **각진 CTA와 넓은 여백.** 반경은 2/4/6px뿐이며 CTA는 `radius-md` 4px 직사각형. 구분은 그림자 대신 여백과 1px `border` 선으로 한다.

## Foundations

**Color (8).** `canvas` 페이지 배경 · `surface` 입력/카드 면과 진한 면 위 텍스트 · `textPrimary` 본문/제목/focus · `textSecondary` meta·캡션·입력 경계 · `border` 구획선 · `primary` 브랜드/Primary CTA · `primaryDark` hover/히어로 패널 · `primarySoft` 보조 면. 대비: `textSecondary`는 `canvas` 4.7:1·`surface` 5.1:1에서만 텍스트로 쓰고, `primarySoft` 위 텍스트는 `textPrimary`(13.3:1) 또는 `primary`(7.3:1).

**Typography (5 roles).**

| 역할 | 크기 / 행간 / 굵기 | 모바일(<768) | 쓰임 |
|---|---|---|---|
| display | 52 / 60 / 700 | 36 / 44 | 히어로·인트로 h1, 페이지당 1회 |
| heading | 32 / 40 / 700 | 28 / 36 | 섹션 제목, BrandStatement |
| title | 20 / 28 / 600 | — | 카드·항목 제목 |
| body | 15 / 25 / 400 | — | 본문, 라벨 |
| meta | 12 / 18 / 500 | — | 분류, 아이브로, 캡션 |

**서체.** Figma는 기존에 만들어 둔 **Inter** Text Style 5개(display · heading · title · body · meta)를 그대로 쓴다. 웹은 폰트 파일 없이 `Arial, "Noto Sans KR", sans-serif` 폴백으로 렌더한다. 따라서 같은 크기·행간이라도 글자 폭이 다르다: 라틴 글자는 Inter와 Arial의 폭이 다르고(Inter가 대체로 조금 넓다), Inter에는 한글 글리프가 없어 Figma에서 한글은 대체 글꼴로, 웹에서는 Noto Sans KR(없으면 OS 기본 한글 글꼴)로 그려진다. 줄바꿈 위치와 버튼·배지 폭은 실제 서체에서 다시 확인한다.

**Spacing (9).** `space-4` · `space-8` · `space-16` · `space-24` · `space-32` · `space-48` · `space-64` · `space-80` · `space-96`. 컴포넌트 내부는 8/16/24, 섹션 사이는 64~96. 여백이 모자라 보이면 한 단계 넓힌다.

**Radius (3).** `radius-sm` 2(체크박스·배지·페이지 번호) · `radius-md` 4(CTA·Button·입력·카드 미디어·Menu·Toast) · `radius-lg` 6(Dialog, 상한). pill 모양은 쓰지 않는다 — Switch도 각진 트랙이다.

**Derived token (1).** `overlay` = `textPrimary` 56% 불투명도, Dialog·AlertDialog scrim 전용 **derived-extension**. 새 색상 hue는 추가하지 않았다.

**의미 역할(새 색 없음).** success = `primary` + 체크 · warning = `surface` + 잉크 경계 + ! · error/danger = 잉크(`textPrimary`) 면 또는 2px 잉크 경계 + 경고/× 아이콘 + “오류/삭제” 단어 · info = `surface` + `textSecondary` 경계 + i. 상태는 언제나 **텍스트와 아이콘이 먼저**, 색은 보조다.

## Layout & Responsive

| 구간 | 폭 | 프레임 | 칼럼 | gutter | 페이지 좌우 여백 |
|---|---|---|---|---|---|
| desktop | 1024+ | 1440 | 12열, 최대 콘텐츠 1200 | 24 | 48 |
| tablet | 768–1023 | 834 | 8열 | 20 | 32 |
| mobile | 0–767 | 390 | 4열 | 16 | 24 |

- 제품 목록(ContentGrid)은 3열 → 2열 → 1열.
- HeroSearch는 2칼럼 → 모바일 1열(텍스트 먼저, 미디어 다음).
- 모바일에서 SearchBar의 입력·버튼, FilterPanel, GlobalHeader 링크, Footer는 줄바꿈하거나 세로로 쌓는다. **정보를 숨기지 않는다.**
- display 36/44, heading 28/36으로 모바일 축소. 그 외 역할은 유지.

## Imagery

자연 소재·공간·제품 사진. 제품 형태가 잘 읽히는 구도와 설명적인 크롭을 우선한다. 카드 미디어는 4:3, 상세 대표 이미지는 3:4(모바일 4:3). 이 시스템의 미디어는 **직접 그린 도형 자리표시자**(아치형 실루엣 + 바닥 그림자, `default`·`mint`·`light` 톤)이며, 실제 프로젝트에서는 사용권이 있는 사진으로 교체한다. 원본의 방향 표시는 텍스트 화살표 “↗”였다. 이 시스템은 자체 제작한 20px 선 아이콘 20종(Icon, **derived-extension**)을 추가했고, 외부 아이콘 세트는 쓰지 않는다. 이미지가 없으면 비율을 유지한 점선 틀 + 이미지 없음 아이콘 + “이미지 준비 중”으로 표시한다(missing-image, **derived-extension**).

## Interaction & Accessibility

- hover: 밑줄 또는 색 변화(CTA는 `primaryDark`). focus: 2px `textPrimary` 외곽선 + offset 4px(진한 패널 위에서는 `surface`).
- 모든 입력에 화면에 보이는 label, 모든 버튼에 읽을 수 있는 이름. 클릭 영역 최소 44px.
- 얇은 `border`는 구획용이고, 입력 경계는 `textSecondary`로 구분한다.
- pressed: 안쪽 2px 링. disabled: `border`/`canvas` 면 + `textSecondary`. loading: 스피너 + 진행형 라벨 또는 Skeleton, `aria-busy`. error: 잉크 2px 경계 + 아이콘 + “오류” + 해결 방법. empty: 제목 + 안내 + 초기화 버튼. success/selected: `primary` + 체크.
- Dialog는 포커스를 패널로 옮기고 Tab을 순환시키며 Esc로 닫는다. Menu는 ↑↓·Home·End·Esc를 지원한다.

## Components (27)

### 브랜드·탐색 컴포넌트 (기존 11, 유지)

| 이름 | 규격 | 변형 / 상태 |
|---|---|---|
| GlobalHeader | 가로, 양끝 정렬, 최소 높이 80; 모바일 wrap | Default |
| HeroSearch | 단색 텍스트 패널 + 미디어; 12열 | Default, missing image(+) |
| SearchBar | 가로, 최소 높이 48; 입력 Fill, 버튼 Hug | Default, Focus, Filled, disabled(+) |
| CategoryNav | 가로, gap 24; 모바일 wrap | Default, Selected, Hover, Focus |
| FilterPanel | 가로 wrap, gap 16; 모바일 세로 | Default, Active, Empty, disabled(+) |
| ProductCard | 세로, gap 16; 미디어 4:3, radius 4 | Default, Hover, Focus, loading(+), missing image(+) |
| ImageCard | 세로, gap 16; 미디어 4:3 | Default, missing image(+) |
| ContentGrid | 3열 gap 24 → 2열 → 1열 | Default, Empty(+초기화 액션) |
| BrandStatement | 12열 중 8열 텍스트; 섹션 간격 80 | Default |
| CTA | 최소 높이 44, padding 8/24, radius 4 | Primary, Secondary, Hover, Focus, disabled(+) |
| Footer | 가로, 양끝 정렬, 상단 선; 모바일 세로 | Default |

(+) = 이번에 추가한 **derived-extension** 상태.

### IAK coverage 컴포넌트 (16, KOREX 스타일)

| 그룹 | 컴포넌트 | 핵심 규칙 |
|---|---|---|
| Actions | Button | 4 variants(primary·secondary·ghost·danger) × sm 36 / md 44 / lg 56. 새 화면은 CTA 대신 Button. |
| Forms | TextField · Textarea · Select · Checkbox · Switch | 항상 보이는 label, “필수”·“읽기 전용” 텍스트, description, 오류 문장. 48px 입력, `textSecondary` 경계. |
| Feedback | Badge · Skeleton · Toast | Badge 5 tones · Toast 4 tones, 아이콘 + 단어로 구분. Skeleton은 실제 레이아웃 크기. |
| Content | Card | outlined / plain, selected·loading·missing image, 제목 2줄. |
| Foundations | Icon | 자체 20종, 20px, 1.5 선, square cap. |
| Overlays | Dialog · AlertDialog · Menu | Dialog sm 400 / md 560 / lg 800. danger는 잉크 + 휴지통 + 구체 동사. |
| Data | Table · Pagination | 정렬·누락 값(—, “값 없음”)·가로 스크롤. 페이지 번호 44px, 모바일은 상태 줄 + 번호. |

## Templates (3)

Templates 그룹에 세 화면(1440 폭 전체 화면)이, Template states 그룹에 상태별 화면 13개가 있다. 모두 위 컴포넌트만 조합하고, 페이지 셸(최대 콘텐츠 1200 · 좌우 여백 48/32/24 · 섹션 간격 80/64/48)만 템플릿이 정한다. 1440 · 834 · 390 · 375 폭에서 확인했다.

| 템플릿 | 섹션 순서 | 상태 카드 |
|---|---|---|
| **BrandHome** | GlobalHeader → HeroSearch → ContentGrid(ProductCard ×3) → BrandStatement → Footer | loading · error · long-text · missing-image |
| **SearchList** | GlobalHeader → 인트로 → SearchBar → FilterPanel → ContentGrid(+ Empty) → Pagination → Footer | loading · empty · error · long-text · missing-image |
| **ProductDetail** | GlobalHeader → 인트로 → ImageCard(3:4) + 정보(Badge · Table · Button) → ProductCard 함께 보기 → BrandStatement → Footer | loading · error · long-text · missing-image |

- **loading**: 레이아웃과 같은 크기의 Skeleton, 관련 컨트롤 비활성. **error**: 페이지는 유지하고 해당 영역만 인라인 오류 Toast + “다시 시도”. **empty**: 빈 결과 문장 + “검색 초기화”. **long-text**: 한글·영문 혼합 긴 문자열을 단어 단위로 줄바꿈. **missing-image**: 비율 유지 점선 틀 + “이미지 준비 중”.
- 상태는 미리보기용 예시다. 데이터 연결·라우팅·API 호출은 포함하지 않는다.

## Do / Don't

**Do**
- 브랜드 이야기와 실용적 검색을 균형 있게 배치한다.
- 직사각형 CTA, 단순한 1px 경계선, 차분한 `primarySoft` 보조 면을 사용한다.
- 넓은 여백으로 구획하고 한 줄 카드 수는 3개까지.
- 상태는 아이콘 + 단어로 먼저 전하고 색은 보조로 쓴다.
- IAK 체크리스트로 빠진 상태를 찾고, 모양은 KOREX 토큰으로 만든다.

**Don't**
- 네온 색상, 과도한 pill 버튼, 빽빽한 카드, 대시보드 UI, 장식적 요소(그라데이션·그림자·배지 남발).
- 새 색·타입·간격 토큰이나 다크 모드를 임의로 추가하지 않는다(유일한 파생 토큰은 `overlay`).
- IAK의 dark 테마·orange·Pretendard·로고·SaaS 스킨, 빨강/주황 경고색, pill 스위치·배지를 들여오지 않는다.
- 원본 로고·고유 카피·사진·실제 수치나 고객 데이터를 재사용하지 않는다.
- DB, Router, 인증, 결제, API를 컴포넌트에 넣지 않는다. 기본 산출물은 정적 HTML/CSS와 이 컴포넌트다.

## Scope

값은 이전에 합의한 정규화된 재사용 토큰이며 원본에서 정밀 추출한 측정값이 아니다. 미리보기의 카피(“FORM & PLACE”, 예시 제품 6종, 예시 표 값)와 도형·아이콘은 이 시스템을 위해 새로 작성한 예시다.
