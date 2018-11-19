const eggcore = require('egg-core');
const { EggCore, EggLoader } = eggcore;

class AppWorkerLoader extends EggLoader {
  loadAll () {
    this.loadPlugin();
    super.loadConfig();

    // app > plugin > core
    this.loadApplicationExtend();
    this.loadRequestExtend();
    this.loadResponseExtend();
    this.loadContextExtend();
    this.loadHelperExtend();

    // app > plugin
    this.loadCustomApp();
    // app > plugin
    this.loadService();
    // app > plugin > core
    this.loadMiddleware();
    // app
    this.loadController();
    // app
    this.loadRouter(); // Dependent on controllers
  }
}

class EggApplication extends EggCore {
  constructor (options) {
    super(options);
    this.on('error', err => {
      console.error(err);
    });

    this.loader.loadAll();
  }

  get [Symbol.for('egg#eggPath')] () {
    return __dirname;
  }
  get [Symbol.for('egg#loader')] () {
    return AppWorkerLoader;
  }
}

module.exports = EggApplication;
