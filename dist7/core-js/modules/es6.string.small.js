define("core-js/modules/es6.string.small", ["require","exports","module","./_string-html"], function (require, exports, module) {'use strict';
// B.2.3.11 String.prototype.small()
require('./_string-html')('small', function (createHTML) {
  return function small() {
    return createHTML(this, 'small', '', '');
  };
});

});