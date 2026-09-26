> Current revision: [Monitoring 1.5](08-monitoring-1.5.md) supersedes conflicting sizing, inventory and sample-data guidance below. Earlier details remain for legacy variants.

# AI Prompt Guide

이 프로젝트의 claude-system.md와 figma-system.json을 먼저 읽고 case-coverage.json에서 필요한 케이스를 찾으세요. HYNIX_V1의 독립 시각 스타일로 Main/Sub/Detail 중 요청한 화면을 만드세요. IAK Design Studio는 케이스 항목 구조만 제공한다. 색·서체·간격·라운드·그림자·레이아웃은 이 프로젝트의 figma-system.json을 따른다. IAK/RAIS 시각 토큰을 상속하지 않는다.

기존 컴포넌트와 토큰을 재사용하며 콘텐츠만 새로 공급합니다. 새 업무 케이스가 필요하면 의도적 추가로 기록합니다. DB/Router/API 연동은 요청 없으면 추가하지 않습니다.


## Quality revision 1.4 · 2026-09-26

운영 정보 위계: Main 지표 아래에 연결 끊김 요약을 배치하고 장비 확인으로 이어진다. 숫자는 분모·단위·snapshot 시간을 함께 표시한다. 장비 카드 메타데이터는 Zone + Snapshot time, 오프라인은 Unavailable로 구분한다. 이벤트는 시간/심각도/메시지 열을 사용하고 좁은 화면에서는 메시지를 다음 줄에 배치한다. 오프라인 상세는 최신 추이를 숨기고 마지막 수신 시각을 명시한다.

Figma의 상세 화면은 Viewer/Command와 Trend/Events의 열을 균등 정렬했다. Figma는 8개 가상 장비(7 online, Unit 08 offline, 14:32 snapshot)를, 실행 가능한 웹 예시는 6개(5 online, Module 06 offline, 09:42 snapshot)를 사용한다. 두 렌더 예시는 동일 데이터의 복제본이 아니며 각 예시 안에서 수치를 일치시킨다.
