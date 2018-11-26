const http = require('http');
// const serverPortal = require('./sys/server-portal/index');
// const serverDashboard = require('./sys/server-dashboard/index');
const ServerInit = require('./sys/server-init/index');

// const portal = http.createServer(serverPortal.callback());
// portal.listen(3000, () => {
//   console.log('server-portal started at 3000');
// });

// const dashboard = http.createServer(serverDashboard.callback());
// dashboard.listen(3001, () => {
//   console.log('server-dashboard started at 3001');
// });

const serverInit = new ServerInit({
  baseDir: __dirname,
  themeName: 'init'
});
const init = http.createServer(serverInit.callback());
init.listen(3002, () => {
  console.log('server-init started at 3002');
});
