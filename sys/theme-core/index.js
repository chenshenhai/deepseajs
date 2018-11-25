'use strict';

const path = require('path');
const page = require('./lib/page');

const OPTIONS = Symbol('options');
const PAGE_PATH_MAP = Symbol('pagePathMap');

class ThemeCore {
  constructor (opts = {}) {
    const { baseDir } = opts;
    const pagePathMap = page.loadPageMap(path.join(baseDir, 'page'));

    this[OPTIONS] = opts;
    this[PAGE_PATH_MAP] = pagePathMap;
  }

  renderPage (pageId) {
    const { pageDataHub } = this[OPTIONS];
    const pagePathMap = this[PAGE_PATH_MAP];
    // console.log('pagePathMap = ', pagePathMap);
    let resultHTML = `[ERROR:404] not found page/${pageId} in current theme`;
    const pagePathObj = pagePathMap[pageId];
    if (pagePathObj) {
      resultHTML = page.render(pagePathObj, pageDataHub);
    }
    return resultHTML;
  }
}

module.exports = ThemeCore;
