const path = require("path");
const express = require("express");
const webpack = require("webpack");
const HotModuleReplacementPlugin =
  require("webpack").HotModuleReplacementPlugin;
const Dotenv = require("dotenv-webpack");
require("dotenv").config();

const app = express();

console.log(process.env.LOCAL);

const webpackCompiler = webpack({
  entry: [
    "webpack-hot-middleware/client",
    path.resolve(
      process.env.LOCAL
        ? "./src/index.js"
        : "node_modules/ezy-core/src/index.js"
    ),
  ],
  mode: "development",
  devtool: "source-map",
  module: {
    rules: [
      {
        // exclude: /node_modules/,
        test: /.js$/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: ["@babel/plugin-proposal-class-properties"],
            presets: ["@babel/preset-react", "@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(scss|css)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { sourceMap: true },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: "file-loader",
        options: {
          name: "assets/img/[name].[ext]",
        },
      },
      {
        test: /\.svg$/,
        loader: "svg-inline-loader",
      },
    ],
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new Dotenv({
      path: process.env.LOCAL
        ? "./.env"
        : path.resolve(__dirname, `../../../../.env`),
    }),
  ],
  resolve: {
    alias: {
      assets: [
        path.resolve(`./src/assets/`),
        path.resolve(__dirname, `../assets/`),
      ],
      dataServices: [
        path.resolve(`./src/dataServices/`),
        path.resolve(__dirname, `../dataServices/`),
      ],
      i18n: [path.resolve(`./src/i18n/`), path.resolve(__dirname, `../i18n/`)],
      web: [path.resolve(`./src/web/`), path.resolve(__dirname, `../web/`)],
      server: [
        path.resolve(`./src/server/`),
        path.resolve(__dirname, `../server/`),
      ],
    },
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
});

const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");

app.use(webpackDevMiddleware(webpackCompiler));
app.use(webpackHotMiddleware(webpackCompiler));

app.use("*", express.static(`node_modules/ezy-core/src/server`));
app.use("*", express.static(`./src/server`));

// const PORT = process.env.PORT ;

const PORT = process.env.PORT;

app.listen(PORT, async () => {
  console.log(`Started server on port "${PORT}".`);
});
