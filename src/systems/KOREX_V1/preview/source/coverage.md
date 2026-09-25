# IAK coverage 대응표

IAK Design Studio의 16개 common family는 **어떤 항목과 상태를 갖춰야 하는지(coverage)**만 정한다. 모양·색·타입·반경은 전부 KOREX가 정한다(visual authority). IAK의 dark 테마, orange 강조색, Pretendard, IAK 로고, SaaS 대시보드 스킨은 가져오지 않았다.

**출처 표기**: `observed`는 이전에 정규화한 KOREX_V1 preview(`preview/` — 합의된 재사용 토큰 + 2026-09-25 공개 썸네일 기준)에서 계승한 요소라는 뜻이다. **Behance 원본을 정밀 추출·측정했다는 뜻이 아니다**(원본 상세 페이지는 HTTP 403으로 열람하지 못했다). `derived-extension` = 원본에서 관찰하지 못해 KOREX 팔레트·타입·반경 안에서 새로 만든 컴포넌트나 상태.

## Family → KOREX 구현

| IAK family | KOREX 컴포넌트 | 출처 | KOREX 스타일 결정 | 카드에 렌더된 상태·사례 |
|---|---|---|---|---|
| Button | **Button** (+ 기존 CTA 유지) | observed: primary/secondary, 밑줄 텍스트 액션 · derived-extension: ghost 명칭, danger, sm/lg, pressed, loading | 각진 `radius-md`, primary=`primary` 면, danger=잉크(`textPrimary`) 면 + 휴지통 + 구체 동사 | 4 variants × 3 sizes, default·hover·focus·pressed·disabled·loading, 아이콘 앞/뒤/단독, 링크, 긴 라벨 줄바꿈, KO/EN |
| TextField | **TextField** | observed: 48px 입력·label·`textSecondary` 경계 · derived-extension: description, error/success, readOnly, sm | error=잉크 2px 경계 + 아이콘 + “오류” 문장 | default·description·required·focus·error·success·readOnly·disabled·sm·긴 값·긴 label·EN |
| Textarea | **Textarea** | derived-extension | TextField 규격 + 최소 120 + 카운터 | counter·required·error·readOnly·disabled·긴 KO/EN 값 |
| Select | **Select** | observed: FilterPanel select · derived-extension: 필드 메시지, chevron 아이콘 | 네이티브 select 유지 | placeholder·selected·focus·required+error·disabled 옵션·readOnly·disabled·긴 옵션 KO/EN |
| Checkbox | **Checkbox** | derived-extension | 20px `radius-sm`, 선택=`primary` | unchecked·checked·indeterminate·focus·disabled·disabled checked·required error·긴 KO/EN label |
| Switch | **Switch** | derived-extension | pill 대신 각진 트랙 + “켜짐/꺼짐” 텍스트 | off·on·hover·focus·loading·disabled off/on·긴 EN label |
| Badge | **Badge** | derived-extension | `radius-sm` 직사각형, 5 tone = 팔레트 역할 + 아이콘 + 단어 | neutral·brand·success·warning·error × sm/md, 긴 라벨 말줄임, EN, 아이콘 없음, 문맥 |
| Card | **Card** (+ 기존 ProductCard/ImageCard) | observed: 미디어→meta→title 구조 · derived-extension: outlined 면, selected, loading, 이미지 누락 | 그림자·좌측 컬러 바 없음 | default·hover·focus·selected·loading·missing image·긴 제목 2줄·plain·footer 액션 |
| Skeleton | **Skeleton** (+ ProductCard `loading`) | derived-extension | `border` 블록, 실제 레이아웃 크기, reduced-motion 정지 | text·title·display·media·ProductCard/Card/Table 로딩 |
| Icon | **Icon** (20종) | derived-extension (원본은 “↗”만) | 20px 그리드, 1.5 선, square cap, `currentColor` | 전체 세트·16/20/24·버튼 안·단독 label·오류 메시지 |
| Dialog | **Dialog** | derived-extension | `surface` + 1px `border` + `radius-lg`, scrim=`overlay` | live 모달, sm 400·md 560(폼+error+loading)·lg 800(긴 KO/EN 제목·표) |
| Menu | **Menu** | derived-extension | Secondary 트리거, 44px 항목, hover=`primarySoft` | live, selected·hover·focus, disabled(+이유), danger, 긴 KO/EN, 닫힘·비활성 트리거 |
| Table | **Table** | observed: 상세 사양 표 · derived-extension: 정렬, loading/empty/error, 누락 값, 가로 스크롤 | 헤더 1px `textSecondary` 선, 행 1px `border` | sort·missing·long 말줄임·long 줄바꿈·selected row·loading·empty·error·narrow 360px |
| Pagination | **Pagination** | derived-extension | 44px 정사각, 현재=`primary` 면 | first·middle·last·few·single·disabled·EN 라벨, 모바일 상태 줄 |
| Toast | **Toast** | derived-extension | 팔레트 역할 + 아이콘 + tone 단어, 좌측 컬러 바 없음 | info·success·warning·error(+재시도), 긴 KO/EN, 닫기 없음, inline |
| AlertDialog | **AlertDialog** | derived-extension | 잉크 마크 + danger Button, 바깥 클릭 닫기 없음 | danger·loading·error·neutral KO/EN |

## 상태 매트릭스 (의미 있는 것만)

| 상태 | KOREX 표현 | 쓰는 곳 |
|---|---|---|
| hover | 밑줄 또는 색 변화(`primaryDark`, `primarySoft`) | Button, Card, Menu, Switch, Pagination, 기존 링크 |
| focus | 2px `textPrimary` 외곽선 + offset 4(진한 면 위 `surface`) | 모든 상호작용 요소 |
| pressed | 안쪽 2px 링 | Button |
| disabled | `border` 면 / `canvas` 면 + `textSecondary` 글자 | Button, CTA, 입력류, Menu 항목, Pagination |
| loading | 스피너 + 진행형 라벨 또는 Skeleton, `aria-busy` | Button, Switch, AlertDialog, Table, Card, ProductCard, 템플릿 |
| error | 잉크 2px 경계 / 잉크 면 + 경고·× 아이콘 + “오류” 단어 + 해결 문장 | 입력류, Table, Toast, AlertDialog, 템플릿 |
| empty | heading + 안내 + 선택적 초기화 버튼 | ContentGrid, Table, SearchList |
| success | `primary` 경계·면 + 체크 + 문장 | TextField, Badge, Toast |
| selected | `primary` 면/경계 + 체크 또는 굵은 글자 | Checkbox, Menu, Card, Table 행, Pagination, CategoryNav |

## 파생 토큰 (별도 명시)

| 토큰 | 값 | 근거 | 쓰임 |
|---|---|---|---|
| `overlay` | `rgba(23, 32, 25, 0.56)` | `textPrimary` #172019의 56% 불투명도 — 새 색상 아님 | Dialog·AlertDialog scrim 전용 |

그 밖의 모든 새 컴포넌트는 기존 8색 · 5 타입 역할 · 9 간격 · 3 반경만 쓴다. 토큰 밖 수치는 컴포넌트 치수(버튼 36/44/56, 체크박스 20, 스위치 44×24, 다이얼로그 400/560/800), 원본에 있던 12px 세로 padding(입력·표), 그리고 미세 조정 2개(메뉴 항목 세로 10px, 배지 sm 가로 6px)다.

## 템플릿 상태

| 템플릿 | default | loading | empty | error | long-text | missing-image |
|---|---|---|---|---|---|---|
| BrandHome | ✓ | ✓ 컬렉션 Skeleton | — (해당 없음) | ✓ 인라인 오류 Toast | ✓ | ✓ 히어로 + 카드 2 |
| SearchList | ✓ 6개·3개씩 Pagination | ✓ Skeleton + 비활성 필터·Pagination | ✓ 빈 결과 + 검색 초기화 | ✓ 인라인 오류 Toast | ✓ | ✓ 카드 3 |
| ProductDetail | ✓ Badge·Table·Button 조합 | ✓ Skeleton + 로딩 Table | — (해당 없음) | ✓ 오류 + 목록 복귀 | ✓ | ✓ 대표 이미지 + 관련 카드 |
