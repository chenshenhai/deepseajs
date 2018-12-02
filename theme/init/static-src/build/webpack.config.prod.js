process.env.NODE_ENV = 'production';

const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const config = require('./webpack.config.base');

module.exports = merge(config, {
  mode: 'production',
  plugins: [
    new UglifyJsPlugin()
  ]
});
