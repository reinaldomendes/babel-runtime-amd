define("core-js/modules/_array-from-iterable", ["require","exports","module","./_for-of"], function (require, exports, module) {var forOf = require('./_for-of');

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};

});