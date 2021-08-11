define("@babel/runtime/helpers/slicedToArray", ["exports","./arrayWithHoles","./iterableToArrayLimit","./unsupportedIterableToArray","./nonIterableRest","./interopRequireDefault"], function (_exports, _arrayWithHoles, _iterableToArrayLimit, _unsupportedIterableToArray, _nonIterableRest, _interopRequireDefault) {
  "use strict";

  _interopRequireDefault = _interopRequireDefault.__esModule ? _interopRequireDefault.default : _interopRequireDefault;

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _slicedToArray;
  _arrayWithHoles = _interopRequireDefault(_arrayWithHoles);
  _iterableToArrayLimit = _interopRequireDefault(_iterableToArrayLimit);
  _unsupportedIterableToArray = _interopRequireDefault(_unsupportedIterableToArray);
  _nonIterableRest = _interopRequireDefault(_nonIterableRest);

  function _slicedToArray(arr, i) {
    return (0, _arrayWithHoles["default"])(arr) || (0, _iterableToArrayLimit["default"])(arr, i) || (0, _unsupportedIterableToArray["default"])(arr, i) || (0, _nonIterableRest["default"])();
  }
});