define("@babel/runtime/helpers/temporalRef", ["exports","./temporalUndefined","./tdz"], function (_exports, _temporalUndefined, _tdz) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _temporalRef;

  function _temporalRef(val, name) {
    return val === _temporalUndefined["default"] ? (0, _tdz["default"])(name) : val;
  }
});