module.exports = {
  create: {
    type: 'get',
    method: async function (ctx) {
      ctx.body = { success: true, message: 'hello user!' };
    }
  }
};
