#!/bin/bash
npm run build:gh-pages
git add .
git commit -m "Compile"
git subtree push --prefix dist origin gh-pages