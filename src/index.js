let mix = require("laravel-mix");
const os = require("os");
const exec = require("child_process").exec;
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const webpackConfig = {
  output: { publicPath: "./", filename: "index.js" },
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
  },
  plugins: []
};

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

function getExternalIp() {
  let ip = null;
  let ifaces = os.networkInterfaces();
  for (let dev in ifaces) {
    const iface = ifaces[dev].filter(function(details) {
      return details.family === "IPv4" && details.internal === false;
    });
    if (iface.length > 0) ip = iface[0].address;
  }
  return ip;
}

if (Mix.isUsing("hmr")) {
  webpackConfig.devServer = {
    contentBase: [
      path.join(Mix.paths.rootPath, "www"),
      path.join(Mix.paths.rootPath, "platforms/ios/www")
    ],
    host: getExternalIp(),
    port: 8080,
    writeToDisk: filePath => {
      console.log(filePath, /\.html$/.test(filePath));
      return /\.html$/.test(filePath);
    }
  };

  const devServerHost = `http://${getExternalIp()}:${
    webpackConfig.devServer.port
  }/`;
  webpackConfig.output.publicPath = devServerHost;
  webpackConfig.plugins.push(
    new HtmlWebpackPlugin({
      template: "./src/index.ejs",
      filename: "./www/index.html"
    })
  );
  mix.setResourceRoot(devServerHost);
} else {
  webpackConfig.plugins.push(
    new HtmlWebpackPlugin({
      template: "./src/index.ejs",
      filename: "index.html"
    })
  );
  mix.setResourceRoot("./");
}
mix.setPublicPath("www");
mix.webpackConfig(webpackConfig);
mix.then(() => ex("cordova prepare"));

module.exports = mix;
