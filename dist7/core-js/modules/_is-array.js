define("core-js/modules/_is-array", ["require","exports","module","./_cof"], function (require, exports, module) {// 7.2.2 IsArray(argument)
var cof = require('./_cof');
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};

});