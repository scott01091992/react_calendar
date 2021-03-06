//Inside webpack.config.js
module.exports = {
  entry: './client/js/main.js',
  output: {
        filename: "bundle.js",
        path: __dirname + '/Client/webpacked_code'
    },

    module: {
      loaders: [
        {
          test: /\.js$/, exclude: /node_modules/,
          loader: "babel-loader"
        }
      ]
    }
}
