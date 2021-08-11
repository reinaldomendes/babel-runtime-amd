define("@babel/runtime/helpers/awaitAsyncGenerator", ["exports","./AwaitValue"], function (_exports, _AwaitValue) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _awaitAsyncGenerator;

  function _awaitAsyncGenerator(value) {
    return new _AwaitValue["default"](value);
  }
});