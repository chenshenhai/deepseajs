process.env.NODE_ENV = 'development';

const webpack = require('webpack');
const merge = require('webpack-merge');
const config = require('./webpack.config.base');

// const prodMode = process.env.NODE_ENV === 'production';

module.exports = merge(config, {
  mode: 'development',
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: 'js/[name].js.map'
      // append: '\n//# sourceMappingURL=js/[name].js.map'
    })
  ]
});
