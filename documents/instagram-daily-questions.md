# Instagram daily questions

Append each shipped question here. Do not fork copies. Style contract: `documents/instagram-interview-question-guideline.md`.

Caption is paste-ready for Instagram: no markdown bold, heavy line breaks, functional emojis.

Every post must include a **COPY — FRAME** block and a **COPY — CAPTION** block so Ashok can paste while creating the Reel.

From 002, use Pattern **N1–N6** (Maps-denial, Tatkal-fight, worked-then-broke, expected-fix-fails, 1-vs-N writes, two-taps-one-resource). Clone the shape. Never clone the guidance body.

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

## POST 002 — last biryani on Swiggy (real product)

001 died as a textbook FAQ. 002 is a lived product moment. How the team actually stops two orders for one plate.

Pulse: %CHECK = if stock > 0 then order. %HOLD = they reserve the last plate.

| Field | Value |
| --- | --- |
| Topic lane | product / inventory |
| Pattern | N — real product glitch |
| Caption shape | C1 — expected-fix-fails |
| Label | `Interviewer:` |
| Body words | 28 |
| Caption words | 273 |
| Helper / CTA | `Answer in caption ⬇️` |
| Comment keyword | CHECK or HOLD |
| Status | ready to post — copy-paste below |

### COPY — FRAME

Paste this on the Reel.

```
Interviewer:

You're ordering the last biryani on Swiggy.
It's in your roommate's cart too.
You both tap Place Order.

💀 One plate. Two orders.

How do they stop this?

Answer in caption ⬇️
```

### COPY — CAPTION

Paste this in the Instagram caption box.

```
Read it 👇

🍛 The last plate cannot go to two homes.

Interviewer:

You're ordering the last biryani on Swiggy.
It's in your roommate's cart too.
You both tap Place Order.

💀 One plate. Two orders.

How do they stop this?

💡 Answer: They hold the plate at Place Order. They do not check, then cook.

A lot of people reach for:
if stock is 1, let both orders through
That’s incomplete. Not dumb.

____

What they actually built 🤔

The cart is not a booking.

Both of you can stare at that last biryani.

The fight starts at Place Order.

One tap wins the hold.

The other tap gets “item unavailable”.

____

Real Flow ⚡

stock = 1 biryani
↓
two Place Order taps
↓
first tap locks the plate
↓
second tap sees 0
↓
one order lives

____

✅ 1. Reserve on Place Order
Not when it lands in the cart.

✅ 2. One lock. One plate.
The second request loses.

✅ 3. If payment fails
The hold drops. The plate comes back.

____

💡 Interview Tip

❌ Instead of saying: "I would check stock, then place the order."

Say:
"Two checkouts can pass a stock check together. I reserve the last plate at Place Order, so only one order holds it."

That's a much stronger interview answer.

____

🔥 Interview One-Liner
👉 "The cart is a window. Place Order is the lock."

🧠 Mental model
Cart = looking at the last shirt in the shop
Place Order = the staff putting it behind the counter

____

In short: hold the last plate at checkout. Don’t trust the cart.

🔖 Save this for your next product / backend interview.

💬 Comment CHECK or HOLD before you scroll.

(swiggy, inventory, checkout, race, stock lock, backend, product, coding interview, placement)

#Swiggy #SystemDesign #BackendDevelopment #InterviewPrep #Placement
```
