# Skeleton

로딩 중 자리 표시: `border` 색 블록(`radius-sm`, 미디어는 `radius-md`)이 1.1초 주기로 옅게 깜빡인다. `prefers-reduced-motion`에서는 멈춘다.

- **출처**: **derived-extension**.
- 실제 레이아웃과 같은 크기로 그린다(텍스트 줄 14px, title 22px, display 44px, 미디어 4:3/3:4) — 로딩 후 화면이 튀지 않게.
- 블록은 `aria-hidden`, 컨테이너가 `role="status"` + “불러오는 중” 텍스트를 읽게 한다. 여러 개를 묶을 때는 `silent`로 중복 낭독을 막는다.
- 1초 미만 로딩에는 쓰지 않는다. 실패는 Skeleton이 아니라 Toast/Table error로 알린다.
- **제공할 것**: `variant`(text · media · block), `lines`, `size`(title · display), `width`, `tall`, `label`, `silent`.
- **v1.3 (derived-extension)**: `variant="circle"` + `size`(지름). list-row는 circle + 텍스트 줄 조합(composition).
