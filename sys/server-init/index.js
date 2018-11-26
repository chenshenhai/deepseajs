const path = require('path');
const ThemeServer = require('./../theme-server/index');
const apiHub = require('./lib/api-hub');
const pageDataHub = require('./lib/page-data-hub');

const server = new ThemeServer({
  baseDir: path.join(__dirname, '..', '..'),
  themeName: 'init',
  pageDataHub,
  apiHub
});

module.exports = server;
