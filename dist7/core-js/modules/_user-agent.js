define("core-js/modules/_user-agent", ["require","exports","module","./_global"], function (require, exports, module) {var global = require('./_global');
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';

});