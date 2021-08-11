define("core-js/modules/es6.string.link", ["require","exports","module","./_string-html"], function (require, exports, module) {'use strict';
// B.2.3.10 String.prototype.link(url)
require('./_string-html')('link', function (createHTML) {
  return function link(url) {
    return createHTML(this, 'a', 'href', url);
  };
});

});