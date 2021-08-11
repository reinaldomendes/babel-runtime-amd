define("core-js/modules/es7.system.global", ["require","exports","module","./_export","./_global"], function (require, exports, module) {// https://github.com/tc39/proposal-global
var $export = require('./_export');

$export($export.S, 'System', { global: require('./_global') });

});