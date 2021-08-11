define("@babel/runtime/helpers/wrapAsyncGenerator", ["exports","./AsyncGenerator","./interopRequireDefault"], function (_exports, _AsyncGenerator, _interopRequireDefault) {
  "use strict";

  _interopRequireDefault = _interopRequireDefault.__esModule ? _interopRequireDefault.default : _interopRequireDefault;

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _wrapAsyncGenerator;
  _AsyncGenerator = _interopRequireDefault(_AsyncGenerator);

  function _wrapAsyncGenerator(fn) {
    return function () {
      return new _AsyncGenerator["default"](fn.apply(this, arguments));
    };
  }
});