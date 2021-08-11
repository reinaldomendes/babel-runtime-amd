define("core-js/modules/es6.number.parse-float", ["require","exports","module","./_export","./_parse-float"], function (require, exports, module) {var $export = require('./_export');
var $parseFloat = require('./_parse-float');
// 20.1.2.12 Number.parseFloat(string)
$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', { parseFloat: $parseFloat });

});