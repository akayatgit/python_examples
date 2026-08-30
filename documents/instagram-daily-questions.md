# Instagram daily questions

Append each shipped question here. Do not fork copies. Style contract: `documents/instagram-interview-question-guideline.md`.

Caption is paste-ready for Instagram: no markdown bold, heavy line breaks, functional emojis.

Every post must include a **COPY — FRAME** block and a **COPY — CAPTION** block so Ashok can paste while creating the Reel.

From 002: researched + **on the product screen** + mental **RCA**. Frame: easy scene, then `How do you find the root cause?` / `What do you do?` Not a consumer poll. Not a hidden file.

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

## POST 002 — YouTube 301 (mental RCA)

Easy on-screen scene. Then: how do you find the root cause. Not a consumer poll.

- Twitter: `@YTCreators` / Numberphile / [The Verge](https://www.theverge.com/2012/6/26/3118510/youtube-view-count-301). People saw 301 die on the watch page.
- SO family: page count ≠ comments / API ([SO/3657255](https://stackoverflow.com/questions/3657255/the-views-displayed-on-youtube-do-not-correlate-with-the-views-indicated-in-the)).
- **Killed:** `Is YouTube broken, or is it checking?` — Ashok: that is not a developer question. Niche is mental RCA.
- **Killed:** Gmail `while(1);` — hidden file, not the screen.
- Killed as LLM-default: last Swiggy biryani, Maps 3AM, Tatkal, WhatsApp grey bubble.

Pulse: %COUNTER = I debug the number. %PLAYS = I follow one view first.

| Field | Value |
| --- | --- |
| Topic lane | product / YouTube |
| Pattern | N3 — worked, then froze, you changed nothing |
| Caption shape | C7 — mental RCA |
| Label | `Interviewer:` |
| Body words | 21 |
| Caption words | 280 |
| Helper / CTA | `Answer in caption ⬇️` |
| Comment keyword | COUNTER or PLAYS |
| Status | ready to post — RCA niche |
| Sources | @YTCreators; Numberphile; The Verge; SO view-count mismatch |

### COPY — FRAME

Paste this on the Reel.

```
Interviewer:

Your new YouTube video hits 301 views.
Comments keep coming. The number is frozen.
How do you find the root cause?

Answer in caption ⬇️
```

### COPY — CAPTION

Paste this in the Instagram caption box.

```
Read it 👇

🔒 The number froze. The product did not.

💡 Answer: Follow one play. Do not debug the number first.

A lot of people reach for:
I will fix the counter.
That’s incomplete. Not dumb.

____

How you find the root cause 🤔

First: is anything still moving?

Comments are climbing. Plays are still happening.

Second: is the number the truth, or just a screen?

The screen can pause on purpose.

Third: why pause at 301?

They hold the public number to catch fake plays.

The stop rule was “less than or equal to 300.”

One extra view slipped.

____

Real Flow ⚡

you check comments. they still move
↓
you follow one play, not the widget
↓
public number is on hold for an audit
↓
301 is an off-by-one in the stop rule

____

✅ 1. Start with what still works
Comments climbing kills “the app is down.”

✅ 2. Separate the screen from the truth
The number can freeze. The views can still count.

____

💡 Interview Tip

❌ Instead of saying: "I would restart the view service."

Say:
"I would not debug the counter first. Comments still moving means plays are alive. I follow one play. 301 is an audit hold plus an off-by-one."

That's a stronger interview answer.

____

🔥 Interview One-Liner
👉 "If the comments move, do not start at the number."

🧠 Mental model
Number = scoreboard. Play = the match.

____

In short: find what still works. Then follow one play.

🔖 Save this for your next interview.

💬 Comment COUNTER or PLAYS before you scroll.

(youtube, 301, root cause, debug, view count, interview, placement)

#YouTube #SystemDesign #BackendDevelopment #InterviewPrep #Placement
```
