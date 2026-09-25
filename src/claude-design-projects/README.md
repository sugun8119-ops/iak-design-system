# 프로젝트별 Claude Design 원본과 Figma 기록

IAK Master의 62개 **항목 구조**를 공통 체크리스트로 사용한다. 컬러·서체·간격·곡률·컴포넌트 톤은 각 프로젝트에서 가져온다. IAK 자체의 어두운 테마와 주황색을 이 프로젝트들에 적용하지 않는다.

이번 기록은 DEW / KOREX / ZEM 3개 프로젝트다. 전체 22개 포트폴리오 완료를 뜻하지 않는다. 실행 입구와 외부 링크는 [index.json](index.json), 화면 목록은 각 `_ds_manifest.json`에 있다. 컴파일된 manifest의 RAIS namespace는 원본 생성기의 기술적 식별자이며 시각 스타일 기준이 아니다. 프로젝트별 페이지를 별도 문서로 열어 전역 네임스페이스를 혼합하지 않는다.

## 반영 결과

| 프로젝트 | Claude | Figma |
|---|---|---|
| DEW | 62개 항목, 126개 토큰. 새 design/p 원본 확보. 게시 스위치 확인은 브라우저 연결 중단으로 미확인 | 공통 175개 변형과 프로젝트 컴포넌트를 수정했으나 기존 공용 스타일을 유지하는 별도 작업과 충돌 발견. 해당 공용 ID 추가 편집 중지. 완전 일치로 보고하지 않음 |
| KOREX | 62개 항목, 116개 토큰. 게시 확인 | 공통 214개 변형 및 부동산 문구 수정 이력. 기존 공용 스타일은 별도 작업에서 유지하므로 새 Claude 전체 일치로 보고하지 않음 |
| ZEM | 62개 항목, 114개 토큰. 게시 확인 | 변수 260개, 글자 스타일 9개, 효과 3개, 18개 세트/156개 변형, 아이콘 97개, 모바일 대표 조합 3개 |

## 수정 전후 기준

- DEW 새 Claude 원본: 흰색·검정·빨강, 각진 경계와 얇은 선, Libre Caslon Display/Text + Roboto + Noto Sans KR. 기존 승인된 크림색 DEW 라이브러리와 구분해서 보관한다.
- KOREX 새 Claude 원본: 녹색 부동산 UI, 굵은 한국어 제목, pill chip과 매물 카드. 기존 정규화 라이브러리를 덮어쓰지 않는다.
- ZEM: periwinkle + cyan/lime/mint 포인트, 둥근 카드와 pill 버튼. Figma는 사용자가 허용한 Noto Sans KR 대체 서체, Claude는 Nanum Barun Gothic 원본을 유지한다.
- ZEM에서 긴 입력값 말줄임, SVG의 불필요한 배경, 버튼 그림자 잘림, 카드 겹침 위치, 하단 메뉴를 수정했다.

## 검증 및 남은 작업

각 원본 manifest의 62개 카드 경로가 존재한다. ZEM Figma는 끊어진 변수 별칭, 코드 이름 누락, ALL_SCOPES가 모두 0개다. 대표 화면 3개를 시각 확인했다. Figma 화면은 편집 가능한 정적 조합이며, 클릭 동작과 반응형 동작의 원본은 Claude HTML/React 소스다. Claude의 10개 패턴과 138개 사례 전체가 Figma에서도 1:1 검증됐다는 뜻은 아니다.

DEW 게시 확인, DEW/KOREX 두 스타일 계열의 최종 정리, 전체 포트폴리오 나머지 프로젝트는 남아 있다. `src/systems/DEW_V1` 및 `KOREX_V1`의 별도 승인 작업을 보존하기 위해 이 기록은 `src/claude-design-projects/`에 격리했다.

ZEM 글꼴 안내는 [NAVER 공식 라이선스](https://help.naver.com/service/11029/contents/18088?lang=ko&osType=PC)를 확인했고, 원문을 `ZEM_V1/fonts/OFL.txt`에 포함했다.

저장소 검증: 기존 테스트 31/31 통과, 빌드 통과. 원본 JavaScript 71개 구문 검사 통과, 카드 186개 및 정적 내부 참조 652개 누락 없음. 동적 URL과 모든 런타임 동작을 검증했다는 뜻은 아니다.
