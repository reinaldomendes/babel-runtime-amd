define("core-js/modules/_an-object", ["require","exports","module","./_is-object"], function (require, exports, module) {var isObject = require('./_is-object');
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

});