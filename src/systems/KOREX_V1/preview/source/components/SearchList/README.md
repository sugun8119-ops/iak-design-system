# SearchList

검색·목록 템플릿: GlobalHeader → 인트로(meta + display + 설명) → SearchBar → FilterPanel → ContentGrid(+ Empty) → Pagination → Footer.

- 미리보기는 예시 레코드 6개를 메모리에서 이름·소재 검색과 종류 필터로 거르고 3개씩 Pagination으로 나눈다. 결과 수는 FilterPanel이 알리고, 0개면 ContentGrid Empty + “검색 초기화” 버튼이 나온다.
- 상태 카드: loading · empty · error · long-text · missing-image.
- 실제 데이터 연결·URL 상태·라우팅은 이 시스템 범위 밖이다.
