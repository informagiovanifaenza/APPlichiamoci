#!/bin/sh
mydir=$(dirname "$(realpath "$0")")
cd "$mydir"

#export ORG_GRADLE_PROJECT_cdvDebugSigningPropertiesFile="$mydir/../keys/informagiovanifaenza/release-signing.properties"
export ORG_GRADLE_PROJECT_cdvReleaseSigningPropertiesFile="$mydir/../keys/informagiovanifaenza/release-signing.properties"

cordova build android --release
