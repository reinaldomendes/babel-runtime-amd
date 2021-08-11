define("@babel/runtime/helpers/inherits", ["exports","./setPrototypeOf","./interopRequireDefault"], function (_exports, _setPrototypeOf, _interopRequireDefault) {
  "use strict";

  _interopRequireDefault = _interopRequireDefault.__esModule ? _interopRequireDefault.default : _interopRequireDefault;

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _inherits;
  _setPrototypeOf = _interopRequireDefault(_setPrototypeOf);

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