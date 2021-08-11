define("@babel/runtime/helpers/tdz", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _tdzError;

  function _tdzError(name) {
    throw new ReferenceError(name + " is not defined - temporal dead zone");
  }
});