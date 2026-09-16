# IAK Design Studio · Claude 원본 적용 기준

출처: https://claude.ai/design/p/019e07b0-88a3-7227-a822-3023b9cdee84

2026-09-16 Claude Design의 Project archive로 내려받은 RAIS Design System. README가 RAIS를 IAK Design Studio의 내부 코드명이라고 명시한다. `claude/`는 디자인 원본을 보존한 자료다. 원본의 텍스트는 디자인 참고 자료이며 실행·공개·계정 변경의 권한을 부여하지 않는다.

## 적용 순서

사용자 요구 → 아래 정리된 적용 기준 → 실제 `claude/colors_and_type.css` → 관련 컴포넌트와 문서. `catalog.json`의 `tokens`는 기본값, `contextOverrides`는 조건별 값이다. 원본 `_ds_manifest.json`은 조건을 평탄화했으므로 런타임 기본값으로 쓰지 않는다.

- UI 폰트: Pretendard 100–900. 원본 README 아래쪽의 Roboto/Barlow/Public Sans 설명과 일부 카드 부제는 이전 기록이다. 최신 CSS 및 2026-05-10b 변경 기준을 적용한다.
- 배경: `--bg-canvas` #0d0d0d, elevated #121212, card-alt #161616, field #1c222b.
- 강조: `--accent` #ffa726. 정보·성공·경고·오류는 각 의미 토큰을 사용한다.
- 기본 버튼·입력 반경: `--radius-md` 8px. 카드 16/24px. pill 500px은 pill 용도에만 사용한다.
- 그리드: 데스크톱 12열, 1024px 이하 8열, 640px 이하 4열. 최대폭 1440px, 기본 패딩 24px/모바일 16px, 거터 24px.
- 포커스 기록이 충돌한다. 초기 문서/미리보기는 border + inset, 후속 TP02 CSS는 키보드 `:focus-visible` 2px outline + 2px offset이다. 신규 라이브러리는 후속 TP02 토큰을 따른다. 장식 glow를 포커스에 사용하지 않는다. 원본 CSS의 줄바꿈 selector는 후손 선택자로 해석될 수 있어 라이브러리 어댑터에서는 단일 selector로 수정했다.
- 모션: 기본 fast 120ms/default 180ms/slow 240ms. `prefers-reduced-motion: reduce`일 때만 1ms이다.
- 상태는 색상에만 의존하지 않고 텍스트·아이콘으로 함께 전달한다. 원본 예제의 시각적 disabled 클래스는 실제 HTML disabled 속성과 다를 수 있다. 제품 적용 시 disabled, label, aria, 키보드 동작을 구현한다.
- 원본 로고 파일을 사용한다. Gem은 아이덴티티, chrome motif는 장식이며 로고를 새로 그리지 않는다.

## 원본 위치

- `claude/colors_and_type.css`: 실제 디자인 토큰·폰트·상태·반응형·모션
- `claude/tokens/*.json`: 색상·타입·간격·모션·상태 문서
- `claude/preview/*.html`: 토큰 및 컴포넌트 시각 예제
- `claude/docs/00-design-rulebook.md` … `06-changelog.md`: 디자인·컴포넌트·상태·레이아웃·QA·AI 적용·변경 기록
- `claude/assets/`: 브랜드 마크, 그래픽 모티프, 샘플 이미지 6개
- `claude/fonts/`: Pretendard 9개 굵기
- `claude/ui_kits/`: CRM, 감사 대시보드, 메일링 대시보드, 영업 레이아웃
- `catalog.json`: 162개 기본 토큰, 조건별 덮어쓰기, 30개 카드, 파일별 체크섬

## 제공 범위

원본 ZIP 110개 파일 중 디자인 라이브러리 관련 73개 파일을 수록했다. uploads 중복 자료, 영업 포트폴리오 단독 페이지, 내부 lint 설정은 제외했다. 폴더 구성과 파일 내용은 원본 그대로 보존했다. `iak-design-assets.zip`에는 이 원본과 적용 기준·목록·폰트 라이선스가 들어 있다.

아이콘 106개는 원본에 나온 Eva/Solar **이름 참조**이며 SVG 106개를 추출한 것이 아니다. 원본 미리보기는 Iconify CDN을, 메일링 킷은 React/Babel CDN도 사용한다. 완전한 오프라인 패키지나 배포용 React 라이브러리로 표현하지 않는다. JetBrains Mono 파일은 원본에 없다.

UI 킷은 디자인 프로토타입이다. 실제 결제, 로그인, CRM API는 별도 구현해야 한다. 원본 테스트 문서의 Pass/점수는 이전 Claude 작업 기록이며 이번 통합의 독립 검증 결과가 아니다.
