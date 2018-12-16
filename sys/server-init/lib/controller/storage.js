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
  async init (ctx, next) {
    const { baseDir } = ctx.query;
    const fileStore = getFileStore({ baseDir });
    const configPath = path.join(baseDir, 'config', 'config.json');
    const dataUserPath = path.join(baseDir, 'data', 'user', 'a0000001.json');
    const dataPostsPath = path.join(baseDir, 'data', 'posts', 'a', 'a0000001.json');
    await fileStore.createFile(configPath, '{}');
    await fileStore.createFile(dataUserPath, '{}');
    await fileStore.createFile(dataPostsPath, '{}');
    ctx.body = {
      success: true,
      message: 'ok'
    };
    // await next();
  }
};

module.exports = controller;
