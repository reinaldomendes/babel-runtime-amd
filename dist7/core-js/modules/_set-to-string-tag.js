define("core-js/modules/_set-to-string-tag", ["require","exports","module","./_object-dp","./_has","./_wks"], function (require, exports, module) {var def = require('./_object-dp').f;
var has = require('./_has');
var TAG = require('./_wks')('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};

});