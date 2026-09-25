# SearchList — empty

SearchList 템플릿의 `empty` 상태 전체 화면. 컴포넌트와 페이지 셸은 기본 SearchList와 같고, 상태 표현만 바뀐다.

- 빈 결과: ContentGrid Empty(heading + 안내) + “검색 초기화” Secondary 버튼, 결과 수 0 표시, Pagination 숨김. 빈 결과 문구는 정규화 preview에서 계승(observed).
- observed는 Behance 원본 정밀 추출이 아니라 정규화 preview에서 계승했다는 뜻이다.
