/*
eslint-disable
  camelcase,
  @typescript-eslint/camelcase,
  @typescript-eslint/no-var-requires
*/
const path = require("path");
const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const { CheckerPlugin } = require("awesome-typescript-loader");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { TsConfigPathsPlugin } = require("awesome-typescript-loader");
const WebpackBar = require("webpackbar");
const rules = require("@canadahelps/ui-common-config/build/webpack-rules");

const outputPath = path.resolve(__dirname, "../../dist/secure");
const modeConfig = (env) =>
  require(`@canadahelps/ui-common-config/build/webpack.${env}.config.js`)(
    outputPath
  )(env);

module.exports = ({ mode, storybook }) => {
  return webpackMerge(
    {
      stats: "errors-only",
      entry: {
        //<app>: "./src/<path_to_app>",
        //<another_app>: "./src/<path_to_app>",
      },
      resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
        plugins: [new TsConfigPathsPlugin()],
      },
      module: {
        rules: [
          // common rules
          ...rules(storybook),
        ],
      },
      plugins: [
        new CheckerPlugin(),
        new MiniCssExtractPlugin({
          filename: "css/[name].css",
        }),
        new webpack.optimize.AggressiveMergingPlugin(),
        new WebpackBar(),
      ],
    },
    modeConfig(mode),
    mode === "dev"
      ? {
          devServer: {
            contentBase: path.join(__dirname, "../../dist"),
            compress: true,
            port: 9090,
          },
        }
      : {},
    {
      output: {
        path: outputPath,
        filename: "js/[name].js",
      },
      mode,
    }
  );
};
