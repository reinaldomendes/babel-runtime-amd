define("core-js/modules/_to-object", ["require","exports","module","./_defined"], function (require, exports, module) {// 7.1.13 ToObject(argument)
var defined = require('./_defined');
module.exports = function (it) {
  return Object(defined(it));
};

});