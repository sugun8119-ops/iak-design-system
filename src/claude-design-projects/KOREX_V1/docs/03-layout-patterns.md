# 레이아웃 패턴
- **파트너 콘솔 (derived-extension)**: 딥그린 사이드바 240 → 1024 이하 76 아이콘 → 640 이하 드로어.
- **사이트 (KOREX 고유)**: ProductHome(딥그린 hero + 흰 검색 패널 + 유형 타일 + 통계 패널), SearchList(pill 칩 + 녹색 필터 패널 + 매물 행), ProductDetail(갤러리 + 사양표 + 녹색 가격 패널).

| 패턴 | 상태 |
|---|---|
| Dashboard | default · loading · empty · error |
| Analytics | default · loading · empty · error |
| Table | default · loading · empty · error · long-text |
| Detail | default · loading · missing-data · error |
| Settings | default · saving · error · success |
| Billing | default · loading · error · empty |
| AI Chat | default · streaming · empty · error |
| Builder | default · selected · dragging · empty |
| Modal | dialog · confirm · pending · error |
| Empty | first-run · no-results · no-access |

01–10은 원본에 존재했다고 주장하지 않습니다.
