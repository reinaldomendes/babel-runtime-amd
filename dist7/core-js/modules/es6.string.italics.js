define("core-js/modules/es6.string.italics", ["require","exports","module","./_string-html"], function (require, exports, module) {'use strict';
// B.2.3.9 String.prototype.italics()
require('./_string-html')('italics', function (createHTML) {
  return function italics() {
    return createHTML(this, 'i', '', '');
  };
});

});