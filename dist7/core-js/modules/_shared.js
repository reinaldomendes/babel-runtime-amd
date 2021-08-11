define("core-js/modules/_shared", ["require","exports","module","./_global"], function (require, exports, module) {var global = require('./_global');
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};

});