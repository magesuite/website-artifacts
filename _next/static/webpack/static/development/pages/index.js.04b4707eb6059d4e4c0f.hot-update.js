webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/picture-vectorpng.jsx":
/*!******************************************!*\
  !*** ./components/picture-vectorpng.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/krzysztof/www/magesuite-web/components/picture-vectorpng.jsx";


function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: inline-block;\n    width: ", ";\n    margin: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var image = _ref.image,
      alt = _ref.alt,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? alt : _ref$title,
      _ref$widthDesktop = _ref.widthDesktop,
      widthDesktop = _ref$widthDesktop === void 0 ? '100%' : _ref$widthDesktop,
      _ref$marginDesktop = _ref.marginDesktop,
      marginDesktop = _ref$marginDesktop === void 0 ? 0 : _ref$marginDesktop;
  if (title == 'none') title = '';
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Picture, {
    widthDesktop: widthDesktop,
    marginDesktop: marginDesktop,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("source", {
    type: "image/webp",
    srcSet: "/static/pictures/".concat(image, "-large.webp"),
    media: "(min-width: 600px)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("source", {
    type: "image/webp",
    srcSet: "/static/pictures/".concat(image, "-small.webp"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("source", {
    srcSet: "/static/pictures/".concat(image, ".png"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Image, {
    src: "/static/pictures/".concat(image, ".png"),
    alt: alt,
    title: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }));
});
var Picture = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].picture(_templateObject(), function (p) {
  return p.widthDesktop;
}, function (p) {
  return p.marginDesktop;
});
var Image = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img(_templateObject2());

/***/ })

})
//# sourceMappingURL=index.js.04b4707eb6059d4e4c0f.hot-update.js.map