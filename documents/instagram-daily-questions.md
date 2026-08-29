# Instagram daily questions

Append each shipped question here. Do not fork copies. Style contract: `documents/instagram-interview-question-guideline.md`.

Caption is paste-ready for Instagram: no markdown bold, heavy line breaks, functional emojis.

---

## 2026-08-29 — Git history vs `.gitignore`

| Field | Value |
| --- | --- |
| Topic lane | security / git |
| Pattern | G — expected fix fails |
| Caption shape | C1 — expected-fix-fails |
| Label | `interviewer asked :` |
| Body words | 23 |
| Caption words | 238 |
| Helper / CTA | `📍 Read Caption` |
| Comment keyword | GIT |
| Status | draft for Ashok |

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
