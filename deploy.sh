#!/bin/bash

`npm run build`
`git add .`
`git commit -m "Compile"`
`git subtree push --prefix dist origin gh-pages`