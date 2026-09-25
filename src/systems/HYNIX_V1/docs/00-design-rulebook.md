# HYNIX_V1 · Design Rulebook

IAK Design Studio는 케이스 항목 구조만 제공한다. 색·서체·간격·라운드·그림자·레이아웃은 이 프로젝트의 figma-system.json을 따른다. IAK/RAIS 시각 토큰을 상속하지 않는다.

차가운 회색 작업면 위에 부드럽게 돌출된 장비 타일. 좌측 장비 트리와 중앙 멀티 뷰어가 주인공이며, 주황 액션과 파랑 선택 상태를 분리한다.

참조: https://www.behance.net/gallery/107517297/SK-hynix-system-ic-Device-Control-GUI-Design
수치는 새로 정한 정규화 값이며 원본 추출치가 아니다. 고객 로고·실제카피·실데이터·고유 이미지·아이콘은 재사용하지 않는다. 새 브랜드명은 프로젝트에서 공급한다.

우선순위: 사용자 요구 → 프로젝트 figma-system.json → claude-system.md → 개별 템플릿. IAK 항목에 없는 신규 업무 사례는 자동으로 확장하지 않는다.

### Font policy update
Pretendard 1.3.9를 기본 사용하고 번들 WOFF2를 로드한다. 기존 크기·굵기·행간 유지. Figma 자동화의 렌더링은 Noto Sans KR 대체이며 Pretendard 실제 적용으로 오해하지 않는다.
