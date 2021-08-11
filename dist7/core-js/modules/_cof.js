define("core-js/modules/_cof", ["require","exports","module"], function (require, exports, module) {var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

});