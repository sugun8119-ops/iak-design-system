# Badge

작은 상태 표식: 높이 24(sm 20), `radius-sm` 2px 직사각형(pill 금지), meta 12/18 굵기 600.

- **출처**: **derived-extension**. KOREX 원본에는 배지가 없고, 새 색을 만들지 않고 팔레트 역할로 5 tone을 만든다.
- **tone**: neutral = `border` 면 + 잉크 · brand = `primarySoft` + `primary` · success = `primary` 면 + `surface` + 체크 · warning = `surface` 면 + 잉크 1px 경계 + ! · error = 잉크 면 + `surface` + ×.
- 명도 차이 + 아이콘 + 단어로 구분하므로 색각과 무관하게 읽힌다. tone만 바꾸고 단어를 빼지 않는다.
- 긴 라벨은 최대 240px에서 말줄임, 전체 문구는 `title`.
- 카드에 배지를 남발하지 않는다(카드당 1개).
- **제공할 것**: `children`(단어), `tone`, `size`, `icon`(false로 끔).
- **v1.3 (derived-extension)**: `tone="info"`(surface + textSecondary 경계 + i), `count`·`max`·`countLabel`(숫자 배지, 99+). d-status-dot · d-filter-chip은 시각 샘플(design-only).
