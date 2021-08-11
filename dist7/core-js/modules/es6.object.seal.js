define("core-js/modules/es6.object.seal", ["require","exports","module","./_is-object","./_meta","./_object-sap"], function (require, exports, module) {// 19.1.2.17 Object.seal(O)
var isObject = require('./_is-object');
var meta = require('./_meta').onFreeze;

require('./_object-sap')('seal', function ($seal) {
  return function seal(it) {
    return $seal && isObject(it) ? $seal(meta(it)) : it;
  };
});

});