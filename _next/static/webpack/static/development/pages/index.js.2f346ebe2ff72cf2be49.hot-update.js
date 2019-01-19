webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/paragraph.jsx":
/*!**********************************!*\
  !*** ./components/paragraph.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./components/styles.jsx");
var _jsxFileName = "/Users/krzysztof/www/magesuite-web/components/paragraph.jsx";



/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2581689656", [Object(_styles__WEBPACK_IMPORTED_MODULE_2__["rem"])(fontSize), color, Object(_styles__WEBPACK_IMPORTED_MODULE_2__["rem"])(distanceSize)]]]) + " " + (classes.join(' ') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2581689656",
    css: ".p.__jsx-style-dynamic-selector{font-size:".concat(Object(_styles__WEBPACK_IMPORTED_MODULE_2__["rem"])(fontSize), ";max-width:50rem;color:").concat(color, ";line-height:160%;}.-centered.__jsx-style-dynamic-selector{margin-left:auto;margin-right:auto;text-align:center;}.-with-distance.__jsx-style-dynamic-selector{margin-bottom:").concat(Object(_styles__WEBPACK_IMPORTED_MODULE_2__["rem"])(distanceSize), ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rcnp5c3p0b2Yvd3d3L21hZ2VzdWl0ZS13ZWIvY29tcG9uZW50cy9wYXJhZ3JhcGguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCd0IsQUFHNEQsQUFNdEIsQUFNMEIsaUJBTHpCLGtCQUNBLElBUEYsSUFZcEIsVUFKQSxFQVB1QyxtQ0FDbEIsaUJBQ3JCIiwiZmlsZSI6Ii9Vc2Vycy9rcnp5c3p0b2Yvd3d3L21hZ2VzdWl0ZS13ZWIvY29tcG9uZW50cy9wYXJhZ3JhcGguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVtLCBjb2xvcnMgfSBmcm9tIFwiLi9zdHlsZXNcIjtcbmV4cG9ydCBkZWZhdWx0ICh7Y2hpbGRyZW4sIHNpemUsIGNlbnRlcmVkLCBkaXN0YW5jZSwgbGlnaHQ9ZmFsc2V9KSA9PiB7XG4gICAgbGV0IGZvbnRTaXplO1xuICAgIGxldCBjb2xvciA9IGxpZ2h0ID8gY29sb3JzLncgOiBjb2xvcnMuZDtcbiAgICBsZXQgZGlzdGFuY2VTaXplO1xuICAgIGxldCBjbGFzc2VzID0gWyAncCcgXTtcbiAgICBpZihjZW50ZXJlZCkge1xuICAgICAgICBjbGFzc2VzLnB1c2goJy1jZW50ZXJlZCcpO1xuICAgIH1cblxuICAgIGlmKGRpc3RhbmNlKSB7XG4gICAgICAgIGNsYXNzZXMucHVzaCgnLXdpdGgtZGlzdGFuY2UnKTtcbiAgICB9XG4gICAgc3dpdGNoKE51bWJlcihzaXplKSkge1xuICAgICAgICBjYXNlIDIwOlxuICAgICAgICAgICAgZm9udFNpemUgPSAxODtcbiAgICAgICAgICAgIGRpc3RhbmNlU2l6ZSA9IDUwO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTA6XG4gICAgICAgIGRlZmF1bHQ6IFxuICAgICAgICAgICAgZm9udFNpemUgPSAyMDtcbiAgICAgICAgICAgIGRpc3RhbmNlU2l6ZSA9IDc0O1xuXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5qb2luKCcgJyl9PntjaGlsZHJlbn1cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAucCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJHtyZW0oZm9udFNpemUpfTtcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA1MHJlbTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR7Y29sb3J9O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTYwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLi1jZW50ZXJlZCB7ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC4td2l0aC1kaXN0YW5jZSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206ICR7cmVtKGRpc3RhbmNlU2l6ZSl9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9wPlxuICAgIClcbn0iXX0= */\n/*@ sourceURL=/Users/krzysztof/www/magesuite-web/components/paragraph.jsx */"),
    dynamic: [Object(_styles__WEBPACK_IMPORTED_MODULE_2__["rem"])(fontSize), color, Object(_styles__WEBPACK_IMPORTED_MODULE_2__["rem"])(distanceSize)],
    __self: this
  }));
});

/***/ })

})
//# sourceMappingURL=index.js.2f346ebe2ff72cf2be49.hot-update.js.map