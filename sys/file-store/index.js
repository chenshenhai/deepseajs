const write = require('./lib/write');
const OPTIONS = Symbol('options');

class FileStore {
  constructor (opts = {}) {
    this[OPTIONS] = opts || {};
  }

  async createFile (filePath, fileContent) {
    const result = await write.writeFile(filePath, fileContent);
    return result;
  }

  // updateFile () {
  // }

  // deleteFile () {
  // }
};

module.exports = FileStore;
