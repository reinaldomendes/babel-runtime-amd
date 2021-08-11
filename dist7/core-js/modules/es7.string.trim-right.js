define("core-js/modules/es7.string.trim-right", ["require","exports","module","./_string-trim"], function (require, exports, module) {'use strict';
// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
require('./_string-trim')('trimRight', function ($trim) {
  return function trimRight() {
    return $trim(this, 2);
  };
}, 'trimEnd');

});