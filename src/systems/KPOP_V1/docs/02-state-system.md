# State System

Default → hover → pressed → focus를 구분한다. Focus는 selection 색의 2px outline, offset 3px. Disabled는 native disabled이며 색만 흐리게 하지 않는다. Loading은 aria-busy와 동일 크기 skeleton, Empty는 이유와 reset, Error는 메시지와 retry 및 입력 보존.

Toast: info/success/neutral은 role=status, warning/error는 role=alert. 자동 소멸 없음. 닫기는 44px 이상, 키보드 가능. 알림 발생 시 포커스 이동 없음. 미리보기는 서버 저장 없이 로컬 상태만 바뀐다.

선택 카테고리는 aria-pressed, 현재 탐색은 aria-current, 저장은 aria-pressed와 텍스트로 표시한다. 실제 소셜 계정에 연결되지 않는다.
