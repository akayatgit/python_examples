# Akay Deck — dump, swipe, queue

Phone app for `career_with_akay`. Tinder for harvest posts.

**Where things live**

| Place | What |
|---|---|
| **Dump** | Inbox. Akay (or you) paste every harvested post here. |
| **Swipe** | One card at a time. **Right / ♥ = selected queue. Left / ✕ = rejected.** |
| **Queue** | The posts you will film. Reorder. Copy markdown into `harvest-live.md`. |
| **Rejected** | Left swipes. Restore if you change your mind. |

Data stays on the phone (`localStorage`). First open loads the live harvest seed (OpenAI/Cursor, Astra, Ishan, Karpathy, Reddit fights). No backend.

**How to dump**

1. Open **Dump**.
2. One post: title + link + quote → Add to dump.
3. Many posts: paste a JSON array, or blocks separated by a blank line (`title` then `https://…`).
4. Or tap **Load harvest seed**.

JSON shape:

```json
[{
  "title": "OpenAI ends Cursor partnership",
  "author": "@OpenAI",
  "platform": "x",
  "room": "@OpenAI",
  "url": "https://x.com/OpenAI/status/2093515564786540695",
  "camera": "https://openai.com/index/our-decision-on-cursor-following-its-acquisition-by-spacex/",
  "heat": "22k likes",
  "quote": "…",
  "lane": "tech-pulse",
  "notes": "Do not film the tweet"
}]
```

**How to pick a queue**

1. Swipe the dump.
2. Open **Queue**. Up / Down to order.
3. **Copy queue as markdown** → paste into `documents/harvest-live.md`.
4. Film only the **On camera** URL. Never x.com.

**Live (Vercel, HTTPS)**

- App: https://temporary-agile-iron-ppdbh3m.vercel.app
- Claim (keep it, 60 minutes): https://vercel.com/claim-deployment?code=17de4812-3dad-4291-8d15-461d13ffcd72

**Install on iPhone**

1. Open the live URL in **Safari** (not Chrome).
2. Share → **Add to Home Screen** → Add.
3. Open the **Deck** icon. Full screen. Works offline after first load.

Redeploy from `deck/`: `npx vercel deploy --temporary --yes` (or `--prod` after you claim / add a `VERCEL_TOKEN`).

**Kill rules still apply:** no ATS posts, no tweet UI on camera, no invented tweet IDs.
