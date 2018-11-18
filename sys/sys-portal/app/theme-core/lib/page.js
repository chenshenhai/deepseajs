'use strict';

const path = require('path');
const fs = require('fs');
const vm = require('vm');
const ThemePage = require('./theme-page');

function initPageApiCode(apiCode) {
  let resultCode = apiCode.trim();;
  resultCode = `var result = ${apiCode}`;
  return resultCode;
}

function runPageApiCode(apiCode){
  const code = initPageApiCode(apiCode);
  let result = {};
  let sandbox = {ThemePage, result}
  vm.createContext(sandbox);
  vm.runInContext(code, sandbox);
  return sandbox.result;
}

const page = {
  render(pagePathObj) {
    const {tplPath, apiPath, } = pagePathObj;
    let pageHTML = 'deepseajs: 404 Not Found!';
    if(fs.existsSync(tplPath) && fs.existsSync(apiPath)) {
      const pageApiCode = fs.readFileSync(apiPath, 'binary');
      const pageTplCode = fs.readFileSync(tplPath, 'binary');
      const apiData = runPageApiCode(pageApiCode);
      console.log(apiData);
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