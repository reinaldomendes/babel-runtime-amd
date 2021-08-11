define("@babel/runtime/helpers/arrayWithoutHoles", ["exports","./arrayLikeToArray","./interopRequireDefault"], function (_exports, _arrayLikeToArray, _interopRequireDefault) {
  "use strict";

  _interopRequireDefault = _interopRequireDefault.__esModule ? _interopRequireDefault.default : _interopRequireDefault;

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _arrayWithoutHoles;
  _arrayLikeToArray = _interopRequireDefault(_arrayLikeToArray);

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return (0, _arrayLikeToArray["default"])(arr);
  }
});