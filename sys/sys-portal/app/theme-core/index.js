const fs = require('fs');
const path = require('path');
const OPTS = Symbol('OPTS');

const page = {
  render(dirPath) {
    let pageHTML = 'deepseajs: 404 Not Found!'
    const pageTplPath = path.join(dirPath, 'index.html');
    if(fs.existsSync(pageTplPath)) {
      pageHTML = fs.readFileSync(pageTplPath, 'binary');
    }
    return pageHTML;
  }
}

class ThemeCore {
  constructor(opts = {}) {
    this[OPTS] = opts;
  }

  pageRender(pageId) {
    const opts = this[OPTS] || {};
    const {dirName, } = opts;
    const pageDirName = path.join(dirName, 'page', pageId)
    return page.render(pageDirName);
  }
}

module.exports = ThemeCore;

