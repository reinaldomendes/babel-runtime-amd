define("core-js/modules/es6.number.is-nan", ["require","exports","module","./_export"], function (require, exports, module) {// 20.1.2.4 Number.isNaN(number)
var $export = require('./_export');

$export($export.S, 'Number', {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});

});