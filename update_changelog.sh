#!/bin/sh

# Get the commit message and files
commit_msg=$(git log --format=%B -n 1 HEAD)
files=$(git diff --name-only --cached)

# Append the commit message and files to CHANGELOG.md
echo "Commit Message: $commit_msg" >> CHANGELOG.md
echo "Files:" >> CHANGELOG.md
echo "$files" >> CHANGELOG.md

# Add the updated CHANGELOG.md to the next commit
git add CHANGELOG.md
