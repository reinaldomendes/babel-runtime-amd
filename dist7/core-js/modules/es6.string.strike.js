define("core-js/modules/es6.string.strike", ["require","exports","module","./_string-html"], function (require, exports, module) {'use strict';
// B.2.3.12 String.prototype.strike()
require('./_string-html')('strike', function (createHTML) {
  return function strike() {
    return createHTML(this, 'strike', '', '');
  };
});

});