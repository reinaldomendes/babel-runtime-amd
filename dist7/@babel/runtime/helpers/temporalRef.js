define("@babel/runtime/helpers/temporalRef", ["exports","./temporalUndefined","./tdz","./interopRequireDefault"], function (_exports, _temporalUndefined, _tdz, _interopRequireDefault) {
  "use strict";

  _interopRequireDefault = _interopRequireDefault.__esModule ? _interopRequireDefault.default : _interopRequireDefault;

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _temporalRef;
  _temporalUndefined = _interopRequireDefault(_temporalUndefined);
  _tdz = _interopRequireDefault(_tdz);

  function _temporalRef(val, name) {
    return val === _temporalUndefined["default"] ? (0, _tdz["default"])(name) : val;
  }
});