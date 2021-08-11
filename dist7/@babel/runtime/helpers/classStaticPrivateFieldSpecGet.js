define("@babel/runtime/helpers/classStaticPrivateFieldSpecGet", ["exports","./classApplyDescriptorGet","./classCheckPrivateStaticAccess","./classCheckPrivateStaticFieldDescriptor"], function (_exports, _classApplyDescriptorGet, _classCheckPrivateStaticAccess, _classCheckPrivateStaticFieldDescriptor) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _classStaticPrivateFieldSpecGet;

  function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) {
    (0, _classCheckPrivateStaticAccess["default"])(receiver, classConstructor);
    (0, _classCheckPrivateStaticFieldDescriptor["default"])(descriptor, "get");
    return (0, _classApplyDescriptorGet["default"])(receiver, descriptor);
  }
});