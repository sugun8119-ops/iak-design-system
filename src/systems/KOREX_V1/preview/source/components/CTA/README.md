# CTA

각진 직사각형 행동 버튼: 최소 높이 44, padding 8/24, `radius-md`(4px), 라벨 굵기 600.

- **변형**: Primary(`primary` 면 + `surface` 텍스트, hover `primaryDark`), Secondary(`surface` 면 + `primary` 경계·텍스트, hover `primarySoft` + 밑줄), Focus(2px `textPrimary` 외곽선 + offset 4).
- Primary는 한 화면의 핵심 행동에만, 한 영역에 하나. 나머지는 Secondary.
- `href`가 있으면 `a`, 없으면 `button`으로 렌더한다. 라벨은 동사로 읽을 수 있게(“컬렉션 살펴보기 ↗”). 아이콘만 있는 버튼 금지.
- pill(완전 둥근) 모양, 그라데이션, 그림자를 쓰지 않는다.
- **derived-extension 상태**: disabled(`border` 면 + `textSecondary`). 새 화면에서는 같은 외형의 **Button**(4 variants × 3 sizes)을 쓴다.
