define("core-js/modules/es6.object.get-own-property-names", ["require","exports","module","./_object-sap","./_object-gopn-ext"], function (require, exports, module) {// 19.1.2.7 Object.getOwnPropertyNames(O)
require('./_object-sap')('getOwnPropertyNames', function () {
  return require('./_object-gopn-ext').f;
});

});