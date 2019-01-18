"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _laravelMix = _interopRequireDefault(require("laravel-mix"));

var _os = _interopRequireDefault(require("os"));

var _utils = require("./utils");

var _path = _interopRequireDefault(require("path"));

var _htmlWebpackPlugin = _interopRequireDefault(require("html-webpack-plugin"));

var webpackConfig = {
  output: {
    publicPath: './',
    filename: 'index.js'
  },
  module: {
    rules: [{
      test: /\.(mp3)$/,
      use: [{
        loader: 'file-loader',
        options: {}
      }]
    }]
  },
  plugins: []
};

function getExternalIp() {
  var ip = null;

  var ifaces = _os.default.networkInterfaces();

  for (var dev in ifaces) {
    var iface = ifaces[dev].filter(function (details) {
      return details.family === 'IPv4' && details.internal === false;
    });
    if (iface.length > 0) ip = iface[0].address;
  }

  return ip;
}

if (Mix.isWatching()) {
  var host = getExternalIp();
  var port = 8080;
  var devServerHost = "http://".concat(host, ":").concat(port, "/");

  _laravelMix.default.setResourceRoot(devServerHost);

  _laravelMix.default.then(function () {
    return console.log("Listening on ".concat(devServerHost));
  });

  if (Mix.isUsing('hmr')) {
    webpackConfig.devServer = {
      contentBase: [_path.default.join(Mix.paths.rootPath, 'www'), _path.default.join(Mix.paths.rootPath, 'platforms/ios/www')],
      host: host,
      port: port,
      writeToDisk: function writeToDisk(filePath) {
        console.log(filePath, /\.html$/.test(filePath));
        return /\.html$/.test(filePath);
      }
    };
    webpackConfig.output.publicPath = devServerHost;
    webpackConfig.plugins.push(new _htmlWebpackPlugin.default({
      template: './src/index.ejs',
      filename: './www/index.html'
    }));
  } else {
    webpackConfig.output.publicPath = devServerHost;
    webpackConfig.plugins.push(new _htmlWebpackPlugin.default({
      template: './src/index.ejs',
      filename: './index.html'
    }));

    _laravelMix.default.browserSync({
      files: ['./www'],
      server: ['./www', './platforms/ios/www'],
      host: host,
      port: port,
      proxy: null,
      open: false,
      socket: {
        domain: "http://".concat(host, ":").concat(port)
      },
      snippetOptions: {
        // Dsable injection
        rule: {
          match: /(<\/body>|<\/pre>)/i,
          fn: function fn(snippet, match) {
            return match;
          }
        }
      }
    });
  }
} else {
  webpackConfig.plugins.push(new _htmlWebpackPlugin.default({
    template: './src/index.ejs',
    filename: 'index.html'
  }));

  _laravelMix.default.setResourceRoot('./');
}

_laravelMix.default.setPublicPath('www');

_laravelMix.default.webpackConfig(webpackConfig);

_laravelMix.default.then(function () {
  return (0, _utils.ex)('cordova prepare');
});

var _default = _laravelMix.default;
exports.default = _default;