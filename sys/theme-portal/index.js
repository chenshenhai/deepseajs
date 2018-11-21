'use strict';
// const http = require('http');
const path = require('path');
const Koa = require('koa');
const ThemeCore = require('./../theme-core/index');
const Router = require('koa-router');

const router = new Router();
const app = new Koa();
const themeDirName = path.join(__dirname, '..', '..', 'theme', 'blog');
const theme = new ThemeCore({
  dirName: themeDirName
});

router.get('/page/home', function (ctx) {
  ctx.body = theme.pageRender('home');
});

app.use(router.routes());

module.exports = app;
