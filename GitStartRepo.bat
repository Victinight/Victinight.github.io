@echo off

git init -b main
echo Initializing Git Repo

git add .
git add .gitignore

set /p "message=Enter commit message: "

git commit -m "%message%"
echo Commited

set /p "userName=Enter UserName: "
set /p "repoName=Enter remote repo Name: "


git remote add origin https://github.com/%userName%/%repoName%
git remote -v

git push origin main

pause