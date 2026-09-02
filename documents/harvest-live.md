# Live harvest — 31 Aug 2026 (diversified)

**Diversity rule (standing):** a week is illegal if all five fights come from one listing. Need **≥2 platforms**, **≥3 rooms/handles**, **≥2 X posts with real `status/` IDs**. One post → one Reel. Do not mash.

Pulled 31 Aug 2026 from:

| Pipe | How | What we got |
|---|---|---|
| Reddit rooms | `arctic-shift.photon-reddit.com` post + comment search | r/cscareerquestions, r/ExperiencedDevs, r/developersIndia, r/csMajors |
| X / Twitter | `api.fxtwitter.com/{handle}/status/{id}` + unrollnow.com | live tweet text, likes, views |
| Blocked here | reddit.com / x.com search / Nitter / XCancel | 403 or dead (X C&D 24–25 Aug 2026) |

Quotes below are verbatim from those pipes. Do not invent extra comments. Do not fake tweet IDs.

---

## Used for Batch 1 — five sources, five rooms

### P1 — Reddit · r/cscareerquestions · 113 comments
**Who:** u/MaximumFlow7491  
**Title:** Serious question: why bother hiring juniors anymore?  
**Link:** https://www.reddit.com/r/cscareerquestions/comments/1w0rj6v/serious_question_why_bother_hiring_juniors_anymore/  
**Heat:** 113 comments (score ~0 — the fight is in the replies)

> You give junior a task in 2026, 90% of them think it's online assignment in school they cheated through and they just plug it into LLM and submit the slop back at you.

> I can just copy/paste into claude and get the same slop. Literally paying someone $50 hour to hit copy/paste once a day lol

**Reply that seniors quoted (u/gitblamed_, defense contractor):**

> The interns were failing to do the most basic tasks, even at the end of their internship, that interns before them could do within the first two weeks. They were failing because they believed that Gemini knew more about our system, domain, and codebase than I do.

> The internship experience this summer pushed several contractors to update their junior level position to request at least 3 yoe, when in prior years just a degree was enough.

> I can hire a new grad for a junior position and waste a year of my life on PIP'ing him for AI bullshit, or I can take advantage of the hundreds of local people who have experience… Namely the instinct to go through a debugger, and the instinct to ask questions.

**Reel:** R1 Bounce

---

### P2 — X · @karpathy · 40,753 likes · 7.84M views
**Date:** 26 Jan 2026 (still the reference thread engineers quote)  
**Link:** https://x.com/karpathy/status/2015883857489522876  
**Unroll:** https://www.unrollnow.com/status/2015883857489522876  
**Heat:** 1,632 replies · 5,588 RTs · 1,450 quotes · 37k bookmarks

> I rapidly went from about 80% manual+autocomplete coding and 20% agents in November to 80% agent coding and 20% edits+touchups in December. i.e. I really am mostly programming in English now

> if you have any code you actually care about I would watch them like a hawk, in a nice large IDE on the side. The mistakes have changed a lot - they are not simple syntax errors anymore, they are subtle conceptual errors that a slightly sloppy, hasty junior dev might do.

> The most common category is that the models make wrong assumptions on your behalf and just run along with them without checking.

> They will implement an inefficient, bloated, brittle construction over 1000 lines of code and it's up to you to be like "umm couldn't you just do this instead?" and they will be like "of course!" and immediately cut it down to 100 lines.

> Don't tell it what to do, give it success criteria and watch it go.

> I am bracing for 2026 as the year of the slopacolypse across all of github

**Reel:** R2 Workflow

---

### P3 — Reddit · r/ExperiencedDevs · 33 comments
**Who:** u/ClaudeyClerb · 12 YOE  
**Title (as posted):** Would you approve this change without reading the diff?  
**Link:** https://www.reddit.com/r/ExperiencedDevs/comments/1vmhqib/would_you_approve_this_change_without_reading_the/  
**Note:** mods later removed the listing; body + 33 comments are still in the public archive. Fight is live among seniors.

> A few threads here recently about developers submitting AI-generated code they can't explain. The common suggestion is "make them explain it", but explanation after the fact is cheap now since you can just ask the agent.

> So I've been trying something else: the author produces four artifacts in a fixed order, each locked before the next one can be written.
> 1. A prediction of what the code will do, written before running it
> 2. What actually happened
> 3. A test they authored, and what it catches
> 4. A failure they induced deliberately, and the mechanism

> AI use is unrestricted for the implementation itself. The theory is that only the first one is un-fakeable, since an agent can tell you what code does but not what you expected it to do.

**OP later, after the pile-on:**

> the diff stopped being evidence of the author's thinking.

**Reel:** R3 Interview

---

### P4 — X · @gabriel1 · 2,003 likes · 376k views
**Date:** 9 Jul 2026  
**Who:** gabriel — ex OpenAI / Midjourney research  
**Link:** https://x.com/gabriel1/status/2075022929260089501  
**Heat:** 2.6k bookmarks. Quotes his older demo tweet (9,063 likes · 1.65M views): https://x.com/gabriel1/status/1898566138352820561

> after now having interviewed 50+ people, it's crazy how rare it is to talk about things you've done in concrete terms
>
> always only talk with high precision about what you did and why no one else could
>
> it doesn't mean anything that you "made X better" or "led thing Y"

**Quoted (same author, the demo rule):**

> never compete when applying for jobs, there are hundreds of applicants with better grades and universities than you. but none of them will be making a personalized demo
>
> i used this demo to get all my interviews like openai

**Reel:** R4 Project

---

### P5 — X · @aakancvedi · 8,574 likes · 888k views · 223 replies
**Date:** 31 Jul 2025 (thread still the Indian-IT + AI citation)  
**Who:** Aakanksha (@aakancvedi)  
**Link:** https://x.com/aakancvedi/status/1950928442427404760  
**Unroll:** https://www.unrollnow.com/status/1950928442427404760  
**Heat:** 905 RTs · 12-tweet thread

> And this business model is crumbling because of multiple reasons, the major one being AI AI can now do what 10 junior engineers used to do, only faster and cheaper

> Indian IT was built on a pyramid Thousands of freshers at the base Fewer mid-level managers Even fewer specialists at the top. Freshers did the grunt work → projects were billed by headcount → firms scaled linearly Now? Clients want fewer, more skilled folks + AI

> -TCS laid off 12,000 people and has placed a hiring freeze
> -Wipro lost a third of its market cap in 2 yrs
> -Infosys deferred campus offers

**Reel:** R5 Signal

---

## Also harvested (bank — not this week’s five)

| Source | Fight | Why not this week |
|---|---|---|
| @nateberkopec · https://x.com/nateberkopec/status/1945229870256283927 · 2,591 likes | “Your job is now to manage… a relentless junior dev who is working on 6+ PRs in parallel.” “I am now a PM for an LLM.” “indefatigable junior developer for $1000/month.” | Same lane as Karpathy. Save for week 2 if still quoted. |
| r/developersIndia · u/Audaticreddit intern system design · 190↑ | Intern SD to catch people “riding AI” | Last week’s one-page harvest. Do not remake unless a *new* thread. |
| r/developersIndia · u/Dry-Bee-7232 cafe client | 2nd years cold-called a cafe | Same — old one-page set. |
| r/developersIndia · u/No-Scholar6835 | 2025 CSE, built products, asks what looks like real engineering vs tutorial/AI | 2 comments. Heat fail. |
| r/cscareerquestions · u/bahn-bahn | “My boss could prompt Claude and get the exact same results” | 0 comments. Same fight as P1. |
| r/csMajors · u/Entire_Cut_6553 | “prompt template to make ai rewrite resume” | **Kill.** ATS/resume lane. |
| @aibytekat · https://x.com/aibytekat/status/2040085925280223250 | Resume audit thread, mentions ATS white-text | **Kill.** Saturated ATS lane. |
| @rubenhassid · https://x.com/rubenhassid/status/1929970518960296256 | “AI is killing entry-level jobs…” + Amodei 50% | Generic listicle. Weaker than aakancvedi for our room. |

---

## Source mix this week

| Reel | Platform | Room / handle | Why this one |
|---|---|---|---|
| R1 | — | SKIPPED 1 Sep | Gabriel demo/HR/manager. Too complicated. Do not remake. |
| R2 Wed | Reddit | r/cscareerquestions · 143↑ [u/trusted-apiarist](https://www.reddit.com/r/cscareerquestions/comments/1iliq2m/for_anyone_interested_in_startups/) | LinkedIn is a wash. YC / HN / Wellfound. |
| R2 also | Reddit | r/csMajors [where do you search](https://www.reddit.com/r/csMajors/comments/1vpgxpn/how_are_yall_searching_up_jobsroles/) | YC jobs + Simplify + Jobright |
| later | X | @karpathy | Bank. IDE-heavy. |
| later | X | @aakancvedi | Bank. |

**Killed:** debugger. Gabriel HR/manager demo.

## Utility bank (next Reels in this lane)

| What | URL | Why it ships |
|---|---|---|
| Cutshort | https://cutshort.io | India startups. Live. |
| YC Work at a Startup | https://www.workatastartup.com | Named in the 143↑ thread |
| Wellfound | https://wellfound.com | Same thread + X remote threads |
| Hiring Cafe | https://hiring.cafe | Career-page scrape, fewer ghosts |
| GitHub Student Pack | https://education.github.com/pack | Free tools, not a job board |
| Google AI Studio | https://aistudio.google.com | Free Gemini backup |
| HN Who’s Hiring | news.ycombinator.com (monthly) | Same 143↑ thread. Don’t show Reddit. |
| Welcome to the Jungle (ex Otta) | in that thread | Inbox matchmaking |

Zero Reels from a single hot listing. Three X, two Reddit, five handles/rooms.

**Format for all five:** Hook (number + promise on working b-roll) → 5 screenshares. No talking. **No Reddit/X UI on camera.** Shot lists: `documents/reel-scripts-batch-1.md`.

---

## 1 Sep 2026 — “watch these videos” threads (the format he posted)

Ashok posted: **You will never be the same Average guy / After you watch these 5 videos this week.** Skip 40.7% vs typical 59%. Saves 12. Keep this shape.

X does this in two flavours. Both are stealable. Do not invent extra tweet IDs.

### Flavour A — “watch these YouTube videos” (closest to his Reel)

| Handle | Hook they used | Link |
|---|---|---|
| @hasantoxr | If you want to become a world-class AI engineer in 2026, **watch these 12 YouTube videos** (save them) | Profile + unroll: https://threadreaderapp.com/user/hasantoxr — Jul 30 thread. First two videos named: Karpathy *Deep Dive into LLMs like ChatGPT*; Karpathy *Let's reproduce GPT-2 (124M)*. Too long for an “average guy this week” Reel. Bank for a later AI-jobs Reel. |
| @SuhailKakar | If you want to master Front-end Web Development, **watch these YouTube videos** | https://threadreaderapp.com/user/SuhailKakar — Nov 2022. Starts with freeCodeCamp HTML/CSS full course. |
| @madzadev | If you want to learn Python, **watch these YouTube videos (start today)** | Same author page as https://threadreaderapp.com/thread/1631648668091842560 — Python + React course lists. |

### Flavour B — “10 YouTube channels, not Netflix” (he picks one video from each)

| Handle | Hook they used | Real status URL |
|---|---|---|
| @TechAI_X | YouTube has Free AI Education. **10 YouTube Channels** that teach AI better than a 4-year degree | https://x.com/TechAI_X/status/2036465525862310316 — 75 likes · 74 bookmarks · 5.5k views. Unroll: https://www.unrollnow.com/status/2036465525862310316 |
| @heygurisingh | YouTube is free education. **Top 12 channels** to accelerate your learning | https://x.com/heygurisingh/status/1942658611496509802 — Iman Gadzhi, Ali Abdaal, Matt D'Avella, Nathaniel Drew, MIT OCW, Better Ideas, Stanford GSB, Crash Course, Big Think, Thomas Frank, freeCodeCamp, Tim Ferriss. Unroll: https://threadreaderapp.com/thread/1942658611496509802 |
| @manishkumar_dev | Don't waste your time watching Useless Content. **Top 18 channels** that will teach you more in 2025 than a 4-year degree | https://x.com/manishkumar_dev/status/1923246263673422258 — **1,162 likes · 3,315 bookmarks · 365k views**. CrashCourse, Khan Academy, TED-Ed, Vsauce, Veritasium… Unroll: https://threadreaderapp.com/thread/1923246263673422258 |
| @chrisxmunn | 1 BILLION hours viewed on YouTube every day. Most wasted. **12 great channels** + each channel’s **top video** | https://x.com/chrisxmunn/status/1482391934144446466 — Unroll: https://threadreaderapp.com/thread/1482391934144446466 |
| @FluentInFinance | YouTube channel list (YC, TED-Ed, freeCodeCamp, CrashCourse, MIT OCW) | https://x.com/FluentInFinance/status/1765218382356374005 — Unroll: https://threadreaderapp.com/thread/1765218382356374005 |

### LinkedIn (same hook, often 5 exact videos — use if X is only channels)

- “Skip Netflix this weekend. Watch these YT videos instead.” — https://www.linkedin.com/posts/noam-nisand_skip-netflix-this-weekend-watch-these-yt-activity-7450853312624775169-MaaC
- “Watch these 5 videos on FINANCE” — Ray Dalio *How the Economic Machine Works* is #1 — https://www.linkedin.com/posts/karandeep-singh-8b3138209_watch-these-5-videos-on-finance-and-master-activity-7472582786210598914-s7a2
- “Watch these 5 YouTube videos and you'll know more about AI agents than 99% of people” — https://www.linkedin.com/posts/chetan-pujari-b611b6146_n8n-aiagents-aiautomation-activity-7382803366046744576-hr7B

**Next Reel videos** (from Flavour B channels, not his four already posted): `documents/reel-scripts-batch-1.md`.

---

## 1 Sep evening — hook hunt for 2 Sep: “3 high paying skills / college expenses”

Ashok’s tomorrow hook (do not rewrite):

> 95% students dont know these 3 high paying skills is enough to manage your college expenses

X already runs this family (percent + skill + money). Live posts:

| Handle | Hook | Heat | Link |
|---|---|---|---|
| @Ishansharma7390 | I learned video editing by spending $0. Video Editor is one of the HIGHEST Paying Jobs. **5 FREE videos you NEED to watch today.** | **1,344 likes · 1,985 bookmarks · 165k views** | https://x.com/Ishansharma7390/status/1702561635540385836 |
| @Ishansharma7390 | **81% of businesses need Graphic Designers.** Learn from home. Step by step to earn 1 Lakh/month as a designer in India. | 296 likes · 199 bookmarks · 35k views | https://x.com/Ishansharma7390/status/1665683517093601280 |
| @Ishansharma7390 | **86% of businesses rely on video.** Be a pro editor in 60 days. DaVinci free / VN on phone. | (Jun 9 2023 thread on his profile) | https://threadreaderapp.com/user/Ishansharma7390 |
| @GuptaSayujya | Video Editing is one of the most High Demand Jobs. Become an editor in 14 days. Free courses. | Rattibha: https://en.rattibha.com/thread/1693223862287151219 | https://x.com/GuptaSayujya/status/1693223862287151219 |

LinkedIn same 3-skill list: Video editing + Social media + Web — https://www.linkedin.com/posts/vicky-sharma-7b40552b8_skills2025-sidehustle-freelancing-activity-7274478658206023680-SEXt

**The 3 skills those posts keep naming (student, laptop, this week):**

1. **Video editing** — CapCut / DaVinci (free). Ishan: first 100 edits free, then Fiverr / YTJobs / cold DM a creator.
2. **Graphic design** — Canva. Ishan names GFXMentor, Ansh Mehra, thumbnail + Instagram posts.
3. **Copywriting** — captions and ads for the same shops. Vicky Sharma’s third is web/SMM; for college pocket money, copy is faster than coding.

Honest money (do not put “1 Lakh/month” on his overlay): one local shop’s Reels + posts is enough for mess + recharge. That is “manage college expenses.” The 1 Lakh line is Ishan’s, not ours.

**Learn-each-skill videos — Tamil playlist (2 Sep Reel + comment LINK):**

Ashok asked for Tamil + one playlist + time + earnings. Full table, 3 points, roadmap: `documents/reel-scripts-batch-1.md` → **Tamil playlist (2 Sep DM)**.

Playlist: https://www.youtube.com/watch_videos?video_ids=BSTuxpc9FU0,C6BN3c_LMIQ,o_QIIGLeonc,zzlh4nfMCns,B4jVhgiWFBY,X2bustFv1vI

Reel screenshots (3 thumbs):

1. Video — Prakash, CapCut masterclass Tamil: https://www.youtube.com/watch?v=BSTuxpc9FU0
2. Canva — BTree Systems, Canva Tamil full: https://www.youtube.com/watch?v=o_QIIGLeonc
3. Copy — Alex Cattoni, first freelance client (English; Tamil full copy course is rare): https://www.youtube.com/watch?v=B4jVhgiWFBY

Also in the playlist (do not need extra thumbs): Narayan R Reel Tamil `C6BN3c_LMIQ` · Tech Gratify thumbnail Tamil `zzlh4nfMCns` · Aishwarya Vignesh Upwork Tamil `X2bustFv1vI`.

Watch ≈ 8–8.5h full / 5h this-week cut. Practice + outreach ≈ 17h. **~22h to first paid job.** Honest money: first job ₹2–5k; **beginner week after samples ₹1.5–3.5k** (₹0 if they only watch; ₹4–6k is a rare strong week); month 1 with 1–2 shops ₹5–12k (mess + phone). Not 1 Lakh.

---

## 2 Sep morning — Tech Pulse harvest (X off-camera)

Ashok: start posting tech news from Twitter. Same law: never film x.com. Shot list: `documents/reel-scripts-batch-1.md` → Tech Pulse.

Pulled 2 Sep 2026 via `api.fxtwitter.com`. Do not invent IDs.

| Handle | What they said | Heat | Link | Use |
|---|---|---|---|---|
| @OpenAI | Ending partnership with Cursor after SpaceX buy. Direct model access ends **12 Nov**. Blog linked. | **22.2k likes · 15.3M views** | https://x.com/OpenAI/status/2093515564786540695 | **Reel 1/3 + Story 1.** On camera: https://openai.com/index/our-decision-on-cursor-following-its-acquisition-by-spacex/ |
| @mntruell | Sorry to see the block. OpenAI models = **~5%** of Cursor traffic. Talking to resolve. | **24.1k likes · 6.0M views** | https://x.com/mntruell/status/2093532254006063557 | Off-camera proof. Do not screenshot the tweet. |
| @NotTomBrown | Cursor trusted partner since Sonnet 3.5. Anthropic will **increase compute** for Claude in Cursor. | **10.3k likes · 8.3M views** | https://x.com/NotTomBrown/status/2093541294027280657 | Reel 3/3 meaning: Claude stays. |
| @thsottiaux | “It boils down to trust.” Own API key + IDE extensions still work. | **10.1k likes · 4.2M views** | https://x.com/thsottiaux/status/2093515916076343774 | Bank. Not a thumb. |
| @thsottiaux | 5% number needs a caveat. Tokens ≠ value. | **6.8k likes · 1.3M views** | https://x.com/thsottiaux/status/2093784314714657110 | Bank. |
| TechCrunch (1 Sep) | OpenAI Astra hits **critical cybersecurity** bar. Limited access. | News 1 Sep | https://techcrunch.com/2026/09/01/open-ais-astra-model-is-on-the-way-and-very-good-at-breaking-into-computer-systems/ | **Reel 2/3 + Story 2.** Official write-up: https://openai.com/index/path-to-astra/ |
| @business | Nvidia **talks** to buy Hugging Face >$13B (BI). | 87 likes · 40k views | https://x.com/business/status/2092823224962666953 | **Kill for now.** Talks, not confirmed. |
| @elonmusk | Insult reply. | 45k likes | https://x.com/elonmusk/status/2093572368434127259 | **Kill.** No job meaning. |
| @kimmonismus | Astra “ultima-alpha” scoop (pre-blog). | 844 likes | https://x.com/kimmonismus/status/2093731470493798711 | Skip. Official blog is better. |

Job meaning (the only reason we post this): do not marry one model. Cursor users keep Claude. Astra = cyber jobs get hotter; we do **not** teach hacking.
