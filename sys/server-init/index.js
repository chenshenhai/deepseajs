const path = require('path');
const ThemeServer = require('./../theme-server/index');
const apiHub = require('./lib/api-hub');

const server = new ThemeServer({
  baseDir: path.join(__dirname, '..', '..'),
  themeName: 'init',
  pageDataHub: {
    getName: () => 'theme server',
    getInfo: () => {
      return {
        title: 'init',
        datalist: ['001', '002']
      };
    }
  },
  apiHub
});

module.exports = server;
