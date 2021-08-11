define("@babel/runtime/helpers/maybeArrayLike", ["exports","./arrayLikeToArray","./interopRequireDefault"], function (_exports, _arrayLikeToArray, _interopRequireDefault) {
  "use strict";

  _interopRequireDefault = _interopRequireDefault.__esModule ? _interopRequireDefault.default : _interopRequireDefault;

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _maybeArrayLike;
  _arrayLikeToArray = _interopRequireDefault(_arrayLikeToArray);

  function _maybeArrayLike(next, arr, i) {
    if (arr && !Array.isArray(arr) && typeof arr.length === "number") {
      var len = arr.length;
      return (0, _arrayLikeToArray["default"])(arr, i !== void 0 && i < len ? i : len);
    }

    return next(arr, i);
  }
});