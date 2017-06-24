import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import autoprefixer from 'autoprefixer';
 
/* https://github.com/bensmithett/webpack-css-example/blob/master/webpack.config.js */
const scssLoaders = [
  'css-loader?sourceMap',
  'postcss-loader',
  'sass-loader?sourceMap&includePaths[]=' + path.resolve(__dirname, './src')
];

export default {
  debug: true,
  devtool:'source-map',
  noInfo: false,
  entry:{
    vendor: path.resolve(__dirname, 'src/vendor'),
    main: path.resolve(__dirname, 'src/index')
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath:'/',
    filename: '[name].[chunkhash].js'
  },
  plugins: [
    new webpack.DefinePlugin({
      // 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
    }),
    new ExtractTextPlugin('[name].[contenthash].css'),
    new WebpackMd5Hash(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      inject: true
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ],
  postcss: [
    autoprefixer({
      browsers: ['last 2 versions']
    })
  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.scss$/, loader: ExtractTextPlugin.extract('style-loader', scssLoaders.join('!'))}
    ]
  }
}
