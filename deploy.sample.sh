#!/bin/bash

mkdir git_repo

cd git_repo

git clone git@github.com:sebhubdev/revoltogreen.git .

git checkout dev 

git pull

rm -r .git/

mv ../.env .env

source ~/.nvm/nvm.sh;
npm install
npm run build;

cd ..

find . -mindepth 1 -name deploy -prune -o -name git_repo -prune -o -name .htaccess -prune -o -name deploy.php -prune -o -exec rm -r {} +

mv git_repo/build/* ./
mv git_repo/.env ./.env

rm -r git_repo/



