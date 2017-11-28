#!/bin/sh

cd client/

ember build --environment=production --output-path=../public/

cd ../

docker rm -f shipbob

docker build -t robabby/shipbob .

docker run --name shipbob -p 8091:3000 -d robabby/shipbob:latest
