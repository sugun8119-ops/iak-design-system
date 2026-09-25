# Menu

행동 목록 팝업: Secondary 버튼(chevron) → `surface` 목록(1px `textSecondary` 경계, `radius-md`, 최소 240 · 최대 320), 항목 높이 44.

- **출처**: **derived-extension**.
- **상태**: hover/focus = `primarySoft` 면(+ focus 2px 잉크 안쪽 외곽선) · selected = 체크 아이콘 + `primary` 굵은 글자(`menuitemradio` `aria-checked`) · disabled = `textSecondary` + `aria-disabled` + 필요하면 이유 텍스트 · danger = 구분선 아래, 잉크 굵은 글자 + 휴지통 + 결과 설명(새 빨강 없음).
- 긴 라벨은 줄바꿈한다(말줄임 없음). 보조 설명은 12/18 `textSecondary`.
- 키보드: 트리거에서 ↓로 열기, ↑↓·Home·End 이동, Esc로 닫고 트리거로 복귀, 바깥 클릭으로 닫기.
- 네비게이션 링크 목록에는 Menu를 쓰지 않는다(GlobalHeader/CategoryNav 사용).
- **제공할 것**: `label`, `items` `[{label, value, icon, description, selected, disabled, disabledReason, danger, divider}]`, `onSelect`, `open`/`defaultOpen`, `disabled`.
