const path = require('path');
const ThemeServer = require('./../theme-server/index');

const server = new ThemeServer({
  baseDir: path.join(__dirname),
  themeName: 'dashboard',
  dataHub: {
    getName: () => 'theme server',
    getInfo: () => {
      return {
        title: 'dashboard',
        datalist: ['001', '002']
      };
    }
  }
});

module.exports = server;
