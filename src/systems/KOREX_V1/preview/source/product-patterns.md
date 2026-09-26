# KOREXProduct

## 1.6 제품 탐색 확장

`preview/product.html`은 제품 선택 → 비교 → 적용 사례 → 선택 맥락을 유지한 상담 흐름이다. 기존 KOREX foundation과 IAK 138개 사례는 변경하지 않는다. USM의 용도 중심 탐색, Vitra의 프로젝트 맥락을 참고한다. 비교 도구는 자체 설계한 확장이다. 원본 로고·문구·사진·실제 고객 데이터를 복제하지 않는다.

React 18 뒤 `source/product-patterns.js`를 로드하고 `.kx` 안에서 `product.css`를 사용한다. `window.KOREXProduct`의 ProductSelector는 products/selected/onChange, ProductComparison은 products, ApplicationCase는 product/onChoose, ConsultationForm은 products/selected/outcome을 받는다. products 항목은 id/name/use/description/size/material 문자열이다. selected는 id 배열이다. 데모는 `product-demo.js`를 따른다. outcome=error는 첫 시도 실패 후 재시도 완료를 시연한다.

모바일은 카드·사례·상담을 한 열로 전환하며 비교 표만 지역적으로 스크롤한다. 폼은 유효성 검증, 중복 제출 방지, 실패 시 입력 보존, 재시도와 완료 포커스를 제공한다. 서버 전송·저장은 없으며 실제 상담 완료라고 표시하지 않는다. 새 패턴 3종·구성요소 4종은 기존 138개 사례와 별개다.

Figma: https://www.figma.com/design/MR9qvFSq9w5HAD2wnQObdn?node-id=71-2
편집 가능한 정적 구성 참고이며 웹과 픽셀 일치하지 않습니다.
