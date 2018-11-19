'use strict';

const path = require('path');
const page = require('./lib/page');

const OPTIONS = Symbol('options');
const PAGE_PATH_MAP = Symbol('pagePathMap');
const LOAD_PAGES = Symbol('loadPages');

class ThemeCore {
  constructor (opts = {}) {
    const { dirName } = opts;
    const pagePathMap = page.loadPageMap(path.join(dirName, 'page'));

    this[OPTIONS] = opts;
    this[PAGE_PATH_MAP] = pagePathMap;
  }

  pageRender (pageId) {
    const pagePathMap = this[PAGE_PATH_MAP];
    const pagePathObj = pagePathMap[pageId];
    return page.render(pagePathObj);
  }

  [LOAD_PAGES] () {

  }
}

module.exports = ThemeCore;
