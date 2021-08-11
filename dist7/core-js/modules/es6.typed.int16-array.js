define("core-js/modules/es6.typed.int16-array", ["require","exports","module","./_typed-array"], function (require, exports, module) {require('./_typed-array')('Int16', 2, function (init) {
  return function Int16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});

});