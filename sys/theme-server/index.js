const path = require('path');
const fs = require('fs');
const Koa = require('koa');
const KoaRouter = require('koa-router');
const koaStatic = require('koa-static');
const ThemeCore = require('../theme-core/index');
const types = require('./lib/types');

const OPTIONS = Symbol('options');
const ROUTER = Symbol('router');
const INIT_PAGE_ROUTER = Symbol('initPageRouter');
const INIT_API_ROUTER = Symbol('initApiRouter');
const apiMethodTypeList = ['get', 'post', 'delete', 'put', 'patch'];

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
    this[OPTIONS] = options || {};
    this[INIT_PAGE_ROUTER]();
    this[INIT_API_ROUTER]();
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

  [INIT_PAGE_ROUTER] () {
    const options = this[OPTIONS];
    const { baseDir, themeName, pageDataHub } = options;
    const themeDirName = path.join(baseDir, 'theme', themeName);
    const stats = fs.statSync(themeDirName);
    if (!stats && stats.isDirectory()) {
      throw new Error(`${themeDirName} is not an existing directory`);
    }

    const themeStaticDir = path.join(themeDirName, 'static');
    const theme = new ThemeCore({
      baseDir: themeDirName,
      pageDataHub: pageDataHub
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

  [INIT_API_ROUTER] () {
    const options = this[OPTIONS];
    const { apiHub } = options;
    if (types.isJSON(apiHub) !== true) {
      return;
    }
    const apiKeys = Object.keys(apiHub);
    for (let i = 0; i < apiKeys.length; i++) {
      const apiKey = apiKeys[i];
      if (types.isString(apiKey) !== true) {
        continue;
      }
      const apiItem = apiHub[apiKey];
      if (types.isJSON(apiItem) !== true) {
        continue;
      }
      const { type, method } = apiItem;
      if (types.isString(type) === true && apiMethodTypeList.indexOf(type) >= 0 && types.isAsyncFunction(method) === true) {
        this.router[type](`/api/${apiKey}`, async (ctx) => {
          await method(ctx);
        });
      }
    }
  }
};

module.exports = ThemeServer;
