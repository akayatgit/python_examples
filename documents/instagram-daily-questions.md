# Instagram daily questions

Append each shipped question here. Do not fork copies. Style contract: `documents/instagram-interview-question-guideline.md`.

Caption is paste-ready for Instagram: no markdown bold, heavy line breaks, functional emojis.

---

## POST 001 — SQL `NOT IN` + NULL (pulse check)

One level above `IS NULL` (too easy for this feed). Still school-level SQL. The careless move: `NOT IN` a list that contains NULL.

Pulse: %A = “it just drops the managers”, %B = they know NULL poisons NOT IN, %C = they think it errors.

| Field | Value |
| --- | --- |
| Topic lane | backend / SQL |
| Pattern | M — code gotcha + MCQ |
| Caption shape | C4 — myth + flow |
| Label | `🚨 Interviewer asked:` |
| Body words | 11 |
| Code | 4 lines |
| Caption words | 279 |
| Helper / CTA | `📍 Read Caption` |
| Comment keyword | A / B / C |
| Picker gates | pass — nouns employees/NULL/NOT IN; trap “exclude the IDs”; camps A vs B |
| Status | ready to post — pulse instrument |
| Killed draft | `WHERE email = NULL` — Ashok: everyone already knows IS NULL |

### On-screen (the frame)

🚨 Interviewer asked:

```
SELECT * FROM employees
WHERE id NOT IN (
  SELECT manager_id FROM employees
)
```

Your manager_id column has one NULL.
What does this query return?

A. All non-managers
B. 0 rows
C. Error

📍 Read Caption

### Caption (paste into Instagram)

```
Read it 👇

🚫 NOT IN + NULL returns nothing

🚨 Interviewer asked:

SELECT * FROM employees
WHERE id NOT IN (
  SELECT manager_id FROM employees
)

Your manager_id column has one NULL.
What does this query return?

A. All non-managers
B. 0 rows
C. Error

💡 Answer: B. 0 rows

Most developers think:
👈 It just excludes the manager IDs 😏
❌ Wrong

____

What actually happens? 🤔

You know IS NULL. This is the next trap.

NOT IN is a chain of <> checks.

id <> 5 AND id <> 8 AND id <> NULL

id <> NULL is UNKNOWN, so the whole AND dies.

WHERE keeps only TRUE. Every row is dropped.

____

Real Flow ⚡

subquery returns 5, 8, NULL
↓
id NOT IN (5, 8, NULL)
↓
id <> 5 AND id <> 8 AND id <> NULL
↓
last check is UNKNOWN
↓
0 rows come back

____

✅ 1. Filter NULLs out of the list
WHERE id NOT IN (
  SELECT manager_id FROM employees
  WHERE manager_id IS NOT NULL
)

✅ 2. Prefer NOT EXISTS
It does not get poisoned by NULL.

____

💡 Interview Tip

❌ Instead of saying: "NOT IN just removes those IDs."

Say:
"NOT IN is a chain of not-equal checks. One NULL makes a check UNKNOWN, so I filter NULLs out or I use NOT EXISTS."

That's a much stronger interview answer.

____

🔥 Interview One-Liner
👉 "One NULL inside NOT IN, and the query returns 0 rows."

🧠 Mental model
NOT IN = "prove it is none of these"
NULL = "I don't know this one"
You cannot prove it if one answer is blank.

____

In short: NOT IN + NULL → 0 rows. Use NOT EXISTS.

🔖 Save this for your next SQL interview.

💬 Comment A, B, or C before you scroll.

(sql, not in, null, not exists, subquery, mysql, postgres, backend, coding interview, placement)

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
