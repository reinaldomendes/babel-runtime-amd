define("@babel/runtime/helpers/objectWithoutProperties", ["exports","./objectWithoutPropertiesLoose"], function (_exports, _objectWithoutPropertiesLoose) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _objectWithoutProperties;

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = (0, _objectWithoutPropertiesLoose["default"])(source, excluded);
    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }
});