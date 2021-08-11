define("core-js/modules/es6.string.includes", ["require","exports","module","./_export","./_string-context","./_fails-is-regexp"], function (require, exports, module) {// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = require('./_export');
var context = require('./_string-context');
var INCLUDES = 'includes';

$export($export.P + $export.F * require('./_fails-is-regexp')(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});

});