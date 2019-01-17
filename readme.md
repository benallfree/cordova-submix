# Cordova Submix

Cordova Submix is your ticket to breezy development. It delivers optimal asset packaging, live relaoding, and Hot Module Replacement for your Cordva apps.

## Quickstart

```bash
yarn add -D cordova-submix
   or
npm i --save-dev cordova-submix
```

Add helpful commands to `package.json`:

```json
  "scripts": {
    "dev": "npm run development",
    "development": "cross-env NODE_ENV=development node_modules/webpack/bin/webpack.js --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js",
    "watch": "cross-env NODE_ENV=development node_modules/webpack/bin/webpack.js --watch --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js",
    "hot": "cross-env NODE_ENV=development webpack-dev-server --inline --hot --config=node_modules/laravel-mix/setup/webpack.config.js",
    "prod": "npm run production",
    "production": "cross-env NODE_ENV=production node_modules/webpack/bin/webpack.js --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js"
  },
```

Createa source directory:

```bash
mv www src
```

Build & run!

```bash
yarn dev
cordova run ios
```

## Freshstart

```bash
cordova create hello com.example.hello HelloWorld
cd hello
cordova platform add ios
yarn init
yarn add -D cordova-submix
rm -rf www/*
cp -r ./node_modules/cordova-submix/templates/src .
cp ./node_modules/cordova-submix/templates/webpack.mix.js .
yarn add react react-dom react-hot-loader
```
