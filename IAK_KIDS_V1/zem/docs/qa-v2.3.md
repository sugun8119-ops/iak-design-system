# IAK KIDS_V1 · Little Everyday v2.3 — QA 기록 (2026-09-26)

## Claude 제작 단계 검사 (아래 결과는 제작 도구의 기록)
| 검사 | 방법 | 결과 |
|---|---|---|
| 패턴 소스 문법 | `zem/lib/zem-patterns.js` 파싱 | 통과 |
| 패턴 렌더 스모크 | 가짜 React로 5종 × 주요 상태 10케이스 렌더 함수 실행 | 10/10 예외 없음 |
| 네임스페이스 보완 | 번들이 v2.3 이전일 때 `RAISDesignSystem_019e07`에 5종 채움 | 통과 |
| 템플릿 로직 문법 | 3개 DC 로직 클래스 파싱 | 통과 |
| 템플릿 상태 | 모든 `state` 값으로 init + renderVals (PD 8 · WS 7 · KA 6) | 21/21 예외 없음 |
| 부모 홈 동작 | 자녀 전환 → 도윤 “목표 초과” · 목표 추가(메모리) → 목록 + “(데모)” Toast · 요청 수락 → 대기 요청 3→2 | 통과 |
| 일정 동작 | 빈 이름 저장 → 오류 문구, 저장 안 됨 · 이름 입력 후 저장 → 7개, 선택 요일이 추가한 요일로 이동, “(데모)” Toast | 통과 |
| 아이 활동 동작 | 집중 완료 → 2/4, 150P, 다음 할 일로 넘어감 · 같은 미션 다시 완료 → 무시(중복 보상 없음) · MissionFeedback으로 취소 → 50P | 통과 |
| 디자인 시스템 컴파일 | check_design_system | 컴포넌트 22 (16 + 패턴 5 + ToastProvider), 템플릿 3 인식, startingPoints (none) |

## 실행하지 못한 검사 (통과로 보지 마세요)
- **375 / 834 / 1440px 브라우저 렌더 · 스크린샷 · 가로 넘침 · 터치 크기 · 키보드 초점 이동 · 스크린리더 안내**: 이번 세션에서는 미리보기가 빈 페이지도 열지 못해 실행하지 못했습니다. 검사 페이지 `zem/qa-v23.html`(쿼리 `?t=pd,ws,ka&s=<state>&w=375,834,1440`)을 동봉했습니다. 템플릿 3종을 폭별 iframe으로 열어 가로 넘침·36px 미만 대상·패턴 존재 여부를 콘솔(`QA-V23`)에 출력합니다.
- 패턴 카드 5종(`zem/compositions/*.html`)의 실제 렌더도 같은 이유로 확인하지 못했습니다.
- `_ds_manifest.json`과 `_ds_bundle.js`는 이 작업 턴이 끝날 때 자동으로 다시 만들어집니다(작업 중 검사 결과: 카드 69 · 컴포넌트 22로 manifest 갱신 대기). 번들의 5종 export도 그때 반영됩니다. 그 전에는 `zem-patterns.js`가 네임스페이스를 채워 줍니다.

## 알려진 경고 (별도 기록)
- **Safari Select**: v2.2 Safari 1200px 카드 검증에서 긴 Select 옵션을 감싼 flex 자식이 줄어들지 않아 넘침 발견 → `.mc-demo>*{min-width:0;max-width:100%}` 적용 이력이 있으나 이전 검수에서도 경고 해소가 입증되지 않았습니다. **v2.3 Safari 재검증은 하지 않았습니다.** 템플릿 Dialog의 요일/시간 Select는 `flex:1;min-width:0` 래퍼 안에 있습니다.
- 템플릿 스타일 홀 3개(부모 홈 사용 시간 너비 1 · 시간표 칸/범례 색 2; 아이 활동 진행률은 MissionFeedback으로 이동)는 실행 중 바뀌는 값이라 의도적으로 남겼습니다.
- 대비: text-disabled on state-disabled-background 4.43:1 — disabled 예외(비활성 요소 내부 목표 3:1).

전체 통과라고 주장하지 않습니다. 위 “실행하지 못한 검사”를 현재 환경에서 `zem/qa-v23.html`과 `zem/qa.html`로 다시 확인하세요.

## Codex 인계 검사
ZIP 무결성, 등록 경로 존재, 팔레트 파일 동일성을 확인했습니다. 브라우저 제어가 단일 템플릿에서도 응답하지 않아 실제 화면 검수는 미완료입니다. 원인은 확인되지 않았으며 코드 결함으로 단정하지 않습니다. Figma v2.3 동기화는 미완료입니다.

별도 실행: `node IAK_KIDS_V1/tests/v23-source-checks.cjs` — 21개 상태 초기화와 데이터 로직, 자녀별 목표 추가, 일정 유효성 검사, 미션 중복 완료/취소/재완료 통과. React 마운트·키보드·시각 검사는 포함하지 않습니다.

## 2026-09-27 Chrome 실제 검수

재귀 번들 로딩과 상태 쿼리 우선순위를 수정한 뒤 63개 상태/화면 폭 조합을 검수했습니다. 모든 조합에서 요청한 상태가 실제 렌더되었으며 가로 넘침과 검사 기준(높이 36px 미만) 경고가 없었습니다. 44px 터치 대상 감사가 아닙니다. 결과는 `tests/browser-2026-09-27/`에 저장했습니다.

실제 조작 확인: 자녀 클릭·방향키, 요청 수락, 목표 필수값 오류·초점 이동·저장, 일정 빈 값 오류·추가, 타이머 시작·정지·재개·완료, 미션 취소·재완료. 최종 모바일 배지 nowrap 변경의 수정 후 시각 확인은 연결 해제로 미완료입니다. Figma와 Claude 원본의 재생성 입력은 아직 수정되지 않았습니다.


## 2026-09-27 — v2.3.1 timeline follow-up

- Fixed completed-title selector scope and kept status badges on one line. Versioned stylesheet loading to invalidate stale browser CSS.
- Verified activity/schedule default and long-text states at 375/834/1440: 12 cases with no horizontal overflow or targets under the harness 36px height threshold. This does not constitute a complete 44px/accessibility audit.
- Actual 375px activity badge measurement: 완료/지금/예정/예정 all `white-space: nowrap`, height 26px (non-interactive status labels). Screenshot inspected.
- Evidence: `tests/browser-2026-09-27/v231-timeline-regression.jsonl`.
- Original Claude Design source repair submitted; regenerated export still pending verification. Figma remains v2.2.
