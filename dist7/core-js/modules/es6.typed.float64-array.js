define("core-js/modules/es6.typed.float64-array", ["require","exports","module","./_typed-array"], function (require, exports, module) {require('./_typed-array')('Float64', 8, function (init) {
  return function Float64Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

});