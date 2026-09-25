# Dialog

A modal on the warm `canvas`, framed by a 1px `textPrimary` rule with square corners, over the `scrim` backdrop. The title is set in `heading` (serif 40/48; 32/40 on mobile) — DEW's editorial voice even in utility moments.

**Consumer provides:** `open`, `onClose`, `title`, optional `eyebrow`, `description`, `children` (body), `footer` (Buttons, primary last), `size` (`sm` 400 · `md` 560 · `lg` 800, body split 5 : 7), `inline` (docs/preview only — renders in flow).

- Focus moves to the panel on open; `Esc` and the backdrop close it (`dismissable: false` to prevent); close icon button has `aria-label="닫기"`.
- Mobile (<768): sheet aligned to the bottom, 16 gutter, footer buttons stack full-width with the primary on top.
- Only token added for this family: `scrim` (derived-extension).

**Don't** use a rounded card, drop shadow or a dark panel. Status: **derived-extension**.

**IAK cases (v1.3):** all 7 cases render in the `CoverageDialog` card (anchors `case-dialog-<id>`).


### 1.4 quality update
입력 상태 갱신, 대화상자 초점/스크롤 관리, 확인 오류 표시, 메뉴 키보드 진입을 보완했습니다. 실제 검증 범위는 preview/handoff/quality-1.4.json과 저장소 tests/project-systems.test.mjs를 참조하세요.
