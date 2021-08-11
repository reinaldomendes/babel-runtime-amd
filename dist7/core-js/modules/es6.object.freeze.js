define("core-js/modules/es6.object.freeze", ["require","exports","module","./_is-object","./_meta","./_object-sap"], function (require, exports, module) {// 19.1.2.5 Object.freeze(O)
var isObject = require('./_is-object');
var meta = require('./_meta').onFreeze;

require('./_object-sap')('freeze', function ($freeze) {
  return function freeze(it) {
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});

});