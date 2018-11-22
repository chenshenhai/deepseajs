const http = require('http');
const ThemeServer = require('./sys/theme-server/index');

const app = new ThemeServer({
  baseDir: __dirname,
  themeName: 'blog',
  dataHub: {
    getName: () => 'theme server',
    getInfo: () => {
      return {
        title: 'theme',
        datalist: ['001', '002']
      };
    }
  }
});

const server = http.createServer(app.callback());
server.once('error', err => {
  console.log(' server got error: %s, code: %s', err.message, err.code);
  process.exit(1);
});
server.listen(3001, () => {
  console.log('server started at 3001');
});
