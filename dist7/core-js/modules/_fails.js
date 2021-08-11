define("core-js/modules/_fails", ["require","exports","module"], function (require, exports, module) {module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

});