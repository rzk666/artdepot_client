#!/bin/bash

echo *******************
echo ****BUILDING*******
echo *******************

docker build -t registry.heroku.com/art-depot-staging-client/web -f dockerfile.staging.web  .

echo *******************
echo *******DONE********
echo *******************

echo *******************
echo ***PUSHING IMAGE***
echo *******************

docker push registry.heroku.com/art-depot-staging-client/web

echo *******************
echo *******DONE********
echo *******************

heroku container:release web --app=art-depot-staging-client

echo -e "\e[32mSUCCESS"
