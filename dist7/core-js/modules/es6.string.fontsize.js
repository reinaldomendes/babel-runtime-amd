define("core-js/modules/es6.string.fontsize", ["require","exports","module","./_string-html"], function (require, exports, module) {'use strict';
// B.2.3.8 String.prototype.fontsize(size)
require('./_string-html')('fontsize', function (createHTML) {
  return function fontsize(size) {
    return createHTML(this, 'font', 'size', size);
  };
});

});