define("@babel/runtime/helpers/possibleConstructorReturn", ["exports","@babel/runtime/helpers/typeof","./assertThisInitialized","./interopRequireDefault"], function (_exports, _typeof2, _assertThisInitialized, _interopRequireDefault) {
  "use strict";

  _interopRequireDefault = _interopRequireDefault.__esModule ? _interopRequireDefault.default : _interopRequireDefault;

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _possibleConstructorReturn;
  _typeof2 = _interopRequireDefault(_typeof2);
  _assertThisInitialized = _interopRequireDefault(_assertThisInitialized);

  function _possibleConstructorReturn(self, call) {
    if (call && ((0, _typeof2["default"])(call) === "object" || typeof call === "function")) {
      return call;
    }

    return (0, _assertThisInitialized["default"])(self);
  }
});