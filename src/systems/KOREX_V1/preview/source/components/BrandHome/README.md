# BrandHome

브랜드 첫 화면 템플릿: GlobalHeader → HeroSearch → ContentGrid(ProductCard ×3) → BrandStatement → Footer.

- 기존 컴포넌트만 조합하고, 페이지 셸(최대 콘텐츠 1200, 좌우 여백 48/32/24, 섹션 간격 `space-80`/`space-64`/`space-48`)만 템플릿이 정한다.
- 섹션 제목 줄은 meta + heading, 오른쪽에 Secondary Button 하나(↗ 아이콘).
- 상태 카드(Template states): loading · error · long-text · missing-image. empty는 해당 없음(컬렉션이 비면 섹션을 두지 않는다).
- 교체할 것: 브랜드명, 히어로 문구, 사진, 제품 3개.
