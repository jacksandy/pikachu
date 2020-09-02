// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"K4Xi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "/*\n*\u8BA9\u6211\u4EEC\u6765\u505A\u4E00\u53EA\u5C0F\u53EF\u7231\u5427~\n*\u770B\u770B\u4F60\u80FD\u731C\u51FA\u6765\u6211\u7684\u540D\u5B57\u561B\uFF1F\n*\u9996\u5148\uFF0C\u4ED6\u6709\u9EC4\u8272\u7684\u76AE\u80A4\n*/\n  .skin {\n    background: #ffe600;\n    min-height: 50vh;\n    position: relative;\n  }\n  /*\n  * \u7136\u540E\u662F\u9ED1\u8272\u7684\u5C0F\u9F3B\u5B50\n  */\n  .nose {\n    border: 10px solid red;\n    border-color: black transparent transparent;\n    border-bottom: none;\n    width: 0px;\n    height: 0px;\n    position: relative;\n    left: 50%;\n    top: 148px;\n    margin-left: -10px;\n  }\n  .yuan {\n    position: absolute;\n    width: 20px;\n    height: 6px;\n    top: -16px;\n    left: -10px;\n    border-radius: 10px 10px 0 0;\n    background-color: black;\n  }\n  @keyframes wave {\n    0% {\n      transform: rotate(0deg);\n    }\n    33% {\n      transform: rotate(5deg);\n    }\n    66% {\n      transform: rotate(-5deg);\n    }\n    100% {\n      transform: rotate(0deg);\n    }\n  }\n  .nose:hover {\n    transform-origin: center bottom;\n    animation: wave 200ms infinite linear;\n  }\n\n  /*\n  *\u518D\u6765\u4E00\u53CC\u53EF\u7231\u7684\u5927\u773C\u775B\n  */\n  .eye {\n    border: 2px solid #000;\n    width: 64px;\n    height: 64px;\n    position: absolute;\n    top: 100px;\n    left: 50%;\n    margin-left: -32px;\n    background: #2e2e2e;\n    border-radius: 50%;\n  }\n  .eye::before {\n    content: \"\";\n    display: block;\n    border: 3px solid #000;\n    width: 25px;\n    height: 25px;\n    background: #fff;\n    border-radius: 50%;\n    position: relative;\n    left: 8px;\n    top: 4px;\n  }\n  .eye.left {\n    transform: translateX(-100px);\n  }\n  .eye.right {\n    transform: translateX(100px);\n  }\n  /*\n  *\u4E00\u5F20\u6A31\u6843\u5927\u53E3\n  */\n  .mouth {\n    width: 150px;\n    height: 150px;\n    position: absolute;\n    left: 50%;\n    margin-left: -75px;\n    top: 180px;\n  }\n  .mouth .up {\n    position: relative;\n    top: -10px;\n    z-index: 1;\n  }\n  /*\n  *\u5361\u54C7\u4F0A\u7684\u4E0A\u5634\u5507\n  */\n  .mouth .up .lip {\n    border: 3px solid #000;\n    width: 75px;\n    height: 25px;\n    border-top-color: transparent;\n    border-right-color: transparent;\n    position: relative;\n    position: absolute;\n    left: 50%;\n    background: #ffe600;\n  }\n  .mouth .up .lip.left {\n    border-radius: 0 0 0 50px;\n    transform: rotate(-22deg);\n    margin-left: -75px;\n  }\n  .mouth .up .lip.right {\n    border-radius: 0 0 50px 0;\n    transform: rotate(22deg);\n    margin-right: -75px;\n  }\n  .mouth .up .lip::before {\n    content: \"\";\n    display: block;\n    width: 7px;\n    height: 30px;\n    position: absolute;\n    bottom: 0;\n    background: #ffe600;\n  }\n  .mouth .up .lip.left::before {\n    right: -4px;\n  }\n  .mouth .up .lip.right::before {\n    left: -4px;\n  }\n  /*\n  *\u5706\u6DA6\u7684\u4E0B\u5634\u5507\n  */\n  .mouth .down {\n    height: 180px;\n    position: absolute;\n    top: 0px;\n    width: 100%;\n    overflow: hidden;\n  }\n  .mouth .down .yuan1 {\n    width: 100%;\n    height: 1000px;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    border-radius: 75px/400px;\n    background: #9b000a;\n    overflow: hidden;\n  }\n  /*\n  *\u770B\u6211\u7684\u5C0F\u820C\u5934\n  */\n  .mouth .down .yuan1 .yuan2 {\n    width: 200px;\n    height: 300px;\n    background: #ff458f;\n    position: absolute;\n    bottom: -156px;\n    left: 50%;\n    margin-left: -100px;\n    border-radius: 100px;\n  }\n  /*\n  *\u518D\u6765\u4E00\u526F\u5C0F\u8138\u86CB\n  */\n  .face {\n    position: absolute;\n    left: 50%;\n    border: 3px solid black;\n    width: 88px;\n    height: 88px;\n    margin-left: -44px;\n    z-index: 1;\n    top: 235px;\n    background: #ff0000;\n    border-radius: 50%;\n  }\n  .face.left {\n    transform: translateX(-152px);\n  }\n  .face.right {\n    transform: translateX(152px);\n  }\n/*\n * \u770B\u6211\u53EF\u7231\u5417\uFF1F\u5141\u8BB8\u4F60\u6478\u6478\u6211\u7684\u9F3B\u5B50\u54E6~\n * \u5C0Fi\u7AE5\u978B \u795D\u4F60\u5F00\u542F\u4E00\u4E2A\u6109\u5FEB\u7684\u591C\u665A\u5450~~\u54C8\u54C8\u54C8\n * \n * \n * \n*/\n";
var _default = string;
exports.default = _default;
},{}],"HdJB":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var n = 1;
var time = 150;
demo.innerText = _css.default.substr(0, n);
demo2.innerHTML = _css.default.substr(0, n);

var run = function run() {
  n += 1;

  if (n > _css.default.length) {
    window.clearInterval(id);
    return;
  }

  demo.innerText = _css.default.substr(0, n);
  demo2.innerHTML = _css.default.substr(0, n);
  demo.scrollTop = demo.scrollHeight;
};

var id = setInterval(function () {
  run();
}, time);

btnPause.onclick = function () {
  window.clearInterval(id);
};

btnPaly.onclick = function () {
  id = setInterval(function () {
    run();
  }, time);
};

btnSlow.onclick = function () {
  window.clearInterval(id);
  time = 300;
  id = setInterval(function () {
    run();
  }, time);
};

btnNormal.onclick = function () {
  window.clearInterval(id);
  time = 100;
  id = setInterval(function () {
    run();
  }, time);
};

btnFast.onclick = function () {
  window.clearInterval(id);
  time = 0;
  id = setInterval(function () {
    run();
  }, time);
};
},{"./css.js":"K4Xi"}]},{},["HdJB"], null)
//# sourceMappingURL=test.f109c9ad.js.map