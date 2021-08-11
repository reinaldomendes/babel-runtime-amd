define("core-js/modules/_dom-create", ["require","exports","module","./_is-object","./_global"], function (require, exports, module) {var isObject = require('./_is-object');
var document = require('./_global').document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

});