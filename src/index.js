let mix = require("laravel-mix");
const os = require("os");
const exec = require("child_process").exec;
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const webpackConfig = {
  module: {
    rules: [
      {
        test: /\.(mp3)$/,
        use: [
          {
            loader: "file-loader",
            options: {}
          }
        ]
      }
    ]
  }
};

console.log(Mix.paths);

if (Mix.isWatching()) {
  let ip = null;
  let ifaces = os.networkInterfaces();
  for (let dev in ifaces) {
    const iface = ifaces[dev].filter(function(details) {
      return details.family === "IPv4" && details.internal === false;
    });
    if (iface.length > 0) ip = iface[0].address;
  }

  webpackConfig.devServer = {
    contentBase: [
      path.join(Mix.paths.rootPath, "www"),
      path.join(Mix.paths.rootPath, "platforms/ios/www")
    ],
    host: ip,
    port: 8080,
    writeToDisk: filePath => {
      return /\.html$/.test(filePath);
    }
  };
  const devServerHost = `http://${ip}:${webpackConfig.devServer.port}/`;
  webpackConfig.output = { publicPath: devServerHost };
  webpackConfig.plugins = [
    new HtmlWebpackPlugin({
      template: "./src/index.ejs",
      filename: "./www/index.html"
    })
  ];

  mix.setResourceRoot(devServerHost);
} else {
  webpackConfig.plugins = [
    new HtmlWebpackPlugin({
      template: "./src/index.ejs",
      filename: "./index.html"
    })
  ];
}

async function ex(cmd, cwd) {
  return new Promise((resolve, reject) => {
    console.log(`Running ${cmd}`);
    exec(cmd, { cwd }, function(err, stdout, stderr) {
      if (err) {
        reject(err);
      }
      resolve(stdout);
    });
  });
}

mix.setPublicPath("www");
mix.webpackConfig(webpackConfig);
mix.then(() => ex("cordova prepare"));

module.exports = mix;
