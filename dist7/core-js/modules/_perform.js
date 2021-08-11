define("core-js/modules/_perform", ["require","exports","module"], function (require, exports, module) {module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};

});