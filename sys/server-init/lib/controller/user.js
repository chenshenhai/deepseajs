module.exports = {
  create: async function (ctx) {
    ctx.body = { success: true, message: 'hello user!' };
  }
};
