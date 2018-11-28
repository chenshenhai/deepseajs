const path = require('path');
const types = require('./../util/types');
const FileStore = require('./../../../file-store/index');
let fileStore;

function getFileStore (opts) {
  if (types.isUndefined(fileStore) === true && types.isJSON(opts) === true) {
    const { baseDir } = opts;
    if (types.isString(baseDir)) {
      fileStore = new FileStore({ baseDir });
    }
  }
  return fileStore;
}

const controller = {
  async init (ctx, next, opts = {}) {
    const { baseDir } = opts;
    const fullPath = path.join(baseDir, '_file_storage_', 'config', 'config.json');
    const fileStore = getFileStore(opts);
    ctx.body = await fileStore.createFile(fullPath, '{"text":"hello world!"}');
  }
};

module.exports = controller;
