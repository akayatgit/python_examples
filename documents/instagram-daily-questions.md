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

## POST 002 — Gmail `while(1);` (researched SO outlier)

Not invented. Pulled from a mystery that already exploded on Stack Overflow.

- Source: [Why does Google prepend while(1); to their JSON responses?](https://stackoverflow.com/questions/2669690/why-does-google-prepend-while1-to-their-json-responses) — **4,510 votes, 611,442 views**, 8 answers.
- Twin on Facebook: `for(;;);` in front of the same kind of private data. Same lock.
- Twitter-side outlier parked as 003: YouTube view counter freeze at 301 (`@YTCreators` tweet, Numberphile, The Verge).
- Killed as LLM-default: last Swiggy biryani, Maps 3AM, Tatkal, WhatsApp grey bubble, PAY twice.

Pulse: %BUG = they left a debug loop. %LOCK = they hung a thief.

Killed draft: `You peek at Gmail’s own data` — Ashok: no context, beginners cannot picture the scene.

| Field | Value |
| --- | --- |
| Topic lane | product / Gmail |
| Pattern | N4 — expected clean data still “fails” |
| Caption shape | C1 |
| Label | `Interviewer:` |
| Body words | 28 |
| Caption words | 280 |
| Helper / CTA | `Answer in caption ⬇️` |
| Comment keyword | BUG or LOCK |
| Status | ready to post — beginner scene + gloss |
| Sources | SO/2669690 (4,510 / 611k). Facebook freeze twin. |

### COPY — FRAME

Paste this on the Reel.

```
Interviewer:

You open Gmail. The browser gets your inbox from Google.
It starts with while(1); which means loop forever.
Mail still opens.
Is that a bug, or a lock?

Answer in caption ⬇️
```

### COPY — CAPTION

Paste this in the Instagram caption box.

```
Read it 👇

🔒 You opened Gmail. Google sent a freeze first.

💡 Answer: A lock. Gmail throws the freeze away. A thief cannot.

A lot of people reach for:
Someone left a debug loop.
That’s incomplete. Not dumb.

____

What they actually built 🤔

You open Gmail. The browser asks Google for your inbox.

Google sends a text file back.

A bad site can ask for that file while you are logged in.

A clean file lets them steal your inbox.

So Google writes while(1); at the top.

That means loop forever. The bad site gets stuck.

Gmail deletes that first line.

____

Real Flow ⚡

you open Gmail
↓
browser asks Google for your inbox
↓
a bad site tries the same trick
↓
while(1); hangs the thief
↓
Gmail deletes the first line

____

✅ 1. Not a crash
Mail opening is the tell.

✅ 2. The freeze is the lock
A clean file was the hole.

✅ 3. Only Gmail has the scissors
The thief gets the loop.

____

💡 Interview Tip

❌ Instead of saying: "Google left a random loop."

Say:
"Google sends my inbox with while(1); on top. A bad site that runs that file gets stuck. Gmail deletes the first line and shows my mail."

That's a stronger interview answer.

____

🔥 Interview One-Liner
👉 "The freeze is a lock. Gmail has the key."

🧠 Mental model
Inbox = diary. while(1); = jammed lock.

____

In short: while(1); stops a thief. It does not break Gmail.

🔖 Save this for your next interview.

💬 Comment BUG or LOCK before you scroll.

(gmail, while(1), lock, inbox, browser, interview, placement)

#Gmail #SystemDesign #BackendDevelopment #InterviewPrep #Placement
```
