define("core-js/modules/es6.object.is-extensible", ["require","exports","module","./_is-object","./_object-sap"], function (require, exports, module) {// 19.1.2.11 Object.isExtensible(O)
var isObject = require('./_is-object');

require('./_object-sap')('isExtensible', function ($isExtensible) {
  return function isExtensible(it) {
    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
  };
});

});