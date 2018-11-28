const controller = require('./../controller/storage');

function storage (opts) {
  return {
    init: {
      type: 'get',
      method: async function (ctx, next) {
        await controller.init(ctx, next, opts);
      }
    }
  };
}

module.exports = storage;
