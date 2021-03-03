const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
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
      port: 3000,
      historyApiFallback: true,
      hot: false,
      hotOnly: false,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers":
          "X-Requested-With, content-type, Authorization",
      },
    },
    resolve: {
      extensions: [".js", ".mjs", ".jsx", ".css"],
      alias: {
        events: "events",
      },
    },
    output: {
      publicPath: config[mode].publicPath,
      chunkFilename: "[id].[contenthash].js",
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
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader", "postcss-loader"],
        },
        {
          test: /\.png/,
          type: 'asset/resource'
        },
      ],
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "shell",
        filename: "remoteEntry.js",
        remotes: {
          home: `home@${remoteUrls.HOME}/remoteEntry.js`,
          shell: `shell@${remoteUrls.SHELL}/remoteEntry.js`,
          searchResults: `searchResults@${remoteUrls.SEARCH}/remoteEntry.js`,
          viewItemPage: `viewItemPage@${remoteUrls.VIEW_ITEM}/remoteEntry.js`,
        },
        exposes: {
          "./Shell": "./src/Shell",
          "./Service": "./src/Service",
          "./Loader": "./src/Loader",
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
          // Workaround explaination: https://www.youtube.com/watch?v=-LNcpralkjM&t=540
          "./src/Service",
        ],
      }),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
    ],
  }
};
