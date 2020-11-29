const path = require("path");
module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "comm.utils.min.js",
    path: path.resolve(__dirname, "dist"),
    library: "CommUtils",
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts"],
  },
};
