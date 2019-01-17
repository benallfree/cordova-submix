"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var mix = require('laravel-mix');

var os = require('os');

var exec = require('child_process').exec;

var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');

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

function ex(_x, _x2) {
  return _ex.apply(this, arguments);
}

function _ex() {
  _ex = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(cmd, cwd) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new Promise(function (resolve, reject) {
              console.log("Running ".concat(cmd));
              exec(cmd, {
                cwd: cwd
              }, function (err, stdout, stderr) {
                if (err) {
                  reject(err);
                }

                resolve(stdout);
              });
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _ex.apply(this, arguments);
}

function getExternalIp() {
  var ip = null;
  var ifaces = os.networkInterfaces();

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
  mix.setResourceRoot(devServerHost);
  mix.then(function () {
    return console.log("Listening on ".concat(devServerHost));
  });

  if (Mix.isUsing('hmr')) {
    webpackConfig.devServer = {
      contentBase: [path.join(Mix.paths.rootPath, 'www'), path.join(Mix.paths.rootPath, 'platforms/ios/www')],
      host: host,
      port: port,
      writeToDisk: function writeToDisk(filePath) {
        console.log(filePath, /\.html$/.test(filePath));
        return /\.html$/.test(filePath);
      }
    };
    webpackConfig.output.publicPath = devServerHost;
    webpackConfig.plugins.push(new HtmlWebpackPlugin({
      template: './src/index.ejs',
      filename: './www/index.html'
    }));
  } else {
    webpackConfig.output.publicPath = devServerHost;
    webpackConfig.plugins.push(new HtmlWebpackPlugin({
      template: './src/index.ejs',
      filename: './index.html'
    }));
    mix.browserSync({
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
  webpackConfig.plugins.push(new HtmlWebpackPlugin({
    template: './src/index.ejs',
    filename: 'index.html'
  }));
  mix.setResourceRoot('./');
}

mix.setPublicPath('www');
mix.webpackConfig(webpackConfig);
mix.then(function () {
  return ex('cordova prepare');
});
module.exports = mix;