#!/bin/sh
mydir=$(dirname "$(realpath "$0")")
cd "$mydir"

rm -fr node_modules platforms plugins package-lock.json
cordova prepare
