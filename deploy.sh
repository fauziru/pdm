#!/bin/bash
# abort on errors
set -e
# build
# navigate into the build output directory
npx workbox generateSW workbox-config.js
cd dist
# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME
git init
git add -A
git commit -m 'deploy v0.3'
git push -f git@github.com:fauziru/pdm.git master:gh-pages
cd -