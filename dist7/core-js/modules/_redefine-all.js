define("core-js/modules/_redefine-all", ["require","exports","module","./_redefine"], function (require, exports, module) {var redefine = require('./_redefine');
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};

});