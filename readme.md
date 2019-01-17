# Cordova + Submix = Love

Cordova Submix brings painless asset packaging, live reloading, and Hot Module Replacement to Cordova.

## Quickstart

In your existing Cordova project:

```bash
npm i --save-dev cordova-submix
```

Add helpful commands to `package.json`:

```json
  "scripts": {
    "dev": "cross-env NODE_ENV=development node_modules/webpack/bin/webpack.js --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js",
    "hot": "cross-env NODE_ENV=development webpack-dev-server --inline --hot
    --config=node_modules/laravel-mix/setup/webpack.config.js",
    "watch": "cross-env NODE_ENV=development node_modules/webpack/bin/webpack.js --watch --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js",
    "prod": "cross-env NODE_ENV=production node_modules/webpack/bin/webpack.js --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js"
  },
```

Create a source directory:

```bash
mv www src
```

Build & run!

```bash
npm run dev
cordova run ios
```

## Batteries Included

Submix leverages Laravel Mix, which means a lot. HMR, live reloading, ES6 + proposals, classes, decorators, arrow functions, class properties, static properties... you can use it all.

Submix ships with a boilerplate Cordova+[React](https://github.com/facebook/react/) project. If you use something different, it's easy enough to replace. Checkout [onsen](https://github.com/OnsenUI/OnsenUI) for a Mobile UI framework, and [react-konva](https://github.com/konvajs/react-konva) to create badass WebGL `<canvas>` apps.

React and Webpack work exceptionally well together. Most asset types can be embedded (SCSS, CSS, JS, GIF, PNG, JPG, MP3) and used in your applicaiton as follows:

```jsx
import myPng from "./assets/logo.png";

const Image = props => <Image src={myPng} />;
```

## Freshstart

Here's a Cordova app from scratch all the way from zero to HMR.

```bash
cordova create hello com.example.hello HelloWorld
cd hello
npm i -g npx json cross-env
cordova platform add ios
npm i -D cordova-submix
npx json -I -f package.json -e 'this.scripts.dev="cross-env NODE_ENV=development node_modules/webpack/bin/webpack.js --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js"'
npx json -I -f package.json -e 'this.scripts.watch="cross-env NODE_ENV=development node_modules/webpack/bin/webpack.js --watch --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js"'
npx json -I -f package.json -e 'this.scripts.hot="cross-env NODE_ENV=development webpack-dev-server --inline --hot --config=node_modules/laravel-mix/setup/webpack.config.js"'
npx json -I -f package.json -e 'this.scripts.prod="cross-env NODE_ENV=production node_modules/webpack/bin/webpack.js --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js"'
rm -rf www/*
cp -r ./node_modules/cordova-submix/templates/src .
cp ./node_modules/cordova-submix/templates/webpack.mix.js .
npm run hot
cordova run ios
```

## HMR and Live Reloading Discussion

HMR [only kind of works](https://codeburst.io/react-hot-loader-considered-harmful-321fe3b6ca74). To really make it work well, you'd need to engineer your app with a global store and use only stateless render functions. The alternative is to use BrowserSync, which will reload your app at every change.

Either way, your host machine (the one serving the file changes) must be accessible on the LAN/WAN. Submix attempts to find the external IP address of your host machine. To see what it found, simply examine the output of `npm run watch` or `npm run hot`:

```
Listening on http://192.168.1.100:8080/
```

You can also look in `./www/index.html` to see what host prefix it's using. You'll notice that Submix prefixed the JS assets with the dev server address. You must test your app using this special version of `index.html`. Using `npm run watch` also does prefixing, but `npm run dev` and `npm run prod` will produce normal `index.html` copies - the type you ship with.

## Thanks

Big ups:

* [webpack](https://github.com/webpack/webpack)
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
* [Hot Module Replacement](https://webpack.js.org/concepts/hot-module-replacement/)
* [BrowserSync](https://github.com/Browsersync/browser-sync)
* [Laravel Mix](https://github.com/JeffreyWay/laravel-mix)
* [React Hot Loader](https://github.com/gaearon/react-hot-loader)
