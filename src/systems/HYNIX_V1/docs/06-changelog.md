# Changelog

## 1.1.0 · 2026-09-25
- IAK 항목 구조만 참조한다는 사용자 정정을 명시.
- 원본 30개 케이스를 프로젝트별로 대응하고 7개 문서 및 케이스 미리보기를 추가.
- 기존 프로젝트 토큰·스타일 보존. Toast 케이스를 현재 프로젝트 스타일로 보완.
- 구식 Figma 미생성 문구 정정.
- IAK 검증 점수의 상속 금지; 실제 검증은 별도 결과로 기록.
- HYNIX 장비 그리드 4→2열 전환을 1200px로 수정하고 사이드바 900px 전환과 구분.

## 사용자 승인 폰트 업데이트

Pretendard 1.3.9를 기본 글꼴로 사용한다. 실제 WOFF2와 SIL OFL 라이선스를 assets/fonts/에 포함한다. Pretendard 크기·굵기를 유지하고 품질 개정의 행간은 JSON typography를 따른다. Figma에도 공식 Pretendard 9개 굵기를 업로드하고 전체 텍스트와 스타일에 실제 적용했다. 이전 OS-only 규칙을 대체한다.


### Figma Pretendard 적용 완료
공식 OTF 9개 굵기 업로드 후 20개 페이지, 5개 텍스트 스타일과 694개 텍스트를 실제 Pretendard로 교체했다. Main/Sub/Detail 렌더링을 확인했다.


## Quality revision 1.3

HYNIX: 균등한 요약·장비 카드, 44px 버튼, 25px 비조작 상태 배지. 네이비 그리드와 자체 제작 모듈 도식. Raised 4/4/12, inset 2/2/6. 선택/포커스 파랑, 실행 주황을 유지한다.

타이포: Display32/40, Heading24/32, Title18/26, Body14/20, Meta12/17. Pretendard 실제 파일 사용. IAK30항목과 프로젝트 고유 색상·13컴포넌트·Main/Sub/Detail을 유지한다.


## Quality revision 1.4 · 2026-09-26

운영 정보 위계: Main 지표 아래에 연결 끊김 요약을 배치하고 장비 확인으로 이어진다. 숫자는 분모·단위·snapshot 시간을 함께 표시한다. 장비 카드 메타데이터는 Zone + Snapshot time, 오프라인은 Unavailable로 구분한다. 이벤트는 시간/심각도/메시지 열을 사용하고 좁은 화면에서는 메시지를 다음 줄에 배치한다. 오프라인 상세는 최신 추이를 숨기고 마지막 수신 시각을 명시한다.

Figma의 상세 화면은 Viewer/Command와 Trend/Events의 열을 균등 정렬했다. Figma는 8개 가상 장비(7 online, Unit 08 offline, 14:32 snapshot)를, 실행 가능한 웹 예시는 6개(5 online, Module 06 offline, 09:42 snapshot)를 사용한다. 두 렌더 예시는 동일 데이터의 복제본이 아니며 각 예시 안에서 수치를 일치시킨다.


## Claude1.4 resume completed
Session quota reset; resumed the existing project, completed pending implementation and final check_design_system (no issues). Published UI was verified after reload. Detailed evidence and limitations:07-quality-1.4-handoff.md and qa-results.json.

## 1.5 — 2026-09-26
Added monitoring overview, six-state semantics, four reusable components, searchable equipment table, keyboard detail tabs and honest offline states. Pretendard variable corrected in Figma. See 08-monitoring-1.5.md and qa-results.json.
