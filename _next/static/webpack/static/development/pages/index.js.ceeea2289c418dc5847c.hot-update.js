webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/layout.jsx":
/*!*******************************!*\
  !*** ./components/layout.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sections_nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sections/nav */ "./sections/nav.jsx");
/* harmony import */ var _sections_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sections/footer */ "./sections/footer.jsx");
/* harmony import */ var _cookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cookies */ "./components/cookies.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _data_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data/store */ "./data/store.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/krzysztof/www/magesuite-web/components/layout.jsx";



function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n    z-index: 10;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










var Layout =
/*#__PURE__*/
function (_Component) {
  _inherits(Layout, _Component);

  _createClass(Layout, [{
    key: "render",
    value: function render() {
      var title = this.props.title || 'MageSuite';
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Root, {
        className: this.props.className,
        as: this.props.as,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
        className: "jsx-3074761640 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2870690085", [this.props.stickFooter ? 1 : 5]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        name: "description",
        content: this.props.description,
        className: "jsx-3074761640 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2870690085", [this.props.stickFooter ? 1 : 5]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
        className: "jsx-3074761640 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2870690085", [this.props.stickFooter ? 1 : 5]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        name: "robots",
        content: "index, follow",
        className: "jsx-3074761640 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2870690085", [this.props.stickFooter ? 1 : 5]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        rel: "icon",
        href: "/static/images/favicon.png",
        className: "jsx-3074761640 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2870690085", [this.props.stickFooter ? 1 : 5]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        property: "og:type",
        content: "website",
        className: "jsx-3074761640 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2870690085", [this.props.stickFooter ? 1 : 5]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        property: "og:locale",
        content: "en_US",
        className: "jsx-3074761640 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2870690085", [this.props.stickFooter ? 1 : 5]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_sections_nav__WEBPACK_IMPORTED_MODULE_3__["default"], {
        as: "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, this.props.children), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Footer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3074761640",
        css: ".limited-width{max-width:1368px;margin:auto;}.max-width{max-width:1440px;margin:auto;}*,*:before,*:after{box-sizing:border-box;}html{font-size:16px;font-display:swap;}@media (max-width:480px){html{font-size:4.3vw;}.limited-width{max-width:100vw;overflow:hidden;}}@media (min-width:481px) and (max-width:1368px){html{font-size:1.145vw;}}p,h1,h2,h3,figure,dt,dl,dd,body{margin:0;}body{font-size:0;font-family:\"Ubuntu\",-apple-system,BlinkMacSystemFont,\"Segoe UI\", \"Roboto\",\"Helvetica Neue\",Arial,sans-serif, \"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\";}aside{position:relative;z-index:1000;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rcnp5c3p0b2Yvd3d3L21hZ2VzdWl0ZS13ZWIvY29tcG9uZW50cy9sYXlvdXQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFDbUMsQUFHMEMsQUFLQSxBQUtLLEFBSVAsQUFPSyxBQUdBLEFBT0UsQUFLYixBQUlHLEFBTU0sU0FUdEIsR0FNZ0UsR0E1QjFDLENBT2xCLEFBR29CLENBeEJSLEFBS0EsQ0EwQlosQUFlYSxJQXBDakIsT0FUQSxBQUtBLEVBeUNBLENBdEJJLENBVEosZ0pBMkJBIiwiZmlsZSI6Ii9Vc2Vycy9rcnp5c3p0b2Yvd3d3L21hZ2VzdWl0ZS13ZWIvY29tcG9uZW50cy9sYXlvdXQuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBOYXYgZnJvbSAnLi4vc2VjdGlvbnMvbmF2JztcbmltcG9ydCBEZWZhdWx0Rm9vdGVyIGZyb20gJy4uL3NlY3Rpb25zL2Zvb3Rlcic7XG5pbXBvcnQgQ29va2llcyBmcm9tICcuL2Nvb2tpZXMnO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGFjY2VwdENvb2tpZXMgfSBmcm9tICcuLi9kYXRhL3N0b3JlJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jbGFzcyBMYXlvdXQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIHRpdGxlID0gdGhpcy5wcm9wcy50aXRsZSB8fCAnTWFnZVN1aXRlJ1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Um9vdCBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfSBhcz17dGhpcy5wcm9wcy5hc30+XG4gICAgICAgICAgICAgICAgPEhlYWQ+ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3RoaXMucHJvcHMuZGVzY3JpcHRpb259Lz5cbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIvPlxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwicm9ib3RzXCIgY29udGVudD1cImluZGV4LCBmb2xsb3dcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL3N0YXRpYy9pbWFnZXMvZmF2aWNvbi5wbmdcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgey8qIHsgdGhpcy5wcm9wcy5vZ2ltYWdlICYmIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PXtcImh0dHBzOi8vd3d3LmNyZWF0aXZlc3R5bGUuZGUvc3RhdGljL3BpY3R1cmVzL1wiK3RoaXMucHJvcHMub2dpbWFnZStcIi1sYXJnZS5qcGdcIn0gLz59ICovfVxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmxvY2FsZVwiIGNvbnRlbnQ9XCJlbl9VU1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIHsvKiA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVVidW50dTozMDAsNDAwLDcwMCZhbXA7c3Vic2V0PWxhdGluLWV4dFwiIHJlbD1cInN0eWxlc2hlZXRcIj48L2xpbms+ICovfVxuICAgICAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgICAgICA8TmF2IGFzPVwiaGVhZGVyXCIvPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxDb250ZW50PlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgICAgICA8L0NvbnRlbnQ+XG4gICAgICAgICAgICAgICAgey8qIDxhc2lkZT5cbiAgICAgICAgICAgICAgICAgICAgPENvb2tpZXMvPlxuICAgICAgICAgICAgICAgIDwvYXNpZGU+ICAgICAgICAgICAgICAgICAqL31cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8Rm9vdGVyLz5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YCAgICBcbiAgICAgICAgICAgICAgICAgICAgLmxpbWl0ZWQtd2lkdGgge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMzY4cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAubWF4LXdpZHRoIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTQ0MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICosICo6YmVmb3JlLCAqOmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGh0bWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4OyAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1kaXNwbGF5OiBzd2FwOyBcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaHRtbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA0LjN2dztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAubGltaXRlZC13aWR0aCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDB2dztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA0ODFweCkgYW5kIChtYXgtd2lkdGg6IDEzNjhweCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaHRtbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjE0NXZ3O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICBwLCBoMSwgaDIsIGgzLCBmaWd1cmUsIGR0LCBkbCwgZGQsIGJvZHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiVWJ1bnR1XCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiUm9ib3RvXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWYsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiOyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBhc2lkZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGZvb3RlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAke3RoaXMucHJvcHMuc3RpY2tGb290ZXI/IDEgOiA1fTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvUm9vdD5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc2Nyb2xsVGljayA9IGZhbHNlO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBpZih3aW5kb3cpIHtcbiAgICAgICAgICAgIHRoaXMud2F0Y2hTY3JvbGwoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluaXRpYWxTY29sbFkgPSB3aW5kb3cuc2Nyb2xsWTtcbiAgICB9XG5cbiAgICB3YXRjaFNjcm9sbCgpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGUgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnNjcm9sbFRpY2spIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHcgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFRpY2s9ZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMucHJvcHMuZGlzcGF0Y2goc2Nyb2xsWSh3aW5kb3cuc2Nyb2xsWSkpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYoTWF0aC5hYnMod2luZG93LnNjcm9sbFkgLSB0aGlzLmluaXRpYWxTY29sbFkpID4gNDAwICYmICF0aGlzLnByb3BzLmFjY2VwdENvb2tpZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYWNjZXB0Q29va2llcygpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pOyAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVGljaz10cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgfSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBzdGlja0Zvb3Rlcjogc3RhdGUuc3RpY2tGb290ZXIsXG4gICAgICAgIGFjY2VwdENvb2tpZXM6IHN0YXRlLmFjY2VwdENvb2tpZXNcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShMYXlvdXQpO1xuXG5jb25zdCBSb290ID0gc3R5bGVkLmRpdmBcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5gXG5cbmNvbnN0IENvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxMDtcbmAiXX0= */\n/*@ sourceURL=/Users/krzysztof/www/magesuite-web/components/layout.jsx */",
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2870690085",
        css: "footer.__jsx-style-dynamic-selector{position:relative;z-index:".concat(this.props.stickFooter ? 1 : 5, ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rcnp5c3p0b2Yvd3d3L21hZ2VzdWl0ZS13ZWIvY29tcG9uZW50cy9sYXlvdXQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJGNEIsQUFJMkMsa0JBQ21CLHFDQUN6QyIsImZpbGUiOiIvVXNlcnMva3J6eXN6dG9mL3d3dy9tYWdlc3VpdGUtd2ViL2NvbXBvbmVudHMvbGF5b3V0LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgTmF2IGZyb20gJy4uL3NlY3Rpb25zL25hdic7XG5pbXBvcnQgRGVmYXVsdEZvb3RlciBmcm9tICcuLi9zZWN0aW9ucy9mb290ZXInO1xuaW1wb3J0IENvb2tpZXMgZnJvbSAnLi9jb29raWVzJztcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBhY2NlcHRDb29raWVzIH0gZnJvbSAnLi4vZGF0YS9zdG9yZSc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY2xhc3MgTGF5b3V0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHZhciB0aXRsZSA9IHRoaXMucHJvcHMudGl0bGUgfHwgJ01hZ2VTdWl0ZSdcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFJvb3QgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX0gYXM9e3RoaXMucHJvcHMuYXN9PlxuICAgICAgICAgICAgICAgIDxIZWFkPiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXt0aGlzLnByb3BzLmRlc2NyaXB0aW9ufS8+XG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiLz5cbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInJvYm90c1wiIGNvbnRlbnQ9XCJpbmRleCwgZm9sbG93XCIvPlxuICAgICAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9zdGF0aWMvaW1hZ2VzL2Zhdmljb24ucG5nXCIvPlxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PVwid2Vic2l0ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIHsvKiB7IHRoaXMucHJvcHMub2dpbWFnZSAmJiA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD17XCJodHRwczovL3d3dy5jcmVhdGl2ZXN0eWxlLmRlL3N0YXRpYy9waWN0dXJlcy9cIit0aGlzLnByb3BzLm9naW1hZ2UrXCItbGFyZ2UuanBnXCJ9IC8+fSAqL31cbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpsb2NhbGVcIiBjb250ZW50PVwiZW5fVVNcIiAvPlxuICAgICAgICAgICAgICAgICAgICB7LyogPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1VYnVudHU6MzAwLDQwMCw3MDAmYW1wO3N1YnNldD1sYXRpbi1leHRcIiByZWw9XCJzdHlsZXNoZWV0XCI+PC9saW5rPiAqL31cbiAgICAgICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICAgICAgPE5hdiBhcz1cImhlYWRlclwiLz5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8Q29udGVudD5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgPC9Db250ZW50PlxuICAgICAgICAgICAgICAgIHsvKiA8YXNpZGU+XG4gICAgICAgICAgICAgICAgICAgIDxDb29raWVzLz5cbiAgICAgICAgICAgICAgICA8L2FzaWRlPiAgICAgICAgICAgICAgICAgKi99XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPEZvb3Rlci8+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2AgICAgXG4gICAgICAgICAgICAgICAgICAgIC5saW1pdGVkLXdpZHRoIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTM2OHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLm1heC13aWR0aCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDE0NDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICAqLCAqOmJlZm9yZSwgKjphZnRlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBodG1sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDsgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZGlzcGxheTogc3dhcDsgXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNC4zdnc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLmxpbWl0ZWQtd2lkdGgge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwdnc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNDgxcHgpIGFuZCAobWF4LXdpZHRoOiAxMzY4cHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xNDV2dztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgcCwgaDEsIGgyLCBoMywgZmlndXJlLCBkdCwgZGwsIGRkLCBib2R5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlVidW50dVwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlJvYm90b1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjsgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYXNpZGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTAwMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBmb290ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogJHt0aGlzLnByb3BzLnN0aWNrRm9vdGVyPyAxIDogNX07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L1Jvb3Q+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnNjcm9sbFRpY2sgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgaWYod2luZG93KSB7XG4gICAgICAgICAgICB0aGlzLndhdGNoU2Nyb2xsKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbml0aWFsU2NvbGxZID0gd2luZG93LnNjcm9sbFk7XG4gICAgfVxuXG4gICAgd2F0Y2hTY3JvbGwoKSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBlID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5zY3JvbGxUaWNrKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh3ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxUaWNrPWZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnByb3BzLmRpc3BhdGNoKHNjcm9sbFkod2luZG93LnNjcm9sbFkpKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmKE1hdGguYWJzKHdpbmRvdy5zY3JvbGxZIC0gdGhpcy5pbml0aWFsU2NvbGxZKSA+IDQwMCAmJiAhdGhpcy5wcm9wcy5hY2NlcHRDb29raWVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGFjY2VwdENvb2tpZXMoKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTsgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFRpY2s9dHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgIH0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3RpY2tGb290ZXI6IHN0YXRlLnN0aWNrRm9vdGVyLFxuICAgICAgICBhY2NlcHRDb29raWVzOiBzdGF0ZS5hY2NlcHRDb29raWVzXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoTGF5b3V0KTtcblxuY29uc3QgUm9vdCA9IHN0eWxlZC5kaXZgXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuYFxuXG5jb25zdCBDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTA7XG5gIl19 */\n/*@ sourceURL=/Users/krzysztof/www/magesuite-web/components/layout.jsx */"),
        dynamic: [this.props.stickFooter ? 1 : 5],
        __self: this
      }));
    }
  }]);

  function Layout(props) {
    var _this;

    _classCallCheck(this, Layout);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Layout).call(this, props));
    _this.scrollTick = false;
    return _this;
  }

  _createClass(Layout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (window) {
        this.watchScroll();
      }

      this.initialScollY = window.scrollY;
    }
  }, {
    key: "watchScroll",
    value: function watchScroll() {
      var _this2 = this;

      window.addEventListener('scroll', function (e) {
        if (!_this2.scrollTick) {
          window.requestAnimationFrame(function (w) {
            _this2.scrollTick = false; // this.props.dispatch(scrollY(window.scrollY));

            if (Math.abs(window.scrollY - _this2.initialScollY) > 400 && !_this2.props.acceptCookies) {
              _this2.props.dispatch(Object(_data_store__WEBPACK_IMPORTED_MODULE_7__["acceptCookies"])());
            }
          });
          _this2.scrollTick = true;
        }
      });
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

function mapStateToProps(state) {
  return {
    stickFooter: state.stickFooter,
    acceptCookies: state.acceptCookies
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps)(Layout));
var Root = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div(_templateObject());
var Content = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div(_templateObject2());

/***/ })

})
//# sourceMappingURL=index.js.ceeea2289c418dc5847c.hot-update.js.map