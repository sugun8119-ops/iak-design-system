# 컴포넌트 가이드
16개 React 컴포넌트는 `master/lib/kx-ui.js`(window.KX)에 있고 `master/preview/*.jsx`가 번들로 내보냅니다.

| 컴포넌트 | 핵심 props | KOREX 특징 |
|---|---|---|
| Button | variant primary·secondary·outline·chip·danger·text, size, loading, selected | outline/chip은 observed |
| TextField / Textarea / Select | label, description, error, required | 44px, 반경 2 |
| Checkbox / Switch | label, native attrs | accent = action |
| Badge | tone neutral·success·warning·error·info·brand | 사각 2px |
| Card | title, footer, tone default·brand·mint | brand = 녹색 통계 패널 |
| Skeleton | width, height, circle | 회색 쉬머 |
| Icon | name kx:*, size, label | 선형 자체 제작 |
| Dialog / AlertDialog | title, description, footer / onConfirm async | 딥그린 오버레이 |
| Menu | items[], align | 강조 = 민트 |
| Table | columns, rows, sort, pagination, virtualization, loading/error/empty | 딥그린 상단 룰 |
| Pagination | page, pageCount, onPageChange | 현재 페이지 딥그린 |
| Toast | tone, title, description, action | 왼쪽 상태 룰 |

`data-preview-state`와 `inline`은 카드 미리보기 전용이며 제품 코드에 쓰지 않습니다.
