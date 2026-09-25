# FilterPanel

검색 결과를 좁히는 가로 wrap 막대: 카테고리 select + 초기화(Secondary CTA) + 결과 수, gap 16.

- **변형**: Default(전체), Active(값이 `allValue`와 다름 → select 경계 `primary` 2px), Empty(count 0 → 결과 수 강조; 결과 영역은 ContentGrid Empty로 안내).
- 결과 수는 `role="status"` + `aria-live="polite"`로 읽힌다. 모바일에서는 세로로 쌓는다.
- **제공할 것**: `options` `[{value,label}]`, `value`/`defaultValue`, `onChange`, `onReset`, `count`, `countLabel(n)`, `label`.
- 필터 값은 앱 상태로 관리한다. 이 시스템은 Router·API·DB를 포함하지 않는다.
- **derived-extension 상태**: `disabled`(로딩·오류 중 select와 초기화 비활성). 결과 수 문구는 `countLabel`로 “불러오는 중…”·“결과를 불러오지 못했습니다”로 바꾼다.
