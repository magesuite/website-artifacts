webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/paragraph.jsx":
/*!**********************************!*\
  !*** ./components/paragraph.jsx ***!
  \**********************************/
/*! exports provided: foo, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "foo", function() { return foo; });
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles */ "./components/styles.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    font-size: ", ";\n    max-width: 50rem;\n    color: ", ";\n    line-height: 160%;\n    font-weight: 300;\n    ", ";\n    margin-bottom: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var foo = function foo(_ref) {
  var children = _ref.children,
      size = _ref.size,
      centered = _ref.centered,
      distance = _ref.distance,
      _ref$light = _ref.light,
      light = _ref$light === void 0 ? false : _ref$light;
  var classes = ['p'];
};

var centeredMix = function centeredMix(_ref2) {
  var centered = _ref2.centered;

  if (centered) {
    return "\n            margin-left: auto;\n            margin-right: auto;\n            text-align: center;        ";
  }
};

/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p(_templateObject(), function (props) {
  return props.size == 20 ? Object(_styles__WEBPACK_IMPORTED_MODULE_0__["rem"])(18) : Object(_styles__WEBPACK_IMPORTED_MODULE_0__["rem"])(20);
}, props.light ? _styles__WEBPACK_IMPORTED_MODULE_0__["colors"].w : _styles__WEBPACK_IMPORTED_MODULE_0__["colors"].d, centeredMix, function (props) {
  return props.distance ? Object(_styles__WEBPACK_IMPORTED_MODULE_0__["rem"])(props.size == 20 ? 50 : 74) : 0;
}));

/***/ })

})
//# sourceMappingURL=index.js.7f2871db3856a378e180.hot-update.js.map