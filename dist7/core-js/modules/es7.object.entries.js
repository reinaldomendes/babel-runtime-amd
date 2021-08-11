define("core-js/modules/es7.object.entries", ["require","exports","module","./_export","./_object-to-array"], function (require, exports, module) {// https://github.com/tc39/proposal-object-values-entries
var $export = require('./_export');
var $entries = require('./_object-to-array')(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});

});