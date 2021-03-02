const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = webpack.container
  .ModuleFederationPlugin;
const path = require("path");
const deps = require("./package.json").dependencies;
module.exports = (_, argv) => {
  const isProduction = argv.mode === "production";
  return {
    entry: "./src/index",
    mode: "development",
    devServer: {
      contentBase: path.join(__dirname, "dist"),
      port: 3003,
      historyApiFallback: true,
      hot: false,
      hotOnly: false,
    },
    output: {
      publicPath:
        isProduction ? `${process.env.URL}/` : "auto",
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
          shell: "shell@http://localhost:3000/remoteEntry.js",
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
        GRAPH_QL_ENDPOINT: isProduction ? process.env.apiEndpoint : 'http://localhost:8888/'
      })

    ],
  }
};
