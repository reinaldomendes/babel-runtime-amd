define("core-js/modules/es6.reflect.get-prototype-of", ["require","exports","module","./_export","./_object-gpo","./_an-object"], function (require, exports, module) {// 26.1.8 Reflect.getPrototypeOf(target)
var $export = require('./_export');
var getProto = require('./_object-gpo');
var anObject = require('./_an-object');

$export($export.S, 'Reflect', {
  getPrototypeOf: function getPrototypeOf(target) {
    return getProto(anObject(target));
  }
});

});