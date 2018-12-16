const controller = require('./../controller/storage');

module.exports = {
  init: {
    type: 'get',
    method: async function (ctx, next) {
      await controller.init(ctx, next);
    }
  }
};
