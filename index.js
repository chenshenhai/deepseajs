const http = require('http');
const serverPortal = require('./sys/server-portal/index');
const serverDashboard = require('./sys/server-portal/index');

const portal = http.createServer(serverPortal.callback());
portal.once('error', err => {
  console.log(' server got error: %s, code: %s', err.message, err.code);
  process.exit(1);
});
portal.listen(3000, () => {
  console.log('server started at 3000');
});

const dashboard = http.createServer(serverDashboard.callback());
dashboard.once('error', err => {
  console.log(' server got error: %s, code: %s', err.message, err.code);
  process.exit(1);
});
dashboard.listen(3001, () => {
  console.log('server started at 3001');
});
