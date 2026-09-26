> Current revision: [Monitoring 1.5](08-monitoring-1.5.md) supersedes conflicting sizing, inventory and sample-data guidance below. Earlier details remain for legacy variants.

# State System

Default → hover → pressed → focus를 구분한다. Focus는 selection 색의 2px outline, offset 3px. Disabled는 native disabled이며 색만 흐리게 하지 않는다. Loading은 aria-busy와 동일 크기 skeleton, Empty는 이유와 reset, Error는 메시지와 retry 및 입력 보존.

Toast: info/success/neutral은 role=status, warning/error는 role=alert. 자동 소멸 없음. 닫기는 44px 이상, 키보드 가능. 알림 발생 시 포커스 이동 없음. 미리보기는 서버 저장 없이 로컬 상태만 바뀐다.

장비 offline 시 명령을 막고 최신 시각과 데이터 미수신을 표시한다. Unknown을 healthy로 표시하지 않는다.
