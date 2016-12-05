const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin'); // cssを別ファイルで生成するため
import { resolve } from 'path';
const rootResolve = pathname => resolve(__dirname, pathname);

module.exports = {
  entry: './src/js/main.js',
  output: {
    path: 'dst',
    publicPath: '/',  // Webpackのプラグインが利用するもの
    filename: 'dst/js/[name].js'
  },
  externals: {
    //
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.js',
    },
    extensions: ['', '.js', '.scss', '.sass', '.vue'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: `${rootResolve('src/html/index.pug')}`,
    }),
    new ExtractTextPlugin('dst/css/style.css')
  ],
  module: {
    noParse: /es6-promise\.js$/,
    loaders: [
      {
        test: /\.pug$/,
        exclude: /node_modules/,
        loader: 'pug'
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
        loader: 'babel'
      },
      {
        test: /\.(scss|sass)$/,
        loader: ExtractTextPlugin.extract('style', 'css!postcss')
      }
    ]
  },
  devServer: {
    contentBase: rootResolve('dst'),
    publicPath: '/'
  },
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },
  vue: {
    loaders: {
      html: 'pug',
      css: 'style!css!postcss',
    }
  },
  postcss: [
    require('postcss-partial-import')(),
    require('precss')(),
    require('autoprefixer')(
      {
        browsers: [
          'ie >= 11',
          'ie_mob >= 11',
          'ff >= 30',
          'chrome >= 34',
          'safari >= 8',
          'opera >= 23',
          'ios >= 8',
          'android >= 4.4'
        ]
      }
    )
  ]
};
