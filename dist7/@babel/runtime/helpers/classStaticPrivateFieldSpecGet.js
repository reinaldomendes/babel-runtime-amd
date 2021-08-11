define("@babel/runtime/helpers/classStaticPrivateFieldSpecGet", ["exports","./classApplyDescriptorGet","./classCheckPrivateStaticAccess","./classCheckPrivateStaticFieldDescriptor","./interopRequireDefault"], function (_exports, _classApplyDescriptorGet, _classCheckPrivateStaticAccess, _classCheckPrivateStaticFieldDescriptor, _interopRequireDefault) {
  "use strict";

  _interopRequireDefault = _interopRequireDefault.__esModule ? _interopRequireDefault.default : _interopRequireDefault;

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _classStaticPrivateFieldSpecGet;
  _classApplyDescriptorGet = _interopRequireDefault(_classApplyDescriptorGet);
  _classCheckPrivateStaticAccess = _interopRequireDefault(_classCheckPrivateStaticAccess);
  _classCheckPrivateStaticFieldDescriptor = _interopRequireDefault(_classCheckPrivateStaticFieldDescriptor);

  function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) {
    (0, _classCheckPrivateStaticAccess["default"])(receiver, classConstructor);
    (0, _classCheckPrivateStaticFieldDescriptor["default"])(descriptor, "get");
    return (0, _classApplyDescriptorGet["default"])(receiver, descriptor);
  }
});