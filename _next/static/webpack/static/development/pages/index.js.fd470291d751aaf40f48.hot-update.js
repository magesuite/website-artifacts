webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/cookies.jsx":
/*!********************************!*\
  !*** ./components/cookies.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./components/styles.jsx");
/* harmony import */ var _data_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/store */ "./data/store.js");
var _jsxFileName = "/Users/krzysztof/www/magesuite-web/components/cookies.jsx";



function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    position: fixed;\n    bottom: 1rem;                        \n    right: 1rem;\n    width: 22rem;\n    background: ", ";\n    padding: 1rem;\n    transition: opacity 0.3s ease;\n    font-size: 1rem;\n    color: ", ";;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var Cookies =
/*#__PURE__*/
function (_Component) {
  _inherits(Cookies, _Component);

  function Cookies() {
    _classCallCheck(this, Cookies);

    return _possibleConstructorReturn(this, _getPrototypeOf(Cookies).apply(this, arguments));
  }

  _createClass(Cookies, [{
    key: "render",
    value: function render() {
      var _this = this;

      return !this.props.acceptCookies && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2342729549", [_styles__WEBPACK_IMPORTED_MODULE_3__["mediaQueries"].mobile]]]) + " " + "cookies-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        onClick: function onClick(e) {
          _this.props.dispatch(Object(_data_store__WEBPACK_IMPORTED_MODULE_4__["acceptCookies"])());
        },
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2342729549", [_styles__WEBPACK_IMPORTED_MODULE_3__["mediaQueries"].mobile]]]) + " " + "accept",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, "Our website uses cookies. By continuing to use our website, you consent to the use of tracking cookies."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2342729549",
        css: "@media ".concat(_styles__WEBPACK_IMPORTED_MODULE_3__["mediaQueries"].mobile, "{.cookies-info.__jsx-style-dynamic-selector{width:auto;left:1rem;right:1rem;bottom:auto;top:5rem;}}.more.__jsx-style-dynamic-selector,.howto.__jsx-style-dynamic-selector{margin-top:1rem;}.accept.__jsx-style-dynamic-selector{cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rcnp5c3p0b2Yvd3d3L21hZ2VzdWl0ZS13ZWIvY29tcG9uZW50cy9jb29raWVzLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFlNEIsQUFTd0MsQUFRQyxBQUdELFdBVkQsSUFXbEIsQ0FIQSxLQVBtQixXQUNDLFlBQ0gsU0FDYiIsImZpbGUiOiIvVXNlcnMva3J6eXN6dG9mL3d3dy9tYWdlc3VpdGUtd2ViL2NvbXBvbmVudHMvY29va2llcy5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGNvbG9ycywgbWVkaWFRdWVyaWVzIH0gZnJvbSAnLi9zdHlsZXMnO1xuaW1wb3J0IHsgYWNjZXB0Q29va2llcyB9IGZyb20gJy4uL2RhdGEvc3RvcmUnO1xuXG5jbGFzcyBDb29raWVzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAhdGhpcy5wcm9wcy5hY2NlcHRDb29raWVzICYmICggICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29va2llcy1pbmZvXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NlcHRcIiBvbkNsaWNrPXtlPT57IHRoaXMucHJvcHMuZGlzcGF0Y2goYWNjZXB0Q29va2llcygpKSB9fT5cbiAgICAgICAgICAgICAgICAgICAgT3VyIHdlYnNpdGUgdXNlcyBjb29raWVzLiBCeSBjb250aW51aW5nIHRvIHVzZSBvdXIgd2Vic2l0ZSwgeW91IGNvbnNlbnQgdG8gdGhlIHVzZSBvZiB0cmFja2luZyBjb29raWVzLlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cIm1vcmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsyIGhyZWY9XCIvZGF0ZW5zY2h1dHpcIiB0ZXh0PVwiTWVociBlcmZhaHJlblwiIGxpZ2h0IG5vTWFyZ2luLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAgICAgICAgICAgICAgIC5jb29raWVzLWluZm8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgJHttZWRpYVF1ZXJpZXMubW9iaWxlfSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuY29va2llcy1pbmZvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAxcmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxcmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLm1vcmUsIC5ob3d0byB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5hY2NlcHQgeyAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpIHtcbiAgICByZXR1cm4geyBcbiAgICAgICAgYWNjZXB0Q29va2llczogc3RhdGUuYWNjZXB0Q29va2llc1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKENvb2tpZXMpO1xuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAxcmVtOyAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgIHJpZ2h0OiAxcmVtO1xuICAgIHdpZHRoOiAyMnJlbTtcbiAgICBiYWNrZ3JvdW5kOiAke2NvbG9ycy5kfTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBjb2xvcjogJHtjb2xvcnMubDJ9OztcbmAiXX0= */\n/*@ sourceURL=/Users/krzysztof/www/magesuite-web/components/cookies.jsx */"),
        dynamic: [_styles__WEBPACK_IMPORTED_MODULE_3__["mediaQueries"].mobile],
        __self: this
      }));
    }
  }]);

  return Cookies;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

function mapStateToProps(state) {
  return {
    acceptCookies: state.acceptCookies
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(Cookies));
var Wrapper = styled.div(_templateObject(), _styles__WEBPACK_IMPORTED_MODULE_3__["colors"].d, _styles__WEBPACK_IMPORTED_MODULE_3__["colors"].l2);

/***/ })

})
//# sourceMappingURL=index.js.fd470291d751aaf40f48.hot-update.js.map