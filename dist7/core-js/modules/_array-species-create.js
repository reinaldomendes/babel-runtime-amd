define("core-js/modules/_array-species-create", ["require","exports","module","./_array-species-constructor"], function (require, exports, module) {// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = require('./_array-species-constructor');

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};

});