# Instagram daily questions

Append each shipped question here. Do not fork copies. Style contract: `documents/instagram-interview-question-guideline.md`.

Caption is paste-ready for Instagram: no markdown bold, heavy line breaks, functional emojis.

Every post must include a **COPY — FRAME** block and a **COPY — CAPTION** block so Ashok can paste while creating the Reel.

From 002: **desk bug** + **edge case** + mental **RCA**. Support / ops / maintenance / new feature. Easy to understand. Then `How do you find the root cause?` Not a user-product mystery. Not a consumer poll. Not a hidden file.

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

## POST 002 — OTP 012388 arrives as 12388 (desk edge case)

Support ticket. New feature. Edge case created the bug. Then RCA.

- Leading-zero-as-number already exploded on SO: [SO/2261787](https://stackoverflow.com/questions/2261787/how-to-prevent-automatic-truncation-of-leading-zeros-in-excel-cell). Same fail in Python `int()`, Java, SQL, Excel exports.
- **Killed:** YouTube 301 — Ashok: user issue, not support / ops / maintenance / new work.
- **Killed:** Gmail `while(1);` — hidden file.
- Killed as LLM-default: last Swiggy biryani, Maps 3AM, Tatkal, WhatsApp grey bubble.

Pulse: %SMS = I blame the gateway. %TYPE = I look at how we saved the code.

| Field | Value |
| --- | --- |
| Topic lane | support / OTP |
| Pattern | N3 — most codes work, this edge fails |
| Caption shape | C7 — mental RCA |
| Label | `Interviewer:` |
| Body words | 28 |
| Caption words | 275 |
| Helper / CTA | `Answer in caption ⬇️` |
| Comment keyword | SMS or TYPE |
| Status | ready to post — desk edge case |
| Sources | SO/2261787 leading-zero family |

### COPY — FRAME

Paste this on the Reel.

```
Interviewer:

Support: OTP 012388 arrives as 12388.
You generated 6 digits. The user got 5.
You stored the OTP as a number.
How do you find the root cause?

Answer in caption ⬇️
```

### COPY — CAPTION

Paste this in the Instagram caption box.

```
Read it 👇

🔒 The SMS is fine. The zero never left your database.

💡 Answer: Look at the type you saved. Do not start at the SMS vendor.

A lot of people reach for:
The SMS gateway ate a digit.
That’s incomplete. Not dumb.

____

How you find the root cause 🤔

First: do all OTPs lose a digit?

No. Only the ones that start with 0.

Second: what did we save?

A number. Numbers do not keep a leading zero.

Third: what is 012388 as a number?

12388. Five digits. That is the ticket.

____

Real Flow ⚡

you generate 012388
↓
you store it as a number
↓
the zero is gone before SMS
↓
user gets 12388
↓
support files “OTP is short”

____

✅ 1. Split the cases
Codes with no leading zero still work.

✅ 2. Check the store, not the vendor
The edge case is the type you picked.

____

💡 Interview Tip

❌ Instead of saying: "The SMS API is dropping digits."

Say:
"I would not start at the gateway. Only codes that start with 0 break. We stored OTP as a number, so 012388 became 12388 before send."

That's a stronger interview answer.

____

🔥 Interview One-Liner
👉 "If only leading zeros die, check the type, not the SMS."

🧠 Mental model
OTP = a code. A number = a count. Counts drop the zero.

____

In short: edge case first. Then the type you stored.

🔖 Save this for your next interview.

💬 Comment SMS or TYPE before you scroll.

(otp, leading zero, support, edge case, root cause, interview, placement)

#BackendDevelopment #Debugging #InterviewPrep #Placement #Support
```
