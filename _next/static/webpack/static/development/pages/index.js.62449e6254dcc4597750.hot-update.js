webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/features-tabs.jsx":
/*!**************************************!*\
  !*** ./components/features-tabs.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _feature_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feature-icon */ "./components/feature-icon.jsx");
/* harmony import */ var _icons_icon_performance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/icon-performance */ "./components/icons/icon-performance.jsx");
/* harmony import */ var _icons_icon_security__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons/icon-security */ "./components/icons/icon-security.jsx");
/* harmony import */ var _icons_icon_design__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons/icon-design */ "./components/icons/icon-design.jsx");
/* harmony import */ var _icons_icon_news__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icons/icon-news */ "./components/icons/icon-news.jsx");
/* harmony import */ var _icons_icon_cms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./icons/icon-cms */ "./components/icons/icon-cms.jsx");
/* harmony import */ var _icons_icon_search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./icons/icon-search */ "./components/icons/icon-search.jsx");
var _jsxFileName = "/Users/krzysztof/www/magesuite-web/components/features-tabs.jsx";


function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    flex: 1 1 16%;  \n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    list-style: none;\n    margin: 0;\n    padding: 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }









/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var tabClicked = _ref.tabClicked,
      activeTab = _ref.activeTab;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tabs, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tab, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_feature_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: "Content Constructor",
    icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons_icon_cms__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }),
    id: "cms",
    clickedHandler: tabClicked,
    active: activeTab == 'cms',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tab, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_feature_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: "High Performance",
    icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons_icon_performance__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }),
    id: "perf",
    clickedHandler: tabClicked,
    active: activeTab == 'perf',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tab, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_feature_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: "Security and\xA0GDPR",
    icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons_icon_security__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }),
    id: "security",
    clickedHandler: tabClicked,
    active: activeTab == 'security',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tab, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_feature_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: "Search Engine",
    icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons_icon_search__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }),
    id: "search",
    clickedHandler: tabClicked,
    active: activeTab == 'search',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tab, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_feature_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: "Marketing",
    icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons_icon_news__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }),
    id: "marketing",
    clickedHandler: tabClicked,
    active: activeTab == 'marketing',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tab, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_feature_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: "UX",
    icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons_icon_design__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }),
    id: "ux",
    clickedHandler: tabClicked,
    active: activeTab == 'ux',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  })));
});
var Tabs = styled.ul(_templateObject());
var Tab = styled.li(_templateObject2());

/***/ })

})
//# sourceMappingURL=index.js.62449e6254dcc4597750.hot-update.js.map