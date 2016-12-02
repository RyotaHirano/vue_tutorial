const webpack = require('webpack');

module.exports = {
  entry: {
    index: './src/js/index.js'
  },
  output: {
    filename: '[name].js'
  },
  externals: {

  },
  resolve: {
    extensions: ['', '.js', '.scss', '.sass']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015'],
          plugins: ['transform-runtime']
        }
      },
      {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        loader: 'eslint'
      },
      {
        test: /\.(scss|sass)$/,
        exclude: /node_modules/,
        loader: ['style', 'css', 'postcss']
      }
    ]
  },
  eslint: {
    configFile: '.eslintrc',
    failOnError: true,
    emitError: true
  }
};
