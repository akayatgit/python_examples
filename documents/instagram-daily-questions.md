# Instagram daily questions

Append each shipped question here. Do not fork copies. Style contract: `documents/instagram-interview-question-guideline.md`.

Caption is paste-ready for Instagram: no markdown bold, heavy line breaks, functional emojis.

---

## POST 001 — SQL `WHERE email = NULL` (pulse check)

Original. Not a training-Reel clone. A/B/C so we can read the audience: %A = “NULL equals NULL”, %B = they know `IS NULL`, %C = they think it is a syntax error.

| Field | Value |
| --- | --- |
| Topic lane | backend / SQL |
| Pattern | M — code gotcha + MCQ |
| Caption shape | C4 — myth + flow |
| Label | `🚨 Interviewer asked:` |
| Body words | 12 |
| Code | 2 lines |
| Caption words | 244 |
| Helper / CTA | `📍 Read Caption` |
| Comment keyword | A / B / C |
| Picker gates | pass — nouns SQL/NULL/email; trap `= NULL`; camps A vs B |
| Status | ready to post — pulse instrument |

### On-screen (the frame)

🚨 Interviewer asked:

```
SELECT * FROM users
WHERE email = NULL
```

Your users table has 50 NULL emails.
What does this query return?

A. 50 rows
B. 0 rows
C. Error

📍 Read Caption

### Caption (paste into Instagram)

```
Read it 👇

🚫 NULL = NULL is never true

🚨 Interviewer asked:

SELECT * FROM users
WHERE email = NULL

Your users table has 50 NULL emails.
What does this query return?

A. 50 rows
B. 0 rows
C. Error

💡 Answer: B. 0 rows

Most developers think:
👈 = NULL will find the empty emails 😏
❌ Wrong

____

What actually happens? 🤔

In SQL, NULL means unknown.

Unknown = unknown is not true.

So the WHERE clause drops every row.

Including the 50 NULL emails.

____

Real Flow ⚡

email is NULL
↓
engine checks: NULL = NULL
↓
result is UNKNOWN
↓
WHERE keeps only TRUE
↓
0 rows come back

____

✅ 1. Use IS NULL
WHERE email IS NULL
That returns the 50 rows.

✅ 2. Use IS NOT NULL
When you want real emails only.

✅ 3. Never write = NULL
Not in WHERE. Not in JOIN. Not in CASE.

____

💡 Interview Tip

❌ Instead of saying: "NULL is just empty, so = works."

Say:
"NULL means unknown. Equality with NULL is unknown, not true, so I filter with IS NULL or IS NOT NULL."

That's a much stronger interview answer.

____

🔥 Interview One-Liner
👉 "NULL is not a value. It does not equal anything. Not even NULL."

🧠 Mental model
NULL = a blank answer sheet
= is "did they write the same thing?"
You cannot mark two blanks as equal.

____

In short: = NULL → 0 rows. Use IS NULL.

🔖 Save this for your next SQL interview.

💬 Comment A, B, or C before you scroll.

(sql, null, where clause, is null, mysql, postgres, backend, coding interview, placement)

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
