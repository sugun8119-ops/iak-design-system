> Current revision: [Monitoring 1.5](08-monitoring-1.5.md) supersedes conflicting sizing, inventory and sample-data guidance below. Earlier details remain for legacy variants.

# Layout Patterns

4 device columns above 1200px, 2 at 601–1200px, 1 at <=600px; sidebar stacks at <=900px

기준폭 1440px · 12열 · gutter 24px.

- Main: Fleet Overview → ../preview/index.html
- Sub: Equipment Group → ../preview/sub.html
- Detail: Device Inspector → ../preview/detail.html

공통 항목은 유지하되 CRM/RAIS 대시보드 업무 내용은 복사하지 않는다. 긴 제목은 높이를 늘리고 최소 글자 크기를 유지한다.


## Quality revision 1.3

HYNIX: 균등한 요약·장비 카드, 44px 버튼, 25px 비조작 상태 배지. 네이비 그리드와 자체 제작 모듈 도식. Raised 4/4/12, inset 2/2/6. 선택/포커스 파랑, 실행 주황을 유지한다.

타이포: Display32/40, Heading24/32, Title18/26, Body14/20, Meta12/17. Pretendard 실제 파일 사용. IAK30항목과 프로젝트 고유 색상·13컴포넌트·Main/Sub/Detail을 유지한다.


## Quality revision 1.4 · 2026-09-26

운영 정보 위계: Main 지표 아래에 연결 끊김 요약을 배치하고 장비 확인으로 이어진다. 숫자는 분모·단위·snapshot 시간을 함께 표시한다. 장비 카드 메타데이터는 Zone + Snapshot time, 오프라인은 Unavailable로 구분한다. 이벤트는 시간/심각도/메시지 열을 사용하고 좁은 화면에서는 메시지를 다음 줄에 배치한다. 오프라인 상세는 최신 추이를 숨기고 마지막 수신 시각을 명시한다.

Figma의 상세 화면은 Viewer/Command와 Trend/Events의 열을 균등 정렬했다. Figma는 8개 가상 장비(7 online, Unit 08 offline, 14:32 snapshot)를, 실행 가능한 웹 예시는 6개(5 online, Module 06 offline, 09:42 snapshot)를 사용한다. 두 렌더 예시는 동일 데이터의 복제본이 아니며 각 예시 안에서 수치를 일치시킨다.
