define("core-js/modules/es6.object.is-frozen", ["require","exports","module","./_is-object","./_object-sap"], function (require, exports, module) {// 19.1.2.12 Object.isFrozen(O)
var isObject = require('./_is-object');

require('./_object-sap')('isFrozen', function ($isFrozen) {
  return function isFrozen(it) {
    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
  };
});

});