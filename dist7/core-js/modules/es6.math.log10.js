define("core-js/modules/es6.math.log10", ["require","exports","module","./_export"], function (require, exports, module) {// 20.2.2.21 Math.log10(x)
var $export = require('./_export');

$export($export.S, 'Math', {
  log10: function log10(x) {
    return Math.log(x) * Math.LOG10E;
  }
});

});