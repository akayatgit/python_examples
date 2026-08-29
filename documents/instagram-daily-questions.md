# Instagram daily questions

Append each shipped question here. Do not fork copies. Style contract: `documents/instagram-interview-question-guideline.md`.

---

## 2026-08-29 — Git history vs `.gitignore`

| Field | Value |
| --- | --- |
| Topic lane | security / git |
| Pattern | G — expected fix fails |
| Label | `interviewer asked :` |
| Body words | 23 |
| Helper / CTA | `📍 Read Caption` |
| Status | draft for Ashok |

### On-screen (the frame)

interviewer asked :

A teammate pushed your `.env` to main.
You immediately added `.env` to `.gitignore`.
But GitHub still shows the secret.
How to solve this ?

📍 Read Caption

### Caption

**Verdict:** `.gitignore` only stops *future* adds. The secret is already in git history — rotate the key, then purge the file from every commit.

**The trap:** Juniors treat `.gitignore` like a delete button. Git still has the blob. Anyone who cloned, forked, or opened the commit can still read the key.

**Say this in the room:**

- First action is revoke / rotate the secret. History cleanup is second. A leaked key is already leaked.
- `git rm --cached .env` drops it from the *next* commit only. Old commits still hold it.
- To strip it from history: `git filter-repo` (or BFG), then force-push every branch and tag. Tell the team to re-clone.
- Assume mirrors, forks, CI logs, and Slack screenshots still have it. Treat rotate as mandatory.

Save this for the round that asks git, secrets, or “can we just ignore it?”
