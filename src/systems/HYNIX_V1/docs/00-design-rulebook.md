> Current revision: [Monitoring 1.5](08-monitoring-1.5.md) supersedes conflicting sizing, inventory and sample-data guidance below. Earlier details remain for legacy variants.

# HYNIX_V1 · Design Rulebook

IAK Design Studio는 케이스 항목 구조만 제공한다. 색·서체·간격·라운드·그림자·레이아웃은 이 프로젝트의 figma-system.json을 따른다. IAK/RAIS 시각 토큰을 상속하지 않는다.

차가운 회색 작업면 위에 부드럽게 돌출된 장비 타일. 좌측 장비 트리와 중앙 멀티 뷰어가 주인공이며, 주황 액션과 파랑 선택 상태를 분리한다.

참조: https://www.behance.net/gallery/107517297/SK-hynix-system-ic-Device-Control-GUI-Design
수치는 새로 정한 정규화 값이며 원본 추출치가 아니다. 고객 로고·실제카피·실데이터·고유 이미지·아이콘은 재사용하지 않는다. 새 브랜드명은 프로젝트에서 공급한다.

우선순위: 사용자 요구 → 프로젝트 figma-system.json → claude-system.md → 개별 템플릿. IAK 항목에 없는 신규 업무 사례는 자동으로 확장하지 않는다.

### Font policy update
Pretendard 1.3.9를 기본 사용하고 번들 WOFF2를 로드한다. 기존 크기·굵기·행간 유지. Figma 전체 텍스트와 스타일에도 업로드된 Pretendard를 실제 적용했다.


## Quality revision 1.3

HYNIX: 균등한 요약·장비 카드, 44px 버튼, 25px 비조작 상태 배지. 네이비 그리드와 자체 제작 모듈 도식. Raised 4/4/12, inset 2/2/6. 선택/포커스 파랑, 실행 주황을 유지한다.

타이포: Display32/40, Heading24/32, Title18/26, Body14/20, Meta12/17. Pretendard 실제 파일 사용. IAK30항목과 프로젝트 고유 색상·13컴포넌트·Main/Sub/Detail을 유지한다.


## Quality revision 1.4 · 2026-09-26

운영 정보 위계: Main 지표 아래에 연결 끊김 요약을 배치하고 장비 확인으로 이어진다. 숫자는 분모·단위·snapshot 시간을 함께 표시한다. 장비 카드 메타데이터는 Zone + Snapshot time, 오프라인은 Unavailable로 구분한다. 이벤트는 시간/심각도/메시지 열을 사용하고 좁은 화면에서는 메시지를 다음 줄에 배치한다. 오프라인 상세는 최신 추이를 숨기고 마지막 수신 시각을 명시한다.

Figma의 상세 화면은 Viewer/Command와 Trend/Events의 열을 균등 정렬했다. Figma는 8개 가상 장비(7 online, Unit 08 offline, 14:32 snapshot)를, 실행 가능한 웹 예시는 6개(5 online, Module 06 offline, 09:42 snapshot)를 사용한다. 두 렌더 예시는 동일 데이터의 복제본이 아니며 각 예시 안에서 수치를 일치시킨다.
