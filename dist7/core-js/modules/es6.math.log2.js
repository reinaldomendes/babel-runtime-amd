define("core-js/modules/es6.math.log2", ["require","exports","module","./_export"], function (require, exports, module) {// 20.2.2.22 Math.log2(x)
var $export = require('./_export');

$export($export.S, 'Math', {
  log2: function log2(x) {
    return Math.log(x) / Math.LN2;
  }
});

});