var path = require('path')

module.exports = {
  entry: './vue/main.js',
  output: {
    path: path.resolve(__dirname, 'public/javascripts'),
    publicPath: 'public/javascripts/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.png$/,
        loader: "url-loader?mimetype=image/png"
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader" },
      { test: /\.(woff|woff2)$/, loader:"url-loader?prefix=font/&limit=5000" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/octet-stream" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml" }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.css'],
    modules: [
        "node_modules"
    ],
    alias: {
        vue: 'vue/dist/vue.common.js'
    }
  }
}
