var webpack = require("webpack");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: "./index.js",
  output: {
    filename: "moxios.js",
    library: "moxios",
    libraryTarget: "umd"
  },
  externals: {
    axios: "axios"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["es2015"]
            }
          }
        ]
      }
    ]
  }
};
