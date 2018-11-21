const http = require('http');
const portal = require('./sys/theme-portal');

http.createServer(portal.callback()).listen(3000, () => {
  console.log('the server is starting at port 3000');
});
