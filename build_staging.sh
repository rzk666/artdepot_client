#!/bin/bash
imageName=web
containerName=web

docker build -t $imageName -f Dockerfile.staging  .