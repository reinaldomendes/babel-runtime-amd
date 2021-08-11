define("core-js/modules/web.immediate", ["require","exports","module","./_export","./_task"], function (require, exports, module) {var $export = require('./_export');
var $task = require('./_task');
$export($export.G + $export.B, {
  setImmediate: $task.set,
  clearImmediate: $task.clear
});

});