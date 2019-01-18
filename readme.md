# Cordova + Submix = Love

Submix is painless build management, asset packaging, live reloading, and hot module replacement for Cordova.

## Quickstart


```bash
npm i -g cordova-submix
submix create myApp com.submix.MyApp MyApp ios
```

## Batteries Included

Submix leverages Laravel Mix, which means a lot. HMR, live reloading, ES6 + proposals, classes, decorators, arrow functions, class properties, static properties... you can use it all.

Submix ships with a boilerplate Cordova+[React](https://github.com/facebook/react/) project. If you use something different, it's easy enough to replace. Checkout [onsen](https://github.com/OnsenUI/OnsenUI) for a Mobile UI framework, and [react-konva](https://github.com/konvajs/react-konva) to create badass WebGL `<canvas>` apps.

React and Webpack work exceptionally well together. Most asset types can be embedded (SCSS, CSS, JS, GIF, PNG, JPG, MP3) and used in your applicaiton as follows:

```jsx
import myPng from "./assets/logo.png";

const Image = props => <Image src={myPng} />;
```


## Migrating existing Cordova projects

Submix works with existing Cordova projects, too. **Warning: back up your source first, this is a destructive operation!**

### Quick Migrate

Navigate to your Cordova project root and run:

```bash
submix migrate
```

### Manual Migrate

If you don't trust the above, or just want to do it yourself, follow these steps:

```bash
mv www www.bak
mv src src.bak
cp -r ./node_modules/cordova-submix/templates/src .
cp -r ./node_modules/cordova-submix/templates/webpack.mix.js .
cp -r ./node_modules/cordova-submix/templates/build.json .
npm i -g npx json cross-env
npm i -D cordova-submix
npx json -I -f package.json -e 'this.scripts.dev="submix dev"'
npx json -I -f package.json -e 'this.scripts.watch="submix watch"'
npx json -I -f package.json -e 'this.scripts.hot="submix hot"'
npx json -I -f package.json -e 'this.scripts.prod="submix prod"'
npm run build
cordova emulate ios
```

From here, it's up to you to migrate what was in `./www` to the new `./src` directory. You can safely edit everything in the `./src` directory to suit your needs.

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
