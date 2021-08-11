define("core-js/modules/es6.typed.int8-array", ["require","exports","module","./_typed-array"], function (require, exports, module) {require('./_typed-array')('Int8', 1, function (init) {
  return function Int8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

});