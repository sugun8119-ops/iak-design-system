# IAK KIDS_V1 · Little Everyday v2.3 — 시작 템플릿

등록 방식: `templates/<slug>/<Slug>.dc.html` + 템플릿 본문 첫 줄 `<!-- @template name="…" description="…" -->` (v2.2 등록 그대로 유지). 디자인 시스템 로드는 각 폴더의 `ds-base.js`가 맡습니다: styles.css → icons.js → zem-ui.js → `_ds_bundle.js` → `zem/lib/zem-patterns.js`(v2.3 조합 패턴, base `../..`). 색·타이포·컴포넌트는 기존 토큰(`--iak-kids-*`/`--zem-*`)과 `RAISDesignSystem_019e07.*` 컴포넌트만 씁니다.

**등록 현황 (정확히):** manifest의 **Templates 그룹에 3종이 인식됨**. **`startingPoints`는 비어 있음** — 이 프로젝트에서 확인한 공식 등록 방식은 `@template` 주석뿐이고, startingPoints를 채우는 주석이나 설정은 찾지 못했습니다. startingPoints에 등록됐다고 보지 마세요.

소비 프로젝트에서 쓸 때: 폴더를 복사한 뒤 `ds-base.js`의 `base`를 바인딩된 `_ds/<folder>` 경로로 바꾸세요. 상태는 Tweaks의 `state` 또는 URL `?state=<값>`으로 바꿉니다.

| 템플릿 | 진입 파일 | 기반 UI kit | 사용 목적 · 흐름 | v2.3 패턴 | 수정할 데이터 (`static DATA`) | 상태 |
|---|---|---|---|---|---|---|
| 부모 대시보드 | `parent-dashboard/ParentDashboard.dc.html` | `zem/ui_kits/parent.html` | 자녀 전환 → 오늘 요약(사용 시간·오늘 일정) → 대기 요청 수락/거절 → 관리(목표 목록·목표 만들기) | ChildSwitcher, DailyTimeline, GoalComposer | `asOf`, `kids[]`(id·이름·meta·사용/목표 분·`schedule[]`·`goals[]`), `requests[]`; 긴 문구 예시 `LONG` | default · empty · loading · error · no-children · long-text · goal-dialog · goal-validation |
| 주간 일정 | `weekly-schedule/WeeklySchedule.dc.html` | `zem/ui_kits/schedule.html` | <768px 요일 선택 + 하루 타임라인 / ≥768px 주간 시간표 + 오늘 타임라인. 일정 추가 Dialog(검증·첫 오류 초점) | DailyTimeline | `week`, `todayIndex`, `nowSlot`, `days[]`, `dates[]`, `slots[]`, `slotTimes[]`, `kinds`(색 토큰), `items[]`(`dur` 분, 선택) | default · empty · loading · error · dialog · validation-error · long-text |
| 아이 활동 | `kid-activity/KidActivity.dc.html` | `zem/ui_kits/activity.html` | 지금 할 일(집중 타이머) → 오늘 순서 → 미션 완료/취소·진행률·포인트 | FocusSession, DailyTimeline, MissionFeedback | `missions[]`(`n`, `pt`(null = 포인트 미정), `done`, `time`, `dur`, `steps[]`) | default · all-done · empty · loading · error · long-text |

- 기존 기능 보존: 요청 수락/거절 + Toast, 일정 추가 + 이름 필수 검증, 미션 완료 토글, 포인트 미정 표시, 사용 시간 목표 초과 Badge.
- **신규 기능(자녀 전환, 목표 만들기, 요일 선택, 집중 타이머, 완료 취소·되돌리기)은 메모리 기반 데모**입니다. 새로고침하면 DATA 초기값으로 돌아가고 서버에 저장하지 않습니다. loading/error도 비동기 호출 없이 상태 값으로만 보여 줍니다.
- 데이터는 모두 가상 예시입니다. 실제 API 응답으로 교체하세요.
- 패턴 API: `zem/compositions/*.d.ts`, 문서 `zem/docs/07-patterns-v23.html`.
