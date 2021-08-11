define("@babel/runtime/helpers/toPropertyKey", ["exports","@babel/runtime/helpers/typeof","./toPrimitive","./interopRequireDefault"], function (_exports, _typeof2, _toPrimitive, _interopRequireDefault) {
  "use strict";

  _interopRequireDefault = _interopRequireDefault.__esModule ? _interopRequireDefault.default : _interopRequireDefault;

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _toPropertyKey;
  _typeof2 = _interopRequireDefault(_typeof2);
  _toPrimitive = _interopRequireDefault(_toPrimitive);

  function _toPropertyKey(arg) {
    var key = (0, _toPrimitive["default"])(arg, "string");
    return (0, _typeof2["default"])(key) === "symbol" ? key : String(key);
  }
});