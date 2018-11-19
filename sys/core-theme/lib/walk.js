'use strict';

const fs = require('fs');
const path = require('path');

let walk = function (pathResolve) {
  let dirs = fs.readdirSync(pathResolve);
  let dirList = [];
  for (let i = 0, len = dirs.length; i < len; i++) {
    const childDirFullPath = path.join(pathResolve, dirs[i]);
    if (typeof childDirFullPath === 'string') {
      const stats = fs.statSync(childDirFullPath);
      if (stats.isDirectory() === true) {
        dirList.push(childDirFullPath);
      }
    }
  }
  return dirList;
};

module.exports = walk;
