const path = require('path');
const fs = require('fs');

function mkdirSync (dirname) {
  if (fs.existsSync(dirname)) {
    return true;
  } else {
    if (mkdirSync(path.dirname(dirname))) {
      fs.mkdirSync(dirname);
      return true;
    }
  }
};

function writeFile (filePath, fileContent) {
  const ws = fs.createWriteStream(filePath);
  const result = {
    success: false,
    message: null
  };
  return new Promise(function (resolve, reject) {
    ws.once('error', function (err) {
      result.message = err;
      reject(result);
    });
    ws.on('close', function () {
      result.success = true;
      resolve(result);
    });
    ws.write(fileContent, 'UTF8');
    ws.end();
  });
};

const write = {
  mkdirSync,
  writeFile
};

module.exports = write;
