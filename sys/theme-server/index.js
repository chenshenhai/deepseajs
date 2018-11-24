const path = require('path');
const fs = require('fs');
const Koa = require('koa');
const KoaRouter = require('koa-router');
const koaStatic = require('koa-static');
const ThemeCore = require('../theme-core/index');

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

    const { baseDir, themeName, dataHub } = options;
    const themeDirName = path.join(baseDir, 'theme', themeName);
    const stats = fs.statSync(themeDirName);
    if (!stats && stats.isDirectory()) {
      throw new Error(`${themeDirName} is not an existing directory`);
    }
    const themeStaticDir = path.join(themeDirName, 'static', 'dist');
    const theme = new ThemeCore({
      baseDir: themeDirName,
      dataHub: dataHub
    });
    this.use(koaStatic(themeStaticDir));
    this.router.get('/page/:pageId.html', async (ctx) => {
      const pageId = ctx.params.pageId;
      ctx.body = theme.renderPage(pageId);
    });
    this.router.get('/page/:pageId', async (ctx) => {
      const pageId = ctx.params.pageId;
      ctx.body = theme.renderPage(pageId);
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
