webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/paragraph.jsx":
/*!**********************************!*\
  !*** ./components/paragraph.jsx ***!
  \**********************************/
/*! exports provided: foo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "foo", function() { return foo; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./components/styles.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/krzysztof/www/magesuite-web/components/paragraph.jsx";




var foo = function foo(_ref) {
  var children = _ref.children,
      size = _ref.size,
      centered = _ref.centered,
      distance = _ref.distance,
      _ref$light = _ref.light,
      light = _ref$light === void 0 ? false : _ref$light;
  var fontSize;
  var color = light ? _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].w : _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].d;
  var distanceSize;
  var classes = ['p'];

  if (centered) {
    classes.push('-centered');
  }

  if (distance) {
    classes.push('-with-distance');
  }

  switch (Number(size)) {
    case 20:
      fontSize = 18;
      distanceSize = 50;
      break;

    case 10:
    default:
      fontSize = 20;
      distanceSize = 74;
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2492496072", [Object(_styles__WEBPACK_IMPORTED_MODULE_2__["rem"])(fontSize), color, Object(_styles__WEBPACK_IMPORTED_MODULE_2__["rem"])(distanceSize)]]]) + " " + (classes.join(' ') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2492496072",
    css: ".p.__jsx-style-dynamic-selector{font-size:".concat(Object(_styles__WEBPACK_IMPORTED_MODULE_2__["rem"])(fontSize), ";max-width:50rem;color:").concat(color, ";line-height:160%;font-weight:300;}.-centered.__jsx-style-dynamic-selector{margin-left:auto;margin-right:auto;text-align:center;}.-with-distance.__jsx-style-dynamic-selector{margin-bottom:").concat(Object(_styles__WEBPACK_IMPORTED_MODULE_2__["rem"])(distanceSize), ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rcnp5c3p0b2Yvd3d3L21hZ2VzdWl0ZS13ZWIvY29tcG9uZW50cy9wYXJhZ3JhcGguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJCd0IsQUFHNEQsQUFPdEIsQUFNMEIsaUJBTHpCLGtCQUNBLElBUkYsSUFhcEIsVUFKQSxFQVJ1QyxtQ0FDbEIsaUJBQ0QsZ0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy9rcnp5c3p0b2Yvd3d3L21hZ2VzdWl0ZS13ZWIvY29tcG9uZW50cy9wYXJhZ3JhcGguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVtLCBjb2xvcnMgfSBmcm9tIFwiLi9zdHlsZXNcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuZXhwb3J0IGNvbnN0IGZvbz0gKHtjaGlsZHJlbiwgc2l6ZSwgY2VudGVyZWQsIGRpc3RhbmNlLCBsaWdodD1mYWxzZX0pID0+IHtcbiAgICBsZXQgZm9udFNpemU7XG4gICAgbGV0IGNvbG9yID0gbGlnaHQgPyBjb2xvcnMudyA6IGNvbG9ycy5kO1xuICAgIGxldCBkaXN0YW5jZVNpemU7XG4gICAgbGV0IGNsYXNzZXMgPSBbICdwJyBdO1xuICAgIGlmKGNlbnRlcmVkKSB7XG4gICAgICAgIGNsYXNzZXMucHVzaCgnLWNlbnRlcmVkJyk7XG4gICAgfVxuXG4gICAgaWYoZGlzdGFuY2UpIHtcbiAgICAgICAgY2xhc3Nlcy5wdXNoKCctd2l0aC1kaXN0YW5jZScpO1xuICAgIH1cbiAgICBzd2l0Y2goTnVtYmVyKHNpemUpKSB7XG4gICAgICAgIGNhc2UgMjA6XG4gICAgICAgICAgICBmb250U2l6ZSA9IDE4O1xuICAgICAgICAgICAgZGlzdGFuY2VTaXplID0gNTA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgZGVmYXVsdDogXG4gICAgICAgICAgICBmb250U2l6ZSA9IDIwO1xuICAgICAgICAgICAgZGlzdGFuY2VTaXplID0gNzQ7XG5cbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLmpvaW4oJyAnKX0+e2NoaWxkcmVufVxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC5wIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAke3JlbShmb250U2l6ZSl9O1xuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDUwcmVtO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHtjb2xvcn07XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNjAlO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuLWNlbnRlcmVkIHsgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLi13aXRoLWRpc3RhbmNlIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogJHtyZW0oZGlzdGFuY2VTaXplKX07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L3A+XG4gICAgKVxufSJdfQ== */\n/*@ sourceURL=/Users/krzysztof/www/magesuite-web/components/paragraph.jsx */"),
    dynamic: [Object(_styles__WEBPACK_IMPORTED_MODULE_2__["rem"])(fontSize), color, Object(_styles__WEBPACK_IMPORTED_MODULE_2__["rem"])(distanceSize)],
    __self: this
  }));
};

/***/ })

})
//# sourceMappingURL=index.js.fb66ec6afc35e3fcc016.hot-update.js.map