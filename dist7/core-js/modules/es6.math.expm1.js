define("core-js/modules/es6.math.expm1", ["require","exports","module","./_export","./_math-expm1"], function (require, exports, module) {// 20.2.2.14 Math.expm1(x)
var $export = require('./_export');
var $expm1 = require('./_math-expm1');

$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', { expm1: $expm1 });

});