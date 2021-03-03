const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack").container
  .ModuleFederationPlugin;
const path = require("path");
const deps = require("./package.json").dependencies;
const config = require('../../config');

module.exports = (_, argv) => {
  const mode = argv.mode || 'development';
  const { remoteUrls } = config[mode];
  return {
    entry: "./src/index",
    mode,
    devtool: 'source-map',
    devServer: {
      contentBase: path.join(__dirname, "dist"),
      port: 3001,
      historyApiFallback: true,
      hot: false,
      hotOnly: false,
    },
    output: {
      publicPath: config.publicPath,
      chunkFilename: "[id].[contenthash].js",
    },
    resolve: {
      extensions: [".js", ".mjs", ".jsx", ".css"],
      alias: {
        events: "events",
      },
    },

    module: {
      rules: [
        {
          test: /\.m?js$/,
          type: "javascript/auto",
          resolve: {
            fullySpecified: false,
          },
        },
        {
          test: /\.jsx?$/,
          loader: "babel-loader",
          exclude: /node_modules/,
          options: {
            presets: ["@babel/preset-react"],
          },
        },
      ],
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "home",
        filename: "remoteEntry.js",
        exposes: {
          "./HomepageService": "./src/index",
        },
        shared: [
          {
            ...deps,
            react: {
              singleton: true,
              requiredVersion: deps.react,
            },
            "react-dom": {
              singleton: true,
              requiredVersion: deps["react-dom"],
            },
          },
        ],
      })
    ],
  }
};
