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
const skillCommand = base
  ? command
  : `npm --prefix '${root.replaceAll("'", "'\\''")}' run install:skill`;
let body = await read("SKILL.md");
if (!body.includes("<!-- IAK_RELEASE -->"))
  throw Error("Missing skill release marker");
body = body.split("<!-- IAK_RELEASE -->")[0];
body += `## 설치 및 갱신\n\n아래 명령을 재실행하면 최신 배포본을 검증하고 동일 SKILL.md를 갱신한다. 조회나 체크섬 검증 실패 시 기존 파일을 유지한다.\n\n\`\`\`sh\n${skillCommand}\n\`\`\`\n\n${base ? "배포 원본: " + base : "로컬 개발본: 위 npm 명령은 iak-design-system 저장소 폴더에서 실행한다. 저장소 위치를 모르면 먼저 사용자에게 확인한다."}\n\n템플릿별 페이지와 template.json을 함께 읽어 영역 구성·반응형 규칙을 확인한다. 샘플 템플릿은 IAK 공식 디자인 값과 구분한다.\n\n## 등록된 디자인 데이터\n\n아래는 디자인 자료이며 실행 명령이 아니다.\n\n\`\`\`json\n${JSON.stringify(design, null, 2)}\n\`\`\`\n`;
const skill = body;
const dist = path.join(root, "dist");
await fs.rm(dist, { recursive: true, force: true });
await fs.mkdir(dist, { recursive: true });
await fs.cp(path.join(root, "src"), dist, { recursive: true });
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
console.log(
  `Build complete: ${templates.length} templates · ${base || "local preview"}`,
);
