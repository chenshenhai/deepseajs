const path = require('path');
const Koa = require('koa');
const KoaRouter = require('koa-router');
const ThemeCore = require('./../theme-core/index');

const ROUTER = Symbol('router');
class Router extends KoaRouter {
  constructor (opts, app) {
    super(opts);
    this.app = app;
  }
};

class ThemeServer extends Koa {
  constructor (options = {}) {
    options.baseDir = options.baseDir || process.cwd();
    super(options);

    const { baseDir, themeName } = options;
    const themeDirName = path.join(baseDir, 'theme', themeName);
    const theme = new ThemeCore({
      dirName: themeDirName
    });
    this.router.get('/page/:pageId', async (ctx) => {
      const pageId = ctx.params.pageId;
      ctx.body = theme.pageRender(pageId);
    });
  }

  get router () {
    if (this[ROUTER]) {
      return this[ROUTER];
    }
    const router = this[ROUTER] = new Router({ sensitive: true }, this);
    // register router middleware
    this.beforeStart(() => {
      this.use(router.middleware());
    });
    return router;
  }

  beforeStart (fn) {
    process.nextTick(fn);
  }
};

module.exports = ThemeServer;
