function isPrototype (data) {
  const typeStr = Object.prototype.toString.call(data) || '';
  const result = typeStr.replace(/(\[object|\])/ig, '').trim();
  return result;
};
const types = {

  isArray (data) {
    return isPrototype(data) === 'Array';
  },

  isJSON (data) {
    return isPrototype(data) === 'Object';
  },

  isFunction (data) {
    return isPrototype(data) === 'Function';
  },

  isAsyncFunction (data) {
    return isPrototype(data) === 'AsyncFunction';
  },

  isString (data) {
    return isPrototype(data) === 'String';
  },

  isNumber (data) {
    return isPrototype(data) === 'Number';
  },

  isUndefined (data) {
    return isPrototype(data) === 'Undefined';
  },

  isNull (data) {
    return isPrototype(data) === 'Null';
  }

};

module.exports = types;
