define("@babel/runtime/helpers/classStaticPrivateMethodGet", ["exports","./classCheckPrivateStaticAccess","./interopRequireDefault"], function (_exports, _classCheckPrivateStaticAccess, _interopRequireDefault) {
  "use strict";

  _interopRequireDefault = _interopRequireDefault.__esModule ? _interopRequireDefault.default : _interopRequireDefault;

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _classStaticPrivateMethodGet;
  _classCheckPrivateStaticAccess = _interopRequireDefault(_classCheckPrivateStaticAccess);

  function _classStaticPrivateMethodGet(receiver, classConstructor, method) {
    (0, _classCheckPrivateStaticAccess["default"])(receiver, classConstructor);
    return method;
  }
});