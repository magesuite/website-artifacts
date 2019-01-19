webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/headline.jsx":
/*!*********************************!*\
  !*** ./components/headline.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./components/styles.jsx");
var _jsxFileName = "/Users/krzysztof/www/magesuite-web/components/headline.jsx";



/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var HtmlTag = _ref.HtmlTag,
      children = _ref.children,
      size = _ref.size,
      centered = _ref.centered;
  var fontSize;
  var classes = ['headline'];

  if (centered) {
    classes.push('-centered');
  }

  switch (Number(size)) {
    case 20:
      fontSize = 36;
      break;

    case 10:
    default:
      fontSize = 64;
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HtmlTag, {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["968069058", [Object(_styles__WEBPACK_IMPORTED_MODULE_2__["rem"])(fontSize), _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].d, Object(_styles__WEBPACK_IMPORTED_MODULE_2__["rem"])(26)]]]) + " " + (classes.join(' ') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "968069058",
    css: ".headline.__jsx-style-dynamic-selector{font-size:".concat(Object(_styles__WEBPACK_IMPORTED_MODULE_2__["rem"])(fontSize), ";display:block;color:").concat(_styles__WEBPACK_IMPORTED_MODULE_2__["colors"].d, ";margin-bottom:").concat(Object(_styles__WEBPACK_IMPORTED_MODULE_2__["rem"])(26), ";max-width:50rem;font-weight:400;}.-centered.__jsx-style-dynamic-selector{margin-left:auto;margin-right:auto;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rcnp5c3p0b2Yvd3d3L21hZ2VzdWl0ZS13ZWIvY29tcG9uZW50cy9oZWFkbGluZS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0J3QixBQUc0RCxBQVF0QixpQkFDQyxrQkFDQSxJQVRKLGNBQ3FCLEFBU3ZDLG1DQVIrQywyQ0FDM0IsZ0JBQ0EsZ0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy9rcnp5c3p0b2Yvd3d3L21hZ2VzdWl0ZS13ZWIvY29tcG9uZW50cy9oZWFkbGluZS5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW0sIGNvbG9ycyB9IGZyb20gXCIuL3N0eWxlc1wiO1xuZXhwb3J0IGRlZmF1bHQgKHtIdG1sVGFnLCBjaGlsZHJlbiwgc2l6ZSwgY2VudGVyZWR9KSA9PiB7XG4gICAgbGV0IGZvbnRTaXplO1xuICAgIGxldCBjbGFzc2VzID0gWyAnaGVhZGxpbmUnIF07XG4gICAgaWYoY2VudGVyZWQpIHtcbiAgICAgICAgY2xhc3Nlcy5wdXNoKCctY2VudGVyZWQnKTtcbiAgICB9XG4gICAgc3dpdGNoKE51bWJlcihzaXplKSkge1xuICAgICAgICBjYXNlIDIwOlxuICAgICAgICAgICAgZm9udFNpemUgPSAzNjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDEwOlxuICAgICAgICBkZWZhdWx0OiBcbiAgICAgICAgICAgIGZvbnRTaXplID0gNjQ7XG5cbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPEh0bWxUYWcgY2xhc3NOYW1lPXtjbGFzc2VzLmpvaW4oJyAnKX0+e2NoaWxkcmVufVxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC5oZWFkbGluZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJHtyZW0oZm9udFNpemUpfTsgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jazsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR7Y29sb3JzLmR9O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAke3JlbSgyNil9OyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA1MHJlbTsgXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC4tY2VudGVyZWQgeyAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvSHRtbFRhZz5cbiAgICApXG59Il19 */\n/*@ sourceURL=/Users/krzysztof/www/magesuite-web/components/headline.jsx */"),
    dynamic: [Object(_styles__WEBPACK_IMPORTED_MODULE_2__["rem"])(fontSize), _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].d, Object(_styles__WEBPACK_IMPORTED_MODULE_2__["rem"])(26)],
    __self: this
  }));
});

/***/ })

})
//# sourceMappingURL=index.js.451d1003545118018929.hot-update.js.map