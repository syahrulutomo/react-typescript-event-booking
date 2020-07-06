const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: 'production',
  entry: "./src/index.tsx",
  target: "web",
  resolve: {
    extensions: [ ".tsx", ".ts", ".js" ],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "public"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      }
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  }
};