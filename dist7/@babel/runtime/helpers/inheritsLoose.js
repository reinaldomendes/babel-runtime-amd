define("@babel/runtime/helpers/inheritsLoose", ["exports","./setPrototypeOf","./interopRequireDefault"], function (_exports, _setPrototypeOf, _interopRequireDefault) {
  "use strict";

  _interopRequireDefault = _interopRequireDefault.__esModule ? _interopRequireDefault.default : _interopRequireDefault;

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _inheritsLoose;
  _setPrototypeOf = _interopRequireDefault(_setPrototypeOf);

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    (0, _setPrototypeOf["default"])(subClass, superClass);
  }
});