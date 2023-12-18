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

const clientConf = (env) => {
  return {
    mode: env.production ? "production" : "development",
    target: "web",
    entry: path.resolve(__dirname, "src", "index.js"),
    output: {
      filename: "0.chunk.js",
      path: path.resolve(__dirname, "build/statics/"),
      publicPath: "/statics/",
      chunkFilename: "[chunkhash].chunk.js",
    },
    devtool: "source-map",
    module: {
      rules: [
        {
          exclude: /node_modules/,
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
      new CopyPlugin({
        patterns: [{ from: "src/assets/publicImages/", to: "img" }],
      }),
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
        components: [
          path.resolve(__dirname, "src/components/"),
          path.resolve(__dirname, "node_modules/esy-core/src/components/"),
        ],
        pages: path.resolve(__dirname, "src/pages/"),
        routes: path.resolve(__dirname, "src/routes/"),
        assets: path.resolve(__dirname, "src/assets/"),
        modules: path.resolve(__dirname, "src/modules/"),
        layout: path.resolve(__dirname, "src/layout/"),
        services: path.resolve(__dirname, "src/services/"),
        dataServices: path.resolve(__dirname, "src/dataServices/"),
        api: path.resolve(__dirname, "src/api/"),
        hooks: path.resolve(__dirname, "src/hooks/"),
        i18n: path.resolve(__dirname, "src/i18n/"),
      },
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
  };
};

const serverConf = (env) => {
  return {
    mode: env.production ? "production" : "development",
    target: "node",
    entry: path.resolve(__dirname, "src/server", "server.js"),
    output: {
      filename: "server.js",
      path: path.resolve(__dirname, "build/"),
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
          exclude: /node_modules/,
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
        components: [
          path.resolve(__dirname, "src/components/"),
          path.resolve(__dirname, "node_modules/esy-core/src/components/"),
        ],
        pages: path.resolve(__dirname, "src/pages/"),
        api: path.resolve(__dirname, "src/api/"),
        routes: path.resolve(__dirname, "src/routes/"),
        assets: path.resolve(__dirname, "src/assets/"),
        modules: path.resolve(__dirname, "src/modules/"),
        layout: path.resolve(__dirname, "src/layout/"),
        services: path.resolve(__dirname, "src/services/"),
        dataServices: path.resolve(__dirname, "src/dataServices/"),
        api: path.resolve(__dirname, "src/api/"),
        hooks: path.resolve(__dirname, "src/hooks/"),
        i18n: path.resolve(__dirname, "src/i18n/"),
      },

      extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
  };
};

module.exports = (env) => [clientConf(env), serverConf(env)];
