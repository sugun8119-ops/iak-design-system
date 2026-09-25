# ProductDetail

제품 상세 템플릿: GlobalHeader → 인트로(meta + display 제품명) → ImageCard(3:4) + 정보 2칼럼 → ProductCard(함께 보기) → BrandStatement → Footer.

- 정보 칼럼: Badge(분류 · 예시 데이터) → heading → 본문 → 사양 Table(누락 값은 “—” + “값 없음”) → Primary Button + Ghost Button.
- 이미지와 정보는 1:1 두 칼럼, gap `space-48`; 모바일은 1열이며 이미지는 4:3.
- 상태 카드: loading · error · long-text · missing-image. empty는 해당 없음(없는 제품은 error로 안내).
- 치수·가격·성능 수치는 실제 데이터로만 채운다.
