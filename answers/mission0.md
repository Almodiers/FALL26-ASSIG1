# Mission 0: Get the code, the professional way

**Name:** Abdulmohsen Almodiers
**GitHub username:** Almodiers

## Evidence

### `git remote -v`
```
origin  https://github.com/Almodiers/FALL26-ASSIG1 (fetch)
origin  https://github.com/Almodiers/FALL26-ASSIG1 (push)
```

### `git branch`
```
* assignment1
  main
```

### `git status` before the `.gitignore` fix
```
On branch assignment1
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        node_modules/
        package-lock.json

nothing added to commit but untracked files present (use "git add" to track)
```

### `git status` after the `.gitignore` fix
```
On branch assignment1
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        package-lock.json

nothing added to commit but untracked files present (use "git add" to track)
```

## Questions

1. Which folder should not be committed, and why? Give one practical reason and one security-related reason.

   > `node_modules/` should not be committed. It is huge and can be made again with `npm install`. It also has code from other packages, so I should not upload all of that into my repo.

2. What line or lines did you add to `.gitignore`? What does a trailing `/` mean in a `.gitignore` pattern?

   > I added `node_modules/`. The `/` means it is a folder.

3. **Connections:** in one or two sentences, what is the difference between a **fork** and a **clone**? Which one lives on GitHub and which one lives on your machine?

   > A fork is the copy on GitHub. A clone is the copy on my computer.

## Documentation log

| Page I used, with URL | One thing I learned from it |
|---|---|
| https://docs.github.com/en/get-started/quickstart/fork-a-repo | A fork is a copy on GitHub. |
| https://git-scm.com/docs/gitignore | A `/` at the end means folder. |
