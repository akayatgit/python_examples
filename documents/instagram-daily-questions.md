# Instagram daily questions

Append each shipped question here. Do not fork copies. Style contract: `documents/instagram-interview-question-guideline.md`.

Caption is paste-ready for Instagram: no markdown bold, heavy line breaks, functional emojis.

---

## POST 001 — Python `y = x` (pulse check)

First public post. A/B/C so we can read the audience: %A = copy camp, %B = reference camp, %C = crash camp.

| Field | Value |
| --- | --- |
| Topic lane | python |
| Pattern | M — code gotcha + MCQ |
| Caption shape | C4 — myth + flow |
| Label | stakes hook (no Interviewer chip) |
| Hook words | 9 |
| Code | 4 lines |
| Caption words | 267 |
| Helper / CTA | `📍 Read Caption` |
| Comment keyword | A / B / C |
| Picker gates | pass — nouns list/append/print; trap “y is a copy”; camps A vs B |
| Status | ready to post — pulse instrument |

### On-screen (the frame)

This python question cost my friend ₹22LPA offer

```
x = [1, 2, 3]
y = x
y.append(4)
print(x)
```

A. [1, 2, 3]
B. [1, 2, 3, 4]
C. Error

📍 Read Caption

### Caption (paste into Instagram)

```
Read it 👇

🐍 y = x does NOT copy the list

This python question cost my friend ₹22LPA offer

x = [1, 2, 3]
y = x
y.append(4)
print(x)

A. [1, 2, 3]
B. [1, 2, 3, 4]
C. Error

💡 Answer: B. [1, 2, 3, 4]

Most developers think:
👈 y is a copy, so x stays [1, 2, 3] 😏
❌ Wrong

____

What actually happens? 🤔

y = x does not create a new list.

y and x point to the SAME list.

append(4) changes that one list.

So print(x) shows [1, 2, 3, 4]

____

Real Flow ⚡

x = [1, 2, 3]
↓
y = x
same object, not a copy
↓
y.append(4)
↓
the only list is [1, 2, 3, 4]
↓
print(x) → [1, 2, 3, 4]

____

✅ 1. Assignment is a name
y = x is another name for the same object.

✅ 2. Lists are mutable
append changes the object in place.

✅ 3. Want a real copy?
Use x.copy() or list(x)
That is a new list.

____

💡 Interview Tip

❌ Instead of saying: "y is a copy of x."

Say:
"y = x binds another name to the same list. Lists are mutable, so y.append(4) mutates that list, and x sees it."

That's a much stronger interview answer.

____

🔥 Interview One-Liner
👉 "Assignment copies the reference. Not the list."

🧠 Mental model
x and y = two stickers on one box
append = putting an item in that box

____

In short: y = x → same list → append changes x too.

🔖 Save this for your next Python interview.

💬 Comment A, B, or C before you scroll.

(python, list, mutability, reference vs copy, append, coding interview, placement, backend)

#Python #InterviewPrep #CodingInterview #BackendDevelopment #Placement
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
