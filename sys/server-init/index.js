const ThemeServer = require('./../theme-server/index');
const Hub = require('./lib/hub');

class ServerInit extends ThemeServer {
  constructor (opts = {}) {
    const { baseDir, themeName } = opts || {};
    const hub = new Hub(opts);
    const options = {
      baseDir,
      themeName,
      pageDataHub: hub.pageDataHub,
      apiHub: hub.apiHub
    };
    super(options);
  }
}

module.exports = ServerInit;
