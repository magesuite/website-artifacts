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



function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n"]);

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
        className: "jsx-3074761640 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2877555334", [this.props.stickFooter ? 1 : 5]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        name: "description",
        content: this.props.description,
        className: "jsx-3074761640 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2877555334", [this.props.stickFooter ? 1 : 5]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
        className: "jsx-3074761640 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2877555334", [this.props.stickFooter ? 1 : 5]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        name: "robots",
        content: "index, follow",
        className: "jsx-3074761640 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2877555334", [this.props.stickFooter ? 1 : 5]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        rel: "icon",
        href: "/static/images/favicon.png",
        className: "jsx-3074761640 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2877555334", [this.props.stickFooter ? 1 : 5]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        property: "og:type",
        content: "website",
        className: "jsx-3074761640 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2877555334", [this.props.stickFooter ? 1 : 5]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        property: "og:locale",
        content: "en_US",
        className: "jsx-3074761640 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2877555334", [this.props.stickFooter ? 1 : 5]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
        className: "jsx-3074761640 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2877555334", [this.props.stickFooter ? 1 : 5]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_sections_nav__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3074761640 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2877555334", [this.props.stickFooter ? 1 : 5]]]) + " " + "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, this.props.children), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("aside", {
        className: "jsx-3074761640 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2877555334", [this.props.stickFooter ? 1 : 5]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_cookies__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("footer", {
        className: "jsx-3074761640 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2877555334", [this.props.stickFooter ? 1 : 5]]]),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_sections_footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3074761640",
        css: ".limited-width{max-width:1368px;margin:auto;}.max-width{max-width:1440px;margin:auto;}*,*:before,*:after{box-sizing:border-box;}html{font-size:16px;font-display:swap;}@media (max-width:480px){html{font-size:4.3vw;}.limited-width{max-width:100vw;overflow:hidden;}}@media (min-width:481px) and (max-width:1368px){html{font-size:1.145vw;}}p,h1,h2,h3,figure,dt,dl,dd,body{margin:0;}body{font-size:0;font-family:\"Ubuntu\",-apple-system,BlinkMacSystemFont,\"Segoe UI\", \"Roboto\",\"Helvetica Neue\",Arial,sans-serif, \"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\";}aside{position:relative;z-index:1000;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rcnp5c3p0b2Yvd3d3L21hZ2VzdWl0ZS13ZWIvY29tcG9uZW50cy9sYXlvdXQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNDbUMsQUFHMEMsQUFLQSxBQUtLLEFBSVAsQUFPSyxBQUdBLEFBT0UsQUFLYixBQUlHLEFBTU0sU0FUdEIsR0FNZ0UsR0E1QjFDLENBT2xCLEFBR29CLENBeEJSLEFBS0EsQ0EwQlosQUFlYSxJQXBDakIsT0FUQSxBQUtBLEVBeUNBLENBdEJJLENBVEosZ0pBMkJBIiwiZmlsZSI6Ii9Vc2Vycy9rcnp5c3p0b2Yvd3d3L21hZ2VzdWl0ZS13ZWIvY29tcG9uZW50cy9sYXlvdXQuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBOYXYgZnJvbSAnLi4vc2VjdGlvbnMvbmF2JztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vc2VjdGlvbnMvZm9vdGVyJztcbmltcG9ydCBDb29raWVzIGZyb20gJy4vY29va2llcyc7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgYWNjZXB0Q29va2llcyB9IGZyb20gJy4uL2RhdGEvc3RvcmUnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNsYXNzIExheW91dCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICB2YXIgdGl0bGUgPSB0aGlzLnByb3BzLnRpdGxlIHx8ICdNYWdlU3VpdGUnXG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxSb290PlxuICAgICAgICAgICAgICAgIDxIZWFkPiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXt0aGlzLnByb3BzLmRlc2NyaXB0aW9ufS8+XG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiLz5cbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInJvYm90c1wiIGNvbnRlbnQ9XCJpbmRleCwgZm9sbG93XCIvPlxuICAgICAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9zdGF0aWMvaW1hZ2VzL2Zhdmljb24ucG5nXCIvPlxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PVwid2Vic2l0ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIHsvKiB7IHRoaXMucHJvcHMub2dpbWFnZSAmJiA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD17XCJodHRwczovL3d3dy5jcmVhdGl2ZXN0eWxlLmRlL3N0YXRpYy9waWN0dXJlcy9cIit0aGlzLnByb3BzLm9naW1hZ2UrXCItbGFyZ2UuanBnXCJ9IC8+fSAqL31cbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpsb2NhbGVcIiBjb250ZW50PVwiZW5fVVNcIiAvPlxuICAgICAgICAgICAgICAgICAgICB7LyogPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1VYnVudHU6MzAwLDQwMCw3MDAmYW1wO3N1YnNldD1sYXRpbi1leHRcIiByZWw9XCJzdHlsZXNoZWV0XCI+PC9saW5rPiAqL31cbiAgICAgICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgPE5hdi8+XG4gICAgICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxhc2lkZT5cbiAgICAgICAgICAgICAgICAgICAgPENvb2tpZXMvPlxuICAgICAgICAgICAgICAgIDwvYXNpZGU+ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxmb290ZXI+XG4gICAgICAgICAgICAgICAgICAgIDxGb290ZXIvPlxuICAgICAgICAgICAgICAgIDwvZm9vdGVyPlxuICAgICAgICAgICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgICAgIFxuICAgICAgICAgICAgICAgICAgICAubGltaXRlZC13aWR0aCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEzNjhweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5tYXgtd2lkdGgge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxNDQwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaHRtbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7ICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWRpc3BsYXk6IHN3YXA7IFxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDQuM3Z3O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC5saW1pdGVkLXdpZHRoIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMHZ3O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDQ4MXB4KSBhbmQgKG1heC13aWR0aDogMTM2OHB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMTQ1dnc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIHAsIGgxLCBoMiwgaDMsIGZpZ3VyZSwgZHQsIGRsLCBkZCwgYm9keSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJSb2JvdG9cIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZiwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCI7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGFzaWRlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwMDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICAucm9vdCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZvb3RlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAke3RoaXMucHJvcHMuc3RpY2tGb290ZXI/IDEgOiA1fTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvUm9vdD5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc2Nyb2xsVGljayA9IGZhbHNlO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBpZih3aW5kb3cpIHtcbiAgICAgICAgICAgIHRoaXMud2F0Y2hTY3JvbGwoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluaXRpYWxTY29sbFkgPSB3aW5kb3cuc2Nyb2xsWTtcbiAgICB9XG5cbiAgICB3YXRjaFNjcm9sbCgpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGUgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnNjcm9sbFRpY2spIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHcgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFRpY2s9ZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMucHJvcHMuZGlzcGF0Y2goc2Nyb2xsWSh3aW5kb3cuc2Nyb2xsWSkpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYoTWF0aC5hYnMod2luZG93LnNjcm9sbFkgLSB0aGlzLmluaXRpYWxTY29sbFkpID4gNDAwICYmICF0aGlzLnByb3BzLmFjY2VwdENvb2tpZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYWNjZXB0Q29va2llcygpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pOyAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVGljaz10cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgfSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBzdGlja0Zvb3Rlcjogc3RhdGUuc3RpY2tGb290ZXIsXG4gICAgICAgIGFjY2VwdENvb2tpZXM6IHN0YXRlLmFjY2VwdENvb2tpZXNcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShMYXlvdXQpO1xuXG5jb25zdCBSb290ID0gc3R5bGVkLmRpdmBcblxuYCJdfQ== */\n/*@ sourceURL=/Users/krzysztof/www/magesuite-web/components/layout.jsx */",
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2877555334",
        css: ".root.__jsx-style-dynamic-selector{position:relative;}.content.__jsx-style-dynamic-selector{position:relative;z-index:10;}footer.__jsx-style-dynamic-selector{position:relative;z-index:".concat(this.props.stickFooter ? 1 : 5, ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rcnp5c3p0b2Yvd3d3L21hZ2VzdWl0ZS13ZWIvY29tcG9uZW50cy9sYXlvdXQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRGNEIsQUFHMkMsQUFJQSxBQUlBLGtCQVB0QixBQUllLEFBSTBCLFdBSHpDLDBCQUlBIiwiZmlsZSI6Ii9Vc2Vycy9rcnp5c3p0b2Yvd3d3L21hZ2VzdWl0ZS13ZWIvY29tcG9uZW50cy9sYXlvdXQuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBOYXYgZnJvbSAnLi4vc2VjdGlvbnMvbmF2JztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vc2VjdGlvbnMvZm9vdGVyJztcbmltcG9ydCBDb29raWVzIGZyb20gJy4vY29va2llcyc7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgYWNjZXB0Q29va2llcyB9IGZyb20gJy4uL2RhdGEvc3RvcmUnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNsYXNzIExheW91dCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICB2YXIgdGl0bGUgPSB0aGlzLnByb3BzLnRpdGxlIHx8ICdNYWdlU3VpdGUnXG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxSb290PlxuICAgICAgICAgICAgICAgIDxIZWFkPiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXt0aGlzLnByb3BzLmRlc2NyaXB0aW9ufS8+XG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiLz5cbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInJvYm90c1wiIGNvbnRlbnQ9XCJpbmRleCwgZm9sbG93XCIvPlxuICAgICAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9zdGF0aWMvaW1hZ2VzL2Zhdmljb24ucG5nXCIvPlxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PVwid2Vic2l0ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIHsvKiB7IHRoaXMucHJvcHMub2dpbWFnZSAmJiA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD17XCJodHRwczovL3d3dy5jcmVhdGl2ZXN0eWxlLmRlL3N0YXRpYy9waWN0dXJlcy9cIit0aGlzLnByb3BzLm9naW1hZ2UrXCItbGFyZ2UuanBnXCJ9IC8+fSAqL31cbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpsb2NhbGVcIiBjb250ZW50PVwiZW5fVVNcIiAvPlxuICAgICAgICAgICAgICAgICAgICB7LyogPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1VYnVudHU6MzAwLDQwMCw3MDAmYW1wO3N1YnNldD1sYXRpbi1leHRcIiByZWw9XCJzdHlsZXNoZWV0XCI+PC9saW5rPiAqL31cbiAgICAgICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgPE5hdi8+XG4gICAgICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxhc2lkZT5cbiAgICAgICAgICAgICAgICAgICAgPENvb2tpZXMvPlxuICAgICAgICAgICAgICAgIDwvYXNpZGU+ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxmb290ZXI+XG4gICAgICAgICAgICAgICAgICAgIDxGb290ZXIvPlxuICAgICAgICAgICAgICAgIDwvZm9vdGVyPlxuICAgICAgICAgICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgICAgIFxuICAgICAgICAgICAgICAgICAgICAubGltaXRlZC13aWR0aCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEzNjhweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5tYXgtd2lkdGgge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxNDQwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaHRtbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7ICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWRpc3BsYXk6IHN3YXA7IFxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDQuM3Z3O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC5saW1pdGVkLXdpZHRoIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMHZ3O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDQ4MXB4KSBhbmQgKG1heC13aWR0aDogMTM2OHB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMTQ1dnc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIHAsIGgxLCBoMiwgaDMsIGZpZ3VyZSwgZHQsIGRsLCBkZCwgYm9keSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJVYnVudHVcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJSb2JvdG9cIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZiwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCI7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGFzaWRlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwMDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICAucm9vdCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZvb3RlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAke3RoaXMucHJvcHMuc3RpY2tGb290ZXI/IDEgOiA1fTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvUm9vdD5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc2Nyb2xsVGljayA9IGZhbHNlO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBpZih3aW5kb3cpIHtcbiAgICAgICAgICAgIHRoaXMud2F0Y2hTY3JvbGwoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluaXRpYWxTY29sbFkgPSB3aW5kb3cuc2Nyb2xsWTtcbiAgICB9XG5cbiAgICB3YXRjaFNjcm9sbCgpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGUgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnNjcm9sbFRpY2spIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHcgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFRpY2s9ZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMucHJvcHMuZGlzcGF0Y2goc2Nyb2xsWSh3aW5kb3cuc2Nyb2xsWSkpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYoTWF0aC5hYnMod2luZG93LnNjcm9sbFkgLSB0aGlzLmluaXRpYWxTY29sbFkpID4gNDAwICYmICF0aGlzLnByb3BzLmFjY2VwdENvb2tpZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYWNjZXB0Q29va2llcygpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pOyAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVGljaz10cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgfSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBzdGlja0Zvb3Rlcjogc3RhdGUuc3RpY2tGb290ZXIsXG4gICAgICAgIGFjY2VwdENvb2tpZXM6IHN0YXRlLmFjY2VwdENvb2tpZXNcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShMYXlvdXQpO1xuXG5jb25zdCBSb290ID0gc3R5bGVkLmRpdmBcblxuYCJdfQ== */\n/*@ sourceURL=/Users/krzysztof/www/magesuite-web/components/layout.jsx */"),
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

/***/ })

})
//# sourceMappingURL=index.js.5bc1930c1f6e12683950.hot-update.js.map