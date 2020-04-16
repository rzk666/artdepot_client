#!/bin/bash
imageName=art-depot-staging
containerName=art-depot-staging

docker build -t $imageName -f Dockerfile.production  .