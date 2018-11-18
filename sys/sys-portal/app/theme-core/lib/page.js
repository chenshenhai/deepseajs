'use strict';

const path = require('path');
const fs = require('fs');
const walk = require('./walk');

const page = {
  render(dirPath) {
    let pageHTML = 'deepseajs: 404 Not Found!'
    const pageTplPath = path.join(dirPath, 'index.html');
    if(fs.existsSync(pageTplPath)) {
      pageHTML = fs.readFileSync(pageTplPath, 'binary');
    }
    return pageHTML;
  },

  loadPageMap(pageDirName) {
    let dirs = fs.readdirSync(pageDirName);
    let result = {};
    for (let i = 0, len = dirs.length; i < len; i++) {
      const dirName = dirs[i];
      const childDirFullPath = path.join(pageDirName, dirs[i]);
      if (typeof childDirFullPath === 'string') {
        const stats = fs.statSync(childDirFullPath);
        if (stats.isDirectory() === true) {
          const tplPath = path.join(childDirFullPath, 'index.html');
          const apiPath = path.join(childDirFullPath, 'index.js');
          if (fs.statSync(tplPath).isFile() === true && fs.statSync(apiPath).isFile() === true) {
            result[dirName] =  {
              dirPath: childDirFullPath,
              tplPath: tplPath,
              apiPath: apiPath,
            }
          }
        }
      }
    }
    return result;
  }
}

module.exports = page;