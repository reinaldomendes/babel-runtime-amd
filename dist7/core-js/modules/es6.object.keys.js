define("core-js/modules/es6.object.keys", ["require","exports","module","./_to-object","./_object-keys","./_object-sap"], function (require, exports, module) {// 19.1.2.14 Object.keys(O)
var toObject = require('./_to-object');
var $keys = require('./_object-keys');

require('./_object-sap')('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});

});