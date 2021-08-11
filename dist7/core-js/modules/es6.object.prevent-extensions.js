define("core-js/modules/es6.object.prevent-extensions", ["require","exports","module","./_is-object","./_meta","./_object-sap"], function (require, exports, module) {// 19.1.2.15 Object.preventExtensions(O)
var isObject = require('./_is-object');
var meta = require('./_meta').onFreeze;

require('./_object-sap')('preventExtensions', function ($preventExtensions) {
  return function preventExtensions(it) {
    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
  };
});

});