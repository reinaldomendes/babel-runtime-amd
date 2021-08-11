define("@babel/runtime/helpers/wrapNativeSuper", ["exports","./getPrototypeOf","./setPrototypeOf","./isNativeFunction","./construct"], function (_exports, _getPrototypeOf, _setPrototypeOf, _isNativeFunction, _construct) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _wrapNativeSuper;

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _exports["default"] = _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !(0, _isNativeFunction["default"])(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return (0, _construct["default"])(Class, arguments, (0, _getPrototypeOf["default"])(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return (0, _setPrototypeOf["default"])(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }
});