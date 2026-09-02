const KEY = "akay-deck-v1";

function uid() {
  return "p-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 7);
}

function blank(partial) {
  return {
    id: partial.id || uid(),
    title: (partial.title || "").trim(),
    author: (partial.author || "").trim(),
    platform: (partial.platform || "x").toLowerCase(),
    room: (partial.room || "").trim(),
    url: (partial.url || "").trim(),
    camera: (partial.camera || "").trim(),
    heat: (partial.heat || "").trim(),
    quote: (partial.quote || "").trim(),
    lane: (partial.lane || "career").trim(),
    notes: (partial.notes || "").trim(),
    status: partial.status || "dump",
    order: typeof partial.order === "number" ? partial.order : Date.now(),
    createdAt: partial.createdAt || Date.now(),
  };
}

window.DeckStore = {
  load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return { posts: [] };
      const data = JSON.parse(raw);
      return { posts: Array.isArray(data.posts) ? data.posts.map(blank) : [] };
    } catch {
      return { posts: [] };
    }
  },

  save(state) {
    localStorage.setItem(KEY, JSON.stringify({ posts: state.posts }));
  },

  seedIfEmpty(state) {
    if (state.posts.length) return state;
    state.posts = (window.DECK_SEED || []).map((p) => blank({ ...p, status: "dump" }));
    this.save(state);
    return state;
  },

  addMany(state, items) {
    const existing = new Set(state.posts.map((p) => p.url).filter(Boolean));
    let added = 0;
    for (const item of items) {
      const post = blank(item);
      if (!post.title && !post.url) continue;
      if (post.url && existing.has(post.url)) continue;
      post.status = "dump";
      post.order = Date.now() + added;
      state.posts.unshift(post);
      if (post.url) existing.add(post.url);
      added += 1;
    }
    this.save(state);
    return added;
  },

  setStatus(state, id, status) {
    const post = state.posts.find((p) => p.id === id);
    if (!post) return;
    post.status = status;
    if (status === "queue") post.order = Date.now();
    this.save(state);
  },

  moveQueue(state, id, dir) {
    const q = state.posts
      .filter((p) => p.status === "queue")
      .sort((a, b) => a.order - b.order);
    const i = q.findIndex((p) => p.id === id);
    const j = i + dir;
    if (i < 0 || j < 0 || j >= q.length) return;
    const tmp = q[i].order;
    q[i].order = q[j].order;
    q[j].order = tmp;
    this.save(state);
  },

  remove(state, id) {
    state.posts = state.posts.filter((p) => p.id !== id);
    this.save(state);
  },

  resetSeed() {
    const state = { posts: (window.DECK_SEED || []).map((p) => blank({ ...p, status: "dump" })) };
    this.save(state);
    return state;
  },

  parseDump(text) {
    const trimmed = text.trim();
    if (!trimmed) return [];
    if (trimmed.startsWith("[") || trimmed.startsWith("{")) {
      const data = JSON.parse(trimmed);
      const arr = Array.isArray(data) ? data : data.posts || [data];
      return arr.map((p) => blank(p));
    }
    const blocks = trimmed.split(/\n{2,}/);
    const out = [];
    for (const block of blocks) {
      const lines = block.split("\n").map((l) => l.trim()).filter(Boolean);
      if (!lines.length) continue;
      const url = lines.find((l) => /^https?:\/\//.test(l)) || "";
      const title = lines.find((l) => !/^https?:\/\//.test(l)) || url;
      const rest = lines.filter((l) => l !== url && l !== title).join(" ");
      out.push(blank({ title, url, quote: rest }));
    }
    return out;
  },

  exportQueue(state) {
    const q = state.posts
      .filter((p) => p.status === "queue")
      .sort((a, b) => a.order - b.order);
    const md = q
      .map((p, i) => {
        const bits = [
          `### Q${i + 1} — ${p.platform} · ${p.room || p.author}`,
          `**Title:** ${p.title}`,
          p.url ? `**Link:** ${p.url}` : "",
          p.camera ? `**On camera:** ${p.camera}` : "",
          p.heat ? `**Heat:** ${p.heat}` : "",
          p.quote ? `> ${p.quote}` : "",
          p.notes ? `**Notes:** ${p.notes}` : "",
        ];
        return bits.filter(Boolean).join("\n");
      })
      .join("\n\n");
    return { json: JSON.stringify(q, null, 2), markdown: md || "(queue empty)" };
  },
};
