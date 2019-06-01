webpackHotUpdate("static/development/pages/index.js",{

/***/ "./sections/why.jsx":
/*!**************************!*\
  !*** ./sections/why.jsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Why; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/styles */ "./components/styles.jsx");
/* harmony import */ var _components_features_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/features-tabs */ "./components/features-tabs.jsx");
/* harmony import */ var _components_text_picture__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/text-picture */ "./components/text-picture.jsx");
/* harmony import */ var _components_picture_vectorpng__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/picture-vectorpng */ "./components/picture-vectorpng.jsx");
/* harmony import */ var _components_headline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/headline */ "./components/headline.jsx");
/* harmony import */ var _components_paragraph__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/paragraph */ "./components/paragraph.jsx");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/button */ "./components/button.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/krzysztof/www/magesuite-web/sections/why.jsx";


function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    @media ", " {\n        margin-top: ", ";\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    padding: ", " ", ";\n    @media ", " {\n        padding: ", " ", ";\n    }\n"]);

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











var Why =
/*#__PURE__*/
function (_Component) {
  _inherits(Why, _Component);

  function Why(props) {
    var _this;

    _classCallCheck(this, Why);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Why).call(this, props));
    _this.state = {
      tab: 'cms'
    };
    return _this;
  }

  _createClass(Why, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Article, {
        className: "limited-width",
        id: "why",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_headline__WEBPACK_IMPORTED_MODULE_5__["default"], {
        as: "h2",
        centered: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, "What is MageSuite?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_paragraph__WEBPACK_IMPORTED_MODULE_6__["default"], {
        centered: true,
        distance: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, "MageSuite is a collection of OpenSource modules adding valuable features and enhancements that are missing in your native Magento 2 Open Source shop."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_features_tabs__WEBPACK_IMPORTED_MODULE_2__["default"], {
        tabClicked: this.tabClicked.bind(this),
        activeTab: this.state.tab,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextPicture, {
        picture: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_picture_vectorpng__WEBPACK_IMPORTED_MODULE_4__["default"], {
          image: "g-feature-cms",
          widthDesktop: "60%",
          marginDesktop: "2rem 9rem 0 0",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        }),
        hide: this.state.tab != 'cms',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_headline__WEBPACK_IMPORTED_MODULE_5__["default"], {
        as: "h3",
        size: "20",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "Content Constructor"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_paragraph__WEBPACK_IMPORTED_MODULE_6__["default"], {
        size: "20",
        distance: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "The MageSuite Content Constructor is an enhancement of the Magento CMS giving you the possibility to build up any CMS page by combining numerous types of components within a few clicks and with no need to develop separate templates. In addition to that, it allows you to use these components also on your category page and product detail page. The Content Constructor is a free and Open Source alternative to the Magento 2 PageBuilder.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextPicture, {
        picture: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_picture_vectorpng__WEBPACK_IMPORTED_MODULE_4__["default"], {
          image: "g-feature-performance",
          widthDesktop: "80%",
          marginDesktop: "2rem 1rem 0 0",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        }),
        hide: this.state.tab != 'perf',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_headline__WEBPACK_IMPORTED_MODULE_5__["default"], {
        as: "h3",
        size: "20",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "High Performance"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_paragraph__WEBPACK_IMPORTED_MODULE_6__["default"], {
        size: "20",
        distance: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "To boost loading and rendering times of your Magento webshop, MageSuite provides a couple of performance improvements in the frontend and backend. Furthermore, the Cache Warmer rebuilds your Varnish cache for the most important Magento pages after having flushed the cache. The MageSuite Cloud makes your Magento Open Source even ready for AWS. It increases the availability of your webshop in traffic peaks by providing features like horizontal auto-scaling.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextPicture, {
        picture: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_picture_vectorpng__WEBPACK_IMPORTED_MODULE_4__["default"], {
          image: "g-feature-security",
          widthDesktop: "50%",
          marginDesktop: "2rem 11rem 0 0",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        }),
        hide: this.state.tab != 'security',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_headline__WEBPACK_IMPORTED_MODULE_5__["default"], {
        as: "h3",
        size: "20",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "Security & GDPR"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_paragraph__WEBPACK_IMPORTED_MODULE_6__["default"], {
        size: "20",
        distance: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, "To maximize the security of personal data, MageSuite provides a module, which helps you to meet the requirements of the General Data Protection Regulation (GDPR / DSGVO). It restricts access to customer data and anonymizes personal information in your Magento admin panel so that users without suitable rights for processing data cannot see it.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextPicture, {
        picture: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_picture_vectorpng__WEBPACK_IMPORTED_MODULE_4__["default"], {
          image: "g-feature-search",
          widthDesktop: "60%",
          marginDesktop: "2rem 9rem 0 0",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        }),
        hide: this.state.tab != 'search',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_headline__WEBPACK_IMPORTED_MODULE_5__["default"], {
        as: "h3",
        size: "20",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "Search Engine"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_paragraph__WEBPACK_IMPORTED_MODULE_6__["default"], {
        size: "20",
        distance: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "MageSuite integrates the elasticsearch engine by using the OpenSource elasticsuite extension and providing you with a comprehensive feature set for your Magento search such as advanced auto-suggest, improved category filters, optimizing the search result relevance and many more. In addition to that MageSuite enhances the search UX, allows also horizontal layered navigation filters and integrates elasticsuite with the Content Constructor components.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextPicture, {
        picture: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_picture_vectorpng__WEBPACK_IMPORTED_MODULE_4__["default"], {
          image: "g-feature-marketing",
          widthDesktop: "60%",
          marginDesktop: "2rem 9rem 0 0",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: this
        }),
        hide: this.state.tab != 'marketing',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_headline__WEBPACK_IMPORTED_MODULE_5__["default"], {
        as: "h3",
        size: "20",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "Marketing"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_paragraph__WEBPACK_IMPORTED_MODULE_6__["default"], {
        size: "20",
        distance: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "To increase your sales and conversion rate, MageSuite provides you with many marketing features such as Daily Deals, Positive Indicators, Image Teasers inside the product grid, a simple blog functionality, product gifts, brand management, SEO improvements, identification and display of bestsellers and many more. Many of those have been integrated with the Content Constructor, and that allows you to create various marketing campaign landing pages.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextPicture, {
        picture: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_picture_vectorpng__WEBPACK_IMPORTED_MODULE_4__["default"], {
          image: "g-feature-ux",
          widthDesktop: "80%",
          marginDesktop: "2rem 2rem 0 0",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        }),
        hide: this.state.tab != 'ux',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_headline__WEBPACK_IMPORTED_MODULE_5__["default"], {
        as: "h3",
        size: "20",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, "User Experience"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_paragraph__WEBPACK_IMPORTED_MODULE_6__["default"], {
        size: "20",
        distance: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, "MageSuite improves the user experience for customers and administrators.   Beside smaller UX enhancements in the search, layered navigation filters, checkout, content management and mobile optimizations there are also brand new features such a the Product Finder. It allows you to define a product questionnaire within the Content Constructor. By that, you can consult your customers at any place of your Magento webshop which product fits best according to their requirements.")));
    }
  }, {
    key: "tabClicked",
    value: function tabClicked(id) {
      this.setState({
        tab: id
      });
    }
  }]);

  return Why;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


var Article = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].article(_templateObject(), Object(_components_styles__WEBPACK_IMPORTED_MODULE_1__["rem"])(80), Object(_components_styles__WEBPACK_IMPORTED_MODULE_1__["rem"])(100), _components_styles__WEBPACK_IMPORTED_MODULE_1__["mediaQueries"].mobile, Object(_components_styles__WEBPACK_IMPORTED_MODULE_1__["rem"])(40), Object(_components_styles__WEBPACK_IMPORTED_MODULE_1__["rem"])(20));
var TextPicture = Object(styled_components__WEBPACK_IMPORTED_MODULE_8__["default"])(_components_text_picture__WEBPACK_IMPORTED_MODULE_3__["default"])(_templateObject2(), _components_styles__WEBPACK_IMPORTED_MODULE_1__["mediaQueries"].mobile, Object(_components_styles__WEBPACK_IMPORTED_MODULE_1__["rem"])(20));

/***/ })

})
//# sourceMappingURL=index.js.58a6b56f970b8203aa37.hot-update.js.map