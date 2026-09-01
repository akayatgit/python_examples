# Idea sourcing — Reddit & Twitter/X only

Standing rule: if it did not start as a post people are already fighting over, it is not a Reel.

ATS / resume-tailor / keyword hacks are banned even if they trend. That lane is used up on this account.

**Diversity law (standing, 31 Aug):** do not harvest one page and call it a week. A locked batch must have **≥2 platforms**, **≥3 distinct rooms or handles**, and **≥2 X posts with real `https://x.com/{handle}/status/{id}` URLs**. Two Reels from the same thread = illegal. One developersIndia hot listing is a room, not a market.

---

## Monday harvest (30 minutes, timer on)

Open these, in this order. Sort by **hot** then **week**. Screenshot anything with heat. Write the dump into `documents/harvest-live.md` (overwrite).

**Reddit — at least three rooms, not one listing**

1. [r/developersIndia](https://www.reddit.com/r/developersIndia/hot/) — our India room. One or two fights max.
2. [r/cscareerquestions](https://www.reddit.com/r/cscareerquestions) — US juniors + seniors
3. [r/ExperiencedDevs](https://www.reddit.com/r/ExperiencedDevs) — what seniors actually hire
4. [r/csMajors](https://www.reddit.com/r/csMajors) — campus / intern
5. Search inside those: `Claude`, `Cursor`, `junior`, `fresher`, `take-home`, `agent`, `slop`

If reddit.com 403s from this environment, use the public archive API (do not ask Ashok):

```
https://arctic-shift.photon-reddit.com/api/posts/search?subreddit=cscareerquestions&query=junior&limit=8
https://arctic-shift.photon-reddit.com/api/posts/ids?ids=POST_ID
https://arctic-shift.photon-reddit.com/api/comments/search?link_id=POST_ID&limit=15
```

Keep the official `reddit.com/r/{sub}/comments/{id}/…` permalink in the dump even if we read the body from the archive.

**Twitter / X — mandatory. At least two live tweets.**

Search last 7 days (or unroll / fxtwitter if x.com search 403s): `Claude Code`, `Cursor`, `"junior developer"`, `fresher`, `"I don't hire juniors"`, `slopacolypse`, `agentic`.

If x.com is blocked, resolve a real status ID then pull verbatim text:

```
https://api.fxtwitter.com/{handle}/status/{id}
https://www.unrollnow.com/status/{id}
```

Do not invent IDs. No tweet in the dump without a `status/` URL and a like/view count from the pull.

Accounts worth a skim (steal the *fight*, not the wording): @karpathy, people arguing agents vs juniors, Indian-IT threads on the fresher pyramid. Skip “10 ChatGPT resume prompts.”

**Heat test (must pass one)**

- Reddit: ≥ 80 comments **or** a thread the comments keep quoting
- X: ≥ ~2k likes **or** a quote-tweet pile / replies that say “this is me”

**Kill test**

- ATS, resume keywords, Naukri parse, “use this ChatGPT prompt on your PDF”
- Tool list / listicle with no lived scene
- You cannot say the take in one sentence without the source
- Same fight as another Reel already locked this week

---

## From post → Reel

One post → one Reel. Do not mash three threads.

| You found | It becomes |
|---|---|
| “They bounced my GitHub / this is a tutorial clone / juniors paste slop” | T1 Bounce |
| “How I actually use Cursor / Claude at work” | T2 Workflow |
| “They asked if I used AI” / take-home / “explain this PR” | T3 Interview |
| “Stop building Titanic / demo or it didn’t happen” | T4 Project |
| A number or a CEO/X quote people are yelling about | T5 Signal |

Shot-list header must include:

```
Harvest (off-camera): r/subreddit or @handle — “short quote”
Hook overlay: N things that [outcome]
File: rN-screens.mp4
```

Every Reel is Hook → 5 screens. If you cannot name five clips, it is not a Reel.

**Never film the thread.** Reddit/X is how we pick the fight. The overlay and the five screens *are* the Reel. Stories: hook card + one screenshare still. No subreddit crop.

---

## Harvest log — 31 Aug 2026 (diversified)

Full quotes: `documents/harvest-live.md`.  
**Not** the r/developersIndia hot page. Mix: 2 Reddit rooms + 3 X threads.

| # | Live post | Heat | Fight | Reel |
|---|---|---|---|---|
| P4 | @gabriel1 — interviewed 50+ people | **2.0k likes · 376k views** | Vague “I led X” dies; concrete demo lives | **R1 (Tue)** |
| P2 | @karpathy — Claude coding notes | **40.7k likes · 7.8M views** | Watch the agent like a hawk; errors are junior-shaped | R2 |
| P3 | r/ExperiencedDevs · u/ClaudeyClerb — explain-after is cheap | **33 comments** | Predict *before* you run; that is the un-fakeable check | R3 |
| P5b | r/developersIndia · cafe (banked) | live 31 Aug | Real user > internship grind | R4 |
| P5 | @aakancvedi — Indian IT dying? | **8.5k likes · 888k views** | AI does what 10 juniors did; pyramid is the product | R5 |

**Killed:** P1 debugger. Gabriel demo/HR. Ashok skipped 1 Sep.

**Wed lock:** utility — 5 free sites (Cutshort, YC, Wellfound, Hiring Cafe, GitHub Student Pack). Source: r/cscareerquestions 143↑ + r/csMajors YC page.

**Not used:** ATS how-tos. csMajors resume-prompt. @aibytekat ATS audit. Last week’s single-page developersIndia five (do not remake).

---

## Next Monday

Re-pull **three Reddit rooms + X**. If these five are gone or colder, they do not get a second Reel. New fight or remake last week’s best *template* with a new source. Bank: @nateberkopec “PM for an LLM” if it is still circulating.

Do not ask Ashok to paste links.
