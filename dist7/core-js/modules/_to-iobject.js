define("core-js/modules/_to-iobject", ["require","exports","module","./_iobject","./_defined"], function (require, exports, module) {// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./_iobject');
var defined = require('./_defined');
module.exports = function (it) {
  return IObject(defined(it));
};

});