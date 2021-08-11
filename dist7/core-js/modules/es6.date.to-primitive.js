define("core-js/modules/es6.date.to-primitive", ["require","exports","module","./_wks","./_hide","./_date-to-primitive"], function (require, exports, module) {var TO_PRIMITIVE = require('./_wks')('toPrimitive');
var proto = Date.prototype;

if (!(TO_PRIMITIVE in proto)) require('./_hide')(proto, TO_PRIMITIVE, require('./_date-to-primitive'));

});