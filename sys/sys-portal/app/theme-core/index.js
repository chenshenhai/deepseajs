const fs = require('fs');
const path = require('path');
const page = require('./lib/page');
const walk = require('./lib/walk');

const OPTIONS = Symbol('options');
const PAGE_STORAGE = Symbol('pageStorage');
const LOAD_PAGES = Symbol('loadPages');

class ThemeCore {
  constructor(opts = {}) {
    this[OPTIONS] = opts;
    this[PAGE_STORAGE] = {};
    const {dirName, } = opts;
    const pagePathMap = page.loadPageMap(path.join(dirName, 'page'));
    console.log('pagePathMap ==', pagePathMap);
  }

  pageRender(pageId) {
    const opts = this[OPTIONS] || {};
    const {dirName, } = opts;
    const pageDirName = path.join(dirName, 'page', pageId)
    return page.render(pageDirName);
  }

  [LOAD_PAGES]() {

  }
}

module.exports = ThemeCore;

