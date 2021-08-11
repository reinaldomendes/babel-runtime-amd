define("core-js/modules/es7.set.to-json", ["require","exports","module","./_export","./_collection-to-json"], function (require, exports, module) {// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = require('./_export');

$export($export.P + $export.R, 'Set', { toJSON: require('./_collection-to-json')('Set') });

});