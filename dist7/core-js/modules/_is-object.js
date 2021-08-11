define("core-js/modules/_is-object", ["require","exports","module"], function (require, exports, module) {module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

});