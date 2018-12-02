const path = require('path');

const srcResolve = function (file) {
  return path.join(__dirname, '..', 'src', file);
};

const distResolve = function (file) {
  return path.join(__dirname, '..', '..', 'static', file);
};

module.exports = {
  entry: {
    'js/index': srcResolve('js/index')
  },
  output: {
    path: distResolve(''),
    filename: '[name].js'
  }
};
