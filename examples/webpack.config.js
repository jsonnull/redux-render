const { resolve } = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './index.js',
  output: {
    filename: 'example.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/\/node_modules\//],
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  },
  plugins: [new webpack.NamedModulesPlugin()]
}
