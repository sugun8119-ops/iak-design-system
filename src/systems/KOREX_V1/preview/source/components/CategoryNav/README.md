# CategoryNav

카테고리 링크 또는 필터 버튼의 가로 목록, gap 24, 모바일 wrap.

- **변형**: Default(`textSecondary`), Selected(`primary`, 굵게, 2px 밑줄 — `aria-pressed`/`aria-current`), Hover(`textPrimary` + 밑줄), Focus(2px 외곽선 + offset 4). 미리보기의 Hover/Focus는 `state`로 고정 표시.
- 항목에 `href`가 있으면 링크, 없으면 토글 버튼으로 렌더한다. 클릭 영역 최소 높이 44.
- **제공할 것**: `items` `[{label, value, href?}]`, `selected`/`defaultSelected`, `onSelect(value)`, `label`(nav 이름).
- pill 모양 칩으로 바꾸지 않는다 — 텍스트 + 밑줄이 KOREX의 선택 표현이다.
