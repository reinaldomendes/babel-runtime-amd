define("core-js/modules/_a-number-value", ["require","exports","module","./_cof"], function (require, exports, module) {var cof = require('./_cof');
module.exports = function (it, msg) {
  if (typeof it != 'number' && cof(it) != 'Number') throw TypeError(msg);
  return +it;
};

});