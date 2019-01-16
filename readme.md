# Cordova Submix

Cordova Submix is your ticket to breezy development. It delivers optimal asset packaging, live relaoding, and Hot Module Replacement for your Cordva apps.

## Quickstart

```bash
npm i --save-dev cordova-submix
    or
yarn add -D cordova-submix
```

Create a `webpack.mix.js`:

```js
let mix = require('laravel-mix')
require('cordova-submix')

mix.react('src/index.js', 'index.js')
```

In `package.json`:

```json
  "scripts": {
    "init": "mv www www.bak && cp ./node_modules/cordova-submix/assets ./src && npm i react react-dom react-hot-loader && cp ./node_modues/cordova-submix/webpack.mix.js . && npm run dev",
    "dev": "npm run development",
    "development": "cross-env NODE_ENV=development node_modules/webpack/bin/webpack.js --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js",
    "watch": "cross-env NODE_ENV=development node_modules/webpack/bin/webpack.js --watch --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js",
    "hot": "cross-env NODE_ENV=development webpack-dev-server --inline --hot --config=node_modules/laravel-mix/setup/webpack.config.js",
    "prod": "npm run production",
    "production": "cross-env NODE_ENV=production node_modules/webpack/bin/webpack.js --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js"
  },
```

