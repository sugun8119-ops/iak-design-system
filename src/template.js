import {makePrompt} from './install-options.js';
const $ = (s) => document.querySelector(s);
let timer;
function notify(s) {
  $("#toast").textContent = s;
  $("#toast").classList.add("show");
  clearTimeout(timer);
  timer = setTimeout(() => $("#toast").classList.remove("show"), 4000);
}
async function copy(s) {
  try {
    await navigator.clipboard.writeText(s);
    notify("복사했습니다.");
  } catch {
    notify("자동 복사가 지원되지 않습니다. 텍스트를 선택해 복사하세요.");
  }
}
const money = (n) => n.toLocaleString("ko-KR") + "원";
function checkout() {
  return `<div class="demo"><div class="demo-nav"><strong>IAK SESSIONS</strong><span>2026 · SEOUL</span></div><div class="demo-body"><span class="demo-badge">DESIGN MEETUP / DEMO</span><h1>Design, together.</h1><p>새로운 관점을 나누는 하루. 디자인과 기술, 그리고 우리 다음의 이야기.</p><div class="checkout-columns"><form id="checkoutForm"><h2>참가 티켓</h2><div class="ticket"><div><strong>General admission</strong><p>30,000원 / 1인</p></div><select id="quantity" aria-label="티켓 수량"><option value="1">1매</option><option value="2">2매</option><option value="3">3매</option><option value="4">4매</option></select></div><h2 style="margin-top:28px">참가자 정보</h2><div class="form-two"><div><label for="guest">이름</label><input id="guest" required autocomplete="name" placeholder="홍길동"></div><div><label for="email">이메일</label><input id="email" required type="email" autocomplete="email" placeholder="hello@example.com"></div></div><div class="discount"><input id="coupon" aria-label="할인 코드" placeholder="할인 코드 (IAK10)"><button class="button" type="button" id="applyCoupon">적용</button></div><p id="couponMessage" aria-live="polite">IAK10으로 10% 할인 흐름을 확인할 수 있습니다.</p></form><section class="order"><h2>주문 요약</h2><div class="order-row"><span>티켓 금액</span><span id="subtotal"></span></div><div class="order-row"><span>할인</span><span id="discount"></span></div><div class="order-row order-total"><span>총 금액</span><span id="total"></span></div><button form="checkoutForm" type="submit" class="button primary">데모 신청 확인 →</button><p>동작 확인용 예제입니다. 실제 결제나 신청은 처리되지 않습니다.</p><p id="checkoutResult" role="status"></p></section></div></div></div>`;
}
function landing() {
  return `<div class="demo landing-demo"><div class="demo-nav"><strong>FORM STUDIO®</strong><a href="#selectedWork">SELECTED WORK ↓</a></div><div class="demo-body"><span class="demo-badge">INDEPENDENT DESIGN STUDIO · EXAMPLE</span><h1>Good design.<br>Better everyday.</h1><p>일상의 작은 차이를 만드는 브랜드와 디지털 경험.</p><div class="landing-grid" id="selectedWork"><div><div class="poster">Objects<br>of tomorrow.</div><div class="project-cap"><span>01 / Objects</span><span>Brand identity</span></div></div><div><div class="poster second">A slower<br>kind of life.</div><div class="project-cap"><span>02 / Slow living</span><span>Digital experience</span></div></div></div><p>스튜디오 소개를 위한 레이아웃 예제입니다. 프로젝트와 브랜드는 샘플입니다.</p></div></div>`;
}
function workspace() {
  return `<div class="demo demo-workspace"><div class="demo-side"><strong>WORKSPACE</strong><p>프로젝트</p><p>팀의 작업 공간</p><p>초안 레이아웃</p></div><div class="work-area"><div class="work-head"><h1>내 프로젝트</h1><button class="button primary" id="addProject">＋ 새 프로젝트</button></div><input type="search" id="projectSearch" aria-label="프로젝트 검색" placeholder="프로젝트 이름 검색"><div class="work-cards" id="workCards"></div><p class="hint">샘플 변경은 현재 페이지에서만 유지됩니다.</p></div></div><dialog id="projectDialog" aria-labelledby="projectTitle"><form id="projectForm"><h2 id="projectTitle">새 프로젝트</h2><label for="projectName">이름</label><input id="projectName" required maxlength="50"><div class="actions"><button class="button primary">만들기</button><button type="button" class="button" id="closeDialog">취소</button></div></form></dialog>`;
}
try {
  const r = await fetch("template.json");
  if (!r.ok) throw Error();
  const t = await r.json();
  $("#description").textContent = t.description;
  $("#layoutRule").textContent =
    `데스크톱: ${t.layout.desktop} / 모바일: ${t.layout.mobile}`;
  $("#request").value = t.features;
  $("#templateView").innerHTML = { checkout, landing, workspace }[t.type]();
  $("#copyUrl").onclick = () => copy(location.href.split("#")[0]);
  $("#useTemplate").onclick = () => {
    $("#request").scrollIntoView({ behavior: "smooth", block: "center" });
    $("#request").focus();
  };
  $("#request").oninput = () => {
    $("#copyGenerated").hidden = true;
  };
  $('#aiTool').onchange=()=>{$('#generated').hidden=true;$('#copyGenerated').hidden=true;};
  $("#makePrompt").onclick = () => {
    const f = $("#request").value.trim();
    if (!f) {
      notify("필요한 기능을 입력해 주세요.");
      return;
    }
    const prompt = makePrompt($('#aiTool').value,location.href.split('#')[0],f);
    $("#generated").textContent = prompt;
    $("#generated").hidden = false;
    $("#copyGenerated").hidden = false;
    $("#copyGenerated").onclick = () => copy(prompt);
  };
  if (t.type === "checkout") {
    let rate = 0;
    const calculate = () => {
      const subtotal = Number($("#quantity").value) * 30000;
      $("#subtotal").textContent = money(subtotal);
      $("#discount").textContent = "− " + money(subtotal * rate);
      $("#total").textContent = money(subtotal * (1 - rate));
    };
    $("#quantity").onchange = calculate;
    $("#coupon").oninput = () => {
      rate = 0;
      calculate();
      $("#couponMessage").textContent =
        "코드를 적용하면 할인 금액이 반영됩니다.";
    };
    $("#applyCoupon").onclick = () => {
      rate = $("#coupon").value.trim().toUpperCase() === "IAK10" ? 0.1 : 0;
      $("#couponMessage").textContent = rate
        ? "10% 할인을 적용했습니다."
        : "사용할 수 없는 코드입니다.";
      calculate();
    };
    $("#checkoutForm").onsubmit = (e) => {
      e.preventDefault();
      if (!$("#guest").value.trim()) {
        notify("이름을 입력해 주세요.");
        $("#guest").focus();
        return;
      }
      $("#checkoutResult").textContent =
        "입력 확인 완료 · 데모이며 실제 결제되지 않았습니다.";
    };
    calculate();
  }
  if (t.type === "workspace") {
    let projects = [
      "브랜드 리뉴얼",
      "웹사이트 디자인",
      "모바일 프로토타입",
      "캠페인 기획",
    ];
    const render = () => {
      const q = $("#projectSearch").value.trim();
      const filtered = projects.filter((p) => p.includes(q));
      $("#workCards").replaceChildren();
      for (const name of filtered) {
        const b = document.createElement("button");
        b.className = "work-card";
        const tag = document.createElement("span");
        tag.textContent = "진행 중";
        const h = document.createElement("h3");
        h.textContent = name;
        const p = document.createElement("p");
        p.textContent = "프로젝트 살펴보기 ↗";
        b.append(tag, h, p);
        b.onclick = () => notify(name + " · 레이아웃 예제입니다.");
        $("#workCards").append(b);
      }
      if (!filtered.length)
        $("#workCards").textContent = "검색 결과가 없습니다.";
    };
    $("#projectSearch").oninput = render;
    $("#addProject").onclick = () => $("#projectDialog").showModal();
    $("#closeDialog").onclick = () => $("#projectDialog").close();
    $("#projectForm").onsubmit = (e) => {
      e.preventDefault();
      const name = $("#projectName").value.trim();
      if (!name) return;
      projects.unshift(name);
      $("#projectName").value = "";
      $("#projectSearch").value = "";
      $("#projectDialog").close();
      render();
    };
    render();
  }
} catch {
  $("#templateView").textContent = "템플릿 자료를 불러오지 못했습니다.";
}
