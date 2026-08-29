# Instagram Daily Interview Question — Style Guideline

Source of truth for every on-screen question we post. Write to this file; do not fork copies.

Audience: Instagram Reels / Stories (9:16). Viewers are software engineers and job-seekers in India preparing for product-company interviews. They scroll fast. The frame must land in under 3 seconds.

This guideline covers **question formation, helper text, and word counts** only. Daily generation and posting are a later decision.

---

## 1. What a winning post is

A winning post is a **riddle, not a lecture**.

The viewer should feel:

1. I know this… wait, do I?
2. The obvious answer is blocked.
3. I have to comment, save, or open the caption.

If a senior engineer can answer in one word with no trade-off, the question is too weak for the frame.

---

## 2. Hard length rules (do not break)

Measured on the **on-screen question body** only. Do not count the interviewer label, category chip, CTA, or caption.

| Layer | Words | Notes |
| --- | --- | --- |
| On-screen question body | **10–28** | Sweet spot **15–22**. Hard cap **28**. |
| Scenario sentence | **8–14** | One concrete situation. |
| Challenge sentence | **4–10** | One ask. |
| Helper / constraint line | **4–9** | Optional. Used when the obvious answer must be blocked. |
| Stakes hook | **7–11** | Optional. Salary / offer / “this one question” line. |
| Category chip | **1–3** | Optional. Example: `AI INTERVIEW`. |
| On-screen CTA | **2–8** | Optional. Caption does the teaching. |
| Code snippet (if used) | **3–5 lines** | One concept. No imports. No comments. |
| MCQ options | **3 options, 1–6 words each** | A / B / C only. |

Line breaks for the graphic: **max 5 words per line** when the question is split across sticker blocks.

---

## 3. Anatomy of one post

Every post has two layers.

### On-screen (the Reel / Story frame)

```
[optional emoji] [Interviewer label]
[optional category chip]
[optional stakes hook]
[scenario]
[challenge / question]
[optional helper / constraint]
[optional code + A/B/C]
[optional CTA]
```

### Caption (not on the frame)

The answer, the trap, 2–4 interview talking points, and one save-worthy closer. Caption is where we teach. The frame only creates the itch.

---

## 4. Interviewer labels (helper text, prefix)

Use **one** prefix. Do not mix styles in the same frame.

| Style | Exact text | When to use |
| --- | --- | --- |
| Default | `Interviewer:` | Most posts. |
| Spoken | `Interviewer asked:` | Story / incident questions. |
| Casual | `interviewer asked :` | JWT / security “wait, that still works?” posts. |
| Alert | `🚨 Interviewer:` | Classic definition or sudden-break questions. |
| Alert spoken | `🚨 Interviewer asked:` | Concrete localhost / port / env gotchas. |
| Fire | `🔥 Interviewer:` | Short industry “how do companies…” questions. |

Always put a space after the colon. The label is not part of the word count.

---

## 5. Helper text (the second line that makes it viral)

Helper text is **not** the question. It is the twist, the block, or the CTA.

### 5.1 Constraint helper (blocks the junior answer)

Pattern: `Don't tell me it's [obvious word]`

Examples in this style:

- `Don't tell me it's Security ‼️` (6 words)
- `Don't say indexing.` (3 words)
- `Don't say just add cache.` (5 words)

Use when the question is famous and the first answer is too cheap.

### 5.2 Stakes hook (FOMO)

Pattern: `This [topic] question cost my friend ₹[N]LPA offer`

Examples in this style:

- `This python question cost my friend ₹22LPA offer` (9 words)
- `This one line rejected a ₹28LPA offer` (8 words)

Use only on **code gotcha + MCQ** posts. One salary number. No drama paragraph.

### 5.3 Category chip

- `AI INTERVIEW`
- `SYSTEM DESIGN`
- `BACKEND`

Two words or fewer. All caps.

### 5.4 On-screen CTA (pick one)

| CTA | Words | Use |
| --- | --- | --- |
| `📍 Read Caption` | 2 | Default. |
| `Check caption 👇` | 2 | Short industry questions. |
| `Comment link for answer` | 4 | Diagnostic / “what went wrong” posts. |
| `Read the caption and Save the Reel for your upcoming interviews 📌🚀` | 12 | Only when the question itself is a scenario with no explicit “?”. Prefer the short CTAs. |

Do not put the answer on the frame.

---

## 6. Question formation patterns

Use **one** pattern per post. Rotate across the week. Do not invent a seventh sentence.

### Pattern A — Scenario + design

`[Thing] gets [same problem] [N] different ways. How do you design a [system] for it?`

- Body: 15–20 words
- Example (18): `Your LLM gets the same question 100 different ways. How do you design a cache for it?`

### Pattern B — Scale + this or that

`You need to [verb] [huge N] [objects]. Will you use [A] or [B]?`

- Body: 16–20 words
- Example (19): `You need to delete 100 million rows from database. Will you use delete or truncate?`

### Pattern C — Negative constraints + mystery how

`There are no [A]. No [B]. No [C]. How does [famous product] [do X] — even [surprising time]?`

- Body: 18–25 words
- Example (21): `There are no traffic cameras. No Sensors. No cops. How does Google Maps know there's traffic - even 3AM?`

### Pattern D — Famous system + fight for scarce resource

`How would you design [known Indian / global system] to handle [huge N] users fighting for [tiny N] [units] at [exact time] without [failure mode]?`

- Body: 20–26 words
- Example (25): `How would you design IRCTC Tatkal system to handle 2 Million users fighting for 500 seats at 10:00:00 AM without double-booking?`

### Pattern E — If advantage, then why not all

`If [A] is [advantage] than [B] then WHY don't we put all [thing] in [A]`

- Body: 12–16 words
- Example (15): `If CACHE is faster than DB then WHY don't we put all data in CACHE`

### Pattern F — Worked, then broke, you changed nothing

`Your [system] worked perfectly in production. [Time] later, it's [bad symptom]. You didn't change the code. What went wrong?`

- Body: 20–26 words
- Example (22): `Your RAG worked perfectly in production. 3 months later, it's retrieving irrelevant results. You didn't change the code. What went wrong?`

### Pattern G — Expected fix fails

`A [attacker] [steals X]. You immediately [safe action]. But [bad thing still happens]. How to solve this?`

- Body: 22–28 words
- Example (28): `A Hacker steals your JWT token. You immediately click Logout. But the hacker can still access your account. How to solve this?`

### Pattern H — Concrete setup + still why

`Your [A] is working on [exact value]. [B] is working on [exact value]. Still why do you get [error]?`

- Body: 18–22 words
- Example (21): `Your API is working on localhost:8080, UI is working on localhost:3000. Still why do you get CORS error?`

### Pattern I — Quantitative regression

`In one project, a [named API] that normally responded in [fast] suddenly started taking [slow].`

- Body: 18–24 words
- The “?” can live in the caption. The frame is the incident.
- Example (23): `In one project, an Orders API that normally responded in 200 ms suddenly started taking 6-8 seconds.`

### Pattern J — Paradox + make it reliable

`If [tech] [known flaw], why would you trust [same tech] to [do Y]? How do you make [pattern] reliable?`

- Body: 22–28 words
- Example (24): `If LLMs are known to hallucinate, why would you trust another LLM to evaluate their outputs? How do you make LLM-as-a-Judge reliable?`

### Pattern K — Short industry how

`How do companies decide [one production choice]?`

- Body: 8–12 words
- Pair with a CTA. Caption holds the rubric.
- Example (10): `How do companies decide which LLM to use in production?`

### Pattern L — Classic question + blocked obvious answer

On-screen question: `What's the difference between [A] and [B]?` (6–10 words)

Helper: `Don't tell me it's [cheap answer]` (4–7 words)

Example: `What's the difference between HTTP and HTTPS?` + `Don't tell me it's Security ‼️`

### Pattern M — Code gotcha + MCQ

Hook: 7–11 words (stakes).

Code: 3–5 lines. One mutation / reference / scope / default-arg surprise.

Options: A / B / C. One trap, one correct, one crash/error.

Example hook: `This python question cost my friend ₹22LPA offer`

```python
x = [1, 2, 3]
y = x
y.append(4)
print(x)
```

A. `[1,2,3]`  
B. `[1,2,3,4]`  
C. `Error`

---

## 7. Voice and wording laws

Write like a sharp interviewer talking across the table. Not like a blog.

**Do**

- Second person: `Your API`, `You need to`, `You immediately click Logout`
- Concrete nouns: `Orders API`, `JWT token`, `IRCTC Tatkal`, `localhost:3000`
- One number that hurts: `100 million`, `2 Million`, `200 ms` → `6-8 seconds`, `3 months`, `3AM`, `₹22LPA`
- One failure mode at the end: `without double-booking`, `What went wrong?`, `How to solve this?`
- India-real systems when they raise the stakes: IRCTC, UPI, Aadhaar, PhonePe, Razorpay, GST, JEE counselling — only if the constraint is real
- Bold or color the 2–4 technical nouns on the graphic: `API`, `CORS`, `CACHE`, `JWT`

**Do not**

- Explain the answer on the frame
- Use jargon stacks (`idempotent distributed consensus CAP`)
- Ask two unrelated questions
- Use “discuss”, “explain in detail”, “write an essay”
- Invent fake company names when a real product is clearer
- Pad to sound senior (`in a production-grade scalable microservice architecture`)
- Repeat the same pattern two days in a row

---

## 8. Topic lanes (rotate; do not stay in one lane)

| Lane | Patterns that fit | Example topics |
| --- | --- | --- |
| Python gotchas | M | mutability, defaults, `is` vs `==`, late binding, GIL-not-here traps |
| Web | H, L | CORS, cookies vs localStorage, HTTP vs HTTPS, 301 vs 302 |
| Backend / DB | B, E, I | delete vs truncate, indexes, N+1, transactions, connection pool |
| System design | A, C, D | cache, maps traffic, Tatkal, UPI peak, notifications |
| Security | G, L | JWT logout, stolen cookie, SSRF-not-on-frame, password reset |
| AI / LLM | A, F, J, K | semantic cache, RAG drift, LLM-as-judge, model choice |
| Performance | I, E | p99 spike, cache stampede, sync vs async |

Watch Tower fit: questions should train **interview judgment** (trade-offs, failure modes, “what actually broke”), not trivia.

---

## 9. On-screen copy template (for the generator, later)

Fill every field. Leave optional fields empty rather than padding.

```text
label: Interviewer:
emoji: 🚨 | 🔥 | none
category: AI INTERVIEW | SYSTEM DESIGN | BACKEND | none
stakes_hook: none | This [x] question cost my friend ₹[n]LPA offer
pattern: A-M
scenario: [8-14 words]
challenge: [4-10 words]
helper_constraint: none | Don't tell me it's [word]
cta: 📍 Read Caption | Check caption 👇 | Comment link for answer | none
code: none | 3-5 lines
options: none | A / B / C
topic_lane: python | web | backend | design | security | ai | performance
word_count_body: [10-28]
```

Publish rule: if `word_count_body` is under 10 or over 28, rewrite. Do not ship.

---

## 10. Caption contract (always written with the frame)

The frame is the riddle. The caption is the class.

A caption that is four bullets and a “save this” line is **not done**. The reference Reels teach in a scannable, mobile-first layout: hook, myth, punchy answer, numbered mechanics, interview one-liner, closer.

Caption may be long. It must never be a wall of text. Frame may not grow.

### 10.1 Hard length and layout

| Layer | Limit |
| --- | --- |
| Total caption | **140–280 words** |
| Sentence | **one idea**. Max ~18 words. |
| Line | **max 8 words** before a line break when listing |
| Blank line | between **every** section and almost every sentence |
| Sections | **6–10** signposted blocks |
| Emojis | **functional icons only** (header / ❌ / ✅ / 👉). Not decoration. |
| Separators | `____` or `———` between major blocks |

Instagram has no markdown. Do not use `**bold**`. Emphasize with ALL CAPS on the 2–4 technical nouns (`GITIGNORE`, `DELETE`, `CORS`) and with emojis as headers.

### 10.2 Required anatomy (every caption)

Use this order. Skip a block only if the pattern below says so.

```text
Read it 👇

[emoji] [5–10 word headline that names the trap]

[optional: repeat the on-screen question, 1:1]

💡 Answer: [punchy verdict. max 12 words]

Most developers think:
👈 [the cheap answer] 😏
❌ Wrong

____

[TEACHING BLOCK — pick one shape from 10.3]

____

💡 Interview Tip

❌ Instead of saying: "[junior one-liner]"

Say:
"[senior 1–3 sentences. the words they should speak in the room]"

That's a much stronger interview answer.

____

🔥 Interview One-Liner
👉 "[one sentence they can memorize]"

[optional 🧠 Mental model: A = x, B = y]

____

In short: [rotate / choose / do this → then that]

🔖 Save this for your next [lane] interview.

💬 Comment [KEYWORD] if you want the exact [commands / notes / PDF].

([8–16 comma-separated keywords])

#3to6Hashtags
```

### 10.3 Teaching-block shapes (pick one; match the question pattern)

**C1 — Expected-fix-fails** (question G, JWT / gitignore / logout)

1. `What actually happens?` — 3–5 short lines
2. `Real Flow ⚡` — 5–7 steps with `↓`
3. `✅ 1. [Action]` + one helper sentence. Repeat for 3–4 actions
4. `In production:` one stack line (`Rotate + purge + re-clone`)

**C2 — This-or-that** (question B, delete vs truncate)

1. Repeat the interviewer question
2. Numbered **1–8** (not 20). Each line: `DELETE … ; TRUNCATE …`
3. `👉 Conclusion:` 2–3 sentences that pick a side **with the constraint**

**C3 — Mystery how** (question C / D, Maps / Tatkal)

1. `💡 Answer: [noun].` (Your Phone. / A queue.)
2. What it collects / does — emoji bullets
3. One concrete number example (`60 km/h → 10 km/h`)
4. `Behind the Scenes` — ✅ list
5. `🔥 System Design Insight:` 2 sentences

**C4 — If-advantage / myth** (question E / L / H, cache vs DB, CORS, HTTP)

1. Myth → ❌ Wrong
2. `What is [X]?` + formula or definition
3. Numbered 1️⃣–4️⃣ `Keyword — one sentence`
4. `🧠` wallet/bank-style metaphor
5. One-line law (`Cache is not your source of truth.`)

**C5 — Scenario pick** (question K / J, which LLM)

1. `✅ Answer:` no single winner
2. `💻 Scenario N:` example → models → `Why?` * bullets → `Trade-off:`
3. 2–4 scenarios max
4. `🎯 Interview Tip` + `✅ Short Answer :` a quoted 2–3 sentence script

**C6 — Diagnostic / drift** (question F / I, RAG, latency)

1. Two-line hook (`Your X didn't break. Your Y went stale.`)
2. `A junior answer:` ❌
3. `A senior answer:` ✅
4. `What actually causes this:` `→` concept — definition
5. `The production pattern:` `Monitor → detect → fix → swap`

### 10.4 Caption voice laws

**Do**

- Open with `Read it 👇` or a 📌 myth (`Everyone says, “X.”`)
- Give the answer in the first screen of the caption. Do not tease.
- Contrast junior vs senior in public (`❌` / `✅` or `Instead of saying` / `Say:`)
- Use a real number or a real command in the teaching block
- End with Save + one comment keyword + keyword soup + 3–6 hashtags
- Keep every block independently readable if someone lands mid-caption

**Do not**

- Write a 4-bullet “verdict / trap / points / save” stub — that is a draft, not a caption
- Stack three paragraphs with no line breaks
- Put 12 hashtags or a novel in the first line
- Leak a second topic (don’t teach Docker inside a git caption)
- Use `info`, `note`, or blog headings (`## Introduction`)
- Bold-markdown that dies in Instagram paste

### 10.5 Caption template (for the generator, later)

```text
headline: [5-10 words]
answer_line: [max 12 words]
myth: [the cheap answer]
teaching_shape: C1-C6
steps_or_points: [3-8]
interview_tip_dont: "[junior]"
interview_tip_say: "[senior 1-3 sentences]"
one_liner: "[memorize this]"
mental_model: [optional metaphor]
in_short: [A → B → C]
comment_keyword: GIT | CORS | RAG | MAPS
keywords: [8-16]
hashtags: [3-6]
word_count: [140-280]
```

Publish rule: if the caption is under 140 words or has fewer than 6 sections, rewrite. Do not ship.

---

## 11. Ship checklist (Definition of Done)

A question is ready to post only if all of these are true:

- [ ] Body is 10–28 words
- [ ] Exactly one pattern from section 6
- [ ] Exactly one interviewer label style
- [ ] A number, a real system, or a concrete port/value is present
- [ ] The obvious one-word answer is either wrong or blocked by helper text
- [ ] No answer text on the frame
- [ ] Caption is 140–280 words, 6–10 sections, heavy line breaks
- [ ] Caption has hook, 💡 Answer, myth ❌, teaching block (C1–C6), Interview Tip, one-liner, In short, Save, comment keyword, keywords, hashtags
- [ ] Interview Tip has an ❌ line and a spoken `Say:` script
- [ ] Pattern and topic lane differ from yesterday
- [ ] Code (if any) is 3–5 lines and has one surprising print/output

---

## 12. Worked examples in our voice (not copies — same formation)

Use these as calibration. Word counts are body-only.

**A — Scenario + design (18)**  
Interviewer:  
Your search API gets the same query 80 different spellings. How do you design a cache for it?

**B — Scale + this or that (18)**  
Interviewer:  
You need to expire 40 million Redis keys at midnight. Will you use TTL or a scan job?

**H — Concrete setup + still why (20)**  
🚨 Interviewer asked:  
Your API is working on localhost:5000. UI is working on localhost:5173. Still why do cookies never set?

**F — Worked then broke (21)**  
Interviewer:  
Your embeddings search was sharp in January. In April it ranks junk. You didn't change the code. What went wrong?

**G — Expected fix fails (24)**  
interviewer asked :  
A Hacker steals your session cookie. You change your password. But the hacker can still access your account. How to solve this?

**L — Classic + block (9 + helper 5)**  
🚨 Interviewer: What's the difference between process and thread?  
Don't tell me it's memory.

**M — Code gotcha**  
Hook: This python question cost my friend ₹18LPA offer

```python
def add(x, items=[]):
    items.append(x)
    return items
print(add(1) is add(2))
```

A. `True`  
B. `False`  
C. `Error`

**K — Short industry how (10)**  
🔥 Interviewer: "How do companies decide which database to use in production?"  
Check caption 👇

Full caption calibration (C1, git / `.gitignore`) lives in `documents/instagram-daily-questions.md`. Do not invent a shorter caption style than that sample.

---

## 13. Anti-patterns (reject these)

- Textbook: `Explain ACID properties with examples.`
- Too long: anything that needs a second slide to finish the question
- Too cute: memes that hide the technical noun
- Too easy: `What is REST?` with no helper block
- LeetCode wall of code: more than 5 lines
- Fake stakes: `This question ruined 1000 careers`
- Answer leak: `Hint: think semantic similarity` on the frame
- Two topics: CORS and JWT in one frame
- Stub caption: verdict + 4 bullets + “save this” with no myth, no flow, no `Say:` script
- Caption wall: three long paragraphs and no `____` breaks
- Caption tease: “answer in comments” with no 💡 Answer in the first screen

---

## 14. Daily generation — decision later

This file is the style contract. It is not the generator.

When we decide how to ship one question per day, the generator must:

1. Read this guideline
2. Pick tomorrow’s pattern + topic lane (no repeat of yesterday)
3. Fill the template in section 9
4. Count words and fail closed if outside 10–28
5. Write the caption using section 10 (shape C1–C6, 140–280 words)
6. Store the pair so we never repeat a body

Candidate approaches (do not build until we pick one):

- Manual: human fills the template; we only lint word count and pattern
- Script: local CLI that prints one approved draft per day
- Agent: scheduled run that writes `documents/daily-questions/` and waits for YES to post

---

## 15. Reference set (the style we matched)

These are the source posts this guideline was distilled from. Keep new work inside this distribution.

| # | Pattern | Body words | Helper / extra |
| --- | --- | --- | --- |
| 1 | A design cache | 18 | Label only |
| 2 | M python list alias | 4 lines + 3 options | Stakes hook, 9 words |
| 3 | L HTTP vs HTTPS | 9 | Constraint 6 + CTA 2 |
| 4 | B delete vs truncate | 19 | Label only |
| 5 | J LLM-as-judge | 24 | Category: AI INTERVIEW |
| 6 | C Maps traffic | 21 | Negative list + 3AM |
| 7 | K which LLM | 10 | Fire label + check caption |
| 8 | H CORS ports | 21 | Color the nouns |
| 9 | D IRCTC Tatkal | 25 | 2M vs 500 vs 10:00:00 |
| 10 | E cache vs DB | 15 | If / WHY |
| 11 | F RAG drift | 22 | Comment-for-answer CTA |
| 12 | G JWT logout | 28 | Expected fix fails |
| 13 | I Orders API latency | 23 | 200 ms → 6-8 s + save CTA |
