# IAK KIDS_V1 · Little Everyday v2.2 — 시작 템플릿 인계본

독립 실행형 인계본입니다. 폴더 구조를 그대로 두고 `templates/<slug>/<Slug>.dc.html`을 열면 렌더링됩니다(`ds-base.js`의 base `../..` → 이 폴더 루트).

## 등록 상태 (`_ds_manifest.json`, 2026-09-26 재생성본)
- `templates`: 3종 인식 — Templates 그룹에 노출
  - 부모 대시보드 · Parent dashboard → `templates/parent-dashboard/ParentDashboard.dc.html`
  - 아이 활동 · Kid activity → `templates/kid-activity/KidActivity.dc.html`
  - 주간 일정 · Weekly schedule → `templates/weekly-schedule/WeeklySchedule.dc.html`
- `startingPoints`: **비어 있음(`[]`)**. `@template` 등록 방식은 이 필드를 채우지 않으며, startingPoints 전용 등록 주석은 확인되지 않아 등록하지 않았습니다.

## 포함 파일
- `templates/` — 3개 템플릿(진입 파일 · `ds-base.js` · `support.js`) + `README.md`(목적 · 수정할 데이터 · 상태)
- 템플릿 데이터: 별도 파일 없이 각 진입 파일 로직의 `static DATA`에 들어 있음(가상 예시)
- CSS: `styles.css` → `zem/lib/iak-kids-tokens.css`, `zem-tokens.css`, `zem-ui.css`, `zem-shell.css`
- JS: `zem/lib/icons.js`, `zem/lib/zem-ui.js`, `_ds_bundle.js` (이 순서로 로드)
- 폰트: `fonts/NanumBarunGothic*.ttf` + `OFL.txt`
- 문서: `SKILL.md`, `zem/claude-system.md`, `_ds_manifest.json`

## 이번 변경
- `zem/lib/zem-shell.css`: `.mc-demo>*{min-width:0;max-width:100%}` 추가 — Safari 1200px에서 긴 Select 옵션을 감싼 flex 자식이 줄어들지 않던 넘침 수정. 템플릿은 `.mc-demo`를 쓰지 않아 영향 없음.

## 소비 프로젝트에 넣을 때
`_ds/<folder>` 등으로 옮겼다면 각 `ds-base.js`의 `base`만 그 경로로 바꾸세요.
