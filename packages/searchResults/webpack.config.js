const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack").container
  .ModuleFederationPlugin;
const path = require("path");
const deps = require("./package.json").dependencies;
module.exports = (_, argv) => {
  return {
    entry: "./src/index",
    mode: "development",
    devServer: {
      contentBase: path.join(__dirname, "dist"),
      port: 3002,
      historyApiFallback: true,
      hot: false,
      hotOnly: false,
    },
    output: {
      publicPath: argv.mode === "production"
        ? `${process.env.URL}/` : "auto",
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
        name: "searchResults",
        filename: "remoteEntry.js",
        remotes: {
          shell: "shell@http://localhost:3000/remoteEntry.js",
          home: "home@http://localhost:3001/remoteEntry.js",
        },
        exposes: {
          "./SearchResultsService": "./src/SearchResultsService",
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
    ],
  };
}

