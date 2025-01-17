define("core-js/modules/core.regexp.escape", ["require","exports","module","./_export","./_replacer"], function (require, exports, module) {// https://github.com/benjamingr/RexExp.escape
var $export = require('./_export');
var $re = require('./_replacer')(/[\\^$*+?.()|[\]{}]/g, '\\$&');

$export($export.S, 'RegExp', { escape: function escape(it) { return $re(it); } });

});