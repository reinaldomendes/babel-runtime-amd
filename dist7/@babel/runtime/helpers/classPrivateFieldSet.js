define("@babel/runtime/helpers/classPrivateFieldSet", ["exports","./classApplyDescriptorSet","./classExtractFieldDescriptor","./interopRequireDefault"], function (_exports, _classApplyDescriptorSet, _classExtractFieldDescriptor, _interopRequireDefault) {
  "use strict";

  _interopRequireDefault = _interopRequireDefault.__esModule ? _interopRequireDefault.default : _interopRequireDefault;

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _classPrivateFieldSet;
  _classApplyDescriptorSet = _interopRequireDefault(_classApplyDescriptorSet);
  _classExtractFieldDescriptor = _interopRequireDefault(_classExtractFieldDescriptor);

  function _classPrivateFieldSet(receiver, privateMap, value) {
    var descriptor = (0, _classExtractFieldDescriptor["default"])(receiver, privateMap, "set");
    (0, _classApplyDescriptorSet["default"])(receiver, descriptor, value);
    return value;
  }
});