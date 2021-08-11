define("core-js/modules/es6.object.is-sealed", ["require","exports","module","./_is-object","./_object-sap"], function (require, exports, module) {// 19.1.2.13 Object.isSealed(O)
var isObject = require('./_is-object');

require('./_object-sap')('isSealed', function ($isSealed) {
  return function isSealed(it) {
    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
  };
});

});