var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev');
var pug = require('pug');

var app = express();
var compiler = webpack(config);

app.locals.env = app.settings.env;
app.use(express.static('dist'));
app.use(require('webpack-hot-middleware')(compiler));
app.set('view engine', 'pug');
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', function (req, res) {
  res.render('index', {});
});

app.listen(3000, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return false;
  }

  console.log('Listening at http://localhost:3000');
});