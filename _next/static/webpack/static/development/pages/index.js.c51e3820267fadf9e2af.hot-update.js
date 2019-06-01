webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/feature-icon.jsx":
/*!*************************************!*\
  !*** ./components/feature-icon.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./components/styles.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
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
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 100%;\n\n    color: ", ";\n    fill: ", ";\n    display: block;\n    padding: 0 1rem ", ";\n    border-bottom: 1px solid ", ";  \n    cursor: pointer;  \n    transition: border-color 150ms ease-in;\n\n    &:hover {\n        color: ", ";\n        fill: ", ";  \n        border-bottom: 1px solid ", ";   \n        transition: fill 150ms ease-in;\n    }\n"]);

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
  var wrapperClasses = ['wrapper'];

  if (active) {
    wrapperClasses.push('-active');
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Link, {
    className: wrapperClasses.join(' '),
    onClick: function onClick(e) {
      return clickedHandler(id);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(IconWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, icon), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Caption, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, text), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1204922333",
    css: "a.__jsx-style-dynamic-selector:hover,.-active.__jsx-style-dynamic-selector{color:".concat(_styles__WEBPACK_IMPORTED_MODULE_2__["colors"].d, ";fill:").concat(_styles__WEBPACK_IMPORTED_MODULE_2__["colors"].p, ";border-bottom:1px solid ").concat(_styles__WEBPACK_IMPORTED_MODULE_2__["colors"].p, ";-webkit-transition:fill 150ms ease-in;transition:fill 150ms ease-in;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rcnp5c3p0b2Yvd3d3L21hZ2VzdWl0ZS13ZWIvY29tcG9uZW50cy9mZWF0dXJlLWljb24uanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWF3QixBQUl3RCxtQ0FDRCxrQ0FDbUIscURBQ3ZCLG9FQUNsQyIsImZpbGUiOiIvVXNlcnMva3J6eXN6dG9mL3d3dy9tYWdlc3VpdGUtd2ViL2NvbXBvbmVudHMvZmVhdHVyZS1pY29uLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbG9ycywgcmVtIH0gZnJvbSAnLi9zdHlsZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0ICh7dGV4dCwgaWNvbiwgaWQsIGFjdGl2ZSwgY2xpY2tlZEhhbmRsZXJ9KSA9PiB7XG4gICAgbGV0IHdyYXBwZXJDbGFzc2VzID0gWyd3cmFwcGVyJ107XG4gICAgaWYoYWN0aXZlKSB7XG4gICAgICAgIHdyYXBwZXJDbGFzc2VzLnB1c2goJy1hY3RpdmUnKTtcbiAgICB9XG4gICAgcmV0dXJuICggICAgXG4gICAgICAgIDxMaW5rIGNsYXNzTmFtZT17d3JhcHBlckNsYXNzZXMuam9pbignICcpfSBvbkNsaWNrPXsoZSkgPT4gY2xpY2tlZEhhbmRsZXIoaWQpfT5cbiAgICAgICAgICAgIDxJY29uV3JhcHBlcj57aWNvbn08L0ljb25XcmFwcGVyPlxuICAgICAgICAgICAgPENhcHRpb24+e3RleHR9PC9DYXB0aW9uPlxuXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG5cbiAgICAgICAgICAgICAgICBhOmhvdmVyLCAuLWFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAke2NvbG9ycy5kfTtcbiAgICAgICAgICAgICAgICAgICAgZmlsbDogJHtjb2xvcnMucH07ICBcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7Y29sb3JzLnB9OyAgIFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBmaWxsIDE1MG1zIGVhc2UtaW47ICAgICAgXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvTGluaz5cbiAgICApXG59XG5cbmNvbnN0IExpbmsgPSBzdHlsZWQuYWBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICBjb2xvcjogJHtjb2xvcnMubDJ9O1xuICAgIGZpbGw6ICR7Y29sb3JzLmx9O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDAgMXJlbSAke3JlbSgzMCl9O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke2NvbG9ycy5sfTsgIFxuICAgIGN1cnNvcjogcG9pbnRlcjsgIFxuICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAxNTBtcyBlYXNlLWluO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAke2NvbG9ycy5kfTtcbiAgICAgICAgZmlsbDogJHtjb2xvcnMucH07ICBcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7Y29sb3JzLnB9OyAgIFxuICAgICAgICB0cmFuc2l0aW9uOiBmaWxsIDE1MG1zIGVhc2UtaW47XG4gICAgfVxuYFxuXG5jb25zdCBDYXB0aW9uID0gc3R5bGVkLmRpdmBcbiAgICBmb250LXNpemU6ICR7cmVtKDE0KX07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgXG4gICAgbWFyZ2luOiAke3JlbSgxNil9IDAgMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDEzMCU7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgMTUwbXMgZWFzZS1pbjtcbmBcblxuY29uc3QgSWNvbldyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICAgIHdpZHRoOiAke3JlbSg1Nil9O1xuICAgIGhlaWdodDogJHtyZW0oNzApfTtcbmAiXX0= */\n/*@ sourceURL=/Users/krzysztof/www/magesuite-web/components/feature-icon.jsx */"),
    dynamic: [_styles__WEBPACK_IMPORTED_MODULE_2__["colors"].d, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].p, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].p],
    __self: this
  }));
});
var Link = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].a(_templateObject(), _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].l2, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].l, Object(_styles__WEBPACK_IMPORTED_MODULE_2__["rem"])(30), _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].l, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].d, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].p, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].p);
var Caption = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject2(), Object(_styles__WEBPACK_IMPORTED_MODULE_2__["rem"])(14), Object(_styles__WEBPACK_IMPORTED_MODULE_2__["rem"])(16));
var IconWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject3(), Object(_styles__WEBPACK_IMPORTED_MODULE_2__["rem"])(56), Object(_styles__WEBPACK_IMPORTED_MODULE_2__["rem"])(70));

/***/ })

})
//# sourceMappingURL=index.js.c51e3820267fadf9e2af.hot-update.js.map