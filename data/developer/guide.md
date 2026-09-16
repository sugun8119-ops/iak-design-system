## IAK React 0.8 구현 기준

디자인 외형은 IAK 원본을 유지한다. Wanted는 컴포넌트 범주·문서 구성 참고이며 색상이나 폰트 출처가 아니다.

- Dialog: 원본 폭 sm 480 / md 640 / lg 880px, 반경 16px, padding 24px, card-alt와 overlay 배경. shadow-floating은 실제 CSS에 없어 shadow-soft로 연결. close 아이콘은 Eva close-fill 20px. 모바일 좌우 16px.
- Menu: 기존 IAK surface/border/accent와 반경 8px로 구성한 신규 컴포넌트. disabled 항목은 선택 불가. 사이트 navigation 용도로 쓰지 않는다.
- Dialog/Menu의 동작은 Radix Primitives를 사용한다. ref 전달이 가능한 실제 버튼을 trigger로 제공한다. onOpenChange와 open은 함께 사용한다. Dialog initialFocusRef는 모달 내부 요소를 가리킨다.
- Table: 반경 24px, 셀 padding 12×16px, card-alt 헤더, subtle 행 구분선, 숫자 tabular 설정. 헤더 색은 가독성을 위해 fg-secondary. caption과 고유 rowKey/column.id를 제공한다. cell 안에 필요한 실제 버튼을 넣고 행 전체를 가짜 버튼으로 만들지 않는다.
- Table 정렬은 클라이언트 배열 복사본에 적용하며 원본을 변경하지 않는다. sort를 제어하면 onSortChange에서 새 상태를 반영한다. null은 마지막에 배치한다.
- 로딩·오류·빈 결과를 명시적으로 전달한다. 페이지 탐색은 전체 rows를 정렬한 뒤 잘라서 보여 준다. 가상 스크롤은 고정 높이 행에만 사용하며, pagination과 함께 설정하면 pagination이 우선한다. 데이터 API, 서버 정렬, AlertDialog, 중첩 메뉴는 포함하지 않는다.

React 18과 기본 키보드 동작을 검증한 Preview다. 모든 브라우저·스크린리더 지원을 인증했다고 표현하지 않는다. 원본 Claude 자료의 테스트 결과를 새 라이브러리 검증으로 재사용하지 않는다.

- 가상 모드는 height/rowHeight/overscan을 설정한다. 화면 근처 행과 포커스를 가진 행만 DOM에 유지한다. 스크롤 영역에 포커스를 두고 Home/End로 처음과 끝으로 이동할 수 있다. 행의 전체 개수와 논리적 위치를 aria-rowcount/aria-rowindex로 전달한다.
- 긴 텍스트·가변 높이·보조 기술의 전체 탐색에는 페이지 방식을 제공한다. 가상 모드를 기본값으로 강제하지 않는다. 실제 스크린리더 조합 검증은 아직 미수행이다.

- Toast는 원본 360px 폭, 16px 패딩, 12px 반경, 36×36 사각 아이콘 영역/8px 반경을 따른다. latest CSS shadow-toast를 사용한다. 화면당 3개, 대기 포함 최대 50개를 유지하고 초과 시 notify가 undefined를 반환한다. 같은 ID는 중복 추가하지 않는다.
- useToast는 ToastProvider 내부에서만 호출한다. 기본 알림은 polite, 필요한 경우만 assertive. 타이머는 hover/포커스/창 blur에서 일시 정지한다. 필수 응답·중요 오류는 본문에도 제공하고 토스트 안 작업은 다른 경로로도 접근 가능해야 한다.


## v0.9 — AlertDialog
IAK 모달·버튼 토큰을 재사용하는 Radix Alert Dialog 기반 확인 UI. 취소 기본 포커스, 비동기 완료 후 닫기, 실패 재시도, 중복 실행 차단을 제공합니다. 처리 중 요청 타임아웃은 앱에서 설정하세요.
