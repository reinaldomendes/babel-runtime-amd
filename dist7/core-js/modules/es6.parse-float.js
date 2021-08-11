define("core-js/modules/es6.parse-float", ["require","exports","module","./_export","./_parse-float"], function (require, exports, module) {var $export = require('./_export');
var $parseFloat = require('./_parse-float');
// 18.2.4 parseFloat(string)
$export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });

});