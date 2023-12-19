const path = require("path");
const express = require("express");
const webpack = require("webpack");
const HotModuleReplacementPlugin =
  require("webpack").HotModuleReplacementPlugin;
const Dotenv = require("dotenv-webpack");
require("dotenv").config();

const app = express();

const webpackCompiler = webpack({
  entry: [
    "webpack-hot-middleware/client",
    path.resolve(`node_modules/ezy-core/src/index.js`),
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
      path: `./.env`,
    }),
  ],
  resolve: {
    alias: {
      components: [
        path.resolve(`./src/components/`),
        path.resolve(__dirname, `../components/`),
      ],
      pages: [
        path.resolve(`./src/pages/`),
        path.resolve(__dirname, `../pages/`),
      ],
      routes: [
        path.resolve(`./src/routes/`),
        path.resolve(__dirname, `../routes/`),
      ],
      assets: [
        path.resolve(`./src/assets/`),
        path.resolve(__dirname, `../assets/`),
      ],
      modules: [
        path.resolve(`./src/modules/`),
        path.resolve(__dirname, `../modules/`),
      ],
      layout: [
        path.resolve(`./src/layout/`),
        path.resolve(__dirname, `../layout/`),
      ],
      services: [
        path.resolve(`./src/services/`),
        path.resolve(__dirname, `../services/`),
      ],
      dataServices: [
        path.resolve(`./src/dataServices/`),
        path.resolve(__dirname, `../dataServices/`),
      ],

      api: [path.resolve(`./src/api/`), path.resolve(__dirname, `../api/`)],
      hooks: [
        path.resolve(`./src/hooks/`),
        path.resolve(__dirname, `../hooks/`),
      ],
      i18n: [path.resolve(`./src/i18n/`), path.resolve(__dirname, `../i18n/`)],
    },
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
});

const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");

app.use(webpackDevMiddleware(webpackCompiler));
app.use(webpackHotMiddleware(webpackCompiler));

app.use("*", express.static(`node_modules/ezy-core/src/server`));

// const PORT = process.env.PORT ;

const PORT = process.env.PORT;

app.listen(PORT, async () => {
  console.log(`Started server on port "${PORT}".`);
});
