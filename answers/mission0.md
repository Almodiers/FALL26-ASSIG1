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

   > The folder is `node_modules/`. It should not be committed because it is huge and anyone can recreate it by running `npm install`. It can also be a security risk because it has third-party code, so we should track the package list instead of uploading all those files.

2. What line or lines did you add to `.gitignore`? What does a trailing `/` mean in a `.gitignore` pattern?

   > I added `node_modules/`. The `/` at the end means it is a folder.

3. **Connections:** in one or two sentences, what is the difference between a **fork** and a **clone**? Which one lives on GitHub and which one lives on your machine?

   > A fork is my copy of the repo on GitHub. A clone is the copy I download onto my own computer.

## Documentation log

| Page I used, with URL | One thing I learned from it |
|---|---|
| https://docs.github.com/en/get-started/quickstart/fork-a-repo | A fork is my own GitHub copy of someone else's repo. |
| https://git-scm.com/docs/gitignore | A trailing `/` in `.gitignore` means the pattern is for a directory. |
