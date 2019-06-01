webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/picture-text.jsx":
/*!*************************************!*\
  !*** ./components/picture-text.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./components/styles.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/krzysztof/www/magesuite-web/components/picture-text.jsx";


function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    width: 40%;\n    flex: 0 0 40%;\n    padding-top: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    width: 60%;\n    flex: 0 0 60%;\n    text-align: left;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: ", ";\n    @media ", " {\n        flex-direction: column;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var children = _ref.children,
      picture = _ref.picture,
      _ref$hide = _ref.hide,
      hide = _ref$hide === void 0 ? false : _ref$hide;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Section, {
    hide: hide,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Figure, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, picture), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, children));
});
var Section = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].section(_templateObject(), function (p) {
  return p.hide ? "none" : "flex";
}, _styles__WEBPACK_IMPORTED_MODULE_1__["mediaQueries"].mobile);
var Figure = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].figure(_templateObject2());
var Content = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject3(), Object(_styles__WEBPACK_IMPORTED_MODULE_1__["rem"])(74));

/***/ })

})
//# sourceMappingURL=index.js.1095569e236b098dbf30.hot-update.js.map