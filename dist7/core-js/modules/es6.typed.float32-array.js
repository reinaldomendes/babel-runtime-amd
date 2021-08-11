define("core-js/modules/es6.typed.float32-array", ["require","exports","module","./_typed-array"], function (require, exports, module) {require('./_typed-array')('Float32', 4, function (init) {
  return function Float32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

});