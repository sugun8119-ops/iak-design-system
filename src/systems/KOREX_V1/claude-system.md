# KOREX_V1 (v1.3)

용도: **Corporate / Brand / Product Web**

## 기준의 구분
- **IAK Design Studio = coverage only.** 16개 common family(Button · TextField · Textarea · Select · Checkbox · Switch · Badge · Card · Skeleton · Icon · Dialog · Menu · Table · Pagination · Toast · AlertDialog)는 필요한 항목과 상태의 체크리스트로만 쓴다.
- **KOREX = visual authority.** 색·타입·반경·간격·레이아웃은 이 문서와 `figma-system.json`만 따른다. 각 Behance 프로젝트는 독립 스타일을 보존한다.
- IAK dark 테마, orange, Pretendard, IAK 로고, SaaS/대시보드 스킨은 가져오지 않는다.
- 정규화 preview에 없던 컴포넌트·상태는 **derived-extension**으로 표기한다. 전체 대응표: `preview/coverage.md`.
- `observed`는 이전에 정규화한 KOREX_V1 preview(`preview/` — 합의된 재사용 토큰 + 2026-09-25 공개 썸네일 기준)에서 계승한 요소라는 뜻이다. **Behance 원본을 정밀 추출·측정했다는 뜻이 아니다**(원본 상세 페이지는 HTTP 403으로 열람하지 못했다).

## 적용 규칙
`figma-system.json`의 foundation 값을 기준으로 작업한다. 색·타입·간격을 임의로 늘리지 않는다. 브랜드명, 콘텐츠, 제품 정보는 새 프로젝트의 것으로 교체한다. 이 문서를 디자인 작업 지침으로 사용하고 JSON을 함께 제공한다.

## Style DNA
딥 그린을 중심으로 브랜드 분위기와 제품 탐색의 명료함을 함께 유지한다. 굵은 산세리프와 넓은 여백, 정돈된 검색·분류 UI를 사용한다.

## Layout / Typography / Image
- 데스크톱 12열 / 최대 콘텐츠 1200 / gutter 24, 태블릿 8열 / 20, 모바일 4열 / 16.
- 프레임 1440·834·390, 페이지 좌우 여백 48·32·24. 1024 이상 desktop, 768 이상 tablet, 나머지 mobile.
- 브랜드 히어로는 큰 미디어와 검색을 결합한다. 모든 역할은 산세리프. 제품 목록 3열 → 2열 → 1열, 모바일 검색과 필터는 줄바꿈한다.
- 자연 소재·공간·제품 사진을 사용한다. 제품의 형태가 잘 읽히는 구도와 설명적인 크롭을 우선한다.
- 미리보기의 도형은 직접 작성한 미디어 자리표시자다. 실제 프로젝트에서 사용권이 있는 사진으로 교체한다.
- **서체.** Figma는 기존에 만들어 둔 **Inter** Text Style 5개(display · heading · title · body · meta)를 그대로 쓴다. 웹은 폰트 파일 없이 `Arial, "Noto Sans KR", sans-serif` 폴백으로 렌더한다. 따라서 같은 크기·행간이라도 글자 폭이 다르다: 라틴 글자는 Inter와 Arial의 폭이 다르고(Inter가 대체로 조금 넓다), Inter에는 한글 글리프가 없어 Figma에서 한글은 대체 글꼴로, 웹에서는 Noto Sans KR(없으면 OS 기본 한글 글꼴)로 그려진다. 줄바꿈 위치와 버튼·배지 폭은 실제 서체에서 다시 확인한다.

## Derived token / 의미 역할
- 파생 토큰은 `overlay` 하나: `textPrimary` #172019의 56% 불투명도, Dialog·AlertDialog scrim 전용(derived-extension). 새 hue는 추가하지 않는다.
- 상태는 아이콘 + 단어가 먼저, 색은 보조: success = primary + 체크 · warning = surface + 잉크 경계 + ! · error/danger = 잉크 면 또는 2px 잉크 경계 + 경고/×/휴지통 + “오류/삭제” · info = surface + textSecondary 경계 + i · selected = primary + 체크 · disabled = border/canvas 면 + textSecondary.

## Components
| 이름 | 규격 | 변형 / 상태 |
|---|---|---|
| GlobalHeader | 가로 Auto Layout, 양끝 정렬, 최소 높이 80; 모바일 wrap | Default |
| HeroSearch | 배경 미디어와 별도 단색 텍스트 패널; 12열 | Default |
| SearchBar | 가로 Auto Layout, 높이 최소 48; 입력 Fill, 버튼 Hug | Default, Focus, Filled |
| CategoryNav | 가로 Auto Layout, gap 24; 모바일 wrap | Default, Selected, Hover, Focus |
| FilterPanel | 가로 wrap, gap 16; 필요하면 세로 | Default, Active, Empty |
| ProductCard | 세로 Auto Layout, gap 16; 그림 4:3, radius 4 | Default, Hover, Focus |
| ImageCard | 세로 Auto Layout, gap 16; 그림 4:3 | Default |
| ContentGrid | 3열, gap 24; 태블릿 2열; 모바일 1열 | Default, Empty |
| BrandStatement | 12열 중 8열 텍스트; 섹션 간격 80 | Default |
| CTA | 가로 Auto Layout, 최소 높이 44, padding 8/24, radius 4 | Primary, Secondary, Hover, Focus |
| Footer | 가로 Auto Layout, 양끝 정렬, 상단 선; 모바일 세로 | Default |

### IAK coverage 컴포넌트 (KOREX 스타일, 16)
| 이름 | 규격 | 변형 / 상태 | 출처 |
|---|---|---|---|
| Button | radius 4; sm 36(hit 44) · md 44 · lg 56 | primary · secondary · ghost · danger × 3 sizes; hover · focus · pressed · disabled · loading | CTA 관찰 + derived-extension |
| TextField | 입력 48, textSecondary 1px | description · required · focus · error · success · readOnly · disabled · sm | 입력 관찰 + derived-extension |
| Textarea | 최소 120 + 카운터 | required · error · readOnly · disabled · long value | derived-extension |
| Select | 네이티브 + chevron | placeholder · error · disabled option · readOnly · disabled · long option | select 관찰 + derived-extension |
| Checkbox | 20px radius 2, 행 44 | checked · indeterminate · focus · disabled · error | derived-extension |
| Switch | 44×24 각진 트랙 + 켜짐/꺼짐 | on · off · hover · focus · loading · disabled | derived-extension |
| Badge | 24(sm 20), radius 2 | neutral · brand · success · warning · error | derived-extension |
| Card | outlined(surface+border+radius 4+24) / plain | hover · focus · selected · loading · missing image · long title | 카드 구조 관찰 + derived-extension |
| Skeleton | border 블록, 실제 크기 | text · title · display · media | derived-extension |
| Icon | 20px, 1.5 stroke, square cap (자체 20종) | 16 · 20 · 24 | derived-extension |
| Dialog | surface + border + radius 6, overlay | sm 400 · md 560 · lg 800 | derived-extension |
| Menu | 항목 44, 목록 240–320 | selected · hover · focus · disabled · danger · long | derived-extension |
| Table | 헤더 textSecondary 선, 행 border | sort · missing · long · loading · empty · error · narrow | 사양 표 관찰 + derived-extension |
| Pagination | 번호 44×44 radius 2 | first · middle · last · single · disabled | derived-extension |
| Toast | padding 16, radius 4, max 440 | info · success · warning · error · inline | derived-extension |
| AlertDialog | Dialog sm + 아이콘 마크 | danger · neutral · loading · error | derived-extension |

기존 11개에 추가된 상태(derived-extension): ProductCard loading · missing image, ImageCard/HeroSearch missing image, SearchBar/FilterPanel/CTA disabled, ContentGrid empty 액션.


### IAK 138 케이스 (v1.3)
IAK 16 family · 138 케이스를 모두 KOREX 스타일로 구현했다(foundation · 전용 11개 · 템플릿 3개 유지, 새 사례는 derived-extension).
- referenceType: code 114 · composition 8 · native 4 · preview-only 5 · design-only 7. design-only(`d-*`)는 **시각 샘플**이며 런타임 API가 아니다.
- 행 기록: `preview/case-coverage.json`(정확히 138행: family, id, referenceType, origin, 구현 export/props, 렌더 경로·앵커, 검증 내용).
- 렌더: `preview/coverage-138.html#c-<family>-<id>`(정적 샘플, React 18을 불러올 수 있으면 동작 모드), 디자인 시스템 아티팩트의 Coverage138 카드와 family별 Coverage 카드.
- 보강 API: Button `text` · 입력 `state="hover"` · Badge `info`/`count` · Skeleton `circle` · Icon 미해결 표식 · Dialog `initialFocus`/`closeState` · Menu 항목 `href` · Table `pageSize`/`virtual`/열 `state` · Pagination `state`/`statePage` · Toast `description`/`closeState` · ToastStack · AlertDialog Promise 기반 pending/error/retry.

상호작용 요소는 hover 시 밑줄 또는 색 변화, focus 시 2px 외곽선과 4px offset을 사용한다. 모든 입력에 label, 버튼에 읽을 수 있는 이름을 제공한다. 클릭 영역은 최소 44px. 모바일에서 정보를 숨기지 않는다. 얇은 border는 구획용이며 입력 경계는 textSecondary로 구분한다.

## Templates
- `BrandHome` → `preview/index.html`
- `SearchList` → `preview/list.html`
- `ProductDetail` → `preview/detail.html`
- 상태별 정적 렌더: `preview/kit/templates/` — BrandHome(default · loading · error · long-text · missing-image), SearchList(default · loading · empty · error · long-text · missing-image), ProductDetail(default · loading · error · long-text · missing-image). 1440 · 834 · 390 · 375 폭 확인.
- 138 케이스 갤러리: `preview/coverage-138.html` + `preview/case-coverage.json`.
- 컴포넌트 상태 카드 정적 렌더: `preview/kit/components/` (27개), 목록: `preview/kit/index.html`, 스타일: `preview/kit/kit.css`.

## Do / Don't
- 브랜드 이야기와 실용적 검색을 균형 있게 배치한다. 직사각형 CTA, 단순한 경계선, 차분한 보조 면을 사용한다.
- 네온 색상, 과도한 pill 버튼·스위치·배지, 빽빽한 카드, 대시보드 UI와 장식적 요소, 빨강/주황 경고색을 피한다.
- 원본 로고·고유 카피·사진·실제 수치나 고객 데이터를 재사용하지 않는다.
- DB, Router, 인증, 결제, API를 추가하지 않는다. 기본 산출물은 정적 HTML/CSS이다.

## Figma로 옮기기
1. `preview/figma-board.svg`를 캔버스에 드래그해 편집 가능한 스타일 참조 보드를 배치한다.
2. JSON의 `figma.variables`로 (`color/overlay`는 derived-extension, alpha 0.56) `KOREX_V1` 컬렉션 / Default 모드를 만든다. `color/…`는 Color, `space/…`·`radius/…`는 Number다. 값의 단위는 px다.
3. `figma.textStyles`는 기존 Inter Text Style 5개와 대응한다(새로 만들지 않는다). 폰트 크기·행간·굵기를 각각 적용한다.
4. `foundation.grid`와 `responsive`로 화면 크기별 그리드를 만든다. 위 컴포넌트를 Auto Layout / Fill·Hug로 만들고 `templateSpecs` 순서로 인스턴스를 배치한다.
5. JSON은 커스텀 전달 명세다. Figma 기본 기능에 파일을 넣는 것만으로 변수나 컴포넌트가 자동 생성되지는 않는다. SVG 역시 변수·Auto Layout을 만들지 않는다.

## 실행 / 수정
`preview/index.html`을 브라우저에서 열면 된다. 설치와 빌드가 없다. `list.html`, `detail.html`은 일반 링크로 연결된다.
검색·분류는 3개의 예시 레코드만 메모리에서 필터링한다. 빈 결과와 초기화가 포함된다. 카드는 공통 상세 화면을 열고 선택한 예시 이름·소재를 표시한다.
JSON을 변경하면 `preview/styles.css`와 `preview/kit/kit.css`의 대응 CSS 변수도 갱신한다. `preview/kit/`은 디자인 시스템 컴포넌트를 정적 HTML로 렌더한 참조이며 상호작용은 없다.
컴포넌트 소스는 `preview/source/`에 있다(라이브 디자인 시스템 아티팩트의 bundle.js · bundle.css · index.d.ts · 컴포넌트별 preview.html/README.md · tokens.json · README.md · coverage.md · templates.js · coverage-cases.js). React 18 UMD를 먼저 불러온 뒤 bundle.js를 불러오면 `window.KOREX`로 쓸 수 있다. 자세한 내용: `preview/source/SOURCE.md`. SVG는 정적 참조이므로 함께 갱신한다.

## Reference / Scope
[Behance 공개 포트폴리오](https://www.behance.net/gallery/133721087/KOREX-PM_WEB_UIUX_Design) · 2026-09-25 확인.
상세 페이지 접근은 HTTP 403으로 제한되어 공개 썸네일과 이전 대화에서 확정된 방향을 기준으로 정규화했다. 색상·치수는 원본을 정밀 추출한 값이 아니라 이전에 합의한 재사용 토큰이다. 미리보기 카피와 도형은 이번 산출물용으로 새로 작성했다.


## v1.3.0 인계 기준

기존 프로젝트 스타일을 유지한다. IAK는 138개 사례 목록의 기준이다. 없는 폰트만 유사 서체로 대체하고 변경 내역을 기록한다. Figma의 Coverage 138 페이지와 preview/case-coverage.json을 대응표로 사용한다. 다른 design/p 버전의 스타일과 혼합하지 않는다. 동작 예시는 preview/coverage-138.html에서 열 수 있다(React CDN 연결 필요).


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

## 1.5 추가 조합 사용 규칙

- `preview/scenarios.html`의 세 가지 실전 조합을 필요할 때 사용한다. 기존 138개 사례의 명칭·ID·스타일을 변경하거나 추가 12개 상태를 원본 IAK 사례라고 설명하지 않는다.
- 검색 오류 후 검색어, 제출 오류 후 입력값을 유지한다. 입력 오류는 필드와 설명으로 연결하고 첫 오류에 초점을 둔다. 처리 중 중복 제출을 막고 완료 후 새 작성으로 돌아갈 수 있게 한다.
- 이미지가 없어도 제목·본문·다음 행동을 유지한다. 긴 문자열은 줄바꿈하고 넓은 표는 표 영역 안에서만 가로 스크롤한다.
- 이 샘플은 외부 전송과 저장이 없는 시연이다. 실제 구독·상담 접수로 오인시키지 않는다. 서비스 연결은 별도 요구가 있을 때만 구현한다.

## 1.6 제품 탐색 확장

`preview/product.html`은 제품 선택 → 비교 → 적용 사례 → 선택 맥락을 유지한 상담 흐름이다. 기존 KOREX foundation과 IAK 138개 사례는 변경하지 않는다. USM의 용도 중심 탐색, Vitra의 프로젝트 맥락을 참고한다. 비교 도구는 자체 설계한 확장이다. 원본 로고·문구·사진·실제 고객 데이터를 복제하지 않는다.

React 18 뒤 `source/product-patterns.js`를 로드하고 `.kx` 안에서 `product.css`를 사용한다. `window.KOREXProduct`의 ProductSelector는 products/selected/onChange, ProductComparison은 products, ApplicationCase는 product/onChoose, ConsultationForm은 products/selected/outcome을 받는다. products 항목은 id/name/use/description/size/material 문자열이다. selected는 id 배열이다. 데모는 `product-demo.js`를 따른다. outcome=error는 첫 시도 실패 후 재시도 완료를 시연한다.

모바일은 카드·사례·상담을 한 열로 전환하며 비교 표만 지역적으로 스크롤한다. 폼은 유효성 검증, 중복 제출 방지, 실패 시 입력 보존, 재시도와 완료 포커스를 제공한다. 서버 전송·저장은 없으며 실제 상담 완료라고 표시하지 않는다. 새 패턴 3종·구성요소 4종은 기존 138개 사례와 별개다.
