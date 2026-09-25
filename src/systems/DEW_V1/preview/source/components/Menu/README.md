# Menu

A button-triggered list of actions or single choices: `surface` panel, 1px `textPrimary` frame, square corners, 44px rows.

**Consumer provides:** `label` (trigger text), `items[]` (`label`, optional `description`, `icon`, `selected` → radio item with check, `disabled` + `disabledReason`, `danger`, `separator: true`, `onSelect`), `onSelect`, `triggerVariant`, `size`, `align` (`end`), `open`/`defaultOpen`.

- Keyboard: ↑ ↓ move, Enter/Space select, Esc closes. `aria-haspopup`, `aria-expanded`, `role="menu"` / `menuitem(radio)`.
- Hover: `canvas` row + underline. Focus: inset 2px `textPrimary` outline. Disabled: `textSecondary`, reason shown as text. Danger: `accent` icon, 2px `accent` hover underline — label stays `textPrimary`.
- Long labels wrap within max 320px (or viewport − 48).

**Relationship:** Menu for sort/share/save actions above an EditorialGrid; CategoryNav stays the topic filter. Status: **derived-extension**.

**IAK cases (v1.3):** all 6 cases render in the `CoverageMenu` card (anchors `case-menu-<id>`).


### 1.4 quality update
입력 상태 갱신, 대화상자 초점/스크롤 관리, 확인 오류 표시, 메뉴 키보드 진입을 보완했습니다. 실제 검증 범위는 preview/handoff/quality-1.4.json과 저장소 tests/project-systems.test.mjs를 참조하세요.
