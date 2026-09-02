(() => {
  const store = window.DeckStore;
  let state = store.seedIfEmpty(store.load());
  let tab = "swipe";
  let dragging = false;
  let startX = 0;
  let startY = 0;
  let dx = 0;
  let lastUndo = null;

  const $ = (id) => document.getElementById(id);

  function list(status) {
    return state.posts
      .filter((p) => p.status === status)
      .sort((a, b) => (status === "queue" ? a.order - b.order : b.createdAt - a.createdAt));
  }

  function renderCounts() {
    $("c-dump").textContent = list("dump").length;
    $("c-queue").textContent = list("queue").length;
    $("c-no").textContent = list("rejected").length;
  }

  function setTab(next) {
    tab = next;
    document.querySelectorAll("nav button").forEach((b) => {
      b.classList.toggle("on", b.dataset.tab === next);
    });
    document.querySelectorAll(".panel").forEach((p) => {
      p.classList.toggle("on", p.id === "panel-" + next);
    });
    if (next === "swipe") renderSwipe();
    if (next === "dump") renderDumpList();
    if (next === "queue") renderQueue();
    if (next === "rejected") renderRejected();
  }

  function cardHtml(p) {
    return `
      <span class="badge">${esc(p.platform)} · ${esc(p.lane)}</span>
      <h2>${esc(p.title)}</h2>
      <div class="meta">
        <span>${esc(p.author || p.room)}</span>
        <span>${esc(p.room)}</span>
        <span>${esc(p.heat)}</span>
      </div>
      ${p.quote ? `<p class="quote">${esc(p.quote)}</p>` : ""}
      ${p.notes ? `<p class="quote">${esc(p.notes)}</p>` : ""}
      ${p.url ? `<p class="meta"><a href="${esc(p.url)}" target="_blank" rel="noopener">Source</a>${p.camera ? ` · <a href="${esc(p.camera)}" target="_blank" rel="noopener">On camera</a>` : ""}</p>` : ""}
    `;
  }

  function renderSwipe() {
    const dump = list("dump");
    const stage = $("swipe-stage");
    stage.classList.toggle("empty", dump.length === 0);
    if (!dump.length) {
      stage.innerHTML = `<div class="empty-copy"><h2>Dump is empty</h2><p>Go to Dump. Paste posts or load the harvest seed. Then swipe here.</p></div>`;
      return;
    }
    const top = dump[0];
    const next = dump[1];
    stage.innerHTML = `
      ${next ? `<article class="card back">${cardHtml(next)}</article>` : ""}
      <article class="card" id="top-card">
        <div class="stamp yes">QUEUE</div>
        <div class="stamp no">NO</div>
        ${cardHtml(top)}
      </article>
    `;
    bindCard($("top-card"), top.id);
  }

  let cardCtl = null;

  function bindCard(el, id) {
    if (cardCtl) cardCtl.abort();
    cardCtl = new AbortController();
    const sig = { signal: cardCtl.signal };
    const yes = el.querySelector(".stamp.yes");
    const no = el.querySelector(".stamp.no");

    const onDown = (e) => {
      if (e.target.closest("a")) return;
      dragging = true;
      const t = e.touches ? e.touches[0] : e;
      startX = t.clientX;
      startY = t.clientY;
      dx = 0;
      el.style.transition = "none";
    };
    const onMove = (e) => {
      if (!dragging) return;
      const t = e.touches ? e.touches[0] : e;
      dx = t.clientX - startX;
      const dy = t.clientY - startY;
      if (Math.abs(dx) > 8) e.preventDefault();
      const rot = dx / 18;
      el.style.transform = `translate(${dx}px, ${dy * 0.2}px) rotate(${rot}deg)`;
      const p = Math.min(1, Math.abs(dx) / 110);
      yes.style.opacity = dx > 0 ? p : 0;
      no.style.opacity = dx < 0 ? p : 0;
    };
    const onUp = () => {
      if (!dragging) return;
      dragging = false;
      const w = el.getBoundingClientRect().width;
      if (dx > w * 0.22) decide(id, "queue");
      else if (dx < -w * 0.22) decide(id, "rejected");
      else {
        el.style.transition = "transform .25s ease";
        el.style.transform = "";
        yes.style.opacity = 0;
        no.style.opacity = 0;
      }
    };

    el.addEventListener("pointerdown", onDown, sig);
    window.addEventListener("pointermove", onMove, sig);
    window.addEventListener("pointerup", onUp, sig);
    el.addEventListener("touchstart", onDown, { passive: true, signal: cardCtl.signal });
    el.addEventListener("touchmove", onMove, { passive: false, signal: cardCtl.signal });
    el.addEventListener("touchend", onUp, sig);
  }

  function decide(id, status) {
    const post = state.posts.find((p) => p.id === id);
    lastUndo = { id, from: post ? post.status : "dump" };
    store.setStatus(state, id, status);
    renderCounts();
    renderSwipe();
  }

  function undo() {
    if (!lastUndo) return;
    store.setStatus(state, lastUndo.id, lastUndo.from);
    lastUndo = null;
    renderCounts();
    renderSwipe();
  }

  function renderDumpList() {
    const items = list("dump");
    $("dump-list").innerHTML = items.length
      ? items
          .map(
            (p) => `<article class="item">
          <h3>${esc(p.title)}</h3>
          <div class="meta"><span>${esc(p.platform)}</span><span>${esc(p.author)}</span></div>
        </article>`
          )
          .join("")
      : `<p class="hint">Nothing in the dump yet. Paste JSON or add one post above.</p>`;
  }

  function renderQueue() {
    const items = list("queue");
    $("queue-list").innerHTML = items.length
      ? items
          .map(
            (p, i) => `<article class="item">
          <h3>${i + 1}. ${esc(p.title)}</h3>
          <div class="meta"><span>${esc(p.platform)}</span><span>${esc(p.heat)}</span></div>
          ${p.quote ? `<p class="quote">${esc(p.quote)}</p>` : ""}
          <div class="actions">
            <button data-up="${p.id}">Up</button>
            <button data-down="${p.id}">Down</button>
            <button data-back="${p.id}">Back to dump</button>
          </div>
        </article>`
          )
          .join("")
      : `<p class="hint">Right-swipe posts to build this queue. This is what you post next.</p>`;
  }

  function renderRejected() {
    const items = list("rejected");
    $("rejected-list").innerHTML = items.length
      ? items
          .map(
            (p) => `<article class="item">
          <h3>${esc(p.title)}</h3>
          <div class="actions"><button data-back="${p.id}">Restore</button></div>
        </article>`
          )
          .join("")
      : `<p class="hint">Left-swipe rejects land here.</p>`;
  }

  function esc(s) {
    return String(s || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function toast(msg) {
    $("toast").textContent = msg;
  }

  document.querySelectorAll("nav button").forEach((b) => {
    b.addEventListener("click", () => setTab(b.dataset.tab));
  });

  $("add-one").addEventListener("click", () => {
    const item = {
      title: $("f-title").value,
      url: $("f-url").value,
      author: $("f-author").value,
      platform: $("f-platform").value,
      room: $("f-room").value,
      heat: $("f-heat").value,
      quote: $("f-quote").value,
      lane: $("f-lane").value,
      notes: $("f-notes").value,
    };
    const n = store.addMany(state, [item]);
    toast(n ? "Added to dump" : "Need a title or link. Or that link is already in.");
    if (n) {
      ["f-title", "f-url", "f-author", "f-room", "f-heat", "f-quote", "f-notes"].forEach(
        (id) => ($(id).value = "")
      );
      renderCounts();
      renderDumpList();
    }
  });

  $("add-bulk").addEventListener("click", () => {
    try {
      const items = store.parseDump($("f-bulk").value);
      const n = store.addMany(state, items);
      toast(n ? `Dumped ${n} posts` : "Nothing new to add");
      if (n) $("f-bulk").value = "";
      renderCounts();
      renderDumpList();
    } catch (err) {
      toast("Could not read that paste. Use JSON or title + link blocks.");
    }
  });

  $("load-seed").addEventListener("click", () => {
    const n = store.addMany(state, window.DECK_SEED || []);
    toast(n ? `Loaded ${n} harvest posts` : "Seed posts already in the dump");
    renderCounts();
    renderDumpList();
  });

  $("reset-seed").addEventListener("click", () => {
    if (!confirm("Replace everything with the harvest seed?")) return;
    state = store.resetSeed();
    lastUndo = null;
    toast("Reset to harvest seed");
    renderCounts();
    setTab(tab);
  });

  $("yes-btn").addEventListener("click", () => {
    const top = list("dump")[0];
    if (top) decide(top.id, "queue");
  });
  $("no-btn").addEventListener("click", () => {
    const top = list("dump")[0];
    if (top) decide(top.id, "rejected");
  });
  $("undo-btn").addEventListener("click", undo);

  $("queue-list").addEventListener("click", (e) => {
    const up = e.target.dataset.up;
    const down = e.target.dataset.down;
    const back = e.target.dataset.back;
    if (up) store.moveQueue(state, up, -1);
    if (down) store.moveQueue(state, down, 1);
    if (back) store.setStatus(state, back, "dump");
    renderCounts();
    renderQueue();
  });

  $("rejected-list").addEventListener("click", (e) => {
    const back = e.target.dataset.back;
    if (!back) return;
    store.setStatus(state, back, "dump");
    renderCounts();
    renderRejected();
  });

  $("copy-md").addEventListener("click", async () => {
    const { markdown } = store.exportQueue(state);
    try {
      await navigator.clipboard.writeText(markdown);
      toast("Queue copied as markdown. Paste into documents/harvest-live.md");
    } catch {
      $("export-box").value = markdown;
      toast("Copy failed. Text is in the box.");
    }
  });

  $("copy-json").addEventListener("click", async () => {
    const { json } = store.exportQueue(state);
    try {
      await navigator.clipboard.writeText(json);
      toast("Queue JSON copied");
    } catch {
      $("export-box").value = json;
    }
  });

  $("download-json").addEventListener("click", () => {
    const { json } = store.exportQueue(state);
    const blob = new Blob([json], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "akay-deck-queue.json";
    a.click();
  });

  function maybeInstallHint() {
    const standalone = window.navigator.standalone === true ||
      window.matchMedia("(display-mode: standalone)").matches;
    const ios = /iphone|ipad|ipod/i.test(navigator.userAgent);
    if (ios && !standalone) $("install").classList.add("show");
  }

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  }

  renderCounts();
  setTab("swipe");
  maybeInstallHint();
})();
