define("core-js/modules/es6.string.blink", ["require","exports","module","./_string-html"], function (require, exports, module) {'use strict';
// B.2.3.4 String.prototype.blink()
require('./_string-html')('blink', function (createHTML) {
  return function blink() {
    return createHTML(this, 'blink', '', '');
  };
});

});