define("core-js/modules/es7.global", ["require","exports","module","./_export","./_global"], function (require, exports, module) {// https://github.com/tc39/proposal-global
var $export = require('./_export');

$export($export.G, { global: require('./_global') });

});