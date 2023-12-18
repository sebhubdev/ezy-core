const path = require("path");
const babelConfig = require("./babel.config");
const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const imagesConf = {
  test: /\.(png|jpe?g|gif)$/i,
  loader: "file-loader",
  options: {
    name: "img/[name].[ext]",
    publicPath: "assets/",
  },
};

const clientConf = {
  mode: "development",
  target: "web",
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public/assets/"),
    publicPath: "/",
  },
  devServer: {
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            ...babelConfig,
          },
        },
        exclude: /node_modules/,
      },

      {
        test: /\.scss$/,
        // use: ["style-loader", "sass-loader", "css-loader"],
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "",
            },
          },
          "css-loader",
          "sass-loader",
        ], // production
      },
      { ...imagesConf },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin(),
    new webpack.DefinePlugin({
      __isBrowser__: "true",
    }),
    new Dotenv({
      path: `./.env`,
    }),

    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    alias: {
      components: path.resolve(__dirname, "src/components/"),
      pages: path.resolve(__dirname, "src/pages/"),
    },
    extensions: [".js"],
  },
};

module.exports = clientConf;
