define("core-js/modules/_object-keys", ["require","exports","module","./_object-keys-internal","./_enum-bug-keys"], function (require, exports, module) {// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = require('./_object-keys-internal');
var enumBugKeys = require('./_enum-bug-keys');

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};

});