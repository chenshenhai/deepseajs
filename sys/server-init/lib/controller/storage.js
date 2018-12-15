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
    const fileStore = getFileStore(opts);
    const configPath = path.join(baseDir, '_file_storage_', 'config', 'config.json');
    const dataUserPath = path.join(baseDir, '_file_storage_', 'data', 'user', 'a0000001.json');
    const dataPostsPath = path.join(baseDir, '_file_storage_', 'data', 'posts', 'a', 'a0000001.json');
    await fileStore.createFile(configPath, '{}');
    await fileStore.createFile(dataUserPath, '{}');
    await fileStore.createFile(dataPostsPath, '{}');
    ctx.body = {
      success: true,
      message: 'ok'
    };
  },

  async getFileStoragePath (ctx, next, opts = {}) {
    const { baseDir } = opts;
    const configPath = path.join(baseDir, '_file_storage_');
  }
};

module.exports = controller;
