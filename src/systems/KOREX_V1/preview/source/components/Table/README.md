# Table

데이터 표: 헤더 12/18 `textSecondary` + 아래 1px `textSecondary` 선, 행은 1px `border` 구분, 셀 padding 12/16, 숫자 오른쪽 정렬·tabular-nums. 첫 열은 행 머리(`th scope=row`).

- **출처**: 1px 행 구분·굵은 행 머리는 KOREX ProductDetail 사양 표(정규화 preview)에서 계승(observed). 정렬, loading/empty/error, 누락 값, 가로 스크롤은 **derived-extension**.
- **sort**: 정렬 가능한 헤더는 44px 버튼 + 정렬 아이콘, 활성 열은 `primary`, `aria-sort` + “오름차순 정렬됨” 텍스트. 빈 값은 항상 맨 뒤.
- **loading**: 같은 열 구조의 Skeleton 행 + `aria-busy` + “표를 불러오는 중”. **empty**: 검색 아이콘 + 제목 + 안내 + 선택적 액션. **error**: 경고 아이콘 + 제목 + 해결 문장 + “다시 시도” 버튼(`role="alert"`).
- **missing**: “—” 표시 + 스크린리더용 “값 없음”. 0과 빈 값을 구분한다.
- **long**: 기본은 줄바꿈, `truncate` 열은 한 줄 말줄임 + `title`. **narrow**: `minWidth`를 주면 가로 스크롤 영역(키보드 포커스 가능) + 모바일 안내 문구.
- 대시보드형 밀집 표·줄무늬 배경을 쓰지 않는다.
- **제공할 것**: `columns` `[{key,label,sortable,align,width,truncate,render}]`, `rows`, `rowKey`, `sort`/`defaultSort`, `onSortChange`, `state`, `emptyTitle/Text/Action`, `errorText`, `onRetry`, `caption`, `minWidth`, `selectedKey`.
- observed는 Behance 원본 정밀 추출이 아니라 정규화 preview에서 계승했다는 뜻이다.
- **v1.3 (derived-extension)**: 열 `state`(정렬 버튼 focus 표시), `pageSize`·`page`·`onPageChange`(내장 Pagination + “1–5 / 23행”), `virtual={{height,rowHeight,overscan}}` — 고정 높이 가상 스크롤, 스크롤 영역에 포커스 후 ↑↓·PageUp·PageDown·Home·End, `aria-rowcount`/`aria-rowindex`, “전체 N행 한 번에 보기” 대안 버튼.
