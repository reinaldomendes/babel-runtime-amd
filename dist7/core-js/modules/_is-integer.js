define("core-js/modules/_is-integer", ["require","exports","module","./_is-object"], function (require, exports, module) {// 20.1.2.3 Number.isInteger(number)
var isObject = require('./_is-object');
var floor = Math.floor;
module.exports = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};

});