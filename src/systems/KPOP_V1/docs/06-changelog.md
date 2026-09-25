# Changelog

## 1.1.0 · 2026-09-25
- IAK 항목 구조만 참조한다는 사용자 정정을 명시.
- 원본 30개 케이스를 프로젝트별로 대응하고 7개 문서 및 케이스 미리보기를 추가.
- 기존 프로젝트 토큰·스타일 보존. Toast 케이스를 현재 프로젝트 스타일로 보완.
- 구식 Figma 미생성 문구 정정.
- IAK 검증 점수의 상속 금지; 실제 검증은 별도 결과로 기록.

## 2026-09-25 최종 재검사 재개

Claude Design TP01–TP10, 반경·Toast 9개 규격, check_design_system 통과를 확인했다. TP10은 104파일/33색상을 검사했다. 자동 검사의 폰트 경고 없음과 앱 상단 폰트 배너 잔존은 별도 상태로 기록한다. 의도적 OS local fallback을 유지하며 폰트 파일은 추가하지 않았다. 독립 AI 재생성 및 실기기 검증을 완료한 것으로 해석하지 않는다.

## 사용자 승인 폰트 업데이트

Pretendard 1.3.9를 기본 글꼴로 사용한다. 실제 WOFF2와 SIL OFL 라이선스를 assets/fonts/에 포함한다. Pretendard 크기·굵기를 유지하고 품질 개정의 행간은 JSON typography를 따른다. Figma에도 공식 Pretendard 9개 굵기를 업로드하고 전체 텍스트와 스타일에 실제 적용했다. 이전 OS-only 규칙을 대체한다.


### Figma Pretendard 적용 완료
공식 OTF 9개 굵기 업로드 후 20개 페이지, 5개 텍스트 스타일과 574개 텍스트를 실제 Pretendard로 교체했다. Main/Sub/Detail 렌더링을 확인했다.


## Quality revision 1.3

KPOP: 48px 기본 버튼, 44px 최소 터치 영역, 25~28px 비조작 배지. Hero 4:5 / Detail 16:10 / 목록 1:1. 이미지의 이중 패딩 제거, 목록 88px 썸네일 + 16px 간격과 hairline 구분. 본문 16/26, 문단 사이24. 자체 링·캡슐 SVG를 중앙 크롭한다.

타이포: Display32/40, Heading24/32, Title18/26, Body16/26, Meta12/17. Pretendard 실제 파일 사용. IAK30항목과 프로젝트 고유 색상·13컴포넌트·Main/Sub/Detail을 유지한다.
