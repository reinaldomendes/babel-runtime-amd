define("@babel/runtime/helpers/superPropBase", ["exports","./getPrototypeOf"], function (_exports, _getPrototypeOf) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _superPropBase;

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = (0, _getPrototypeOf["default"])(object);
      if (object === null) break;
    }

    return object;
  }
});