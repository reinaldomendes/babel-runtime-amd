define("core-js/modules/es7.object.values", ["require","exports","module","./_export","./_object-to-array"], function (require, exports, module) {// https://github.com/tc39/proposal-object-values-entries
var $export = require('./_export');
var $values = require('./_object-to-array')(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});

});