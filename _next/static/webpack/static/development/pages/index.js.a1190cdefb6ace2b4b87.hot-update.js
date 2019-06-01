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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./components/styles.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/krzysztof/www/magesuite-web/components/paragraph.jsx";



function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    font-size: ", ";\n    max-width: 50rem;\n    color: ", ";\n    line-height: 160%;\n    font-weight: 300;\n    margin-bottom: ", ";\n"]);

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
  var fontSize;
  var color = light ? _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].w : _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].d;
  var distanceSize;
  var classes = ['p'];

  if (centered) {
    classes.push('-centered');
  }

  if (distance) {
    classes.push('-with-distance');
  }

  switch (Number(size)) {
    case 20:
      fontSize = 18;
      distanceSize = 50;
      break;

    case 10:
    default:
      fontSize = 20;
      distanceSize = 74;
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4101208426", [Object(_styles__WEBPACK_IMPORTED_MODULE_2__["rem"])(fontSize), color, Object(_styles__WEBPACK_IMPORTED_MODULE_2__["rem"])(distanceSize)]]]) + " " + (classes.join(' ') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "4101208426",
    css: ".p.__jsx-style-dynamic-selector{font-size:".concat(Object(_styles__WEBPACK_IMPORTED_MODULE_2__["rem"])(fontSize), ";max-width:50rem;color:").concat(color, ";line-height:160%;font-weight:300;}.-with-distance.__jsx-style-dynamic-selector{margin-bottom:").concat(Object(_styles__WEBPACK_IMPORTED_MODULE_2__["rem"])(distanceSize), ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rcnp5c3p0b2Yvd3d3L21hZ2VzdWl0ZS13ZWIvY29tcG9uZW50cy9wYXJhZ3JhcGguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJCd0IsQUFHNEQsQUFVSSx1Q0FUM0IsSUFVcEIsWUFUdUMsbUNBQ2xCLGlCQUNELGdCQUNwQiIsImZpbGUiOiIvVXNlcnMva3J6eXN6dG9mL3d3dy9tYWdlc3VpdGUtd2ViL2NvbXBvbmVudHMvcGFyYWdyYXBoLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbSwgY29sb3JzIH0gZnJvbSBcIi4vc3R5bGVzXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmV4cG9ydCBjb25zdCBmb289ICh7Y2hpbGRyZW4sIHNpemUsIGNlbnRlcmVkLCBkaXN0YW5jZSwgbGlnaHQ9ZmFsc2V9KSA9PiB7XG4gICAgbGV0IGZvbnRTaXplO1xuICAgIGxldCBjb2xvciA9IGxpZ2h0ID8gY29sb3JzLncgOiBjb2xvcnMuZDtcbiAgICBsZXQgZGlzdGFuY2VTaXplO1xuICAgIGxldCBjbGFzc2VzID0gWyAncCcgXTtcbiAgICBpZihjZW50ZXJlZCkge1xuICAgICAgICBjbGFzc2VzLnB1c2goJy1jZW50ZXJlZCcpO1xuICAgIH1cblxuICAgIGlmKGRpc3RhbmNlKSB7XG4gICAgICAgIGNsYXNzZXMucHVzaCgnLXdpdGgtZGlzdGFuY2UnKTtcbiAgICB9XG4gICAgc3dpdGNoKE51bWJlcihzaXplKSkge1xuICAgICAgICBjYXNlIDIwOlxuICAgICAgICAgICAgZm9udFNpemUgPSAxODtcbiAgICAgICAgICAgIGRpc3RhbmNlU2l6ZSA9IDUwO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTA6XG4gICAgICAgIGRlZmF1bHQ6IFxuICAgICAgICAgICAgZm9udFNpemUgPSAyMDtcbiAgICAgICAgICAgIGRpc3RhbmNlU2l6ZSA9IDc0O1xuXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5qb2luKCcgJyl9PntjaGlsZHJlbn1cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAucCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJHtyZW0oZm9udFNpemUpfTtcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA1MHJlbTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR7Y29sb3J9O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTYwJTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLi1jZW50ZXJlZCB7ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuLXdpdGgtZGlzdGFuY2Uge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAke3JlbShkaXN0YW5jZVNpemUpfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvcD5cbiAgICApXG59XG5cbmNvbnN0IGNlbnRlcmVkTWl4PShwcm9wcykgPT4ge1xuICAgIGlmKHByb3BzLmNlbnRlcmVkKSB7XG4gICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgICAgICAgIGBcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0eWxlZC5wYFxuICAgIGZvbnQtc2l6ZTogJHtyZW0oZm9udFNpemUpfTtcbiAgICBtYXgtd2lkdGg6IDUwcmVtO1xuICAgIGNvbG9yOiAke2NvbG9yfTtcbiAgICBsaW5lLWhlaWdodDogMTYwJTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIG1hcmdpbi1ib3R0b206ICR7cHJvcHMgPT4gcHJvcHMuZGlzdGFuY2UgPyByZW0oZGlzdGFuY2VTaXplKSA6IDB9O1xuYCJdfQ== */\n/*@ sourceURL=/Users/krzysztof/www/magesuite-web/components/paragraph.jsx */"),
    dynamic: [Object(_styles__WEBPACK_IMPORTED_MODULE_2__["rem"])(fontSize), color, Object(_styles__WEBPACK_IMPORTED_MODULE_2__["rem"])(distanceSize)],
    __self: this
  }));
};

var centeredMix = function centeredMix(props) {
  if (props.centered) {
    return "\n            margin-left: auto;\n            margin-right: auto;\n            text-align: center;        ";
  }
};

/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].p(_templateObject(), Object(_styles__WEBPACK_IMPORTED_MODULE_2__["rem"])(fontSize), color, function (props) {
  return props.distance ? Object(_styles__WEBPACK_IMPORTED_MODULE_2__["rem"])(distanceSize) : 0;
}));

/***/ })

})
//# sourceMappingURL=index.js.a1190cdefb6ace2b4b87.hot-update.js.map