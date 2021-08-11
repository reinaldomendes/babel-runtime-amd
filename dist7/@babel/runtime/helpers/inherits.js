define("@babel/runtime/helpers/inherits", ["exports","./setPrototypeOf"], function (_exports, _setPrototypeOf) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _inherits;

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) (0, _setPrototypeOf["default"])(subClass, superClass);
  }
});