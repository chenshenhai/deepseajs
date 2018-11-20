'use strict';

const path = require('path');
const Koa = require('koa');
const CoreTheme = require('./../core-theme/index');
const Router = require('./lib/router');

const router = new Router();
const app = new Koa();
const themeDirName = path.join(__dirname, '..', '..', 'theme', 'blog');
const theme = new CoreTheme({
  dirName: themeDirName
});

router.get('/page/home', function (ctx) {
  ctx.body = theme.pageRender('home');
});

app.use(router.routes());

app.listen(3000, () => {
  console.log('the server is starting at port 3000');
});
