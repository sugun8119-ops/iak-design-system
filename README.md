# IAK Design Studio

템플릿 URL + 자연어 기능 요청 → IAK 규칙을 적용한 화면 → 로컬 브라우저 확인.

별도 GitHub 저장소로 사용할 수 있는 디자인 라이브러리입니다. Node.js 20+와 npm 의존성을 설치해 빌드하며 GitHub Pages 배포 워크플로가 포함되어 있습니다.

## 로컬 실행

```sh
npm ci
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

GitHub Settings → Pages → Build and deployment → Source: **GitHub Actions**를 선택하고 Actions의 **Deploy Pages**를 실행합니다. 공개 사이트를 원한다면 저장소 가시성과 GitHub 플랜의 Pages 지원 범위를 확인하세요. 원격 저장소: https://github.com/sugun8119-ops/iak-design-system

사이트: https://sugun8119-ops.github.io/iak-design-system/

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

기존 IAK 사이트에서 확인한 다크·오렌지 색상과 버튼·카드 패턴을 적용했습니다. 출처와 추가 조정값은 `src/references/iak-site-style.md`에 기록했습니다. 공식 Figma 전체 및 별도 브랜드 서체는 아직 검증하지 않았습니다. 승인된 원본을 실제로 확인해 design-system.json의 tokens/components와 sources에 등록하세요. Figma를 자동 동기화하는 MCP는 포함하지 않았습니다.

GitHub의 main 변경 → Actions 빌드·배포 → 사용자가 같은 설치 명령 재실행 순서로 갱신됩니다. 이미 만든 프로젝트 코드는 스킬 재설치만으로 자동 수정되지 않습니다. 별도로 AI에 적용을 요청해야 합니다.

## 검증

`npm test`로 설치·반복 실행·변경·백업·체크섬 실패·원본 누락·다른 스킬 덮어쓰기 방지를 검사합니다. `npm run build`는 템플릿과 배포 산출물을 생성합니다. 스크린샷·로컬 경로·계정 정보는 저장소 소스에 포함하지 않습니다.

## Claude Design source library (v0.4)

The IAK system was found in Claude Design under its internal name **RAIS Design System**. The source project archive contains 110 files. The public library includes 73 design-related files: CSS, tokens, documentation, preview pages, UI kits, brand assets and nine Pretendard weights. Duplicate uploads and the standalone sales portfolio are kept out of the public package. See `src/library/guide.md` for source history, conflicts and known limitations.

- Site: `#assets` — searchable source gallery, tokens, files and icon references.
- Preview: `library/view.html?file=preview%2Fbuttons.html` — original preview, URL and AI prompt copy.
- Package: `library/iak-design-assets.zip` — source files, catalog, reconciliation guide and font license.
- Skill installation still updates SKILL.md only; the skill links to the hosted full library for on-demand use.

To refresh from a new Claude Design **Share → Project HTML → Project archive** export:

```sh
python3 scripts/import-claude.py '/path/to/RAIS Design System.zip'
npm test
npm run build
```

Review the source diff and `src/library/guide.md` before committing and pushing. The importer preserves CSS media-query contexts; the original Claude manifest incorrectly flattens mobile/reduced-motion values. Imported HTML is a design prototype, not a production component package. Iconify and some React/Babel runtime dependencies still use CDNs.

## 0.5 개발자 Preview

`developer/`에 실제 React 컴포넌트 10종의 props, 실행 예제, 접근성 안내, 원티드 비교표와 설치 명령을 제공합니다. UI 패키지는 162개 기본 토큰과 조건별 오버라이드, Pretendard, 97개 SVG를 포함합니다. 원본의 9개 아이콘 이름은 미해결로 공개합니다.

`packages/ui`와 `packages/mcp`는 빌드 시 npm 호환 tgz로 배포합니다. npm registry 정식 발행이 아닙니다. MCP는 읽기 전용 stdio 도구 10개이며 AI 클라이언트에 별도 등록해야 합니다. 설치 명령 재실행은 SKILL만 갱신합니다.

검증: React 18의 입력/폼/로딩/접근성 속성 동작, SDK stdio MCP 통신, 원본 보존, Pages 하위 경로 빌드, 스킬 갱신 테스트. React 19, 스크린리더 전체 감사, 복합 위젯, 라이트 테마, Next.js 전용 통합은 아직 미검증 또는 미구현입니다.

원티드 공식 문서와 공개 저장소를 비교 기준으로 삼았으며 이번 작업에서 Montage MCP 실시간 호출은 확인하지 못했습니다. IAK 구현은 Wanted 패키지와 별개입니다.

## 0.6 복합 컴포넌트

IAK 디자인을 유지한 Dialog, Menu, Table을 추가했습니다. Dialog는 원본의 480/640/880px 폭, 16px 반경, card-alt/overlay 토큰을 사용합니다. 원본 shadow-floating은 최신 CSS에 정의되지 않아 shadow-soft로 연결했습니다. Table은 24px 컨테이너 반경, 12×16px 셀 간격을 사용하고 muted 헤더는 가독성을 위해 fg-secondary로 적용합니다. Menu 외형은 기존 IAK 표면·테두리·8px 반경으로 구성한 신규 어댑터입니다.

Dialog/Menu 동작은 MIT 라이선스의 Radix Primitives 의존성을 사용합니다. Table은 native HTML 기반 IAK 구현입니다. API 문서와 플레이그라운드, MCP get_component에서도 세 컴포넌트를 조회할 수 있습니다. npm registry 정식 발행은 아니며 0.6.0 설치 파일로 제공합니다.

검증 범위: React 18, 모달 열기·포커스 유지·복귀·Esc·입력 저장, 메뉴 비활성 항목 건너뛰기·선택·Esc, 테이블 숫자 정렬·제어형 상태·원본 배열 보존·로딩·빈 결과·오류. 모든 스크린리더/브라우저 지원을 인증한 것은 아닙니다. Table 페이지네이션·가상화·서버 정렬, DatePicker, Toast 관리, 중첩 메뉴는 후속 범위입니다.

## 0.7 테이블 탐색

Pagination을 추가해 컴포넌트 14종을 제공합니다. Table은 전체 rows를 정렬한 뒤 페이지를 나누며 정렬/페이지 크기 변경 시 첫 페이지로 이동하고 데이터 감소 시 유효한 페이지로 보정합니다. 제어형 page/onPageChange도 지원합니다.

가상 스크롤은 선택 기능입니다. 고정 높이 행만 지원하고 긴 셀 내용은 잘릴 수 있으므로 페이지 방식도 함께 제공하세요. 포커스를 가진 행은 DOM에 보존합니다. 행 전체 수와 논리적 인덱스, 키보드 Home/End를 지원합니다. 10,000개 행 예제로 렌더링 개수와 마지막 행 접근을 검증합니다. 서버 페이지네이션과 실제 스크린리더 조합별 검증은 별도 범위입니다.

## 0.8 토스트 알림

ToastProvider/useToast를 추가했습니다. IAK 원본의 360px 폭·16px 패딩·12px 반경·사각 아이콘 plate를 유지하고 최신 shadow-toast 토큰을 사용합니다. Radix Toast가 자동 닫힘, hover/focus/창 blur 일시 정지, F8 탐색과 안내 영역을 처리합니다.

동시에 3개를 표시하며 대기 포함 최대 50개까지 보관합니다. 같은 id가 표시/대기 중이면 중복 호출을 무시하고 기존 알림을 유지합니다. 빈 제목과 용량 초과는 undefined를 반환합니다. 대기 중에는 자동 닫힘 타이머가 시작되지 않습니다. duration=0은 수동 닫기입니다. 필수 응답이나 오류는 본문에도 제공하고 action은 다른 화면에서도 수행할 수 있어야 합니다. 실제 스크린리더 조합 검증은 아직 미수행입니다.


## v0.9 — AlertDialog
IAK 모달·버튼 토큰을 재사용하는 Radix Alert Dialog 기반 확인 UI. 취소 기본 포커스, 비동기 완료 후 닫기, 실패 재시도, 중복 실행 차단을 제공합니다. 처리 중 요청 타임아웃은 앱에서 설정하세요.

## v0.10 — AI 도구별 설치 안내

시작하기와 템플릿 요청문에서 Codex / Claude Code를 선택합니다. 설치 스크립트는 `--tool codex|claude`를 지원하고 `--target` 명시 경로도 유지합니다. Codex 신규 설치는 `~/.agents/skills`를 사용하며 기존 `.codex/skills` 설치는 같은 위치에서 갱신합니다. Claude Code는 `~/.claude/skills`에 설치합니다. UI/MCP 패키지 버전은 0.9.0을 유지합니다.

2026-09-16 검증: 자동 테스트 27개, Claude Code 2.1.185 새 세션에서 프로젝트 스킬 발견 및 `/iak-design-system` 호출 후 원본 폰트·강조색 응답 확인. Claude 웹 Design 설치와는 별개이며, 당시에는 전체 화면 생성 재현을 수행하지 않았습니다. 이후 결과는 아래 v0.11 기록을 참고하세요.

공식 기준: [Codex skills](https://learn.chatgpt.com/docs/build-skills), [Claude Code skills](https://code.claude.com/docs/en/skills).

## v0.11 — 재현 결과를 반영한 완료 기준

IAK 디자인과 UI/MCP 0.9.0은 유지하고 사이트·스킬만 갱신합니다. 실제 패키지·로컬 폰트 사용, 폼의 보조 Enter 동작, 오류·결과 포커스, 데모 결과 문구, 템플릿 동작 기준과 검증 근거를 명시했습니다.

새 Claude Code 세션에서 생성한 별도 결제 예제는 검수·수정 후 테스트 22개와 빌드, 1440px/375px 브라우저 검증을 통과했습니다. 이는 수정 전 자동 완성이나 라이브러리 전체 React 19 호환성을 보증하지 않습니다. 수정된 v0.11 스킬로 새 앱을 생성하는 재검증은 아직 수행하지 않았습니다. [상세 검증 기록](src/verification.md).
