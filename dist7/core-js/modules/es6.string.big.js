define("core-js/modules/es6.string.big", ["require","exports","module","./_string-html"], function (require, exports, module) {'use strict';
// B.2.3.3 String.prototype.big()
require('./_string-html')('big', function (createHTML) {
  return function big() {
    return createHTML(this, 'big', '', '');
  };
});

});