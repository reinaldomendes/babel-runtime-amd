define("core-js/modules/es6.object.get-own-property-descriptor", ["require","exports","module","./_to-iobject","./_object-gopd","./_object-sap"], function (require, exports, module) {// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = require('./_to-iobject');
var $getOwnPropertyDescriptor = require('./_object-gopd').f;

require('./_object-sap')('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});

});