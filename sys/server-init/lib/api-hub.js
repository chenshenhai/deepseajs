const types = require('./util/types');

const posts = require('./api/posts');
const user = require('./api/user');

const apiMethodTypeList = ['get', 'post', 'delete', 'put', 'patch'];

let apiMap = {
  posts,
  user
};

function buildApiHub () {
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

module.exports = buildApiHub();
