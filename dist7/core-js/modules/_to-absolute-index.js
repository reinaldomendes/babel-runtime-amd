define("core-js/modules/_to-absolute-index", ["require","exports","module","./_to-integer"], function (require, exports, module) {var toInteger = require('./_to-integer');
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

});