const path = require('path');

const OPTIONS = Symbol('options');

class PageData {
  constructor (opts = {}) {
    this[OPTIONS] = opts;
  }
  getName () {
    return 'theme server';
  }
  getInfo () {
    return {
      title: 'init',
      datalist: ['001', '002']
    };
  }
  getFileStoragePath () {
    const opts = this[OPTIONS] || {};
    const { baseDir } = opts;
    const fileStoragePath = path.join(baseDir, '__file_storage__');
    return `${fileStoragePath}${path.sep}`;
  }
}

module.exports = PageData;
