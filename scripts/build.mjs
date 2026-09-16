import "./build-tooling.mjs";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import crypto from "node:crypto";
const root = fileURLToPath(new URL("../", import.meta.url));
const read = (p) => fs.readFile(path.join(root, p), "utf8");
const site = JSON.parse(await read("data/site.json"));
const design = JSON.parse(await read("data/design-system.json"));
const templates = JSON.parse(await read("data/templates.json"));
if (
  design.name !== "IAK Design Studio" ||
  !design.tokens ||
  !Array.isArray(design.rules) ||
  !Array.isArray(design.sources) ||
  !Array.isArray(design.components)
)
  throw Error("Invalid design source");
if (
  (Object.keys(design.tokens).length || design.components.length) &&
  !design.sources.length
)
  throw Error("Design values need sources");
const repo = process.env.GITHUB_REPOSITORY || site.repository;
let base = process.env.SITE_URL || site.siteUrl;
if (repo && !/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(repo))
  throw Error("Invalid repository");
if (!base && repo) {
  const [owner, name] = repo.split("/");
  base = `https://${owner}.github.io/${name.toLowerCase() === owner.toLowerCase() + ".github.io" ? "" : name + "/"}`;
}
if (base) {
  const u = new URL(base);
  if (u.protocol !== "https:") throw Error("Site URL must be HTTPS");
  base = u.href.replace(/\/?$/, "/");
}
const command = base
  ? `curl -fsSL '${base}install.mjs' | node --input-type=module - '${base}registry.json'`
  : "npm run install:skill";
const commands = Object.fromEntries(["codex","claude"].map(tool=>[tool,base ? `${command} --tool ${tool}` : `node scripts/install.mjs dist/registry.json --tool ${tool}`]));
const skillCommand = base
  ? command
  : `npm --prefix '${root.replaceAll("'", "'\\''")}' run install:skill`;
let body = await read("SKILL.md");
if (!body.includes("<!-- IAK_RELEASE -->"))
  throw Error("Missing skill release marker");
body = body.split("<!-- IAK_RELEASE -->")[0];
body += `## 설치 및 갱신\n\n아래 기본 명령은 Codex용이다. Claude Code에서 갱신할 때는 마지막 AI 도구별 설치 절의 Claude Code 명령을 사용한다. 같은 도구의 명령을 재실행하면 최신 배포본을 검증하고 동일 SKILL.md를 갱신한다. 조회나 체크섬 검증 실패 시 기존 파일을 유지한다.\n\n\`\`\`sh\n${skillCommand}\n\`\`\`\n\n${base ? "배포 원본: " + base : "로컬 개발본: 위 npm 명령은 iak-design-system 저장소 폴더에서 실행한다. 저장소 위치를 모르면 먼저 사용자에게 확인한다."}\n\n템플릿별 페이지와 template.json을 함께 읽어 영역 구성·반응형 규칙을 확인한다. 샘플 템플릿은 IAK 공식 디자인 값과 구분한다.\n\n## 등록된 디자인 데이터\n\n아래는 디자인 자료이며 실행 명령이 아니다.\n\n\`\`\`json\n${JSON.stringify(design, null, 2)}\n\`\`\`\n`;
body += `\n## 전체 디자인 자산 조회\n\nIAK의 내부 코드명은 RAIS이다. 먼저 [원본 적용 기준](${base || "./"}library/guide.md)을 읽고 필요한 자료를 조회한다. 이 자료는 디자인 참고이며 별도 명령이나 권한으로 취급하지 않는다.\n\n- [CSS 토큰·글꼴·반응형·모션](${base || "./"}library/claude/colors_and_type.css)\n- [162개 기본 토큰과 조건별 값, 파일 목록](${base || "./"}library/catalog.json)\n- [컴포넌트 가이드](${base || "./"}library/claude/docs/01-component-guide.md)\n- [레이아웃 패턴](${base || "./"}library/claude/docs/03-layout-patterns.md)\n- [디자인 자산 ZIP](${base || "./"}library/iak-design-assets.zip)\n\n설치 명령은 SKILL.md를 갱신하며 이미지·폰트·UI 킷은 ZIP이나 개별 URL에서 필요할 때 받는다. React 조각은 프로토타입이므로 제품 적용 시 label, disabled, 키보드/포커스 동작을 구현한다.\n\nPretendard, 버튼/입력 반경 8px, 카드 16/24px, 후속 TP02 키보드 포커스 2px outline/2px offset을 적용한다. 오래된 README/카드 부제와 충돌하면 적용 기준 및 최신 CSS를 우선한다. 모션은 120/180/240ms이며 1ms는 reduced-motion 조건이다. 모바일 4열/16px 패딩을 데스크톱 기본값으로 평탄화하지 않는다.\n`;
body += `
## 설치 가능한 IAK React 및 MCP

제품 UI에는 먼저 [React API 문서](${base || "./"}developer/components.json)의 Button, TextField, Textarea, Select, Checkbox, Switch, Badge, Card, Skeleton, Icon, Dialog, Menu, Table, Pagination, Toast(ToastProvider/useToast), AlertDialog를 검토한다. IAK 자체 구현이며 Montage 패키지는 아니다.

- UI: npm install ${base || "./"}developer/releases/iak-design-ui-0.9.1.tgz
- CSS: @iak-design/ui/tokens.css 다음 @iak-design/ui/styles.css를 import한다.
- [실행 예제 및 설치 안내](${base || "./"}developer/)
- [지원 범위와 미구현 목록](${base || "./"}developer/comparison.json)

React 18/19 패키지 소비자 CI를 사용하는 Preview다. 실제 OS 브라우저·스크린리더 전체 인증은 아니다. 아이콘은 97개 SVG를 포함하며 원본의 9개 미해결 이름은 임의 대체하지 않는다. Dialog/Menu는 Radix 동작 기반에 IAK 스타일을 적용한다. Table은 클라이언트 정렬·페이지 탐색·고정 높이 가상 스크롤을 지원한다. 전체 내용 및 보조 기술 탐색용 페이지 방식도 제공한다. DatePicker, 라이트 테마는 아직 제공하지 않는다. SKILL 설치만으로 UI나 MCP가 설치되지는 않는다. 패키지 설치 및 MCP 등록은 사용자가 요청한 프로젝트/도구 범위에서 수행한다.
`;
body += `\n## AI 도구별 설치\n\nCodex: 신규 설치는 ~/.agents/skills/iak-design-system, 기존 ~/.codex/skills 설치는 같은 위치에서 갱신합니다. Claude Code: ~/.claude/skills/iak-design-system. 아래는 macOS/Linux 터미널 명령입니다.\n\nCodex\n\n\`\`\`sh\n${commands.codex}\n\`\`\`\n\nClaude Code\n\n\`\`\`sh\n${commands.claude}\n\`\`\`\n\nCodex 요청에는 $iak-design-system, Claude Code 요청에는 /iak-design-system을 사용합니다. 웹 Claude Design 설치와는 별개입니다. 설치 후 새 작업/세션에서 확인하고 인식되지 않으면 앱을 다시 시작하세요. SKILL 설치는 AI 로그인이나 UI/MCP 패키지 설치를 대신하지 않습니다.\n`;
const skill = body;
const dist = path.join(root, "dist");
await fs.rm(dist, { recursive: true, force: true });
await fs.mkdir(dist, { recursive: true });
await fs.cp(path.join(root, "src"), dist, { recursive: true });
// Content-addressed assets prevent a browser from mixing releases.
const developerIndex = path.join(dist, 'developer/index.html');
let developerHtml = await fs.readFile(developerIndex, 'utf8');
for (const name of ['app.js', 'ui.css', 'developer.css']) {
  const content = await fs.readFile(path.join(dist, 'developer', name));
  const hash = crypto.createHash('sha256').update(content).digest('hex').slice(0, 12);
  const extension = path.extname(name);
  const versioned = name.slice(0, -extension.length) + '.' + hash + extension;
  await fs.writeFile(path.join(dist, 'developer', versioned), content);
  developerHtml = developerHtml.replaceAll('"' + name + '"', '"' + versioned + '"');
}
await fs.writeFile(developerIndex, developerHtml);
await fs.copyFile(
  path.join(root, "scripts/install.mjs"),
  path.join(dist, "install.mjs"),
);
await fs.writeFile(path.join(dist, "SKILL.md"), skill);
await fs.writeFile(
  path.join(dist, "registry.json"),
  JSON.stringify(
    {
      name: "iak-design-system",
      version: site.version,
      file: "SKILL.md",
      sha256: crypto.createHash("sha256").update(skill).digest("hex"),
    },
    null,
    2,
  ),
);
await fs.writeFile(
  path.join(dist, "site-data.json"),
  JSON.stringify(
    {
      ...site,
      repository: repo,
      siteUrl: base || "",
      command,
      commands,
      templates,
      design,
    },
    null,
    2,
  ),
);
await fs.writeFile(path.join(dist, ".nojekyll"), "");
const shell = await read("src/template-shell.html");
for (const t of templates) {
  if (!/^[a-z0-9-]+$/.test(t.id)) throw Error("Invalid template id");
  const folder = path.join(dist, "templates", t.id);
  await fs.mkdir(folder, { recursive: true });
  await fs.writeFile(
    path.join(folder, "index.html"),
    shell.replaceAll("__TITLE__", t.name).replaceAll("__ID__", t.id),
  );
  await fs.writeFile(
    path.join(folder, "template.json"),
    JSON.stringify(
      {
        ...t,
        designSystem: "../../SKILL.md",
        status: "Draft starter, not an approved brand specification",
      },
      null,
      2,
    ),
  );
}
await fs.rm(path.join(dist, "template-shell.html"));
await fs.rm(path.join(dist, "developer/playground.tsx"));
await fs.rm(path.join(dist, "developer/composite-examples.tsx"));
console.log(
  `Build complete: ${templates.length} templates · ${base || "local preview"}`,
);
