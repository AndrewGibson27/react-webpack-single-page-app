var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var saveLicense = require('uglify-save-license');

module.exports = {
  entry: './src/index',
  
  output: {
    path: path.join(__dirname, 'dist', 'build'),
    filename: 'bundle-build.js?[hash]',
    publicPath: './'
  },
  
  plugins: [
    new ExtractTextPlugin('app-build.css?[hash]'),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.optimize\.css$/g,
      cssProcessor: require('cssnano'),
      canPrint: true
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
          warnings: false
      },
    
      output: {
          comments: saveLicense
      }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      'root.jQuery': 'jquery'
    })
  ],
  
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      },
    
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader'),
        exclude: path.join(__dirname, 'src')
      },
    
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?-autoprefixer&importLoaders=1!postcss-loader!sass-loader')
      }
    ]
  },
  
  postcss: function(){
    return [
      require('autoprefixer'),
      require('postcss-inline-svg')
    ];
  }
};