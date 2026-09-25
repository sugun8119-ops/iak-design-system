# KPOP_V1 · Design Rulebook

IAK Design Studio는 케이스 항목 구조만 제공한다. 색·서체·간격·라운드·그림자·레이아웃은 이 프로젝트의 figma-system.json을 따른다. IAK/RAIS 시각 토큰을 상속하지 않는다.

밝은 핑크의 에너지와 흰색 피드의 가독성을 결합한다. 큰 미디어 한 장, 짧은 제목, 작은 메타데이터 순으로 읽히며 카테고리와 콘텐츠 발견이 중심이다.

참조: https://www.behance.net/gallery/105759817/Kpop-World_App_GUI
수치는 새로 정한 정규화 값이며 원본 추출치가 아니다. 고객 로고·실제카피·실데이터·고유 이미지·아이콘은 재사용하지 않는다. 새 브랜드명은 프로젝트에서 공급한다.

우선순위: 사용자 요구 → 프로젝트 figma-system.json → claude-system.md → 개별 템플릿. IAK 항목에 없는 신규 업무 사례는 자동으로 확장하지 않는다.

### Font policy update
Pretendard 1.3.9를 기본 사용하고 번들 WOFF2를 로드한다. 기존 크기·굵기·행간 유지. Figma 전체 텍스트와 스타일에도 업로드된 Pretendard를 실제 적용했다.


## Quality revision 1.3

KPOP: 48px 기본 버튼, 44px 최소 터치 영역, 25~28px 비조작 배지. Hero 4:5 / Detail 16:10 / 목록 1:1. 이미지의 이중 패딩 제거, 목록 88px 썸네일 + 16px 간격과 hairline 구분. 본문 16/26, 문단 사이24. 자체 링·캡슐 SVG를 중앙 크롭한다.

타이포: Display32/40, Heading24/32, Title18/26, Body16/26, Meta12/17. Pretendard 실제 파일 사용. IAK30항목과 프로젝트 고유 색상·13컴포넌트·Main/Sub/Detail을 유지한다.
