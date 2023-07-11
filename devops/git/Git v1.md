# Version Control System
- a software that helps software developers to work together and maintain a complete history of their work.

## Functions of VCS
- Allows developers to work simultaneously.
- Does not allow overwriting each other’s changes.
- Maintains a history of every version.

## Types of VCs
- Centralized version control system (CVCS).
- Distributed/Decentralized version control system (DVCS)

## Why Git
1. Free and open source
2. Fast and Small
3. Implicit Backup
4. Security
5. No need of powerful hardware
6. Easier branching

## DVCS Terminologies
1. Local repostiory
2. Remote Repository
3. Origin
4. Master | Main branch
5.

# Notes about git
0. Global git commands
git config --global user.name <username>
git config --global user.email <email>

1. add alias to ~./bashrd
alias nrs="npm run start"
alias nrs="npm run build"


2. Start a project

git init  <directory*>
git add *
git commit -m "Initial Commit: Created react-app, added first component"
git branch -M main
git remote add origin <url>
git branch --set-upstream-to=origin/master master
git push -u origin main


3. Start a project
- git init <directory>
- git clone <url>
- git clone username@host://path-to-repo

4. Make a change
- git add <filename>
- git add
- git commit -m "commit message"
- git commit -am "commit message"

5. Branch
- git branch
- git branch <branchname>  // Create a new branch
- git checkout <branchname> // switch to a branch and update local
- git checkout -b <branchname> // Create a new branch and switch to it and update local
- git branch -d <branch>  //Delete a merged branch
- git branch -D <branch>  //Delete a merged or unmerged branch
- git tag <tagname>   // Add tag to current commit ( used for new version releases )
- git tag <tagname> <commit_id>
- git checkout -- <filename>

6. Rebasing
- rebase feature branch to main ( to incorporate new changes in main ). Prevents unencesary merge commits into feature, keeping history clean

  git checkout feature
  git rebase main

// Iteratively cleanup a branches commits before rebasing into main
  git rebase -i main

// Iteratively rebase last-n commits on current branch
  git rebase -i Head-3

6.1 Merging
- git checkout b && git merge a  // Merge branch a into branch b. --no-ff  --> for no fast forward merge
- git merge --squash a   //  merge & squash all commits into one new commit

7. Undoing things
- git mv <existing path> <new_path> // Move (&/or) rename a file and stage move

- git rm <file> //Remove a file from working directory & staging area, then stage the removal

- git rm --cached <file>   //Remove from staging area only

- git checkout COMMIT_ID

- git revert COMMIT_ID

- git reset COMMIT_ID // Go back to a previous commit & delete all commits ahead of it ( revert it safer)
      --hard flag  - to also delete WORKSPACE changes (BE VERY CAREFUL)

8. Review repo
- git status //List new or modified files net yet committed
- git log --oneline // list commit history with respective IDs
- git diff  //show changes to unstaged files. add --cached options
- git diff commit1_ID commit2_ID  // show changes between two commits

9.  Stashing
Store modified and staged changes. To include untracked files add -U tag
For untracked and ignore files, add -a tag

- git stash

- git stash save "comment"    //  Add a comment

- git stash -p    // Partial stash. Stash just a single file, a collection of file or individual changes within files

- git stash list   // List all stashes

- git stash apply  // Re-apply the stash without deleting it

- git stash pop stash@(2)   // Re-apply stash at index 2, then delete it from stash list. Omit Stash@(n) to pop the most recent stash

- git stash show stash#(1)    // Show the diff summary of stash 1, -p : to see full diff

- git stash drop stash@9(1)   // Delete stash @index 1. Omit stash@(n) to delete last stash made

10. Cherry pick in git
A cherry-pick will look at previous commit in the repository's history and apply the changes that were part of that earlier commit to the current working tree

11. Synchronizing
- git remote add <alias> <url>  // Add a remote repo

- git remote    // list all remotes

- git remote remove <alias>     //  Remove a connection

- git remote rename <old>  <new>    // Rename a connection

- git fetch <alias>   //fetch all branches from remote repo

- git fetch <alias> <branch>   // fetch a specific branch

- git pull   // Fetch the remote repo's copy of the current branch, the merge

- git pull --rebase <alias>
    // Move (rebase) your local changes onto the top of new changes made to the remote repo(for clean linear history)

- git push <alias>  // Update local content to remote repo

- git push <alias> <branch>   // Upload to a branch (can then pull request)

------ Tips and Tricks

delta - a cli tool to make git diffs pretty and useful

dandavision.github.io/delta/introduction


### Resources
- https://git-scm.com/book/
- https://www.atlassian.com/git
- https://www.codecademy.com/learn/learn-git
- https://www.raywenderlich.com/books/mastering-git/v1.0
- https://www.packtpub.com/product/git-version-control-cookbook-second-edition/9781789137545

