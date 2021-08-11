define("core-js/modules/es6.number.epsilon", ["require","exports","module","./_export"], function (require, exports, module) {// 20.1.2.1 Number.EPSILON
var $export = require('./_export');

$export($export.S, 'Number', { EPSILON: Math.pow(2, -52) });

});