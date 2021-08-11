define("@babel/runtime/helpers/classStaticPrivateMethodGet", ["exports","./classCheckPrivateStaticAccess"], function (_exports, _classCheckPrivateStaticAccess) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _classStaticPrivateMethodGet;

  function _classStaticPrivateMethodGet(receiver, classConstructor, method) {
    (0, _classCheckPrivateStaticAccess["default"])(receiver, classConstructor);
    return method;
  }
});