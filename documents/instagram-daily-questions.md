# Instagram daily questions

Append each shipped question here. Do not fork copies. Style contract: `documents/instagram-interview-question-guideline.md`.

Caption is paste-ready for Instagram: no markdown bold, heavy line breaks, functional emojis.

---

## POST 001 — SQL `COUNT(*)` vs `COUNT(email)` (pulse check)

Mind game. Two numbers. You do the math in your head. One notch above `IS NULL`. No nested query.

Pulse: %A = “count is count”, %B = they know COUNT(col) skips NULL, %C = they think COUNT(*) also skips NULL.

| Field | Value |
| --- | --- |
| Topic lane | backend / SQL |
| Pattern | M — code gotcha + MCQ |
| Caption shape | C4 — myth + flow |
| Label | `🚨 Interviewer asked:` |
| Body words | 11 |
| Code | 2 lines |
| Caption words | 211 |
| Helper / CTA | `📍 Read Caption` |
| Comment keyword | A / B / C |
| Picker gates | pass — mind game; nouns COUNT/NULL; trap “both 50” |
| Status | ready to post — pulse instrument |
| Killed drafts | `= NULL` too easy. `NOT IN` + NULL too hard to read on a feed |

### On-screen (the frame)

🚨 Interviewer asked:

50 users.
10 emails are NULL.

```
COUNT(*)
COUNT(email)
```

What do these two return?

A. 50 and 50
B. 50 and 40
C. 40 and 40

📍 Read Caption

### Caption (paste into Instagram)

```
Read it 👇

🧠 COUNT is not always COUNT

🚨 Interviewer asked:

50 users.
10 emails are NULL.

COUNT(*)
COUNT(email)

What do these two return?

A. 50 and 50
B. 50 and 40
C. 40 and 40

💡 Answer: B. 50 and 40

Most developers think:
👈 Count is count. Both are 50 😏
❌ Wrong

____

What actually happens? 🤔

COUNT(*) counts rows.

50 users = 50 rows.

COUNT(email) counts values.

NULL is not a value.

So it skips the 10 empty emails.

50 minus 10 = 40.

____

Real Flow ⚡

50 rows in the table
↓
COUNT(*) → 50
↓
10 emails are NULL
↓
COUNT(email) skips those 10
↓
50 and 40

____

✅ 1. Want every row?
Use COUNT(*)

✅ 2. Want filled emails only?
Use COUNT(email)

✅ 3. Same idea for SUM and AVG
They skip NULL too.

____

💡 Interview Tip

❌ Instead of saying: "COUNT just counts the rows."

Say:
"COUNT(*) counts rows. COUNT(column) counts non-NULL values. With 10 NULL emails I expect 50 and 40."

That's a much stronger interview answer.

____

🔥 Interview One-Liner
👉 "COUNT(*) counts people. COUNT(email) counts inboxes."

🧠 Mental model
COUNT(*) = how many chairs
COUNT(email) = how many chairs have a bag on them

____

In short: COUNT(*) = 50. COUNT(email) = 40.

🔖 Save this for your next SQL interview.

💬 Comment A, B, or C before you scroll.

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
