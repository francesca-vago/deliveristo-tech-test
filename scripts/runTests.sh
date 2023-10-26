#!/bin/sh

docker build -t woofr-unit --target unit --progress plain --no-cache .
docker rmi woofr-unit

docker build -t woofr-e2e --target e2e --progress plain --no-cache .
docker rmi woofr-e2e