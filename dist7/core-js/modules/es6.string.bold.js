define("core-js/modules/es6.string.bold", ["require","exports","module","./_string-html"], function (require, exports, module) {'use strict';
// B.2.3.5 String.prototype.bold()
require('./_string-html')('bold', function (createHTML) {
  return function bold() {
    return createHTML(this, 'b', '', '');
  };
});

});