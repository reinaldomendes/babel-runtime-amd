define("core-js/modules/es6.math.cosh", ["require","exports","module","./_export"], function (require, exports, module) {// 20.2.2.12 Math.cosh(x)
var $export = require('./_export');
var exp = Math.exp;

$export($export.S, 'Math', {
  cosh: function cosh(x) {
    return (exp(x = +x) + exp(-x)) / 2;
  }
});

});