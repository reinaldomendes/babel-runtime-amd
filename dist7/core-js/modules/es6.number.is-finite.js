define("core-js/modules/es6.number.is-finite", ["require","exports","module","./_export","./_global"], function (require, exports, module) {// 20.1.2.2 Number.isFinite(number)
var $export = require('./_export');
var _isFinite = require('./_global').isFinite;

$export($export.S, 'Number', {
  isFinite: function isFinite(it) {
    return typeof it == 'number' && _isFinite(it);
  }
});

});