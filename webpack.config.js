const path = require("path");
const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const LoadablePlugin = require("@loadable/webpack-plugin");

const imagesConf = {
  test: /\.(png|jpe?g|gif)$/i,
  loader: "file-loader",
  options: {
    name: "img/[name].[ext]",
    publicPath: "/statics/",
  },
};

const clientConf = {
  mode: "production",
  target: "web",
  entry: path.resolve(__dirname, "./src/web", "index.js"),
  output: {
    filename: "0.chunk.js",
    path: path.resolve(
      __dirname,
      process.env.LOCAL ? "./build/statics/" : "../../build/statics/"
    ),
    publicPath: "/statics/",
    chunkFilename: "[chunkhash].chunk.js",
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        // exclude: /node_modules/,
        test: /.js$/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: [
              "@babel/plugin-proposal-class-properties",
              "@loadable/babel-plugin",
            ],
            presets: ["@babel/preset-react", "@babel/preset-env"],
          },
        },
      },

      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "",
            },
          },
          "css-loader",
          "sass-loader",
        ], // development
      },
      { ...imagesConf },

      {
        test: /\.svg$/,
        loader: "svg-inline-loader",
      },
    ],
  },

  plugins: [
    new LoadablePlugin(),
    // new CopyPlugin({
    //   patterns: [{ from: "src/assets/publicImages/", to: "img" }],
    // }),
    new MiniCssExtractPlugin(),
    new webpack.DefinePlugin({
      __isBrowser__: "true",
    }),
    new Dotenv({
      path: `./.env`,
    }),
  ],
  resolve: {
    alias: {
      i18n: [
        path.resolve(`./src/i18n/`),
        path.resolve(__dirname, `./src/i18n/`),
      ],
      web: [path.resolve(`./src/web/`), path.resolve(__dirname, `./src/web/`)],
      server: [
        path.resolve(`./src/server/`),
        path.resolve(__dirname, `./src/server/`),
      ],
    },
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
};

const serverConf = {
  mode: "production",
  target: "node",
  entry: path.resolve(__dirname, "src/server", "server.js"),
  output: {
    filename: "server.js",
    path: path.resolve(
      __dirname,
      process.env.LOCAL ? "./build/" : "../../build/"
    ),
    publicPath: "/",
    chunkFilename: "statics/[chunkhash].chunk.js",
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "false",
    }),
    new Dotenv({
      path: `./.env`,
    }),
  ],
  externals: {
    Swiper: "swiper",
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: "css-loader",
            options: { sourceMap: false },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: false,
            },
          },
        ],
      },
      {
        // exclude: /node_modules/,
        test: /.js$/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: [
              "@babel/plugin-proposal-class-properties",
              "@loadable/babel-plugin",
            ],
            presets: ["@babel/preset-react", "@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: "file-loader",
        options: {
          name: "img/[name].[ext]",
          outputPath: "/statics/",
          publicPath: "/statics/",
        },
      },
      {
        test: /\.svg$/,
        loader: "svg-inline-loader",
      },
    ],
  },

  resolve: {
    alias: {
      i18n: [
        path.resolve(`./src/i18n/`),
        path.resolve(__dirname, `./src/i18n/`),
      ],
      web: [path.resolve(`./src/web/`), path.resolve(__dirname, `./src/web/`)],
      server: [
        path.resolve(`./src/server/`),
        path.resolve(__dirname, `./src/server/`),
      ],
    },

    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
};

module.exports = [clientConf, serverConf];
