const path = require("path");
const express = require("express");
const webpack = require("webpack");
const HotModuleReplacementPlugin =
  require("webpack").HotModuleReplacementPlugin;
const Dotenv = require("dotenv-webpack");
require("dotenv").config();

const app = express();

const webpackCompiler = webpack({
  entry: ["webpack-hot-middleware/client", `./src/index.js`],
  mode: "development",
  devtool: "source-map",
  module: {
    rules: [
      {
        exclude: /node_modules/,
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
      path: `./.env`,
    }),
  ],
  resolve: {
    alias: {
      components: path.resolve("./src/components/"),
      pages: path.resolve("./src/pages/"),
      routes: path.resolve("./src/routes/"),
      assets: path.resolve("./src/assets/"),
      modules: path.resolve("./src/modules/"),
      layout: path.resolve("./src/layout/"),
      services: path.resolve("./src/services/"),
      dataServices: path.resolve("./src/dataServices/"),
      api: path.resolve("./src/api/"),
      hooks: path.resolve("./src/hooks/"),
      i18n: path.resolve("./src/i18n/"),
    },
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
});

const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");

app.use(webpackDevMiddleware(webpackCompiler));
app.use(webpackHotMiddleware(webpackCompiler));

app.use("*", express.static(`./src/server`));

// const PORT = process.env.PORT ;

const PORT = process.env.PORT;

app.listen(PORT, async () => {
  console.log(`Started server on port "${PORT}".`);
});
