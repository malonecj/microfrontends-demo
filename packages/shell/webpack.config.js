const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack").container
  .ModuleFederationPlugin;
const path = require("path");
const deps = require("./package.json").dependencies;


module.exports = (_, argv) => {
  const remoteShell = argv.mode === 'production' ? 'https://microfrontends-demo.netlify.app' : 'http://localhost:3001';
  const remoteHome = argv.mode === 'production' ? 'https://microfrontends-demo-home.netlify.app' : 'http://localhost:3001';
  const remoteSearchResults = argv.mode === 'production' ? 'https://microfrontends-demo-search.netlify.app' : 'http://localhost:3002';
  const remoteViewItemPage = argv.mode === 'production' ? 'https://microfrontends-demo-view-item.netlify.app' : 'http://localhost:3002';
  return {
    entry: "./src/index",
    mode: "development",
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
      publicPath: argv.mode === "production"
        ? `${process.env.URL}/` : "auto",
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
          home: `home@${remoteHome}/remoteEntry.js`,
          shell: `shell@${remoteShell}/remoteEntry.js`,
          searchResults: `searchResults@${remoteSearchResults}/remoteEntry.js`,
          viewItemPage: `viewItemPage@${remoteViewItemPage}/remoteEntry.js`,
        },
        exposes: {
          "./Shell": "./src/Shell",
          "./Service": "./src/Service",
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
