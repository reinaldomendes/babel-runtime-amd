define("core-js/modules/es6.string.trim", ["require","exports","module","./_string-trim"], function (require, exports, module) {'use strict';
// 21.1.3.25 String.prototype.trim()
require('./_string-trim')('trim', function ($trim) {
  return function trim() {
    return $trim(this, 3);
  };
});

});