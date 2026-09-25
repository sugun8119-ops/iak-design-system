# QA Checklist

- case-coverage.json의 30개 항목과 실제 파일을 확인한다.
- JSON/CSS의 프로젝트 색상값과 Figma 바인딩 일치 확인.
- Main → Sub → Detail 링크와 검색/저장/제어 데모 확인.
- 키보드 포커스, 44px 타깃, toast 닫기 확인.
- 모바일 375px에서 가로 넘침 확인.
- 원본 고객 자산/실데이터 미포함 확인.

이 체크리스트는 통과 증명서가 아니다. 실행 결과는 qa-results.json에 별도 기록한다. IAK 원본 감사 점수·통과 결과를 이 프로젝트 결과로 복사하지 않는다. AI 재생성 3회 비교는 미실행이며 안정성 점수를 주장하지 않는다.


## Quality 1.4 verification
12 viewport/page combinations passed horizontal overflow inspection. Main/Sub/Detail Figma PNGs visually reviewed. Shared repository:31 tests passed; build passed. Physical devices and screen readers not tested. Claude revision status is tracked in integrations.json and is not implied by local/Figma completion.
