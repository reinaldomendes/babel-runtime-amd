define("core-js/modules/es6.parse-int", ["require","exports","module","./_export","./_parse-int"], function (require, exports, module) {var $export = require('./_export');
var $parseInt = require('./_parse-int');
// 18.2.5 parseInt(string, radix)
$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });

});