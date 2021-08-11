define("@babel/runtime/helpers/superPropBase", ["exports","./getPrototypeOf","./interopRequireDefault"], function (_exports, _getPrototypeOf, _interopRequireDefault) {
  "use strict";

  _interopRequireDefault = _interopRequireDefault.__esModule ? _interopRequireDefault.default : _interopRequireDefault;

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _superPropBase;
  _getPrototypeOf = _interopRequireDefault(_getPrototypeOf);

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = (0, _getPrototypeOf["default"])(object);
      if (object === null) break;
    }

    return object;
  }
});