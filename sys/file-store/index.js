const path = require('path');
const write = require('./lib/write');
const OPTIONS = Symbol('options');

class FileStore {
  constructor (opts = {}) {
    this[OPTIONS] = opts || {};
    const { baseDir } = this[OPTIONS];
    if (typeof baseDir !== 'string') {
      throw Error('opts.dirName is not string type');
    }
  }

  async createFile (filePath, fileContent) {
    let result = { success: false, message: 'ERROR PATH' };
    if (this.isLawfulPath(filePath) === true) {
      result = await write.writeFile(filePath, fileContent);
    }
    return result;
  }

  isLawfulPath (fullPath) {
    let result = false;
    if (typeof fullPath !== 'string') {
      return result;
    }
    const { baseDir } = this[OPTIONS];
    const relativePath = path.relative(baseDir, fullPath);
    if (relativePath.indexOf('..') < 0) {
      result = true;
    }
    return result;
  }

  // updateFile () {
  // }

  // deleteFile () {
  // }
};

module.exports = FileStore;
