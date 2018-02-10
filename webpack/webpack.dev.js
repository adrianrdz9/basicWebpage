const common = require("./webpack.common.js");
const merge = require("webpack-merge");

module.exports = merge(common, {
  module:{
    rules: [
      {
        /*Manejador de sass*/
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
});
