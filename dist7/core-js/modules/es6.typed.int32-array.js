define("core-js/modules/es6.typed.int32-array", ["require","exports","module","./_typed-array"], function (require, exports, module) {require('./_typed-array')('Int32', 4, function (init) {
  return function Int32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

});