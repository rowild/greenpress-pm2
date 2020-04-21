# GreenPress platform

[![Codefresh build status]( https://g.codefresh.io/api/badges/pipeline/greenpress/greenpress-pm2%2Fmaster?type=cf-1)]( https://g.codefresh.io/public/accounts/greenpress/pipelines/5df22a4025b910db783882e4)
[![Codeship Status for greenpress/greenpress-pm2](https://app.codeship.com/projects/bc638d20-aec1-0137-27f6-0e5196de25c6/status?branch=master)](https://app.codeship.com/projects/362577)
[![CircleCI](https://circleci.com/gh/greenpress/greenpress-pm2.svg?style=svg)](https://circleci.com/gh/greenpress/greenpress-pm2)

A PM2 configuration for running greenpress with just one press<br>
For development and production environments.

## Main Features
- SSR frontend
- content service
- authentication & users service
- reading data from database

## Dependencies
- Node.js
- npm OR yarn
- MongoDB


## Install in Development (One time only)
```sh
$ npm run dev:install
```
After that command, the application will run for the first time, probably on port 3000.

## Install
```sh
$ npm install
```


## Launch Dev
```sh
$ npm run dev
```


## Launch Production
```sh
$ npm start
```


## Future development
- comments
- choose and replace themes via panel
- dockerizing all services
- nginx
- support social login via auth-service
