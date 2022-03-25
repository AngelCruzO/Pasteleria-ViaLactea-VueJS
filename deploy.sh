#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m "New Deployment"
git push -f https://github.com/AngelCruzO/Pasteleria-ViaLactea-VueJS.git main:gh-pages

cd -