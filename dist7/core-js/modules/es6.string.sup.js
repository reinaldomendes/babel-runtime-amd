define("core-js/modules/es6.string.sup", ["require","exports","module","./_string-html"], function (require, exports, module) {'use strict';
// B.2.3.14 String.prototype.sup()
require('./_string-html')('sup', function (createHTML) {
  return function sup() {
    return createHTML(this, 'sup', '', '');
  };
});

});