define("core-js/modules/_a-function", ["require","exports","module"], function (require, exports, module) {module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

});