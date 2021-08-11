define("core-js/modules/_descriptors", ["require","exports","module","./_fails"], function (require, exports, module) {// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

});