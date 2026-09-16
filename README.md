# IAK Design System

템플릿 URL + 자연어 기능 요청 → IAK 규칙을 적용한 화면 → 로컬 브라우저 확인.

별도 GitHub 저장소로 사용할 수 있는 디자인 라이브러리입니다. 외부 서비스 의존성 없이 Node.js 20+로 빌드하며 GitHub Pages 배포 워크플로가 포함되어 있습니다.

## 로컬 실행

```sh
npm run dev
```

http://127.0.0.1:4175 에서 확인합니다. 포트 변경은 `PORT=4176 npm run dev`입니다. 바인딩은 127.0.0.1로 제한합니다.

## 구성

- `src/`: 안내, 설치 가이드, 템플릿 검색/분류, 토큰 안내, 컴포넌트 상태 예제
- `data/design-system.json`: IAK 공식 원본을 등록할 데이터
- `data/templates.json`: 템플릿 설명·영역·반응형 규칙
- `SKILL.md`: AI의 템플릿 분석·구현·로컬 실행 지침
- `scripts/build.mjs`: 정적 사이트, 템플릿별 URL/JSON, 배포용 SKILL.md/체크섬 생성
- `scripts/install.mjs`: 로컬 또는 HTTPS 레지스트리에서 스킬 설치/갱신
- `.github/workflows/`: PR 검사 및 main 브랜치 GitHub Pages 배포

## GitHub에 올리기

GitHub에 새 저장소 `iak-design-system`을 만든 후 이 폴더를 연결합니다. 계정/조직은 실제 소유자를 사용하세요. 기존 원격 저장소를 덮어쓰지 않습니다.

```sh
git remote add origin https://github.com/OWNER/iak-design-system.git
git push -u origin main
```

GitHub Settings → Pages → Build and deployment → Source: **GitHub Actions**를 선택하고 Actions의 **Deploy Pages**를 실행합니다. 공개 사이트를 원한다면 저장소 가시성과 GitHub 플랜의 Pages 지원 범위를 확인하세요. 현재 산출물에는 원격 저장소가 설정되어 있지 않습니다.

[GitHub Pages 공식 배포 문서](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)를 참고했습니다.

워크플로는 실제 GITHUB_REPOSITORY와 configure-pages의 base_url로 GitHub 링크·설치 명령을 생성합니다. 커스텀 도메인이 있으면 해당 Pages 설정이 반영됩니다. 로컬에서 배포 주소를 재현하려면 `data/site.json`의 repository/siteUrl을 설정하거나 GITHUB_REPOSITORY/SITE_URL 환경변수를 사용합니다.

## 스킬 설치·업데이트

로컬 저장소에서는 다음을 실행합니다.

```sh
npm run install:skill
```

공개 사이트에서는 시작하기에 표시되는 원격 명령을 실행합니다. 설치기는 레지스트리와 SKILL.md를 새로 내려받고 SHA-256 무결성을 확인한 후 동일 파일을 원자적으로 교체합니다. 이전 파일은 SKILL.md.bak으로 보존합니다. 조회·검증 실패 시 기존 파일을 유지합니다. 체크섬은 파일 일치 검사이며 게시자 서명을 대신하지 않습니다.

기본 설치 위치는 `$CODEX_HOME/skills/iak-design-system/SKILL.md` 또는 `~/.codex/skills/iak-design-system/SKILL.md`입니다. Node.js 20 이상이 필요하고 원격 한 줄 명령에는 curl도 필요합니다. 새 작업에서 `$iak-design-system`으로 사용합니다. 스킬이 자동으로 AI를 호출하지는 않습니다.

## 템플릿

3개 초안 예제가 포함됩니다. 원티드 디자인이나 공식 IAK 자산을 복제하지 않았습니다.

- Event Checkout: 수량·10% 할인 코드 IAK10·금액 계산·참가자 검증. 결제 미연동, 데모 표시.
- Studio Landing: 소개와 프로젝트 그리드. 샘플 브랜드와 콘텐츠.
- Project Workspace: 검색·임시 생성·카드 안내. 전체 프로젝트 관리 제품이 아니라 레이아웃 예제.

각 템플릿은 `templates/<id>/` URL과 `template.json` 설명을 제공합니다. URL/요청문 복사 버튼으로 Codex에 전달합니다. 외부 템플릿 URL도 시작하기에서 입력할 수 있습니다. 로컬 URL은 같은 컴퓨터의 AI 작업에서만 접근 가능하며, 다른 컴퓨터에 공유하려면 Pages 배포 URL을 사용해야 합니다.

## 디자인 원본과 업데이트 경계

공식 IAK 색상·글꼴·컴포넌트는 아직 미등록입니다. 사이트 팔레트와 예제는 임시 스타일입니다. 승인된 원본을 실제로 확인해 design-system.json의 tokens/components와 sources에 등록하세요. Figma를 자동 동기화하는 MCP는 포함하지 않았습니다.

GitHub의 main 변경 → Actions 빌드·배포 → 사용자가 같은 설치 명령 재실행 순서로 갱신됩니다. 이미 만든 프로젝트 코드는 스킬 재설치만으로 자동 수정되지 않습니다. 별도로 AI에 적용을 요청해야 합니다.

## 검증

`npm test`로 설치·반복 실행·변경·백업·체크섬 실패·원본 누락·다른 스킬 덮어쓰기 방지를 검사합니다. `npm run build`는 템플릿과 배포 산출물을 생성합니다. 스크린샷·로컬 경로·계정 정보는 저장소 소스에 포함하지 않습니다.
