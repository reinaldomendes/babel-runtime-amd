define("core-js/modules/_shared-key", ["require","exports","module","./_shared","./_uid"], function (require, exports, module) {var shared = require('./_shared')('keys');
var uid = require('./_uid');
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};

});