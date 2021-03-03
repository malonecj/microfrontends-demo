const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = webpack.container
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
      port: 3003,
      historyApiFallback: true,
      hot: false,
      hotOnly: false,
    },
    output: {
      publicPath: config[mode].publicPath,
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
        name: "viewItemPage",
        filename: "remoteEntry.js",
        exposes: {
          "./ViewItemPage": "./src/ViewItemPage",
        },
        remotes: {
          shell: `shell@${remoteUrls.SHELL}/remoteEntry.js`,
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
      }),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
      new webpack.DefinePlugin({
        GRAPH_QL_ENDPOINT: JSON.stringify(remoteUrls.API)
      })

    ],
  }
};
