define("core-js/modules/es6.typed.uint16-array", ["require","exports","module","./_typed-array"], function (require, exports, module) {require('./_typed-array')('Uint16', 2, function (init) {
  return function Uint16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

});