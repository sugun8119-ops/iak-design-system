# Pagination

목록 페이지 이동: [이전] 번호 목록 [다음]. 번호 칸 44×44, `radius-sm`, 현재 페이지 = `primary` 면 + `surface` 글자 + `aria-current="page"`.

- **출처**: **derived-extension**. 44px 클릭 영역·`primary` 선택 색·각진 형태만 KOREX에서 가져왔다.
- 7쪽 이하면 모두 보이고, 그 이상은 1 … 이웃 … 마지막으로 줄인다.
- **first/last**: 해당 방향 버튼 비활성. **single**: 번호 1개 + 양쪽 비활성(숨기지 않음 — 한 페이지뿐임을 알린다). **disabled**: 로딩 중 전체 비활성, 현재 쪽은 `border` 면으로 유지.
- **모바일(<768)**: 이전/다음 + “3 / 12 페이지” 상태 줄, 번호 목록은 아래 줄로 내려 그대로 보인다.
- 이전/다음은 아이콘만 쓰지 않고 텍스트를 함께 둔다.
- **제공할 것**: `total`, `page`/`defaultPage`, `onChange`, `disabled`, `prevLabel`, `nextLabel`, `label`.
- **v1.3 (derived-extension)**: `state`·`statePage`(특정 번호의 hover/focus 표시). 좁은 컨테이너(≤520px)에서는 컨테이너 쿼리로 상태 줄 + 번호 줄 배치.
