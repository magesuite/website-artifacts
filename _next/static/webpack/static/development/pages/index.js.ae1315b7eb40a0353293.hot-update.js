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
  var data = _taggedTemplateLiteral(["\n    position: fixed;\n    bottom: 1rem;                        \n    right: 1rem;\n    width: 22rem;\n    background: ", ";\n    padding: 1rem;\n    transition: opacity 0.3s ease;\n    font-size: 1rem;\n    color: ", ";\n\n    @media ", " {\n        width: auto;\n        left: 1rem;\n        right: 1rem;\n        bottom: auto;\n        top: 5rem;\n    }\n"]);

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

      return !this.props.acceptCookies && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Wrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        onClick: function onClick(e) {
          _this.props.dispatch(Object(_data_store__WEBPACK_IMPORTED_MODULE_4__["acceptCookies"])());
        },
        className: "jsx-2884704884" + " " + "accept",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, "Our website uses cookies. By continuing to use our website, you consent to the use of tracking cookies."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2884704884",
        css: ".more.jsx-2884704884,.howto.jsx-2884704884{margin-top:1rem;}.accept.jsx-2884704884{cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rcnp5c3p0b2Yvd3d3L21hZ2VzdWl0ZS13ZWIvY29tcG9uZW50cy9jb29raWVzLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFlNEIsQUFJeUMsQUFHRCxlQUNuQixDQUhBIiwiZmlsZSI6Ii9Vc2Vycy9rcnp5c3p0b2Yvd3d3L21hZ2VzdWl0ZS13ZWIvY29tcG9uZW50cy9jb29raWVzLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgY29sb3JzLCBtZWRpYVF1ZXJpZXMgfSBmcm9tICcuL3N0eWxlcyc7XG5pbXBvcnQgeyBhY2NlcHRDb29raWVzIH0gZnJvbSAnLi4vZGF0YS9zdG9yZSc7XG5cbmNsYXNzIENvb2tpZXMgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLnByb3BzLmFjY2VwdENvb2tpZXMgJiYgKCAgICAgICAgICAgIFxuICAgICAgICAgICAgPFdyYXBwZXI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NlcHRcIiBvbkNsaWNrPXtlPT57IHRoaXMucHJvcHMuZGlzcGF0Y2goYWNjZXB0Q29va2llcygpKSB9fT5cbiAgICAgICAgICAgICAgICAgICAgT3VyIHdlYnNpdGUgdXNlcyBjb29raWVzLiBCeSBjb250aW51aW5nIHRvIHVzZSBvdXIgd2Vic2l0ZSwgeW91IGNvbnNlbnQgdG8gdGhlIHVzZSBvZiB0cmFja2luZyBjb29raWVzLlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cIm1vcmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsyIGhyZWY9XCIvZGF0ZW5zY2h1dHpcIiB0ZXh0PVwiTWVociBlcmZhaHJlblwiIGxpZ2h0IG5vTWFyZ2luLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLm1vcmUsIC5ob3d0byB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5hY2NlcHQgeyAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvV3JhcHBlcj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlKSB7XG4gICAgcmV0dXJuIHsgXG4gICAgICAgIGFjY2VwdENvb2tpZXM6IHN0YXRlLmFjY2VwdENvb2tpZXNcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShDb29raWVzKTtcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMXJlbTsgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICByaWdodDogMXJlbTtcbiAgICB3aWR0aDogMjJyZW07XG4gICAgYmFja2dyb3VuZDogJHtjb2xvcnMuZH07XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgY29sb3I6ICR7Y29sb3JzLmwyfTtcblxuICAgIEBtZWRpYSAke21lZGlhUXVlcmllcy5tb2JpbGV9IHtcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIGxlZnQ6IDFyZW07XG4gICAgICAgIHJpZ2h0OiAxcmVtO1xuICAgICAgICBib3R0b206IGF1dG87XG4gICAgICAgIHRvcDogNXJlbTtcbiAgICB9XG5gIl19 */\n/*@ sourceURL=/Users/krzysztof/www/magesuite-web/components/cookies.jsx */",
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
var Wrapper = styled.div(_templateObject(), _styles__WEBPACK_IMPORTED_MODULE_3__["colors"].d, _styles__WEBPACK_IMPORTED_MODULE_3__["colors"].l2, _styles__WEBPACK_IMPORTED_MODULE_3__["mediaQueries"].mobile);

/***/ })

})
//# sourceMappingURL=index.js.ae1315b7eb40a0353293.hot-update.js.map