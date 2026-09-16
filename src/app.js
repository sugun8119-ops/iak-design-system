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
  '<div class="bottom-note"><span>IAK Design · 실험하고, 만들고, 발전시키는 디자인 도구.</span><span>Starter library / 2026</span></div>';
const header = (eyebrow, title, lead) =>
  `<div class="crumb">IAK / ${eyebrow}</div><span class="eyebrow">${eyebrow}</span><h1 class="page-title">${title}</h1><p class="lead">${lead}</p>`;
function overview() {
  main.innerHTML = `<div class="crumb">Design System / Overview</div><div class="hero"><div class="hero-copy"><span class="eyebrow">A shared starting point</span><h1>좋은 디자인을,<br><em>다음 작업의 시작으로.</em></h1><p>템플릿과 디자인 규칙을 AI에 연결하세요.<br>아이디어가 내 컴퓨터에서 동작하는 화면이 됩니다.</p><a class="button" href="#start">IAK로 시작하기 <span>↗</span></a></div><div class="hero-art" aria-hidden="true"><div class="art-grid"><div class="tile">Aa</div><div class="tile">↗</div><div class="tile">▦</div><div class="tile">✳</div></div><span class="art-tag">FOUNDATIONS FOR MAKING</span></div></div><div class="steps"><div class="step"><span>01</span><div><h3>스킬 설치</h3><p>명령 하나로 AI에 공통 규칙을 연결합니다.</p></div></div><div class="step"><span>02</span><div><h3>템플릿 선택</h3><p>마음에 드는 구성의 URL을 복사합니다.</p></div></div><div class="step"><span>03</span><div><h3>자연어로 만들기</h3><p>필요한 기능을 요청하고 로컬에서 확인합니다.</p></div></div></div><div class="section-head"><div><h2>작업의 시작점을 골라보세요.</h2><p>기능에 맞게 바꿀 수 있는 세 가지 레이아웃.</p></div><a class="text-link" href="#templates">모든 템플릿 보기 ↗</a></div><div class="cards">${data.templates.map(card).join("")}</div>${note}`;
}
function templates() {
  main.innerHTML =
    header(
      "TEMPLATES",
      "처음부터 시작하지 않아도 돼요.",
      "레이아웃을 고르고 필요한 기능을 더해보세요. 아래 3개는 이번에 만든 초안 예제입니다.",
    ) +
    `<label for="search">템플릿 검색</label><input type="search" id="search" class="search" placeholder="이름 또는 기능으로 검색"><div class="filters" role="group" aria-label="템플릿 분류">${["전체", "결제", "랜딩", "대시보드"].map((x, i) => `<button class="filter" aria-pressed="${!i}" data-category="${x}">${x}</button>`).join("")}</div><div id="results" class="cards"></div><p id="count" aria-live="polite" class="lead"></p>${note}`;
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
      "스킬을 설치하고 템플릿 URL과 원하는 기능을 Codex에 전달하세요.",
    ) +
    `<section class="panel"><h2>01 · 스킬 설치와 업데이트</h2><p>${data.siteUrl ? "Codex 터미널에 복사해 실행하세요. Node.js 20 이상과 curl이 필요합니다." : "로컬 저장소 폴더에서 아래 명령을 실행하세요. GitHub Pages 배포 시 다른 컴퓨터에서도 쓸 수 있는 원격 명령으로 바뀝니다."}</p><pre id="command">${esc(data.command)}</pre><button class="button primary" id="copyCommand">명령 복사</button><p>같은 명령으로 최신 SKILL.md를 설치합니다. 실패하면 기존 파일을 유지합니다.</p></section><div class="two-col"><section class="panel"><h2>02 · 원하는 작업 입력</h2><form id="promptForm"><label for="templateUrl">템플릿 URL</label><input type="url" id="templateUrl" required placeholder="https://…"><label for="features">만들 화면과 기능</label><textarea id="features" required placeholder="이 템플릿과 유사하게 이벤트 결제 페이지를 만들어줘. 티켓 선택과 할인 코드를 넣어줘."></textarea><button class="button primary" style="margin-top:15px">요청문 만들기</button></form></section><section class="panel"><h2>03 · Codex에 붙여넣기</h2><pre id="prompt">템플릿 URL과 기능을 입력하면 요청문이 만들어집니다.</pre><button class="button" id="copyPrompt" disabled>요청문 복사</button><p>요청문을 Codex 작업 입력창에 붙여넣으세요. 이 사이트가 AI를 자동 호출하지는 않습니다.</p></section></div><div class="callout">공식 IAK 디자인 원본은 아직 미등록입니다. 현재는 작업 흐름과 초안 템플릿을 사용할 수 있습니다.</div>`;
  document.querySelector("#copyCommand").onclick = () => copy(data.command);
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
      const text = `$iak-design-system\n\n템플릿: ${url.href}\n\n${f}\n\n원본을 실제로 확인하고 유사한 레이아웃으로 구현해줘. 등록된 IAK 규칙을 적용하고 미등록 값은 임시 값으로 구분해줘. 주요 기능과 모바일 화면을 검증한 후 127.0.0.1에서만 실행하고 브라우저를 열어줘. 공개 배포는 하지 마.`;
      document.querySelector("#prompt").textContent = text;
      document.querySelector("#copyPrompt").disabled = false;
      document.querySelector("#copyPrompt").onclick = () => copy(text);
    } catch (err) {
      notify(err.message);
    }
  };
}
function foundations() {
  main.innerHTML =
    header(
      "FOUNDATIONS",
      "함께 사용하는 디자인 기준.",
      "프로젝트에 적용할 공식 규칙과 라이브러리의 실험값을 구분합니다.",
    ) +
    `<div class="callout">현재 상태: 공식 원본 연결 대기 · 겜오마 및 원티드의 값을 IAK 공식 값으로 가져오지 않았습니다.</div><section class="panel"><h2>등록된 IAK 토큰</h2>${Object.keys(data.design.tokens).length ? `<pre>${esc(JSON.stringify(data.design.tokens, null, 2))}</pre>` : "<p>아직 등록된 토큰이 없습니다. 원본 Figma 또는 디자인 문서를 확인한 후 등록합니다.</p>"}</section><section class="panel"><h2>라이브러리 화면의 임시 팔레트</h2><p>현재 사이트와 초안 예제에만 사용하는 색상입니다.</p><div class="token-grid">${[
      ["Ink", "#1b2520"],
      ["Forest", "#223c30"],
      ["Lime", "#d6ef91"],
      ["Paper", "#f5f6f2"],
    ]
      .map(
        ([n, c]) =>
          `<div class="swatch"><div style="background:${c}"></div><p>${n}<br>${c}</p></div>`,
      )
      .join(
        "",
      )}</div></section><section class="panel"><h2>공통 작업 규칙</h2><ul>${data.design.rules.map((r) => `<li>${esc(r)}</li>`).join("")}</ul></section>${note}`;
}
function components() {
  main.innerHTML =
    header(
      "COMPONENTS",
      "작은 요소부터 일관되게.",
      "브라우저 기본 요소로 만든 초안 상태 예제입니다. 공식 컴포넌트 패키지는 아닙니다.",
    ) +
    `<section class="panel"><h2>Button</h2><p>기본 · 보조 · 비활성화</p><div class="sample-row"><button class="button primary" id="demoButton">프로젝트 만들기</button><button class="button" id="demoCancel">취소</button><button class="button" disabled>저장 중…</button></div></section><section class="panel"><h2>Input</h2><form id="demoForm" novalidate><label for="demoInput">프로젝트 이름</label><input id="demoInput" placeholder="프로젝트 이름을 입력하세요" aria-describedby="demoError"><p id="demoError" class="error" hidden>이름을 입력해 주세요.</p><button class="button" style="margin-top:12px">입력 확인</button></form></section><section class="panel"><h2>Select</h2><label for="demoSelect">프로젝트 상태</label><select id="demoSelect"><option>기획 중</option><option>진행 중</option><option>완료</option></select></section>${note}`;
  document.querySelector("#demoButton").onclick = () =>
    notify("버튼 동작을 확인했습니다.");
  document.querySelector("#demoCancel").onclick = () =>
    notify("취소 버튼 예제입니다.");
  document.querySelector("#demoForm").onsubmit = (e) => {
    e.preventDefault();
    const input = document.querySelector("#demoInput"),
      bad = !input.value.trim();
    document.querySelector("#demoError").hidden = !bad;
    input.setAttribute("aria-invalid", bad);
    input.classList.toggle("input-error", bad);
    if (bad) input.focus();
    else notify("입력한 이름을 확인했습니다.");
  };
}
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
    ({ overview, templates, start, foundations, components, repository })[
      key
    ] || overview
  )();
  window.scrollTo(0, 0);
}
try {
  const r = await fetch("site-data.json");
  if (!r.ok) throw Error();
  data = await r.json();
  render();
  window.addEventListener("hashchange", render);
} catch {
  main.innerHTML =
    "<h1>자료를 불러오지 못했습니다.</h1><p>서버와 빌드 결과를 확인하고 다시 열어주세요.</p>";
}
