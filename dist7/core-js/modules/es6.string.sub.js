define("core-js/modules/es6.string.sub", ["require","exports","module","./_string-html"], function (require, exports, module) {'use strict';
// B.2.3.13 String.prototype.sub()
require('./_string-html')('sub', function (createHTML) {
  return function sub() {
    return createHTML(this, 'sub', '', '');
  };
});

});