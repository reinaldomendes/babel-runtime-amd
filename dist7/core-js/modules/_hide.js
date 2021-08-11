define("core-js/modules/_hide", ["require","exports","module","./_object-dp","./_property-desc","./_descriptors"], function (require, exports, module) {var dP = require('./_object-dp');
var createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

});