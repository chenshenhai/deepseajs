const path = require('path');
const ThemeServer = require('./../theme-server/index');

const server = new ThemeServer({
  baseDir: path.join(__dirname, '..', '..'),
  themeName: 'dashboard',
  pageDataHub: {
    getName: () => 'theme server',
    getInfo: () => {
      return {
        title: 'dashboard',
        datalist: ['001', '002']
      };
    }
  },
  apiHub: {
    'posts/create': {
      type: 'get',
      method: async (ctx) => {
        ctx.body = { success: true, message: 'hello world!' };
      }
    }
  }
});

module.exports = server;
