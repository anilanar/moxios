var webpack = require("webpack");
var fileName = "moxios";

if (process.env.NODE_ENV === "production") {
  fileName += ".min";
}

module.exports = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  devtool: "source-map",
  entry: "./index.js",
  output: {
    filename: fileName + ".js",
    library: "moxios",
    libraryTarget: "umd"
  },
  externals: {
    axios: "axios"
  },
  optimization: {
    minimize: process.env.NODE_ENV === "production"
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
