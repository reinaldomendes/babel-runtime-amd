define("core-js/modules/es6.string.fontcolor", ["require","exports","module","./_string-html"], function (require, exports, module) {'use strict';
// B.2.3.7 String.prototype.fontcolor(color)
require('./_string-html')('fontcolor', function (createHTML) {
  return function fontcolor(color) {
    return createHTML(this, 'font', 'color', color);
  };
});

});