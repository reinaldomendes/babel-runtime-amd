define("@babel/runtime/helpers/construct", ["exports","./setPrototypeOf","./isNativeReflectConstruct"], function (_exports, _setPrototypeOf, _isNativeReflectConstruct) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _construct;

  function _construct(Parent, args, Class) {
    if ((0, _isNativeReflectConstruct["default"])()) {
      _exports["default"] = _construct = Reflect.construct;
    } else {
      _exports["default"] = _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) (0, _setPrototypeOf["default"])(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }
});