define("core-js/modules/es6.object.get-prototype-of", ["require","exports","module","./_to-object","./_object-gpo","./_object-sap"], function (require, exports, module) {// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = require('./_to-object');
var $getPrototypeOf = require('./_object-gpo');

require('./_object-sap')('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});

});