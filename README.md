# NOTE: Everything here is PROOF OF CONCEPT. I don't plan on supporting this code so if you want to use it then no problem but use it at your own risk.

# Disco Cube Admin

The admin panel for my disco cube project.

It interfaces with Firebase to send and receive data from the Daemon that is running on the cube: https://github.com/mikecann/disco-cube-daemon

## Config

Configuration is stored in `/src/common/config.ts` you should copy `/src/common/example.local.config.json` to `/src/common/local.config.json` and fill in the values

## Setup

1. `yarn install` should get all the dependencies downloaded
2. `yarn dev` should start building in watch mode

## Issues

1. If you are having problems with running `yarn install` then make sure you are on node 12, for some reason node_gyp doesnt like node 14 :(

2. Sometimes you might get a blank white screen when the window opens after doing `yarn dev`, just press refresh once, should fix it.
