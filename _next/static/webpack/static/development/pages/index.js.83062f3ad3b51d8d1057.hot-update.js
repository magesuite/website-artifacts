webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/paragraph.jsx":
/*!**********************************!*\
  !*** ./components/paragraph.jsx ***!
  \**********************************/
/*! exports provided: centeredMix, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "centeredMix", function() { return centeredMix; });
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles */ "./components/styles.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    \n    @media ", " {\n        font-size: ", ";                       \n    }\n    @media ", " {\n        font-size: ", ";\n    }\n    max-width: 50rem;\n    color: ", ";\n    line-height: 160%;\n    font-weight: 300;\n    ", ";\n    margin-bottom: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var centeredMix = function centeredMix(_ref) {
  var centered = _ref.centered;

  if (centered) {
    return "\n            margin-left: auto;\n            margin-right: auto;\n            text-align: center;        ";
  }
};
/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p(_templateObject(), _styles__WEBPACK_IMPORTED_MODULE_0__["mediaQueries"].mobile, function (props) {
  return props.size == 20 ? Object(_styles__WEBPACK_IMPORTED_MODULE_0__["rem"])(16) : Object(_styles__WEBPACK_IMPORTED_MODULE_0__["rem"])(18);
}, _styles__WEBPACK_IMPORTED_MODULE_0__["mediaQueries"].tabletUp, function (props) {
  return props.size == 20 ? Object(_styles__WEBPACK_IMPORTED_MODULE_0__["rem"])(18) : Object(_styles__WEBPACK_IMPORTED_MODULE_0__["rem"])(20);
}, function (props) {
  return props.light ? _styles__WEBPACK_IMPORTED_MODULE_0__["colors"].w : _styles__WEBPACK_IMPORTED_MODULE_0__["colors"].d;
}, centeredMix, function (props) {
  return props.distance ? Object(_styles__WEBPACK_IMPORTED_MODULE_0__["rem"])(props.size == 20 ? 50 : 74) : 0;
}));

/***/ })

})
//# sourceMappingURL=index.js.83062f3ad3b51d8d1057.hot-update.js.map