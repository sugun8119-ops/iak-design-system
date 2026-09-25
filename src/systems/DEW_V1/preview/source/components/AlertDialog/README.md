# AlertDialog

A small (400) `role="alertdialog"` that interrupts to confirm a consequential action. Built on Dialog; it has no close icon and the backdrop does not dismiss it — the person answers with one of the two buttons (Esc = cancel).

**Consumer provides:** `open`, `title` (a question), `description` (the consequence), `confirmLabel` (a verb — "삭제", not "확인"), `cancelLabel`, `onConfirm`, `onCancel`, `tone` (`danger` default | `default`), `loading` + `loadingLabel`, `error` + `errorTitle` + `retryLabel` + `onRetry`.

- Danger: 2px `accent` top rule, `accent` alert icon, danger Button (accent border, never a red fill). Cancel is secondary and comes first.
- **Error + retry (derived-extension):** pass `error` (message) and optional `errorTitle`, `retryLabel`, `onRetry`. The dialog stays open; a `surface` box with a 1px `accent` border, `accent` error icon and `textPrimary` title (`role="alert"`) sits above the actions, and the confirm button becomes "다시 시도" with a refresh icon (same danger/primary variant). Message text is `textSecondary` on `surface` (5.36:1); red is never text.
- Loading keeps the dialog open with `aria-busy` on the confirm button and cancel disabled.

Status: **derived-extension**.

**IAK cases (v1.3):** all 6 cases render in the `CoverageAlertDialog` card (anchors `case-alertdialog-<id>`).


### 1.4 quality update
입력 상태 갱신, 대화상자 초점/스크롤 관리, 확인 오류 표시, 메뉴 키보드 진입을 보완했습니다. 실제 검증 범위는 preview/handoff/quality-1.4.json과 저장소 tests/project-systems.test.mjs를 참조하세요.
