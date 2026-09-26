# IAK KIDS_V1 · Little Everyday v2.2 — 시작 템플릿

등록 방식: `templates/<slug>/<Slug>.dc.html` + 템플릿 본문 첫 줄 `<!-- @template name="…" description="…" -->`. 디자인 시스템 로드는 각 폴더의 `ds-base.js`(styles.css + `_ds_bundle.js`, base `../..`)가 담당합니다. 색·타이포·컴포넌트는 기존 토큰(`--iak-kids-*`/`--zem-*`)과 `RAISDesignSystem_019e07.*` 컴포넌트만 재사용합니다.

소비 프로젝트에서 쓸 때: 폴더를 복사한 뒤 `ds-base.js`의 `base`를 바인딩된 `_ds/<folder>` 경로로 바꾸세요.

| 템플릿 | 진입 파일 | 기반 UI kit | 사용 목적 | 수정할 데이터 (`static DATA`) | 상태 (`state` prop / Tweaks) |
|---|---|---|---|---|---|
| 부모 대시보드 | `parent-dashboard/ParentDashboard.dc.html` | `zem/ui_kits/parent.html` | 자녀별 사용 시간·목표 카드, 자녀 요청 수락/거절 | `asOf`, `kids[]`(이름·사용 시간·목표), `requests[]` | default · empty · loading · error |
| 주간 일정 | `weekly-schedule/WeeklySchedule.dc.html` | `zem/ui_kits/schedule.html` | 요일×시간 시간표, 일정 추가 Dialog(검증), 오늘 목록 | `week`, `todayIndex`, `days[]`, 시간 슬롯, 일정 종류(색 토큰), `items[]` | default · empty · dialog · validation-error |
| 아이 활동 | `kid-activity/KidActivity.dc.html` | `zem/ui_kits/activity.html` | 오늘의 미션 진행률, 완료 토글, 포인트 | `missions[]`(`n`, `pt`, `done`; `pt:null` = 포인트 미정) | default · all-done · empty · loading |

데이터는 모두 가상 예시입니다. 실제 API 응답으로 교체하세요.
