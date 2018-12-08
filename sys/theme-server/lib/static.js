const { resolve } = require('path');
const send = require('./send');

function isStaticPath (reqPath) {
  let result = false;
  if (typeof reqPath === 'string') {
    if (/^\/static\/(.*)\.(js|css|map)$/i.test(reqPath) === true) {
      result = true;
    }
  }
  return result;
}

function parseStaticPath (reqPath) {
  let result = reqPath;
  if (isStaticPath(reqPath) === true) {
    result = reqPath.replace(/^\/static/i, '');
  }
  return result;
}

function statics (opts = {
  root: ''
}) {
  opts.root = resolve(opts.root);

  // 是否需要等待其他请求
  if (opts.defer !== true) {
    // 如果需要等待其他请求
    return async function statics (ctx, next) {
      let done = false;

      if (isStaticPath(ctx.path) === true && (ctx.method === 'HEAD' || ctx.method === 'GET')) {
        const staticPath = parseStaticPath(ctx.path);
        try {
          done = await send(ctx, staticPath, opts);
        } catch (err) {
          if (err.status !== 404) {
            throw err;
          }
        }
      }

      if (!done) {
        await next();
      }
    };
  } else {
    // 如果不需要等待其他请求
    return async function statics (ctx, next) {
      await next();

      if (ctx.method !== 'HEAD' && ctx.method !== 'GET') {
        return;
      }

      if (ctx.body != null || ctx.status !== 404) {
        return;
      }

      if (isStaticPath(ctx.path) !== true) {
        return;
      }

      try {
        const staticPath = parseStaticPath(ctx.path);
        await send(ctx, staticPath, opts);
      } catch (err) {
        if (err.status !== 404) {
          throw err;
        }
      }
    };
  }
}

module.exports = statics;
