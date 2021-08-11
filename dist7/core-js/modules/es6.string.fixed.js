define("core-js/modules/es6.string.fixed", ["require","exports","module","./_string-html"], function (require, exports, module) {'use strict';
// B.2.3.6 String.prototype.fixed()
require('./_string-html')('fixed', function (createHTML) {
  return function fixed() {
    return createHTML(this, 'tt', '', '');
  };
});

});