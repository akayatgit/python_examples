# Instagram daily questions

Append each shipped question here. Do not fork copies. Style contract: `documents/instagram-interview-question-guideline.md`.

Caption is paste-ready for Instagram: no markdown bold, heavy line breaks, functional emojis.

Every post must include a **COPY — FRAME** block and a **COPY — CAPTION** block so Ashok can paste while creating the Reel.

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

🚨 Interviewer asked:

You pushed a broken commit to main this morning.
Two teammates already pulled it.
Will you use git reset or git revert?

📍 Read Caption

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
