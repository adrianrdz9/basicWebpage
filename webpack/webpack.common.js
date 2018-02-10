const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const htmlWebpack = new HtmlWebpackPlugin({
  template: "./assets/html/index.template.html",
  filename: "index.html"
});

module.exports = {
  entry: "./assets/js/entry.js", //archivo de entrada
  output: {
    publicPath: "/", //Inicio de la pagina
    path: path.join(__dirname, ".."), //Path de los archivos
    filename: "dist/js/bundle.js" //Archivo js
  },
  plugins: [htmlWebpack],
  module: {
    rules: [
      {
        /*Manejador de imagenes*/
        test: /\.jpg$/,
        loader: 'url-loader'
      }
    ]
  }
}
