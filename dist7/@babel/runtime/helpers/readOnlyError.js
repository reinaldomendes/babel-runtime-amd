define("@babel/runtime/helpers/readOnlyError", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _readOnlyError;

  function _readOnlyError(name) {
    throw new TypeError("\"" + name + "\" is read-only");
  }
});