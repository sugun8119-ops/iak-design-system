# IAK KIDS · 핵심 디자인 레퍼런스

조사일: 2026-09-26. 공식 공개 화면·제품 설명·도움말 기준. 앱에 로그인하여 전체 흐름을 직접 테스트한 결과는 아니다. 공개 이미지는 최신 배포 버전과 다를 수 있다.

## 선택 방향

Tiimo의 일정 가독성, Family Link의 부모용 정보 위계, Finch의 작은 목표 완료 흐름을 참고한다. IAK의 자체 컬러와 타이포를 유지하면서 아래 패턴을 독자적으로 설계한다. 원본 화면, 캐릭터, 아이콘을 시스템 배포 자산에 포함하지 않는다.

## 8개 핵심 참고 대상

| 참고 대상 | 공식 자료에서 확인한 내용 | IAK 적용 제안 |
|---|---|---|
| Tiimo 하루 일정 | 시간순 일정과 루틴을 한 화면에 표시 | ScheduleItem에 시간·제목·소요 시간의 위계 지정 |
| Tiimo 하위 단계 | 완료·현재·예정 단계를 함께 표시 | 활동 상세에 단계 목록과 현재 단계 표시 |
| Tiimo 집중 타이머 | 남은 시간과 진행 링 | ProgressCard에 숫자와 진행 표시를 함께 제공 |
| Tiimo 웹 주간 일정 | 일·주·월 보기, 일정과 할 일 병렬 구성 | 데스크톱은 주간 보기, 모바일은 선택 날짜의 목록으로 구성 |
| Family Link 부모 홈 | Screen Time에 사용량·제한·일정 통합 | 부모 홈에 오늘의 요약과 필요한 조치를 우선 배치 |
| Family Link 자녀 전환 | 자녀 프로필 전환, 기기 관리 | ProfileCard와 자녀 선택 상태를 일관되게 표시 |
| Finch 목표 만들기 | 제목·반복 설정, 추가 옵션에 시간·알림 | 기본 입력을 짧게 유지하고 상세 설정을 단계적으로 노출 |
| Finch 목표 완료 | 체크로 완료 후 에너지 또는 보상 지급 | 미션 체크→진행률 갱신→짧은 완료 피드백 설계 |

오른쪽 열은 IAK를 위한 설계 제안이며 해당 서비스의 구현을 그대로 기술한 것이 아니다.

## 공식 출처

- [Tiimo 일정과 하위 단계](https://www.tiimoapp.com/product/visual-planning)
- [Tiimo 집중 타이머](https://www.tiimoapp.com/product/focus)
- [Tiimo 웹 일정](https://www.tiimoapp.com/product/webapp)
- [Family Link 개편 안내 — 2025-02-12](https://blog.google/innovation-and-ai/technology/families/family-link-updates-february-2025/)
- [Family Link 자녀 전환 도움말](https://support.google.com/families/answer/9055704?hl=en)
- [Finch 목표 생성·완료 — 2025-07-29 업데이트](https://help.finchcare.com/hc/en-us/articles/37779940291213-Creating-and-Completing-Goals)
- [Finch 홈 구성 — 2025-07-29 업데이트](https://help.finchcare.com/hc/en-us/articles/37780000231309-Exploring-the-Finch-Home-Page)
- [Finch 공식 App Store 이미지](https://apps.apple.com/us/app/finch-self-care-pet/id1528595748)

## 화면 이미지

### Tiimo 하루 일정

![Tiimo 공식 일정 이미지](https://cdn.prod.website-files.com/64786b619e5c33d650d5499e/68af49fd00d2d66c4043df3b_a7cb189af8ed5519c1e13132a39a9a37_tiimoapp_visual_plan_routine.png)

### Tiimo 주간 일정

![Tiimo 공식 웹 주간 일정](https://cdn.prod.website-files.com/64786b619e5c33d650d5499e/68aeef5095bdcb332f34e526_9303da47facb161e882f24d410d44fbd_tiimoapp_desktop_week.png)

### Family Link 부모 화면

![Family Link 공식 도움말 이미지](https://storage.googleapis.com/support-kms-prod/7xLvGKTfLBfTcZHKtxNT3ZKBQXkM7jmvyfiP)

Finch는 공식 스토어의 화면 이미지를 연결했다. 최신 버전의 완료 전후 화면을 직접 캡처한 자료는 확보하지 못했다.

## IAK에서 별도로 정의할 상태

공개 자료에서 확인하지 못한 예외 상태를 원본 서비스의 동작으로 추정하지 않는다. 다음은 IAK 자체 설계·검수 범위다.

| 영역 | 설계·검수 대상 |
|---|---|
| 부모 홈 | 자녀 없음, 불러오는 중, 불러오기 실패·재시도, 요청 처리 중·성공·실패 |
| 일정 | 일정 없음, 입력 오류, 겹치는 일정 안내, 긴 제목, 좁은 화면 |
| 아이 활동 | 시작 전, 진행 중, 일부 완료, 모두 완료, 완료 취소, 중복 보상 방지 |
| 공통 | 키보드 초점, 상태를 설명하는 텍스트, 색 이외의 상태 표시, 읽기 순서 |

## 적용 우선순위

1. 부모·일정·활동 템플릿에 필요한 정보 위계와 상태 목록 확정.
2. 기존 ProfileCard / ScheduleItem / ProgressCard / ActionCard / Dialog / Toast에 규칙 연결.
3. 새로 필요한 패턴만 추가하고 기존 컬러 토큰으로 통일.
4. 대표 화면에서 긴 한글·모바일·완료 전후·실패 복구를 확인.

이번 결과물은 참고 자료와 적용 제안이다. Claude Design 및 Figma 시스템 수정은 포함하지 않는다.
