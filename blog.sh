#!/bin/bash
set -e

yarn docs:build

cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/csxwant/my-blog.git master:blog

cd -