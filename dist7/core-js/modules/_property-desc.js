define("core-js/modules/_property-desc", ["require","exports","module"], function (require, exports, module) {module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

});