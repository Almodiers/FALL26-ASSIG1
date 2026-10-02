# Mission 4: Report it and brief the owner

## Commit history

Output of `git log --oneline`:

```
5264f5f Complete mission 3 cover-up
9ada732 Complete mission 2 attack
e13e278 Simplify mission 1 work
5b7c61f Complete mission 1
f5bf837 Complete mission 0 answers
a3501ba Ignore node_modules directory
d890ff1 first push with the assignment files
294714d Initial commit
```

Pick your **best** commit message and your **worst** one. Which of the 7 rules does the worst one break?

> Best: `Complete mission 3 cover-up`, because it is clear and specific. Worst: `first push with the assignment files`, because it is vague and not written like a command.

## Pull Request

PR link, inside your fork:

> Add PR link here after pushing the branch.

## Creating value: the risk brief

The Operations Manager who owns the portal is not a developer. Write a brief of **120 to 180 words** addressed to them. It must answer:

1. What you proved, in terms of **impact** on operators and on the campus, not in terms of code.
2. Why "it uses HTTPS and validates its data" did **not** protect them.
3. The single most important change the backend team must make, stated concretely.
4. One honest limit of your engagement: what you did **not** test.

> This test showed that an operator could be misled while using the portal. The purge button could be disabled in the browser, and the live status page could be changed to show services as up even during an outage. That means an operator might miss a real campus problem or think a dangerous action was still protected when it was not.
>
> HTTPS and data validation helped, but they did not solve the main issue. The attacker code was already running inside the operator's page, so it could change browser behavior before the portal saw the data. The most important backend change is to enforce real actions on the server. For example, the purge route should check the user's login, permission, request method, and confirmation before doing anything destructive.
>
> One limit is that I tested the browser-side behavior only. I did not test a real login system, real server permissions, or production monitoring.

## Reflection

In one or two sentences: which concept from Units 1.1 to 1.3 do you understand much better now, and what made it click?

> I understand client-side trust much better now. It clicked when I saw that `fetch` and button behavior could be changed from inside the page.
