define("@babel/runtime/helpers/classPrivateFieldGet", ["exports","./classApplyDescriptorGet","./classExtractFieldDescriptor","./interopRequireDefault"], function (_exports, _classApplyDescriptorGet, _classExtractFieldDescriptor, _interopRequireDefault) {
  "use strict";

  _interopRequireDefault = _interopRequireDefault.__esModule ? _interopRequireDefault.default : _interopRequireDefault;

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _classPrivateFieldGet;
  _classApplyDescriptorGet = _interopRequireDefault(_classApplyDescriptorGet);
  _classExtractFieldDescriptor = _interopRequireDefault(_classExtractFieldDescriptor);

  function _classPrivateFieldGet(receiver, privateMap) {
    var descriptor = (0, _classExtractFieldDescriptor["default"])(receiver, privateMap, "get");
    return (0, _classApplyDescriptorGet["default"])(receiver, descriptor);
  }
});