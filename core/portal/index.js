'use strict';
const Application = require('./../lib/application');

// 初始化Egg.js应用
const app = new Application({
  baseDir: __dirname,
  type: 'application',
});

// 应用启动
app.ready(err => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  const server = require('http').createServer(app.callback());
  server.once('error', err => {
    console.log('[app_worker] server got error: %s, code: %s', err.message, err.code);
    process.exit(1);
  });
  server.listen(7001, () => {
    console.log('server started at 7001');
  });
});

