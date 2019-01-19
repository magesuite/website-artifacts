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
      bold = _ref.bold,
      centered = _ref.centered;
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
    css: ".headline.__jsx-style-dynamic-selector{font-size:".concat(Object(_styles__WEBPACK_IMPORTED_MODULE_2__["rem"])(fontSize), ";display:block;color:").concat(_styles__WEBPACK_IMPORTED_MODULE_2__["colors"].d, ";margin-bottom:").concat(Object(_styles__WEBPACK_IMPORTED_MODULE_2__["rem"])(26), ";max-width:50rem;font-weight:").concat(fontWeight, ";}.-centered.__jsx-style-dynamic-selector{margin-left:auto;margin-right:auto;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rcnp5c3p0b2Yvd3d3L21hZ2VzdWl0ZS13ZWIvY29tcG9uZW50cy9oZWFkbGluZS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0J3QixBQUc0RCxBQVF0QixpQkFDQyxrQkFDQSxJQVRKLGNBQ3FCLEFBU3ZDLG1DQVIrQywyQ0FDM0IsZ0JBQ3lCLHlDQUM3QyIsImZpbGUiOiIvVXNlcnMva3J6eXN6dG9mL3d3dy9tYWdlc3VpdGUtd2ViL2NvbXBvbmVudHMvaGVhZGxpbmUuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVtLCBjb2xvcnMgfSBmcm9tIFwiLi9zdHlsZXNcIjtcbmV4cG9ydCBkZWZhdWx0ICh7SHRtbFRhZywgY2hpbGRyZW4sIHNpemUsIGJvbGQsIGNlbnRlcmVkfSkgPT4ge1xuICAgIGxldCBmb250U2l6ZTtcbiAgICBsZXQgY2xhc3NlcyA9IFsgJ2hlYWRsaW5lJyBdO1xuICAgIGlmKGNlbnRlcmVkKSB7XG4gICAgICAgIGNsYXNzZXMucHVzaCgnLWNlbnRlcmVkJyk7XG4gICAgfVxuICAgIGxldCBmb250V2VpZ2h0PSBib2xkID8gNzAwIDogNDAwO1xuXG4gICAgc3dpdGNoKE51bWJlcihzaXplKSkge1xuICAgICAgICBjYXNlIDIwOlxuICAgICAgICAgICAgZm9udFNpemUgPSAzNjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDEwOlxuICAgICAgICBkZWZhdWx0OiBcbiAgICAgICAgICAgIGZvbnRTaXplID0gNjQ7XG5cbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPEh0bWxUYWcgY2xhc3NOYW1lPXtjbGFzc2VzLmpvaW4oJyAnKX0+e2NoaWxkcmVufVxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC5oZWFkbGluZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJHtyZW0oZm9udFNpemUpfTsgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jazsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR7Y29sb3JzLmR9O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAke3JlbSgyNil9OyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA1MHJlbTsgXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAke2ZvbnRXZWlnaHR9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuLWNlbnRlcmVkIHsgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L0h0bWxUYWc+XG4gICAgKVxufSJdfQ== */\n/*@ sourceURL=/Users/krzysztof/www/magesuite-web/components/headline.jsx */"),
    dynamic: [Object(_styles__WEBPACK_IMPORTED_MODULE_2__["rem"])(fontSize), _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].d, Object(_styles__WEBPACK_IMPORTED_MODULE_2__["rem"])(26), fontWeight],
    __self: this
  }));
});

/***/ })

})
//# sourceMappingURL=index.js.5bad0b6c527cf5825a4b.hot-update.js.map