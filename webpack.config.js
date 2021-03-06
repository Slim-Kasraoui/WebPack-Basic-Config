
const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  // Entry point to the app can be one file or an object supporting multiple entry points (code splitting into smaller chunk) 
  // entry: {
    //   foo: 'foo.js',
    //   bar: 'bar.js'
    // }
    entry: './src/index.js',
    mode: 'none',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader'
          ]
        }
      ]
    },
    plugins : [
      new BundleAnalyzerPlugin()
    ],
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      port: 7000
    }
}