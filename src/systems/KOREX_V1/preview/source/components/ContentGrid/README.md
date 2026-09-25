# ContentGrid

ProductCard 또는 ImageCard를 담는 반응형 그리드: 데스크톱 3열 gap 24 → 태블릿 2열 gap 20 → 모바일 1열 gap 32.

- **변형**: Default, Empty(`empty` 또는 자식 없음 → heading 제목 + 안내 문장, `role="status"`).
- 카드를 4열 이상으로 빽빽하게 채우지 않는다. 한 줄 3개가 최대다.
- **제공할 것**: 카드 children, `emptyTitle`, `emptyText`.
- `emptyAction`으로 Empty에 “검색 초기화” 같은 Button을 붙인다. `busy`는 로딩 중 `aria-busy`.
