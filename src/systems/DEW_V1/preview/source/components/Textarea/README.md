# Textarea

Multi-line input sharing TextField's anatomy and states; min height 136, vertical resize only, optional character counter.

**Consumer provides:** `label`, `description`, `rows`, `maxLength` (turns on the `meta` counter, announced politely), `error`, `disabled`, `readOnly`, value props.

Use for reader letters, notes and captions. Error, disabled and readOnly follow TextField exactly. **Don't** auto-grow beyond the viewport or hide the counter on mobile.

Status: **derived-extension**.

**IAK cases (v1.3):** all 9 cases render in the `CoverageTextarea` card (anchors `case-textarea-<id>`).


### 1.4 quality update
입력 상태 갱신, 대화상자 초점/스크롤 관리, 확인 오류 표시, 메뉴 키보드 진입을 보완했습니다. 실제 검증 범위는 preview/handoff/quality-1.4.json과 저장소 tests/project-systems.test.mjs를 참조하세요.
