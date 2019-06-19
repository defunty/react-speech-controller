//const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
/*
const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./src/client/index.html",
  filename: "./index.html"
});
*/
 module.exports = {
  entry: path.join(__dirname, 'examples/index.js'),
  output: {
    path: path.join(__dirname, "examples/dist"),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
}; 