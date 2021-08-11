define("core-js/modules/es7.string.trim-left", ["require","exports","module","./_string-trim"], function (require, exports, module) {'use strict';
// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
require('./_string-trim')('trimLeft', function ($trim) {
  return function trimLeft() {
    return $trim(this, 1);
  };
}, 'trimStart');

});