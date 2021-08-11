define("core-js/modules/_validate-collection", ["require","exports","module","./_is-object"], function (require, exports, module) {var isObject = require('./_is-object');
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};

});