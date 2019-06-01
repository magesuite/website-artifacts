webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/feature-icon.jsx":
/*!*************************************!*\
  !*** ./components/feature-icon.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./components/styles.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/krzysztof/www/magesuite-web/components/feature-icon.jsx";


function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    width: ", ";\n    height: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    font-size: ", ";\n    text-transform: uppercase; \n    margin: ", " 0 0;\n    text-align: center;\n    line-height: 130%;\n    transition: color 150ms ease-in;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 100%;\n\n    color: ", ";\n    fill: ", ";\n    padding: 0 1rem ", ";\n    border-bottom: 1px solid ", ";  \n    cursor: pointer;  \n    transition: border-color 150ms ease-in;\n\n    &:hover, .-active {\n        color: ", ";\n        fill: ", ";  \n        border-bottom: 1px solid ", ";   \n        transition: fill 150ms ease-in;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var text = _ref.text,
      icon = _ref.icon,
      id = _ref.id,
      active = _ref.active,
      clickedHandler = _ref.clickedHandler;
  var wrapperClasses = [];

  if (active) {
    wrapperClasses.push('-active');
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Link, {
    className: wrapperClasses.join(' '),
    onClick: function onClick(e) {
      return clickedHandler(id);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, icon), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Caption, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, text));
});
var Link = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].a(_templateObject(), _styles__WEBPACK_IMPORTED_MODULE_1__["colors"].l2, _styles__WEBPACK_IMPORTED_MODULE_1__["colors"].l, Object(_styles__WEBPACK_IMPORTED_MODULE_1__["rem"])(30), _styles__WEBPACK_IMPORTED_MODULE_1__["colors"].l, _styles__WEBPACK_IMPORTED_MODULE_1__["colors"].d, _styles__WEBPACK_IMPORTED_MODULE_1__["colors"].p, _styles__WEBPACK_IMPORTED_MODULE_1__["colors"].p);
var Caption = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2(), Object(_styles__WEBPACK_IMPORTED_MODULE_1__["rem"])(14), Object(_styles__WEBPACK_IMPORTED_MODULE_1__["rem"])(16));
var IconWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject3(), Object(_styles__WEBPACK_IMPORTED_MODULE_1__["rem"])(56), Object(_styles__WEBPACK_IMPORTED_MODULE_1__["rem"])(70));

/***/ })

})
//# sourceMappingURL=index.js.585957189b1282ed08ae.hot-update.js.map