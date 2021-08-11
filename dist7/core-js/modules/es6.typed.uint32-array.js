define("core-js/modules/es6.typed.uint32-array", ["require","exports","module","./_typed-array"], function (require, exports, module) {require('./_typed-array')('Uint32', 4, function (init) {
  return function Uint32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

});