define("core-js/modules/_html", ["require","exports","module","./_global"], function (require, exports, module) {var document = require('./_global').document;
module.exports = document && document.documentElement;

});