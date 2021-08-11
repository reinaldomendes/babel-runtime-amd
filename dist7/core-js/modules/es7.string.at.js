define("core-js/modules/es7.string.at", ["require","exports","module","./_export","./_string-at"], function (require, exports, module) {'use strict';
// https://github.com/mathiasbynens/String.prototype.at
var $export = require('./_export');
var $at = require('./_string-at')(true);

$export($export.P, 'String', {
  at: function at(pos) {
    return $at(this, pos);
  }
});

});