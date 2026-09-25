# Toast

짧은 결과 알림: 아이콘 + tone 단어(안내/완료/주의/오류) + 제목 + 본문 + (액션) + (닫기). 최대 폭 440, `radius-md`, padding 16. `inline`이면 페이지 안 알림(폭 100%).

- **출처**: **derived-extension**.
- **tone**(새 색 없음): info = `surface` + 1px `textSecondary` 경계 + i · success = `primarySoft` + `primary` 경계 + 체크 · warning = `surface` + 2px 잉크 경계 + ! · error = 잉크 면 + `surface` 글자 + × + `role="alert"`. 나머지는 `role="status"`.
- tone 단어를 항상 보인다 — 색·아이콘만으로 뜻을 전하지 않는다.
- 오류 토스트는 자동으로 사라지지 않고 “다시 시도” 같은 해결 액션을 둔다. 좌측 컬러 바 장식을 쓰지 않는다.
- 긴 제목·본문은 줄바꿈. 모바일에서 폭 100%.
- **제공할 것**: `tone`, `title`, `children`, `action`, `onClose`, `inline`, `toneLabel`.
