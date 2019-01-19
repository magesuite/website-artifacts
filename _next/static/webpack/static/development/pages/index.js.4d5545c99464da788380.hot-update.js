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
    css: ".headline.__jsx-style-dynamic-selector{font-size:".concat(Object(_styles__WEBPACK_IMPORTED_MODULE_2__["rem"])(fontSize), ";display:block;color:").concat(_styles__WEBPACK_IMPORTED_MODULE_2__["colors"].d, ";margin-bottom:").concat(Object(_styles__WEBPACK_IMPORTED_MODULE_2__["rem"])(26), ";max-width:50rem;font-weight:").concat(fontWeight, ";}.-centered.__jsx-style-dynamic-selector{margin-left:auto;margin-right:auto;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rcnp5c3p0b2Yvd3d3L21hZ2VzdWl0ZS13ZWIvY29tcG9uZW50cy9oZWFkbGluZS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0J3QixBQUc0RCxBQVF0QixpQkFDQyxrQkFDQSxJQVRKLGNBQ3FCLEFBU3ZDLG1DQVIrQywyQ0FDM0IsZ0JBQ3lCLHlDQUM3QyIsImZpbGUiOiIvVXNlcnMva3J6eXN6dG9mL3d3dy9tYWdlc3VpdGUtd2ViL2NvbXBvbmVudHMvaGVhZGxpbmUuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVtLCBjb2xvcnMgfSBmcm9tIFwiLi9zdHlsZXNcIjtcbmV4cG9ydCBkZWZhdWx0ICh7SHRtbFRhZywgY2hpbGRyZW4sIHNpemUsIGJvbGQsIGNlbnRlcmVkfSkgPT4ge1xuICAgIGxldCBmb250U2l6ZTtcbiAgICBsZXQgY2xhc3NlcyA9IFsgJ2hlYWRsaW5lJyBdO1xuICAgIGlmKGNlbnRlcmVkKSB7XG4gICAgICAgIGNsYXNzZXMucHVzaCgnLWNlbnRlcmVkJyk7XG4gICAgfVxuICAgIGxldCBmb250V2VpZ2h0ID0gYm9sZCA/IDcwMCA6IDQwMDtcblxuICAgIHN3aXRjaChOdW1iZXIoc2l6ZSkpIHtcbiAgICAgICAgY2FzZSAyMDpcbiAgICAgICAgICAgIGZvbnRTaXplID0gMzY7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgZGVmYXVsdDogXG4gICAgICAgICAgICBmb250U2l6ZSA9IDY0O1xuXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxIdG1sVGFnIGNsYXNzTmFtZT17Y2xhc3Nlcy5qb2luKCcgJyl9PntjaGlsZHJlbn1cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAuaGVhZGxpbmUge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6ICR7cmVtKGZvbnRTaXplKX07ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAke2NvbG9ycy5kfTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogJHtyZW0oMjYpfTsgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNTByZW07IFxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogJHtmb250V2VpZ2h0fTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLi1jZW50ZXJlZCB7ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9IdG1sVGFnPlxuICAgIClcbn0iXX0= */\n/*@ sourceURL=/Users/krzysztof/www/magesuite-web/components/headline.jsx */"),
    dynamic: [Object(_styles__WEBPACK_IMPORTED_MODULE_2__["rem"])(fontSize), _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].d, Object(_styles__WEBPACK_IMPORTED_MODULE_2__["rem"])(26), fontWeight],
    __self: this
  }));
});

/***/ })

})
//# sourceMappingURL=index.js.4d5545c99464da788380.hot-update.js.map