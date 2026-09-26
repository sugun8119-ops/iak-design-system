# DEWEditorial 사용 안내

React 18과 ReactDOM 18을 먼저 로드하고 `editorial-patterns.js`, 기존 `styles.css`, `editorial.css`를 연결합니다. 예시는 `editorial-demo.js`에 있습니다. 스타일은 `.ed` 컨테이너 안에 적용됩니다.

| 구성요소 | 입력 | 사용 |
|---|---|---|
| LeadStoryGrid | stories: 3개 항목 | 대표 1개 + 보조 2개 |
| ReadingBody | children | 최대 680px 본문 |
| EditorialFigure | src?, alt?, tone?, caption | 사진 또는 자체 도형과 설명 |
| PullQuote | children, attribution? | 강조 문장과 출처 |
| RelatedStories | stories, topicHref, topicLabel | 관련 글과 주제 목록 이동 |
| NewsletterSignup | outcome: success 또는 error | 입력 검증·로딩·재시도·완료 시연 |

이야기 항목은 `{id, category, title, summary, href, tone?}` 구조입니다. tone은 기본 민트, sand, paper를 제공합니다. 데모의 카드 링크는 같은 페이지의 편집 예시 단락으로 이동합니다. 실제 적용 시 각 콘텐츠 URL을 전달하세요. 관련 글 영역은 화면당 한 번 사용합니다. 사진은 사용 권한을 가진 파일과 적절한 alt를 별도로 전달합니다.

구독 컴포넌트는 요청·저장·외부 통신을 하지 않습니다. success도 실제 구독 완료를 뜻하지 않습니다. error를 선택하면 첫 요청 실패 후 재시도는 완료 상태로 이어집니다. 실제 서비스 처리는 별도 연동이 필요합니다.

편집 패턴 3종과 재사용 구성요소 6종은 기존 138개 사례와 별도입니다. Figma는 정적 구성 참고이고 실제 동작·반응형의 기준은 웹 예시입니다.
