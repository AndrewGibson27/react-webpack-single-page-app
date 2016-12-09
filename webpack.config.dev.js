var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle-build.js',
    publicPath: '/'
  },
  
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development')
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
        loader: 'style-loader!css-loader!postcss-loader',
        exclude: path.join(__dirname, 'src')
      },
      
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader?modules&-autoprefixer&importLoaders=1&localIdentName=[name]-[local]-[hash]!postcss-loader!sass-loader'
      }
    ]
  },
  
  postcss: function(){
    return [autoprefixer];
  }
};