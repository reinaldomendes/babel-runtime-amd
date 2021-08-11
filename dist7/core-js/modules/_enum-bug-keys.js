define("core-js/modules/_enum-bug-keys", ["require","exports","module"], function (require, exports, module) {// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

});