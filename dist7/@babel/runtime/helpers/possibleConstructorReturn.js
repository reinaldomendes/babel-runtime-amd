define("@babel/runtime/helpers/possibleConstructorReturn", ["exports","@babel/runtime/helpers/typeof","./assertThisInitialized"], function (_exports, _typeof2, _assertThisInitialized) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _possibleConstructorReturn;

  function _possibleConstructorReturn(self, call) {
    if (call && ((0, _typeof2["default"])(call) === "object" || typeof call === "function")) {
      return call;
    }

    return (0, _assertThisInitialized["default"])(self);
  }
});