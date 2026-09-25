# HYNIX_V1 · Component Guide

기존 핵심 12종 + 케이스 보완 Toast 1종.

- AppShell: Session header; equipment sidebar; main workspace. density=comfortable|compact. Below 900 stack sidebar as horizontal navigation; below 600 single column.
- EquipmentTree: Group; child equipment links; counts. expanded=true|false; selected=true|false. Use disclosure button and links, keyboard tab order follows visual order.
- SessionBar: Workspace name; connection; demo label. connection=connected|reconnecting|disconnected. Reconnecting shows stale timestamp; do not imply live data.
- DeviceTile: Generated screen; device name; status; last update. state=default|hover|selected|offline|loading. Open inspector on activation; offline disables commands, retains history.
- StatusBadge: Dot; textual state. status=online|warning|offline|unknown. Always show text; unknown is not healthy.
- MetricCard: Label; value; unit; supporting text. state=normal|warning|unavailable. Use tabular numerals; unavailable value is em dash.
- TrendChart: Title; line; axis units; accessible summary. state=ready|loading|empty|error. Supply text summary; never encode series only by color.
- ViewerPanel: Toolbar; synthetic machine graphic; caption. state=connected|loading|disconnected. Remote control is integration-only; demo viewport is illustrative.
- CommandPanel: Mode; setpoint; primary command; result. state=idle|confirming|pending|success|error|disabled. Production commands need explicit target and confirmation; demo updates only local state.
- EventRow: Time; severity label; description. severity=info|warning|error. Chronological list; time and message readable without color.
- Button: Label; optional leading icon. variant=primary|secondary|quiet; state=default|hover|pressed|focus|disabled. Enter/Space activates; disabled prevents input; visible 2px focus ring.
- Field: Visible label; input; help/error. state=default|focus|error|disabled. Label linked to input; error text with aria-describedby; never placeholder-only.
- Toast: Severity label; message; dismiss button. severity=info|success|warning|error|neutral. role=status for info/success/neutral, role=alert for warning/error; explicit dismiss; no automatic timeout; no focus stealing; local demo only.

컴포넌트는 프로젝트 토큰에 바인딩한다. Figma 네이티브 라이브러리는 편집용이며 HTML 런타임과 자동 동기화되지 않는다.


## Quality revision 1.3

HYNIX: 균등한 요약·장비 카드, 44px 버튼, 25px 비조작 상태 배지. 네이비 그리드와 자체 제작 모듈 도식. Raised 4/4/12, inset 2/2/6. 선택/포커스 파랑, 실행 주황을 유지한다.

타이포: Display32/40, Heading24/32, Title18/26, Body14/20, Meta12/17. Pretendard 실제 파일 사용. IAK30항목과 프로젝트 고유 색상·13컴포넌트·Main/Sub/Detail을 유지한다.
