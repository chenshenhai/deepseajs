const ThemeServer = require('./../theme-server/index');
const apiHub = require('./lib/api-hub');
const pageDataHub = require('./lib/page-data-hub');

class ServerInit extends ThemeServer {
  constructor (opts = {}) {
    const { baseDir, themeName } = opts || {};
    const options = {
      baseDir,
      themeName,
      pageDataHub,
      apiHub
    };
    super(options);
  }
}

module.exports = ServerInit;
