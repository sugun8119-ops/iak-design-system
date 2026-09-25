# 상태 시스템
| 상태 | 표현 |
|---|---|
| default | 흰 면, 회색 테두리 |
| hover | action-hover 또는 `--state-hover` 레이어 |
| focus | 2px outline + 2px offset |
| pressed | action-pressed / `--state-pressed` |
| selected | chip = 녹색 채움, 메뉴·블록 = 민트 |
| disabled | opacity .45, not-allowed |
| loading | 버튼 spinner, Skeleton |
| error | 빨강 테두리 + 도움말, banner |
| empty | 점선 테두리 + 민트 아이콘 타일 |
| success | Toast success, banner ok |

긴 문구는 줄바꿈(overflow-wrap:anywhere), 누락 데이터는 회색 "협의"/"미입력"/"—"로 표시합니다.
