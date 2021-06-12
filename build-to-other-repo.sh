#!/bin/sh

path=$1

npm run build

mv ./out/* $path