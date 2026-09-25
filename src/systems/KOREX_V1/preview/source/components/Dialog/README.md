# Dialog

모달 대화상자: `overlay` 위 `surface` 패널, 1px `border`, `radius-lg` 6, padding 32(모바일 24). sm 400 · md 560 · lg 800 최대 폭.

- **출처**: **derived-extension**. scrim 색은 파생 토큰 `overlay`(= `textPrimary` 56%)다. 그림자는 쓰지 않는다.
- 구조: title(20/28) + description → 본문 → footer(오른쪽 정렬, Secondary → Primary 순). 닫기는 ghost 아이콘 버튼(“닫기”).
- 접근성: `role="dialog"` `aria-modal` `aria-labelledby/describedby`, 열릴 때 패널로 포커스 이동, Tab 순환, Esc·바깥 클릭으로 닫기, 닫히면 이전 포커스로 복귀.
- 긴 제목은 줄바꿈, 본문이 길면 패널 안에서 스크롤. 모바일에서는 footer 버튼이 폭을 나눠 가진다.
- `contained`는 문서 미리보기용(프레임 안에 그리기)이다.
- **제공할 것**: `open`, `onClose`, `title`, `description`, `size`, `children`, `footer`, `dismissible`.
- **v1.3 (derived-extension)**: `initialFocus="close"`(열릴 때 닫기 버튼으로 포커스), `closeState`(focus 표시). description이 없으면 `aria-describedby`를 두지 않는다.
