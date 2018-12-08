const fs = require('fs');
const path = require('path');
const types = require('./types');

const loadFile = {
  json (filePath) {
    let result = null;
    if (types.isString(filePath) !== true) {
      return result;
    }
    const stats = fs.statSync(filePath);
    if (stats.isFile() === true) {
      result = require(filePath);
    }
    return result;
  }
};

module.exports = loadFile;
