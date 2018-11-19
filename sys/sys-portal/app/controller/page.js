'use strict';

const path = require('path');
const ThemeCore = require('./../../../core-theme/index');

const themeDirName = path.join(__dirname, '..', '..', '..', '..', 'theme', 'blog');
const themeCore = new ThemeCore({
  dirName: themeDirName
});

module.exports = {
  async index (ctx) {
    ctx.body = 'This is index page!';
  },

  async render (ctx) {
    const html = themeCore.pageRender(ctx.params.pageId);
    ctx.body = html;
  }
};
