define("core-js/modules/es6.string.code-point-at", ["require","exports","module","./_export","./_string-at"], function (require, exports, module) {'use strict';
var $export = require('./_export');
var $at = require('./_string-at')(false);
$export($export.P, 'String', {
  // 21.1.3.3 String.prototype.codePointAt(pos)
  codePointAt: function codePointAt(pos) {
    return $at(this, pos);
  }
});

});