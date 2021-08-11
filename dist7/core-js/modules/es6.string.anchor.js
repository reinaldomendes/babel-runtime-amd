define("core-js/modules/es6.string.anchor", ["require","exports","module","./_string-html"], function (require, exports, module) {'use strict';
// B.2.3.2 String.prototype.anchor(name)
require('./_string-html')('anchor', function (createHTML) {
  return function anchor(name) {
    return createHTML(this, 'a', 'name', name);
  };
});

});