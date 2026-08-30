# Instagram daily questions

Append each shipped question here. Do not fork copies. Style contract: `documents/instagram-interview-question-guideline.md`.

Caption is paste-ready for Instagram: no markdown bold, heavy line breaks, functional emojis.

Every post must include a **COPY — FRAME** block and a **COPY — CAPTION** block so Ashok can paste while creating the Reel.

From 002, use a **researched outlier** that already worked on Twitter or Stack Overflow. Cite the URL. Pattern N1–N6 is the shape only. Never invent a last-item / last-seat / grey-bubble riddle.

---

## POST 001 — git reset vs git revert (pulse check)

Spoken decision. Two real tools. Confuse, don’t dunk.

Pulse: %RESET = undo it now. %REVERT = they protect teammates.

| Field | Value |
| --- | --- |
| Topic lane | git |
| Pattern | B — this or that |
| Caption shape | C2 — this-or-that |
| Label | `🚨 Interviewer asked:` |
| Body words | 22 |
| Caption words | 243 |
| Helper / CTA | `📍 Read Caption` |
| Comment keyword | RESET or REVERT |
| Picker gates | pass — situation + teammates pulled + decision; both answers feel right |
| Status | LOCKED as POST 001 — Ashok approved |
| Killed drafts | `= NULL` too easy. `NOT IN` too hard. COUNT quiz made people look dumb. Awkward “filled their email” wording |

### COPY — FRAME

Paste this on the Reel.

```
🚨 Interviewer asked:

You pushed a broken commit to main this morning.
Two teammates already pulled it.
Will you use git reset or git revert?

📍 Read Caption
```

### COPY — CAPTION

Paste this in the Instagram caption box.

```
Read it 👇

🔀 Both undo a commit. They are not the same.

🚨 Interviewer asked:

You pushed a broken commit to main this morning.
Two teammates already pulled it.
Will you use git reset or git revert?

💡 Answer: git revert

A lot of people reach for:
git reset --hard
That’s incomplete. Not dumb.

____

What actually happens? 🤔

reset moves the branch back.

The bad commit disappears from main.

Those two teammates still have the bad commit.

Their next push fights your history.

revert adds a new commit that undoes the bad one.

main stays honest for the whole team.

____

Real Flow ⚡

bad commit is on main
↓
two teammates already pulled it
↓
reset → you rewrite their past
↓
revert → you add a fix on top
↓
team can pull without a war

____

✅ 1. Shared main?
Use git revert

✅ 2. Only you have this commit?
reset is fine

✅ 3. Already pushed + others exist
revert. Always.

____

💡 Interview Tip

❌ Instead of saying: "I would reset it."

Say:
"Two teammates already pulled it, so I revert. Reset would rewrite history they already have."

That's a much stronger interview answer.

____

🔥 Interview One-Liner
👉 "reset hides the commit. revert undoes it in public."

🧠 Mental model
reset = rip the page out
revert = write a new page that says ignore that one

____

In short: already on main → revert. reset only if you are alone.

🔖 Save this for your next git interview.

💬 Comment RESET or REVERT before you scroll.

(git, reset, revert, main branch, force push, history, backend, coding interview, placement)

#Git #InterviewPrep #BackendDevelopment #SoftwareEngineering #Placement
```

---

## POST 002 — YouTube frozen at 301 (on-screen outlier)

The glitch is on the YouTube screen. Not in a hidden file.

- Twitter: `@YTCreators` said goodbye to **301+**. Numberphile + [The Verge](https://www.theverge.com/2012/6/26/3118510/youtube-view-count-301) ran the mystery. People saw the number die on the watch page.
- Stack Overflow family: view count on the page ≠ API / comments still climb ([SO/3657255](https://stackoverflow.com/questions/3657255/the-views-displayed-on-youtube-do-not-correlate-with-the-views-indicated-in-the), [SO/11789772](https://stackoverflow.com/questions/11789772/how-does-youtube-count-its-views)).
- **Killed for this feed:** Gmail `while(1);` — Ashok: after Gmail opens you only see emails. The freeze is in a hidden network file. Frame was a lie. Park that topic for a DevTools intern lane, not this audience.
- Killed as LLM-default: last Swiggy biryani, Maps 3AM, Tatkal, WhatsApp grey bubble, PAY twice.

Pulse: %BROKEN = the counter crashed. %CHECK = they are auditing fake plays.

| Field | Value |
| --- | --- |
| Topic lane | product / YouTube |
| Pattern | N3 — worked, then froze, you changed nothing |
| Caption shape | C1 |
| Label | `Interviewer:` |
| Body words | 23 |
| Caption words | 277 |
| Helper / CTA | `Answer in caption ⬇️` |
| Comment keyword | BROKEN or CHECK |
| Status | ready to post — on-screen glitch |
| Sources | @YTCreators; Numberphile; The Verge 2012/2015; SO view-count mismatch |

### COPY — FRAME

Paste this on the Reel.

```
Interviewer:

Your new YouTube video hits 301 views.
Comments keep coming in.
The view number is frozen.
Is YouTube broken, or is it checking?

Answer in caption ⬇️
```

### COPY — CAPTION

Paste this in the Instagram caption box.

```
Read it 👇

🔒 The views did not die. YouTube hid the next ones.

💡 Answer: Checking. They freeze the public number to catch fake plays.

A lot of people reach for:
YouTube is down. The counter crashed.
That’s incomplete. Not dumb.

____

What they actually built 🤔

Early views go on the screen live.

Around 300, a hot video can be a bot farm.

So they freeze the number you see.

Comments and likes still move.

Behind the freeze they score each play: human or script.

Why 301, not 300?

The stop rule was written as “less than or equal to 300.”

One extra view slipped through. Then the door shut.

____

Real Flow ⚡

video goes up
↓
first 300 plays update live
↓
hit the freeze line
↓
screen holds at 301
↓
bots get filtered
↓
real views get added back

____

✅ 1. Not a crash
Comments climbing is the tell.

✅ 2. 301 is an off-by-one
They meant to stop at 300.

____

💡 Interview Tip

❌ Instead of saying: "The view API is slow."

Say:
"YouTube pauses the public counter once a video is hot enough to fake. 301 is a freeze-for-audit, plus an off-by-one in the stop rule."

That's a stronger interview answer.

____

🔥 Interview One-Liner
👉 "301 is a lock on the scoreboard, not on the game."

🧠 Mental model
Views = goals. Counter = stadium screen.

____

In short: frozen 301 = checking bots, not a dead server.

🔖 Save this for your next interview.

💬 Comment BROKEN or CHECK before you scroll.

(youtube, 301, view count, bots, audit, interview, placement)

#YouTube #SystemDesign #BackendDevelopment #InterviewPrep #Placement
```
