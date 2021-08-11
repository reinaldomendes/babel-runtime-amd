define("core-js/modules/es6.regexp.flags", ["require","exports","module","./_descriptors","./_object-dp","./_flags"], function (require, exports, module) {// 21.2.5.3 get RegExp.prototype.flags()
if (require('./_descriptors') && /./g.flags != 'g') require('./_object-dp').f(RegExp.prototype, 'flags', {
  configurable: true,
  get: require('./_flags')
});

});