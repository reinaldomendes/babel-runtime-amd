define("core-js/modules/es6.date.now", ["require","exports","module","./_export"], function (require, exports, module) {// 20.3.3.1 / 15.9.4.4 Date.now()
var $export = require('./_export');

$export($export.S, 'Date', { now: function () { return new Date().getTime(); } });

});