# GlobalHeader

페이지 최상단의 텍스트 브랜드 + 주 탐색 링크. 가로 Auto Layout, 양끝 정렬, 최소 높이 80, 하단 `border` 1px 구획선.

- **변형**: Default. 현재 페이지 링크는 `current: true` → `aria-current="page"`, `primary` 색 + 밑줄.
- **반응형**: 모바일(<768)에서 브랜드와 링크가 줄바꿈(wrap)되며 링크를 숨기지 않는다(햄버거로 감추지 않음).
- **제공할 것**: `brand`(텍스트 브랜드 — 로고 이미지 없음), `links` `[{label, href, current}]`.
- 링크 클릭 영역 최소 44px, hover 밑줄, focus 2px `textPrimary` 외곽선 + offset 4.
