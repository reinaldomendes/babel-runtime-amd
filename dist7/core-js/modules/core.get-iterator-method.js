define("core-js/modules/core.get-iterator-method", ["require","exports","module","./_classof","./_wks","./_iterators","./_core"], function (require, exports, module) {var classof = require('./_classof');
var ITERATOR = require('./_wks')('iterator');
var Iterators = require('./_iterators');
module.exports = require('./_core').getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

});