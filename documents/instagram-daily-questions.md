# Instagram daily questions

Append each shipped question here. Do not fork copies. Style contract: `documents/instagram-interview-question-guideline.md`.

Caption is paste-ready for Instagram: no markdown bold, heavy line breaks, functional emojis.

---

## POST 001 — SQL `COUNT(*)` vs `COUNT(email)` (pulse check)

Decisional mind game. One sentence. Will you use X or Y. One notch above `IS NULL`.

Pulse: %COUNT(*) = they count rows when they need filled emails. %COUNT(email) = they know the skip.

| Field | Value |
| --- | --- |
| Topic lane | backend / SQL |
| Pattern | B — scale + this or that |
| Caption shape | C2 — this-or-that |
| Label | `🚨 Interviewer asked:` |
| Body words | 18 |
| Caption words | 201 |
| Helper / CTA | `📍 Read Caption` |
| Comment keyword | STAR or EMAIL |
| Picker gates | pass — one-read decision; trap COUNT(*) |
| Status | ready to post — pulse instrument |
| Killed drafts | `= NULL` too easy. `NOT IN` too hard. Stacked COUNT labels not a sentence |

### On-screen (the frame)

🚨 Interviewer asked:

You need how many users filled their email.
10 emails are NULL.
Will you use COUNT(*) or COUNT(email) ?

📍 Read Caption

### Caption (paste into Instagram)

```
Read it 👇

🧠 COUNT(*) is the wrong call here

🚨 Interviewer asked:

You need how many users filled their email.
10 emails are NULL.
Will you use COUNT(*) or COUNT(email) ?

💡 Answer: COUNT(email)

Most developers think:
👈 COUNT(*) just means count them 😏
❌ Wrong

____

What actually happens? 🤔

You asked for filled emails.

COUNT(*) counts every user.

It does not care if email is empty.

COUNT(email) counts only real values.

NULL is not a value, so those 10 are skipped.

____

Real Flow ⚡

Goal: how many filled an email
↓
COUNT(*) → every row, including NULL
↓
wrong number
↓
COUNT(email) → skips the 10 NULLs
↓
right number

____

✅ 1. Need filled emails?
Use COUNT(email)

✅ 2. Need every user?
Use COUNT(*)

✅ 3. Same trap for SUM and AVG
They skip NULL too.

____

💡 Interview Tip

❌ Instead of saying: "I would just use COUNT(*)."

Say:
"I need filled emails, so I use COUNT(email). COUNT(*) would also count the 10 NULLs."

That's a much stronger interview answer.

____

🔥 Interview One-Liner
👉 "COUNT(*) counts people. COUNT(email) counts inboxes."

🧠 Mental model
COUNT(*) = how many chairs
COUNT(email) = how many chairs have a bag

____

In short: filled email → COUNT(email). Not COUNT(*).

🔖 Save this for your next SQL interview.

💬 Comment STAR or EMAIL before you scroll.

(sql, count, null, aggregate, mysql, postgres, backend, coding interview, placement)

#SQL #InterviewPrep #BackendDevelopment #Database #Placement
```

---

## POST 002 — Git history vs `.gitignore`

| Field | Value |
| --- | --- |
| Topic lane | git / auth |
| Pattern | G — expected fix fails |
| Caption shape | C1 — expected-fix-fails |
| Label | `interviewer asked :` |
| Body words | 23 |
| Caption words | 238 |
| Helper / CTA | `📍 Read Caption` |
| Comment keyword | GIT |
| Picker gates | pass — noun git/.env/.gitignore; trap “just gitignore”; camps ignore vs rewrite history |
| Status | caption density approved — question still draft |

### On-screen (the frame)

interviewer asked :

A teammate pushed your `.env` to main.
You immediately added `.env` to `.gitignore`.
But GitHub still shows the secret.
How to solve this ?

📍 Read Caption

### Caption (paste into Instagram)

```
Read it 👇

🔐 .gitignore does NOT delete a leaked secret

interviewer asked :
A teammate pushed your .env to main.
You immediately added .env to .gitignore.
But GitHub still shows the secret.
How to solve this ?

💡 Answer: Rotate first. Then purge history.

Most developers think:
👈 Add it to .gitignore and it's gone 😏
❌ Wrong

____

What actually happens? 🤔

.gitignore only ignores future adds.

Git still keeps the file in old commits.

____

Real Flow ⚡

.env committed to main
↓
You add .env to .gitignore
↓
Next commits skip .env
↓
Old commits still have .env
↓
GitHub still shows the secret

____

✅ 1. Rotate the secret
Revoke the key immediately.
Forks and CI logs may already have it.

✅ 2. Untrack it going forward
git rm --cached .env
This only drops it from the NEXT commit.

✅ 3. Purge it from history
Use git filter-repo or BFG.
Force-push every branch and tag.
Tell the team to re-clone.

____

💡 Interview Tip

❌ Instead of saying: "Just add it to .gitignore."

Say:
".gitignore only affects future commits. I rotate the key first, then rewrite history with filter-repo and force-push."

That's a much stronger interview answer.

____

🔥 Interview One-Liner
👉 ".gitignore is not a delete button. History still has the file."

🧠 Mental model
.gitignore = lock on the front door
git history = the thief already copied the key

____

In short: Rotate → untrack → purge history → re-clone.

🔖 Save this for your next git / secrets interview.

💬 Comment GIT if you want the exact commands.

(gitignore, git history, secrets, .env, filter-repo, BFG, force push, devops, backend, coding interview, placement preparation)

#Git #InterviewPrep #BackendDevelopment #DevOps #SoftwareEngineering
```
