define("core-js/modules/_is-array-iter", ["require","exports","module","./_iterators","./_wks"], function (require, exports, module) {// check on default Array iterator
var Iterators = require('./_iterators');
var ITERATOR = require('./_wks')('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

});