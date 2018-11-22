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
    const { dataHub } = this[OPTIONS];
    const pagePathMap = this[PAGE_PATH_MAP];
    const pagePathObj = pagePathMap[pageId];
    return page.render(pagePathObj, dataHub);
  }
}

module.exports = ThemeCore;
