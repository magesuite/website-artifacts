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
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1778350484", [_styles__WEBPACK_IMPORTED_MODULE_2__["colors"].d, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].p, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].p, Object(_styles__WEBPACK_IMPORTED_MODULE_2__["rem"])(56), Object(_styles__WEBPACK_IMPORTED_MODULE_2__["rem"])(70)]]]) + " " + "icon",
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
    styleId: "1778350484",
    css: "a.__jsx-style-dynamic-selector:hover,.-active.__jsx-style-dynamic-selector{color:".concat(_styles__WEBPACK_IMPORTED_MODULE_2__["colors"].d, ";fill:").concat(_styles__WEBPACK_IMPORTED_MODULE_2__["colors"].p, ";border-bottom:1px solid ").concat(_styles__WEBPACK_IMPORTED_MODULE_2__["colors"].p, ";-webkit-transition:fill 150ms ease-in;transition:fill 150ms ease-in;}.icon.__jsx-style-dynamic-selector{width:").concat(Object(_styles__WEBPACK_IMPORTED_MODULE_2__["rem"])(56), ";height:").concat(Object(_styles__WEBPACK_IMPORTED_MODULE_2__["rem"])(70), ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rcnp5c3p0b2Yvd3d3L21hZ2VzdWl0ZS13ZWIvY29tcG9uZW50cy9mZWF0dXJlLWljb24uanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWF3QixBQWF3RCxBQU9BLG1DQU5ELEFBT0Usa0NBTmlCLEVBT3pELG1EQU5rQyxvRUFDbEMiLCJmaWxlIjoiL1VzZXJzL2tyenlzenRvZi93d3cvbWFnZXN1aXRlLXdlYi9jb21wb25lbnRzL2ZlYXR1cmUtaWNvbi5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb2xvcnMsIHJlbSB9IGZyb20gJy4vc3R5bGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5leHBvcnQgZGVmYXVsdCAoe3RleHQsIGljb24sIGlkLCBhY3RpdmUsIGNsaWNrZWRIYW5kbGVyfSkgPT4ge1xuICAgIGxldCB3cmFwcGVyQ2xhc3NlcyA9IFsnd3JhcHBlciddO1xuICAgIGlmKGFjdGl2ZSkge1xuICAgICAgICB3cmFwcGVyQ2xhc3Nlcy5wdXNoKCctYWN0aXZlJyk7XG4gICAgfVxuICAgIHJldHVybiAoICAgIFxuICAgICAgICA8TGluayBjbGFzc05hbWU9e3dyYXBwZXJDbGFzc2VzLmpvaW4oJyAnKX0gb25DbGljaz17KGUpID0+IGNsaWNrZWRIYW5kbGVyKGlkKX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25cIj57aWNvbn08L2Rpdj5cbiAgICAgICAgICAgIDxDYXB0aW9uPnt0ZXh0fTwvQ2FwdGlvbj5cblxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmNhcHRpb24ge1xuXG5cbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgIGE6aG92ZXIsIC4tYWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR7Y29sb3JzLmR9O1xuICAgICAgICAgICAgICAgICAgICBmaWxsOiAke2NvbG9ycy5wfTsgIFxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHtjb2xvcnMucH07ICAgXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGZpbGwgMTUwbXMgZWFzZS1pbjsgICAgICBcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAke3JlbSg1Nil9O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICR7cmVtKDcwKX07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L0xpbms+XG4gICAgKVxufVxuXG5jb25zdCBMaW5rID0gc3R5bGVkLmFgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgY29sb3I6ICR7Y29sb3JzLmwyfTtcbiAgICBmaWxsOiAke2NvbG9ycy5sfTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiAwIDFyZW0gJHtyZW0oMzApfTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHtjb2xvcnMubH07ICBcbiAgICBjdXJzb3I6IHBvaW50ZXI7ICBcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMTUwbXMgZWFzZS1pbjtcblxuICAgICY6aG92ZXIge1xuICAgICAgICBjb2xvcjogJHtjb2xvcnMuZH07XG4gICAgICAgIGZpbGw6ICR7Y29sb3JzLnB9OyAgXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke2NvbG9ycy5wfTsgICBcbiAgICAgICAgdHJhbnNpdGlvbjogZmlsbCAxNTBtcyBlYXNlLWluO1xuICAgIH1cbmBcblxuY29uc3QgQ2FwdGlvbiA9IHN0eWxlZC5kaXZgXG4gICAgZm9udC1zaXplOiAke3JlbSgxNCl9O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IFxuICAgIG1hcmdpbjogJHtyZW0oMTYpfSAwIDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAxMzAlO1xuICAgIHRyYW5zaXRpb246IGNvbG9yIDE1MG1zIGVhc2UtaW47XG5gIl19 */\n/*@ sourceURL=/Users/krzysztof/www/magesuite-web/components/feature-icon.jsx */"),
    dynamic: [_styles__WEBPACK_IMPORTED_MODULE_2__["colors"].d, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].p, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].p, Object(_styles__WEBPACK_IMPORTED_MODULE_2__["rem"])(56), Object(_styles__WEBPACK_IMPORTED_MODULE_2__["rem"])(70)],
    __self: this
  }));
});
var Link = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].a(_templateObject(), _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].l2, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].l, Object(_styles__WEBPACK_IMPORTED_MODULE_2__["rem"])(30), _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].l, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].d, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].p, _styles__WEBPACK_IMPORTED_MODULE_2__["colors"].p);
var Caption = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject2(), Object(_styles__WEBPACK_IMPORTED_MODULE_2__["rem"])(14), Object(_styles__WEBPACK_IMPORTED_MODULE_2__["rem"])(16));

/***/ })

})
//# sourceMappingURL=index.js.d97c1843402682dbb846.hot-update.js.map