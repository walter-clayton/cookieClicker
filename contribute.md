## Instructions for contributors
1. Initialising
  * Open your terminal and go to a path you would like to put the repository in e.g. `cd D:/desktop/...`
  * Type `git clone https://github.com/walter-clayton/cookieClicker.git` on your terminal.

	*  *N.B. you will notice that if you type `git branch` only the `master` will appear. Don't worry, all branches are there. For example, type `git checkout develop` and you will switch to that branch.*

2. Check if you have an assigned **issue** on **GitHub** or make/find an **issue** and assign it to yourself.
3. Create a branch on the terminal with **`git checkout -b branch_issue_name`** *e.g. `make_page_responsive`*
4. Write your code and save on that **`branch_issue_name`**!
5. When finished:
 * `git status`
 * `git add .`
 * `git commit -m "I have made x,y,z changes..."`
 * `git push origin branch_issue_name`
6. Go to **Github** and create a **pull request** from the **`branch_issue_name`** to the **`develop`** branch. 
7. **Merge** the new pull request

	  * *N.B. If the merge displays a `conflict`,  click `resolve conflict` then check the code, remove the unecesseray code and the `<<<<<<<<<<< =========== >>>>>>>>>>>` . If you are still confused, look at this [demo](https://www.youtube.com/watch?v=JtIX3HJKwfo).*

8. Close your `branch_issue_name` on both **GitHub** and **Git** (you must be on another branch then type `git branch -d branch_issue_name`).
9. Close your **issue** with a comment on **GitHub**. 
10. All team members can then `git pull` to see the finished product on their own desktop on the `develop` branch.
11. If everyone is happy, we will merge to the `master` on **GitHub**.

JOB DONE :white_check_mark: