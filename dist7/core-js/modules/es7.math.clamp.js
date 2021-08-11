define("core-js/modules/es7.math.clamp", ["require","exports","module","./_export"], function (require, exports, module) {// https://rwaldron.github.io/proposal-math-extensions/
var $export = require('./_export');

$export($export.S, 'Math', {
  clamp: function clamp(x, lower, upper) {
    return Math.min(upper, Math.max(lower, x));
  }
});

});