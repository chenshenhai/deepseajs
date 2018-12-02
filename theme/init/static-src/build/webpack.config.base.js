const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const babelConfig = require('./babel.config');

// const prodMode = process.env.NODE_ENV === 'production';

const srcResolve = function (file) {
  return path.join(__dirname, '..', 'src', file);
};

const distResolve = function (file) {
  return path.join(__dirname, '..', '..', 'static', file);
};

module.exports = {
  entry: {
    'index': srcResolve('js/index')
  },
  output: {
    path: distResolve(''),
    filename: 'js/[name].js'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: babelConfig
        }
      },
      {
        test: /\.(css|less)$/,
        use: [
          // devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          // 'postcss-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => {
                return [];
              }
            }
          },
          'less-loader'
        ]
      }
    ]
  }
};
