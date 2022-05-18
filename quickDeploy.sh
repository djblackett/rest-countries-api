#!/bin/bash

git add .
git commit -m "scripted update for testing deployment issues"
git push origin main
npm run deploy
