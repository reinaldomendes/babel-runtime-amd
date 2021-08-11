define("@babel/runtime/helpers/awaitAsyncGenerator", ["exports","./AwaitValue","./interopRequireDefault"], function (_exports, _AwaitValue, _interopRequireDefault) {
  "use strict";

  _interopRequireDefault = _interopRequireDefault.__esModule ? _interopRequireDefault.default : _interopRequireDefault;

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _awaitAsyncGenerator;
  _AwaitValue = _interopRequireDefault(_AwaitValue);

  function _awaitAsyncGenerator(value) {
    return new _AwaitValue["default"](value);
  }
});