define("core-js/modules/es6.typed.uint8-clamped-array", ["require","exports","module","./_typed-array"], function (require, exports, module) {require('./_typed-array')('Uint8', 1, function (init) {
  return function Uint8ClampedArray(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
}, true);

});