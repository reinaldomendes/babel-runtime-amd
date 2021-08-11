define("core-js/modules/_ie8-dom-define", ["require","exports","module","./_descriptors","./_fails","./_dom-create"], function (require, exports, module) {module.exports = !require('./_descriptors') && !require('./_fails')(function () {
  return Object.defineProperty(require('./_dom-create')('div'), 'a', { get: function () { return 7; } }).a != 7;
});

});