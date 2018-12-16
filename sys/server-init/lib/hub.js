const types = require('./util/types');

const posts = require('./api/posts');
const user = require('./api/user');
const storage = require('./api/storage');

const PageData = require('./page/page-data');

const apiMethodTypeList = ['get', 'post', 'delete', 'put', 'patch'];
const OPTIONS = Symbol('options');

function buildApiHub (opts) {
  let apiMap = {
    posts,
    user,
    storage
  };
  let apiHub = {};
  if (types.isJSON(apiMap) === true) {
    let apiKeyList = Object.keys(apiMap);
    apiKeyList.forEach(function (apiKey) {
      if (types.isString(apiKey) === true) {
        const api = apiMap[apiKey];
        if (types.isJSON(api) === true) {
          const itemList = Object.keys(api);
          itemList.forEach(function (itemKey) {
            const itemObj = api[itemKey];
            if (types.isJSON(itemObj) === true) {
              if (apiMethodTypeList.indexOf(itemObj.type) >= 0 && types.isAsyncFunction(itemObj.method) === true) {
                apiHub[`${apiKey}/${itemKey}`] = itemObj;
              }
            }
          });
        }
      }
    });
  }
  return apiHub;
}

class Hub {
  constructor (opts = {}) {
    this[OPTIONS] = opts;
    this.apiHub = buildApiHub(opts);
    this.pageDataHub = new PageData(opts);
  }
}

module.exports = Hub;
