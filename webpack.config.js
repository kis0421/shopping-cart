const HtmlWebpackPlugin = require('html-webpack-plugin');
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
    new HtmlWebpackPlugin({ template: "index.html" })
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
}