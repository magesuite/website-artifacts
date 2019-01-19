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
      centered = _ref.centered,
      _ref$bold = _ref.bold,
      bold = _ref$bold === void 0 ? 'true' : _ref$bold;
  var fontSize;
  var classes = ['headline'];

  if (centered) {
    classes.push('-centered');
  }

  var fontWeight = bold ? 700 : 400;

  switch (Number(size)) {
    case 20:
      fontSize = 36;
      break;

    case 10:
    default:
      fontSize = 64;
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HtmlTag, {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2570778981", [Object(_styles__WEBPACK_IMPORTED_MODULE_2__["rem"])(fontSize), _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].d, Object(_styles__WEBPACK_IMPORTED_MODULE_2__["rem"])(26), fontWeight]]]) + " " + (classes.join(' ') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2570778981",
    css: ".headline.__jsx-style-dynamic-selector{font-size:".concat(Object(_styles__WEBPACK_IMPORTED_MODULE_2__["rem"])(fontSize), ";display:block;color:").concat(_styles__WEBPACK_IMPORTED_MODULE_2__["colors"].d, ";margin-bottom:").concat(Object(_styles__WEBPACK_IMPORTED_MODULE_2__["rem"])(26), ";max-width:50rem;font-weight:").concat(fontWeight, ";}.-centered.__jsx-style-dynamic-selector{margin-left:auto;margin-right:auto;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rcnp5c3p0b2Yvd3d3L21hZ2VzdWl0ZS13ZWIvY29tcG9uZW50cy9oZWFkbGluZS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0J3QixBQUc0RCxBQVF0QixpQkFDQyxrQkFDQSxJQVRKLGNBQ3FCLEFBU3ZDLG1DQVIrQywyQ0FDM0IsZ0JBQ3lCLHlDQUM3QyIsImZpbGUiOiIvVXNlcnMva3J6eXN6dG9mL3d3dy9tYWdlc3VpdGUtd2ViL2NvbXBvbmVudHMvaGVhZGxpbmUuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVtLCBjb2xvcnMgfSBmcm9tIFwiLi9zdHlsZXNcIjtcbmV4cG9ydCBkZWZhdWx0ICh7SHRtbFRhZywgY2hpbGRyZW4sIHNpemUsIGNlbnRlcmVkLCBib2xkPSd0cnVlJ30pID0+IHtcbiAgICBsZXQgZm9udFNpemU7XG4gICAgbGV0IGNsYXNzZXMgPSBbICdoZWFkbGluZScgXTtcbiAgICBpZihjZW50ZXJlZCkge1xuICAgICAgICBjbGFzc2VzLnB1c2goJy1jZW50ZXJlZCcpO1xuICAgIH1cbiAgICBsZXQgZm9udFdlaWdodCA9IGJvbGQgPyA3MDAgOiA0MDA7XG5cbiAgICBzd2l0Y2goTnVtYmVyKHNpemUpKSB7XG4gICAgICAgIGNhc2UgMjA6XG4gICAgICAgICAgICBmb250U2l6ZSA9IDM2O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTA6XG4gICAgICAgIGRlZmF1bHQ6IFxuICAgICAgICAgICAgZm9udFNpemUgPSA2NDtcblxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8SHRtbFRhZyBjbGFzc05hbWU9e2NsYXNzZXMuam9pbignICcpfT57Y2hpbGRyZW59XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgLmhlYWRsaW5lIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAke3JlbShmb250U2l6ZSl9OyAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHtjb2xvcnMuZH07XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206ICR7cmVtKDI2KX07ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDUwcmVtOyBcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6ICR7Zm9udFdlaWdodH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC4tY2VudGVyZWQgeyAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvSHRtbFRhZz5cbiAgICApXG59Il19 */\n/*@ sourceURL=/Users/krzysztof/www/magesuite-web/components/headline.jsx */"),
    dynamic: [Object(_styles__WEBPACK_IMPORTED_MODULE_2__["rem"])(fontSize), _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].d, Object(_styles__WEBPACK_IMPORTED_MODULE_2__["rem"])(26), fontWeight],
    __self: this
  }));
});

/***/ })

})
//# sourceMappingURL=index.js.6aa6b374e50a6bb2be4c.hot-update.js.map