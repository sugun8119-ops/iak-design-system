import {clients,makePrompt} from './install-options.js';
import { library } from "./library-ui.js";
const main = document.querySelector("main");
let data, toastTimer;
const esc = (s) =>
  String(s).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
const notify = (s) => {
  clearTimeout(toastTimer);
  const t = document.querySelector("#toast");
  t.textContent = s;
  t.classList.add("show");
  toastTimer = setTimeout(() => t.classList.remove("show"), 3500);
};
const copy = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    notify("복사했습니다.");
  } catch {
    notify("자동 복사가 지원되지 않습니다. 표시된 텍스트를 선택해 복사하세요.");
  }
};
const lines =
  '<div class="mini-line"></div><div class="mini-line"></div><div class="mini-line" style="width:65%"></div>';
function thumbnail(t) {
  if (t.type === "checkout")
    return `<div class="mini"><div class="mini-top"><b>IAK SESSIONS</b><span>2026 · SEOUL</span></div><div class="mini-title">Design, together.</div><div class="mini-body"><div>${lines}<div class="mini-line"></div>${lines}</div><div class="mini-panel">Order summary${lines}<div class="mini-cta">티켓 예약하기 →</div></div></div></div>`;
  if (t.type === "landing")
    return `<div class="mini"><div class="mini-top"><b>FORM STUDIO®</b><span>WORK · ABOUT</span></div><div class="mini-landing-title">Good design.<br>Better everyday.</div><div class="mini-projects"><div></div><div></div></div></div>`;
  return `<div class="mini"><div class="mini-work"><div class="mini-side"></div><div><div class="mini-top"><b>WORKSPACE</b><span>＋ NEW</span></div><div class="mini-title">내 프로젝트</div><div class="mini-cards">${[1, 2, 3, 4].map((x) => `<div><b>Project 0${x}</b><div class="mini-line"></div></div>`).join("")}</div></div></div></div>`;
}
function card(t) {
  return `<a class="template-card" href="templates/${t.id}/"><div class="thumb ${t.type}">${thumbnail(t)}</div><div class="card-title"><h3>${esc(t.name)}</h3><span class="tag">${esc(t.category)} · 초안</span></div><p>${esc(t.description)}</p></a>`;
}
const note =
  '<div class="bottom-note"><span>IAK Design Studio · 실험하고, 만들고, 발전시키는 디자인 도구.</span><span>Starter library / 2026</span></div>';
const header = (eyebrow, title, lead) =>
  `<div class="crumb">IAK / ${eyebrow}</div><span class="eyebrow">${eyebrow}</span><h1 class="page-title">${title}</h1><p class="lead">${lead}</p>`;
function overview() {
  main.innerHTML = `<div class="crumb">Design System / Overview</div><div class="hero"><div class="hero-copy"><span class="eyebrow">A shared starting point</span><h1>좋은 디자인을,<br><em>다음 작업의 시작으로.</em></h1><p>템플릿과 디자인 규칙을 AI에 연결하세요.<br>아이디어가 내 컴퓨터에서 동작하는 화면이 됩니다.</p><a class="button" href="#start">IAK로 시작하기 <span>↗</span></a></div><div class="hero-art" aria-hidden="true"><div class="art-grid"><div class="tile">Aa</div><div class="tile">↗</div><div class="tile">▦</div><div class="tile">✳</div></div><span class="art-tag">FOUNDATIONS FOR MAKING</span></div></div><section class="panel source-callout"><span class="eyebrow">CLAUDE DESIGN ORIGINALS</span><h2>IAK의 실제 디자인 자산을 담았습니다.</h2><p>162개 토큰 · 30개 원본 미리보기 · Pretendard 9개 굵기</p><a class="button" href="#assets">디자인 자산 둘러보기 ↗</a></section><div class="steps"><div class="step"><span>01</span><div><h3>스킬 설치</h3><p>명령 하나로 AI에 공통 규칙을 연결합니다.</p></div></div><div class="step"><span>02</span><div><h3>템플릿 선택</h3><p>마음에 드는 구성의 URL을 복사합니다.</p></div></div><div class="step"><span>03</span><div><h3>자연어로 만들기</h3><p>필요한 기능을 요청하고 로컬에서 확인합니다.</p></div></div></div><div class="section-head"><div><h2>작업의 시작점을 골라보세요.</h2><p>기능에 맞게 바꿀 수 있는 세 가지 레이아웃.</p></div><a class="text-link" href="#templates">모든 템플릿 보기 ↗</a></div><div class="cards">${data.templates.map(card).join("")}</div>${note}`;
}
function templates() {
  main.innerHTML =
    header(
      "TEMPLATES",
      "처음부터 시작하지 않아도 돼요.",
      "Claude Design 원본 UI 킷과 직접 만든 초안 예제를 구분해서 선택하세요.",
    ) +
    `<section class="panel"><h2>Claude Design 원본 UI 킷</h2><p>실제 IAK 시스템의 레이아웃을 확인하고 URL과 요청문을 복사하세요.</p><div class="sample-row">${[["ai-crm/index.html","AI CRM"],["rais-audit/index v2.html","Audit Dashboard"],["rais-dashboard/index.html","Mailing Dashboard"]].map(([p,n])=>`<a class="button" href="library/view.html?file=${encodeURIComponent("ui_kits/"+p)}">${n} ↗</a>`).join("")}</div></section><h2>초안 예제</h2><label for="search">템플릿 검색</label><input type="search" id="search" class="search" placeholder="이름 또는 기능으로 검색"><div class="filters" role="group" aria-label="템플릿 분류">${["전체", "결제", "랜딩", "대시보드"].map((x, i) => `<button class="filter" aria-pressed="${!i}" data-category="${x}">${x}</button>`).join("")}</div><div id="results" class="cards"></div><p id="count" aria-live="polite" class="lead"></p>${note}`;
  let cat = "전체";
  const render = () => {
    const q = document.querySelector("#search").value.trim().toLowerCase();
    const list = data.templates.filter(
      (t) =>
        (cat === "전체" || t.category === cat) &&
        `${t.name} ${t.description} ${t.features}`.toLowerCase().includes(q),
    );
    document.querySelector("#results").innerHTML = list.length
      ? list.map(card).join("")
      : '<div class="empty">일치하는 템플릿이 없습니다.</div>';
    document.querySelector("#count").textContent = `${list.length}개 템플릿`;
  };
  document.querySelectorAll("[data-category]").forEach(
    (b) =>
      (b.onclick = () => {
        cat = b.dataset.category;
        document
          .querySelectorAll("[data-category]")
          .forEach((x) => x.setAttribute("aria-pressed", x === b));
        render();
      }),
  );
  document.querySelector("#search").oninput = render;
  render();
}
function start() {
  main.innerHTML =
    header(
      "GET STARTED",
      "선택한 디자인을, 실제 화면으로.",
      "사용하는 AI 도구를 선택하고, 설치 명령과 요청문을 복사하세요.",
    ) +
    `<section class="panel"><h2>01 · 스킬 설치와 업데이트</h2><label for="aiTool">사용하는 AI 도구</label><select id="aiTool"><option value="codex">Codex</option><option value="claude">Claude Code</option></select><p id="toolHelp"></p><p id="installPath" class="hint"></p><p>${data.siteUrl ? "macOS/Linux 터미널용입니다. Node.js 20 이상과 curl이 필요합니다. Windows는 WSL에서 사용하세요." : "로컬 저장소 폴더에서 아래 명령을 실행하세요. GitHub Pages 배포 시 다른 컴퓨터에서도 쓸 수 있는 원격 명령으로 바뀝니다."}</p><pre id="command">${esc(data.command)}</pre><button class="button primary" id="copyCommand">명령 복사</button><p>같은 명령으로 최신 SKILL.md를 설치합니다. 실패하면 기존 파일을 유지합니다.</p></section><div class="two-col"><section class="panel"><h2>02 · 원하는 작업 입력</h2><form id="promptForm"><label for="templateUrl">템플릿 URL</label><input type="url" id="templateUrl" required placeholder="https://…"><label for="features">만들 화면과 기능</label><textarea id="features" required placeholder="이 템플릿과 유사하게 이벤트 결제 페이지를 만들어줘. 티켓 선택과 할인 코드를 넣어줘."></textarea><button class="button primary" style="margin-top:15px">요청문 만들기</button></form></section><section class="panel"><h2 id="promptHeading">03 · Codex에 붙여넣기</h2><pre id="prompt">템플릿 URL과 기능을 입력하면 요청문이 만들어집니다.</pre><button class="button" id="copyPrompt" disabled>요청문 복사</button><p>설치 후 새 작업/세션에서 요청하세요. 인식되지 않으면 앱을 다시 시작하세요. 이 사이트는 AI를 자동 호출하지 않으며, 스킬 설치가 UI/MCP 패키지 설치를 대신하지 않습니다.</p></section></div><div class="callout">Claude Design의 IAK 원본을 연결했습니다. 162개 토큰과 실제 브랜드·폰트·컴포넌트 자산을 디자인 자산 메뉴에서 확인하세요.</div><section class="panel"><h2>확인한 범위</h2><p>2026-09-16 · Codex 로컬 페이지 구현 확인. Claude Code 2.1.185 새 세션에서 스킬 발견 및 호출 확인. Claude에서 전체 페이지 생성, 다른 OS 및 브라우저 조합은 아직 검증하지 않았습니다.</p><p><a href="https://learn.chatgpt.com/docs/build-skills">Codex 공식 스킬 안내 ↗</a> · <a href="https://code.claude.com/docs/en/skills">Claude Code 공식 스킬 안내 ↗</a></p></section>`;
  let tool='codex';
  const updateTool=()=>{tool=document.querySelector('#aiTool').value;document.querySelector('#toolHelp').textContent=clients[tool].help;document.querySelector('#installPath').textContent=clients[tool].path;document.querySelector('#command').textContent=data.commands[tool];document.querySelector('#promptHeading').textContent=`03 · ${clients[tool].name}에 붙여넣기`;document.querySelector('#prompt').textContent='템플릿 URL과 기능을 입력하면 요청문이 만들어집니다.';document.querySelector('#copyPrompt').disabled=true;};
  document.querySelector('#aiTool').onchange=updateTool;updateTool();
  document.querySelector("#copyCommand").onclick = () => copy(data.commands[tool]);
  const form = document.querySelector("#promptForm");
  form.oninput = () => (document.querySelector("#copyPrompt").disabled = true);
  form.onsubmit = (e) => {
    e.preventDefault();
    try {
      const url = new URL(document.querySelector("#templateUrl").value);
      if (!["http:", "https:"].includes(url.protocol))
        throw Error("HTTP 또는 HTTPS URL을 입력해 주세요.");
      const f = document.querySelector("#features").value.trim();
      if (!f) throw Error("원하는 기능을 입력해 주세요.");
      const text = makePrompt(tool,url.href,f);
      document.querySelector("#prompt").textContent = text;
      document.querySelector("#copyPrompt").disabled = false;
      document.querySelector("#copyPrompt").onclick = () => copy(text);
    } catch (err) {
      notify(err.message);
    }
  };
}
function foundations() { library(main, "tokens").catch(() => main.textContent = "자산을 불러오지 못했습니다."); }
function components() { library(main, "Components").catch(() => main.textContent = "자산을 불러오지 못했습니다."); }
function assets() { library(main).catch(() => main.textContent = "자산을 불러오지 못했습니다."); }
function repository() {
  main.innerHTML =
    header(
      "GITHUB",
      "공통 기준을 한곳에서 관리합니다.",
      "원본을 수정하고 배포하면 같은 설치 명령으로 최신 규칙을 받을 수 있습니다.",
    ) +
    `<section class="panel"><h2>${data.repository ? esc(data.repository) : "iak-design-system · 전용 저장소 준비됨"}</h2><p>${data.repository ? "현재 배포본의 소스 저장소입니다." : "현재는 로컬 Git 저장소입니다. GitHub 계정 연결과 원격 저장소 생성 후 공개 주소를 사용할 수 있습니다."}</p>${data.repository ? `<a class="button" href="https://github.com/${esc(data.repository)}" target="_blank" rel="noopener">GitHub에서 보기 ↗</a>` : ""}</section><section class="panel"><h2>배포 흐름</h2><ol><li>GitHub에 별도 저장소를 만들고 코드를 올립니다.</li><li>Settings → Pages → Source를 GitHub Actions로 선택합니다.</li><li>Deploy Pages 워크플로가 검증 후 사이트와 스킬을 함께 배포합니다.</li><li>사용자는 시작하기에서 같은 명령을 다시 실행합니다.</li></ol></section><div class="callout">공개되는 것은 디자인 라이브러리 사이트입니다. 이 스킬로 만든 작업물은 요청이 없는 한 로컬에서만 실행합니다.</div>${note}`;
}
function render() {
  const key = location.hash.slice(1) || "overview";
  document
    .querySelectorAll("aside a")
    .forEach((a) => a.classList.toggle("active", a.hash === "#" + key));
  (
    ({ overview, templates, start, foundations, components, assets, repository })[
      key
    ] || overview
  )();
  window.scrollTo(0, 0);
}
try {
  const r = await fetch("site-data.json", {cache:"no-cache"});
  if (!r.ok) throw Error();
  data = await r.json();
  render();
  window.addEventListener("hashchange", render);
} catch {
  main.innerHTML =
    "<h1>자료를 불러오지 못했습니다.</h1><p>서버와 빌드 결과를 확인하고 다시 열어주세요.</p>";
}
