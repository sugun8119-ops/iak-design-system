---
name: iak-refine-template
description: Fix an IAK template reproduction mismatch and record scoped, verified guidance and regression checks so later generations reuse the correction.
---
# IAK 템플릿 피드백 반영

“원본과 다르다”, “다음에도 같은 실수 하지 마”, “템플릿을 수정해줘”라는 피드백을 재현 가능한 수정과 해당 템플릿의 규칙으로 남긴다.

1. 현재 IAK 저장소에서 `src/developer/template-workflow.md`, 관련 template.json/원본과 사용자 피드백을 읽는다. 사용자에게 이미 있는 원본과 요구를 반복 요청하지 않는다.
2. 기대 결과와 실제 결과를 비교해 원인을 분리한다: 생성된 앱만의 오류, 템플릿 설명/미리보기 오류, 공통 컴포넌트 오류. 앱 하나의 특수 요구를 모든 IAK 작업의 규칙으로 올리지 않는다.
3. 증상을 실제로 재현한다. 기능 오류는 수정 전 실패하는 검사로, 시각 차이는 원본과 데스크톱/모바일 관찰 기록으로 남긴다. 자동화 가능한 회귀 검사는 저장소 tests에 추가하되 문구만 맞추는 무의미한 검사는 만들지 않는다.
4. 해당 범위의 코드와 템플릿 layout/acceptance를 수정한다. 출처가 없는 디자인 토큰을 만들지 않는다. 공통 패키지가 바뀌면 릴리스 정책과 호환성 CI를 따른다.
5. `work/<feedback-id>.json`에 templateId, expected, actual, rule, evidence, status, verification, regressionTests를 기록한다. `node scripts/template-workflow.mjs feedback work/<feedback-id>.json`으로 등록한다. 확인 전에는 draft, 수정과 검증 후에는 verified를 사용한다. 기존 기록 수정은 `feedback-update`다.
6. `npm test`, `npm run build`, 관련 화면 검수를 실행한다. 빌드된 template.json의 lessons에 verified 규칙이 들어가는지 확인한다. 규칙에는 해당 템플릿에 적용할 구체적인 조건만 쓴다.

verified는 작성자가 검증 근거를 남겼다는 뜻이지 독립 인증이 아니다. 실제로 실행하지 않은 테스트나 브라우저 확인을 쓰지 않는다. 한 사례 수정으로 모든 미래 생성이 정확하다고 보장하지 않는다. 배포는 현재 세션의 권한 범위를 따른다.
