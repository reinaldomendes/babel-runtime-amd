define("core-js/modules/es6.number.parse-int", ["require","exports","module","./_export","./_parse-int"], function (require, exports, module) {var $export = require('./_export');
var $parseInt = require('./_parse-int');
// 20.1.2.13 Number.parseInt(string, radix)
$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', { parseInt: $parseInt });

});