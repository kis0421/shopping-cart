const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");
require("dotenv").config();

module.exports = {
  entry: "./src/index.tsx",
  devServer:{
    port:3000,
    historyApiFallback:true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "index.html" }),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify({
        SECRETKEY: process.env.SECRETKEY
      })
    })
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
}