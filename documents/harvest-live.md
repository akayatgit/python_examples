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
| R2 (Wed) | Reddit + X | r/cscareerquestions · 143↑ u/trusted-apiarist; r/csMajors YC page | 5 free/underrated sites. Utility lane. |
| R2 | X | @karpathy | How agents actually fail (junior-shaped bugs) |
| R3 | Reddit | r/ExperiencedDevs | New interview check: predict *before* you run |
| R4 | Reddit | r/developersIndia · cafe (banked) | Real-user roadmap. Not the old one-page five. |
| R5 | X | @aakancvedi | India: pyramid + “10 juniors” is the product |

**Killed this week:** r/cscareerquestions “why hire juniors” / debugger checks. Do not remake.

Zero Reels from a single hot listing. Three X, two Reddit, five handles/rooms.

**Format for all five:** Hook (number + promise on working b-roll) → 5 screenshares. No talking. **No Reddit/X UI on camera.** Shot lists: `documents/reel-scripts-batch-1.md`.
