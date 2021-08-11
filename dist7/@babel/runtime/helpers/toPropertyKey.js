define("@babel/runtime/helpers/toPropertyKey", ["exports","@babel/runtime/helpers/typeof","./toPrimitive"], function (_exports, _typeof2, _toPrimitive) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _toPropertyKey;

  function _toPropertyKey(arg) {
    var key = (0, _toPrimitive["default"])(arg, "string");
    return (0, _typeof2["default"])(key) === "symbol" ? key : String(key);
  }
});