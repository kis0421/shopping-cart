const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      },
      // {
      //   test: /\..html$/,
      //   use: [
      //     {
      //       loader: "html-loader",
      //       options: {
      //         minimize: true,
      //       }
      //     }
      //   ]
      // }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "index.html" })
  ],
}