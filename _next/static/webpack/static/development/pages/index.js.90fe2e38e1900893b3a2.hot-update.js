webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/headline.jsx":
/*!*********************************!*\
  !*** ./components/headline.jsx ***!
  \*********************************/
/*! exports provided: default, fs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fs", function() { return fs; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./components/styles.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _paragraph__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./paragraph */ "./components/paragraph.jsx");
var _jsxFileName = "/Users/krzysztof/www/magesuite-web/components/headline.jsx";



function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    font-size: ", ";                    \n    display: block;                                       \n    color: ", ";\n    margin-bottom: ", ";                \n    max-width: 50rem; \n    font-weight: ", ";\n    ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].h2(_templateObject(), function (props) {
  return props.size == 20 ? Object(_styles__WEBPACK_IMPORTED_MODULE_2__["rem"])(36) : Object(_styles__WEBPACK_IMPORTED_MODULE_2__["rem"])(64);
}, function (props) {
  return props.light ? _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].w : _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].d;
}, Object(_styles__WEBPACK_IMPORTED_MODULE_2__["rem"])(26), fontWeight, _paragraph__WEBPACK_IMPORTED_MODULE_4__["centeredMix"]));
var fs = function fs(_ref) {
  var HtmlTag = _ref.HtmlTag,
      children = _ref.children,
      size = _ref.size,
      centered = _ref.centered,
      _ref$bold = _ref.bold,
      bold = _ref$bold === void 0 ? true : _ref$bold,
      _ref$light = _ref.light,
      light = _ref$light === void 0 ? false : _ref$light;
  var fontSize;
  var classes = ['headline'];

  if (centered) {
    classes.push('-centered');
  }

  var fontWeight = bold ? 700 : 400;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HtmlTag, {
    className: "jsx-3933450950" + " " + (classes.join(' ') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3933450950",
    css: ".-centered.jsx-3933450950{margin-left:auto;margin-right:auto;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rcnp5c3p0b2Yvd3d3L21hZ2VzdWl0ZS13ZWIvY29tcG9uZW50cy9oZWFkbGluZS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUJ3QixBQUdzQyxpQkFDQyxrQkFDQSxrQkFDdEIiLCJmaWxlIjoiL1VzZXJzL2tyenlzenRvZi93d3cvbWFnZXN1aXRlLXdlYi9jb21wb25lbnRzL2hlYWRsaW5lLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbSwgY29sb3JzIH0gZnJvbSBcIi4vc3R5bGVzXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7Y2VudGVyZWRNaXh9IGZyb20gJy4vcGFyYWdyYXBoJztcblxuZXhwb3J0IGRlZmF1bHQgc3R5bGVkLmgyYFxuICAgIGZvbnQtc2l6ZTogJHtwcm9wcyA9PiBwcm9wcy5zaXplID09IDIwID8gcmVtKDM2KTogcmVtKDY0KX07ICAgICAgICAgICAgICAgICAgICBcbiAgICBkaXNwbGF5OiBibG9jazsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy5saWdodCA/IGNvbG9ycy53IDogY29sb3JzLmR9O1xuICAgIG1hcmdpbi1ib3R0b206ICR7cmVtKDI2KX07ICAgICAgICAgICAgICAgIFxuICAgIG1heC13aWR0aDogNTByZW07IFxuICAgIGZvbnQtd2VpZ2h0OiAke2ZvbnRXZWlnaHR9O1xuICAgICR7Y2VudGVyZWRNaXh9O1xuYFxuXG5leHBvcnQgY29uc3QgZnMgPSAoe0h0bWxUYWcsIGNoaWxkcmVuLCBzaXplLCBjZW50ZXJlZCwgYm9sZD10cnVlLCBsaWdodD1mYWxzZX0pID0+IHtcbiAgICBsZXQgZm9udFNpemU7XG4gICAgbGV0IGNsYXNzZXMgPSBbICdoZWFkbGluZScgXTtcbiAgICBpZihjZW50ZXJlZCkge1xuICAgICAgICBjbGFzc2VzLnB1c2goJy1jZW50ZXJlZCcpO1xuICAgIH1cbiAgICBsZXQgZm9udFdlaWdodCA9IGJvbGQgPyA3MDAgOiA0MDA7XG4gICAgXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8SHRtbFRhZyBjbGFzc05hbWU9e2NsYXNzZXMuam9pbignICcpfT57Y2hpbGRyZW59XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgLi1jZW50ZXJlZCB7ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9IdG1sVGFnPlxuICAgIClcbn0iXX0= */\n/*@ sourceURL=/Users/krzysztof/www/magesuite-web/components/headline.jsx */",
    __self: this
  }));
};

/***/ })

})
//# sourceMappingURL=index.js.90fe2e38e1900893b3a2.hot-update.js.map