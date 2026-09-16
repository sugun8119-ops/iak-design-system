## IAK React 0.6 구현 기준

디자인 외형은 IAK 원본을 유지한다. Wanted는 컴포넌트 범주·문서 구성 참고이며 색상이나 폰트 출처가 아니다.

- Dialog: 원본 폭 sm 480 / md 640 / lg 880px, 반경 16px, padding 24px, card-alt와 overlay 배경. shadow-floating은 실제 CSS에 없어 shadow-soft로 연결. close 아이콘은 Eva close-fill 20px. 모바일 좌우 16px.
- Menu: 기존 IAK surface/border/accent와 반경 8px로 구성한 신규 컴포넌트. disabled 항목은 선택 불가. 사이트 navigation 용도로 쓰지 않는다.
- Dialog/Menu의 동작은 Radix Primitives를 사용한다. ref 전달이 가능한 실제 버튼을 trigger로 제공한다. onOpenChange와 open은 함께 사용한다. Dialog initialFocusRef는 모달 내부 요소를 가리킨다.
- Table: 반경 24px, 셀 padding 12×16px, card-alt 헤더, subtle 행 구분선, 숫자 tabular 설정. 헤더 색은 가독성을 위해 fg-secondary. caption과 고유 rowKey/column.id를 제공한다. cell 안에 필요한 실제 버튼을 넣고 행 전체를 가짜 버튼으로 만들지 않는다.
- Table 정렬은 클라이언트 배열 복사본에 적용하며 원본을 변경하지 않는다. sort를 제어하면 onSortChange에서 새 상태를 반영한다. null은 마지막에 배치한다.
- 로딩·오류·빈 결과를 명시적으로 전달한다. 데이터 API, 페이지네이션, 가상화, 서버 정렬, AlertDialog, 중첩 메뉴는 포함하지 않는다.

React 18과 기본 키보드 동작을 검증한 Preview다. 모든 브라우저·스크린리더 지원을 인증했다고 표현하지 않는다. 원본 Claude 자료의 테스트 결과를 새 라이브러리 검증으로 재사용하지 않는다.
