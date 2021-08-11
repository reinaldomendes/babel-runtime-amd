define("@babel/runtime/helpers/get", ["exports","./superPropBase"], function (_exports, _superPropBase) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _get;

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _exports["default"] = _get = Reflect.get;
    } else {
      _exports["default"] = _get = function _get(target, property, receiver) {
        var base = (0, _superPropBase["default"])(target, property);
        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }
});