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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/styles */ "./components/styles.jsx");
/* harmony import */ var _components_features_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/features-tabs */ "./components/features-tabs.jsx");
/* harmony import */ var _components_text_picture__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/text-picture */ "./components/text-picture.jsx");
/* harmony import */ var _components_picture_vectorpng__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/picture-vectorpng */ "./components/picture-vectorpng.jsx");
/* harmony import */ var _components_headline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/headline */ "./components/headline.jsx");
/* harmony import */ var _components_paragraph__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/paragraph */ "./components/paragraph.jsx");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/button */ "./components/button.jsx");
var _jsxFileName = "/Users/krzysztof/www/magesuite-web/sections/why.jsx";



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
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("article", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3893657940", [Object(_components_styles__WEBPACK_IMPORTED_MODULE_2__["rem"])(80), Object(_components_styles__WEBPACK_IMPORTED_MODULE_2__["rem"])(100)]]]) + " " + "limited-width",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_headline__WEBPACK_IMPORTED_MODULE_6__["default"], {
        HtmlTag: "h2",
        centered: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, "What is MageSuite?"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_paragraph__WEBPACK_IMPORTED_MODULE_7__["default"], {
        centered: true,
        distance: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, "MageSuite is a collection of OpenSource modules adding valuable features and enhancements that are missing in your native Magento 2 Open Source shop."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_features_tabs__WEBPACK_IMPORTED_MODULE_3__["default"], {
        tabClicked: this.tabClicked.bind(this),
        activeTab: this.state.tab,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }), this.state.tab == 'cms' && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_text_picture__WEBPACK_IMPORTED_MODULE_4__["default"], {
        picture: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_picture_vectorpng__WEBPACK_IMPORTED_MODULE_5__["default"], {
          image: "g-feature-cms",
          widthDesktop: "60%",
          marginDesktop: "2rem 9rem 0 0",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_headline__WEBPACK_IMPORTED_MODULE_6__["default"], {
        HtmlTag: "h3",
        size: "20",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "Content Constructor"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_paragraph__WEBPACK_IMPORTED_MODULE_7__["default"], {
        size: "20",
        distance: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "The MageSuite Content Constructor is an enhancement of the Magento CMS giving you the possibility to build up any CMS page by combining numerous types of components within a few clicks and with no need to develop separate templates. In addition to that, it allows you to use these components also on your category page and product detail page. The Content Constructor is a free and Open Source alternative to the Magento 2 PageBuilder.")), this.state.tab == 'perf' && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_text_picture__WEBPACK_IMPORTED_MODULE_4__["default"], {
        picture: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_picture_vectorpng__WEBPACK_IMPORTED_MODULE_5__["default"], {
          image: "g-feature-performance",
          widthDesktop: "80%",
          marginDesktop: "2rem 1rem 0 0",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_headline__WEBPACK_IMPORTED_MODULE_6__["default"], {
        HtmlTag: "h3",
        size: "20",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "High Performance"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_paragraph__WEBPACK_IMPORTED_MODULE_7__["default"], {
        size: "20",
        distance: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "To boost loading and rendering times of your Magento webshop, MageSuite provides a couple of performance improvements in the frontend and backend. Furthermore, the Cache Warmer rebuilds your Varnish cache for the most important Magento pages after having flushed the cache. The MageSuite Cloud makes your Magento Open Source even ready for AWS. It increases the availability of your webshop in traffic peaks by providing features like horizontal auto-scaling.")), this.state.tab == 'security' && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_text_picture__WEBPACK_IMPORTED_MODULE_4__["default"], {
        picture: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_picture_vectorpng__WEBPACK_IMPORTED_MODULE_5__["default"], {
          image: "g-feature-security",
          widthDesktop: "50%",
          marginDesktop: "2rem 11rem 0 0",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_headline__WEBPACK_IMPORTED_MODULE_6__["default"], {
        HtmlTag: "h3",
        size: "20",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "Security & GDPR"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_paragraph__WEBPACK_IMPORTED_MODULE_7__["default"], {
        size: "20",
        distance: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "To maximize the security of personal data, MageSuite provides a module, which helps you to meet the requirements of the General Data Protection Regulation (GDPR / DSGVO). It restricts access to customer data and anonymizes personal information in your Magento admin panel so that users without suitable rights for processing data cannot see it.")), this.state.tab == 'search' && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_text_picture__WEBPACK_IMPORTED_MODULE_4__["default"], {
        picture: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_picture_vectorpng__WEBPACK_IMPORTED_MODULE_5__["default"], {
          image: "g-feature-search",
          widthDesktop: "60%",
          marginDesktop: "2rem 9rem 0 0",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_headline__WEBPACK_IMPORTED_MODULE_6__["default"], {
        HtmlTag: "h3",
        size: "20",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, "Search Engine"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_paragraph__WEBPACK_IMPORTED_MODULE_7__["default"], {
        size: "20",
        distance: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "MageSuite integrates the elasticsearch engine by using the OpenSource elasticsuite extension and providing you with a comprehensive feature set for your Magento search such as advanced auto-suggest, improved category filters, optimizing the search result relevance and many more. In addition to that MageSuite enhances the search UX, allows also horizontal layered navigation filters and integrates elasticsuite with the Content Constructor components.")), this.state.tab == 'marketing' && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_text_picture__WEBPACK_IMPORTED_MODULE_4__["default"], {
        picture: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_picture_vectorpng__WEBPACK_IMPORTED_MODULE_5__["default"], {
          image: "g-feature-marketing",
          widthDesktop: "60%",
          marginDesktop: "2rem 9rem 0 0",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          __self: this
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_headline__WEBPACK_IMPORTED_MODULE_6__["default"], {
        HtmlTag: "h3",
        size: "20",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, "Marketing"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_paragraph__WEBPACK_IMPORTED_MODULE_7__["default"], {
        size: "20",
        distance: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, "To increase your sales and conversion rate, MageSuite provides you with many marketing features such as Daily Deals, Positive Indicators, Image Teasers inside the product grid, a simple blog functionality, product gifts, brand management, SEO improvements, identification and display of bestsellers and many more. Many of those have been integrated with the Content Constructor, and that allows you to create various marketing campaign landing pages.")), this.state.tab == 'ux' && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_text_picture__WEBPACK_IMPORTED_MODULE_4__["default"], {
        picture: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_picture_vectorpng__WEBPACK_IMPORTED_MODULE_5__["default"], {
          image: "g-feature-ux",
          widthDesktop: "90%",
          marginDesktop: "1rem 1rem 0 0",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          },
          __self: this
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_headline__WEBPACK_IMPORTED_MODULE_6__["default"], {
        HtmlTag: "h3",
        size: "20",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, "User Experience"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_paragraph__WEBPACK_IMPORTED_MODULE_7__["default"], {
        size: "20",
        distance: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, "MageSuite improves the user experience for customers and administrators.   Beside smaller UX enhancements in the search, layered navigation filters, checkout, content management and mobile optimizations there are also brand new features such a the Product Finder. It allows you to define a product questionnaire within the Content Constructor. By that, you can consult your customers at any place of your Magento webshop which product fits best according to their requirements.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3893657940",
        css: "article.__jsx-style-dynamic-selector{padding:".concat(Object(_components_styles__WEBPACK_IMPORTED_MODULE_2__["rem"])(80), " ").concat(Object(_components_styles__WEBPACK_IMPORTED_MODULE_2__["rem"])(100), ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rcnp5c3p0b2Yvd3d3L21hZ2VzdWl0ZS13ZWIvc2VjdGlvbnMvd2h5LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4RjRCLEFBRzJGLGtFQUN0RSIsImZpbGUiOiIvVXNlcnMva3J6eXN6dG9mL3d3dy9tYWdlc3VpdGUtd2ViL3NlY3Rpb25zL3doeS5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW0sIGNvbG9ycyB9IGZyb20gXCIuLi9jb21wb25lbnRzL3N0eWxlc1wiO1xuaW1wb3J0IEZlYXR1cmVzVGFicyBmcm9tIFwiLi4vY29tcG9uZW50cy9mZWF0dXJlcy10YWJzXCI7XG5pbXBvcnQgVGV4dFBpY3R1cmUgZnJvbSBcIi4uL2NvbXBvbmVudHMvdGV4dC1waWN0dXJlXCI7XG5pbXBvcnQgUGljdHVyZVZlY3RvcnBuZyBmcm9tIFwiLi4vY29tcG9uZW50cy9waWN0dXJlLXZlY3RvcnBuZ1wiO1xuaW1wb3J0IEhlYWRsaW5lIGZyb20gXCIuLi9jb21wb25lbnRzL2hlYWRsaW5lXCI7XG5pbXBvcnQgUGFyYWdyYXBoIGZyb20gXCIuLi9jb21wb25lbnRzL3BhcmFncmFwaFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9idXR0b25cIjtcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2h5IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB0YWI6ICdjbXMnXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJsaW1pdGVkLXdpZHRoXCI+XG4gICAgICAgICAgICAgICAgPEhlYWRsaW5lIEh0bWxUYWc9XCJoMlwiIGNlbnRlcmVkPldoYXQgaXMgTWFnZVN1aXRlPzwvSGVhZGxpbmU+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPFBhcmFncmFwaCBjZW50ZXJlZCBkaXN0YW5jZT5cbiAgICAgICAgICAgICAgICBNYWdlU3VpdGUgaXMgYSBjb2xsZWN0aW9uIG9mIE9wZW5Tb3VyY2UgbW9kdWxlcyBhZGRpbmcgdmFsdWFibGUgZmVhdHVyZXMgYW5kIGVuaGFuY2VtZW50cyB0aGF0IGFyZSBtaXNzaW5nIGluIHlvdXIgbmF0aXZlIE1hZ2VudG8gMiBPcGVuIFNvdXJjZSBzaG9wLlxuICAgICAgICAgICAgICAgIDwvUGFyYWdyYXBoPlxuICAgICAgICAgICAgICAgIDxGZWF0dXJlc1RhYnMgdGFiQ2xpY2tlZD17dGhpcy50YWJDbGlja2VkLmJpbmQodGhpcyl9IGFjdGl2ZVRhYj17dGhpcy5zdGF0ZS50YWJ9Lz5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB7ICh0aGlzLnN0YXRlLnRhYiA9PSAnY21zJykgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8VGV4dFBpY3R1cmUgcGljdHVyZT17KFxuICAgICAgICAgICAgICAgICAgICAgICAgPFBpY3R1cmVWZWN0b3JwbmcgaW1hZ2U9XCJnLWZlYXR1cmUtY21zXCIgd2lkdGhEZXNrdG9wPVwiNjAlXCIgbWFyZ2luRGVza3RvcD1cIjJyZW0gOXJlbSAwIDBcIi8+XG4gICAgICAgICAgICAgICAgICAgICl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRsaW5lIEh0bWxUYWc9XCJoM1wiIHNpemU9XCIyMFwiPkNvbnRlbnQgQ29uc3RydWN0b3I8L0hlYWRsaW5lPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFBhcmFncmFwaCBzaXplPVwiMjBcIiBkaXN0YW5jZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgTWFnZVN1aXRlIENvbnRlbnQgQ29uc3RydWN0b3IgaXMgYW4gZW5oYW5jZW1lbnQgb2YgdGhlIE1hZ2VudG8gQ01TIGdpdmluZyB5b3UgdGhlIHBvc3NpYmlsaXR5IHRvIGJ1aWxkIHVwIGFueSBDTVMgcGFnZSBieSBjb21iaW5pbmcgbnVtZXJvdXMgdHlwZXMgb2YgY29tcG9uZW50cyB3aXRoaW4gYSBmZXcgY2xpY2tzIGFuZCB3aXRoIG5vIG5lZWQgdG8gZGV2ZWxvcCBzZXBhcmF0ZSB0ZW1wbGF0ZXMuIEluIGFkZGl0aW9uIHRvIHRoYXQsIGl0IGFsbG93cyB5b3UgdG8gdXNlIHRoZXNlIGNvbXBvbmVudHMgYWxzbyBvbiB5b3VyIGNhdGVnb3J5IHBhZ2UgYW5kIHByb2R1Y3QgZGV0YWlsIHBhZ2UuIFRoZSBDb250ZW50IENvbnN0cnVjdG9yIGlzIGEgZnJlZSBhbmQgT3BlbiBTb3VyY2UgYWx0ZXJuYXRpdmUgdG8gdGhlIE1hZ2VudG8gMiBQYWdlQnVpbGRlci5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFyYWdyYXBoPlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxCdXR0b24gdGV4dD1cIkZpbmQgb3V0IG1vcmVcIi8+ICovfVxuICAgICAgICAgICAgICAgICAgICA8L1RleHRQaWN0dXJlPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgeyAodGhpcy5zdGF0ZS50YWIgPT0gJ3BlcmYnKSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0UGljdHVyZSBwaWN0dXJlPXsoXG4gICAgICAgICAgICAgICAgICAgICAgICA8UGljdHVyZVZlY3RvcnBuZyBpbWFnZT1cImctZmVhdHVyZS1wZXJmb3JtYW5jZVwiIHdpZHRoRGVza3RvcD1cIjgwJVwiIG1hcmdpbkRlc2t0b3A9XCIycmVtIDFyZW0gMCAwXCIvPlxuICAgICAgICAgICAgICAgICAgICApfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkbGluZSBIdG1sVGFnPVwiaDNcIiBzaXplPVwiMjBcIj5IaWdoIFBlcmZvcm1hbmNlPC9IZWFkbGluZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQYXJhZ3JhcGggc2l6ZT1cIjIwXCIgZGlzdGFuY2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVG8gYm9vc3QgbG9hZGluZyBhbmQgcmVuZGVyaW5nIHRpbWVzIG9mIHlvdXIgTWFnZW50byB3ZWJzaG9wLCBNYWdlU3VpdGUgcHJvdmlkZXMgYSBjb3VwbGUgb2YgcGVyZm9ybWFuY2UgaW1wcm92ZW1lbnRzIGluIHRoZSBmcm9udGVuZCBhbmQgYmFja2VuZC4gRnVydGhlcm1vcmUsIHRoZSBDYWNoZSBXYXJtZXIgcmVidWlsZHMgeW91ciBWYXJuaXNoIGNhY2hlIGZvciB0aGUgbW9zdCBpbXBvcnRhbnQgTWFnZW50byBwYWdlcyBhZnRlciBoYXZpbmcgZmx1c2hlZCB0aGUgY2FjaGUuIFRoZSBNYWdlU3VpdGUgQ2xvdWQgbWFrZXMgeW91ciBNYWdlbnRvIE9wZW4gU291cmNlIGV2ZW4gcmVhZHkgZm9yIEFXUy4gSXQgaW5jcmVhc2VzIHRoZSBhdmFpbGFiaWxpdHkgb2YgeW91ciB3ZWJzaG9wIGluIHRyYWZmaWMgcGVha3MgYnkgcHJvdmlkaW5nIGZlYXR1cmVzIGxpa2UgaG9yaXpvbnRhbCBhdXRvLXNjYWxpbmcuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1BhcmFncmFwaD5cbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0UGljdHVyZT5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHsgKHRoaXMuc3RhdGUudGFiID09ICdzZWN1cml0eScpICYmIChcbiAgICAgICAgICAgICAgICAgICAgPFRleHRQaWN0dXJlIHBpY3R1cmU9eyhcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQaWN0dXJlVmVjdG9ycG5nIGltYWdlPVwiZy1mZWF0dXJlLXNlY3VyaXR5XCIgd2lkdGhEZXNrdG9wPVwiNTAlXCIgbWFyZ2luRGVza3RvcD1cIjJyZW0gMTFyZW0gMCAwXCIvPlxuICAgICAgICAgICAgICAgICAgICApfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkbGluZSBIdG1sVGFnPVwiaDNcIiBzaXplPVwiMjBcIj5TZWN1cml0eSAmYW1wOyBHRFBSPC9IZWFkbGluZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQYXJhZ3JhcGggc2l6ZT1cIjIwXCIgZGlzdGFuY2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVG8gbWF4aW1pemUgdGhlIHNlY3VyaXR5IG9mIHBlcnNvbmFsIGRhdGEsIE1hZ2VTdWl0ZSBwcm92aWRlcyBhIG1vZHVsZSwgd2hpY2ggaGVscHMgeW91IHRvIG1lZXQgdGhlIHJlcXVpcmVtZW50cyBvZiB0aGUgR2VuZXJhbCBEYXRhIFByb3RlY3Rpb24gUmVndWxhdGlvbiAoR0RQUiAvIERTR1ZPKS4gSXQgcmVzdHJpY3RzIGFjY2VzcyB0byBjdXN0b21lciBkYXRhIGFuZCBhbm9ueW1pemVzIHBlcnNvbmFsIGluZm9ybWF0aW9uIGluIHlvdXIgTWFnZW50byBhZG1pbiBwYW5lbCBzbyB0aGF0IHVzZXJzIHdpdGhvdXQgc3VpdGFibGUgcmlnaHRzIGZvciBwcm9jZXNzaW5nIGRhdGEgY2Fubm90IHNlZSBpdC5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFyYWdyYXBoPlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvVGV4dFBpY3R1cmU+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB7ICh0aGlzLnN0YXRlLnRhYiA9PSAnc2VhcmNoJykgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8VGV4dFBpY3R1cmUgcGljdHVyZT17KFxuICAgICAgICAgICAgICAgICAgICAgICAgPFBpY3R1cmVWZWN0b3JwbmcgaW1hZ2U9XCJnLWZlYXR1cmUtc2VhcmNoXCIgd2lkdGhEZXNrdG9wPVwiNjAlXCIgbWFyZ2luRGVza3RvcD1cIjJyZW0gOXJlbSAwIDBcIi8+XG4gICAgICAgICAgICAgICAgICAgICl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRsaW5lIEh0bWxUYWc9XCJoM1wiIHNpemU9XCIyMFwiPlNlYXJjaCBFbmdpbmU8L0hlYWRsaW5lPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFBhcmFncmFwaCBzaXplPVwiMjBcIiBkaXN0YW5jZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYWdlU3VpdGUgaW50ZWdyYXRlcyB0aGUgZWxhc3RpY3NlYXJjaCBlbmdpbmUgYnkgdXNpbmcgdGhlIE9wZW5Tb3VyY2UgZWxhc3RpY3N1aXRlIGV4dGVuc2lvbiBhbmQgcHJvdmlkaW5nIHlvdSB3aXRoIGEgY29tcHJlaGVuc2l2ZSBmZWF0dXJlIHNldCBmb3IgeW91ciBNYWdlbnRvIHNlYXJjaCBzdWNoIGFzIGFkdmFuY2VkIGF1dG8tc3VnZ2VzdCwgaW1wcm92ZWQgY2F0ZWdvcnkgZmlsdGVycywgb3B0aW1pemluZyB0aGUgc2VhcmNoIHJlc3VsdCByZWxldmFuY2UgYW5kIG1hbnkgbW9yZS4gSW4gYWRkaXRpb24gdG8gdGhhdCBNYWdlU3VpdGUgZW5oYW5jZXMgdGhlIHNlYXJjaCBVWCwgYWxsb3dzIGFsc28gaG9yaXpvbnRhbCBsYXllcmVkIG5hdmlnYXRpb24gZmlsdGVycyBhbmQgaW50ZWdyYXRlcyBlbGFzdGljc3VpdGUgd2l0aCB0aGUgQ29udGVudCBDb25zdHJ1Y3RvciBjb21wb25lbnRzLlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QYXJhZ3JhcGg+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0UGljdHVyZT5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHsgKHRoaXMuc3RhdGUudGFiID09ICdtYXJrZXRpbmcnKSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0UGljdHVyZSBwaWN0dXJlPXsoXG4gICAgICAgICAgICAgICAgICAgICAgICA8UGljdHVyZVZlY3RvcnBuZyBpbWFnZT1cImctZmVhdHVyZS1tYXJrZXRpbmdcIiB3aWR0aERlc2t0b3A9XCI2MCVcIiBtYXJnaW5EZXNrdG9wPVwiMnJlbSA5cmVtIDAgMFwiLz5cbiAgICAgICAgICAgICAgICAgICAgKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGxpbmUgSHRtbFRhZz1cImgzXCIgc2l6ZT1cIjIwXCI+TWFya2V0aW5nPC9IZWFkbGluZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQYXJhZ3JhcGggc2l6ZT1cIjIwXCIgZGlzdGFuY2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVG8gaW5jcmVhc2UgeW91ciBzYWxlcyBhbmQgY29udmVyc2lvbiByYXRlLCBNYWdlU3VpdGUgcHJvdmlkZXMgeW91IHdpdGggbWFueSBtYXJrZXRpbmcgZmVhdHVyZXMgc3VjaCBhcyBEYWlseSBEZWFscywgUG9zaXRpdmUgSW5kaWNhdG9ycywgSW1hZ2UgVGVhc2VycyBpbnNpZGUgdGhlIHByb2R1Y3QgZ3JpZCwgYSBzaW1wbGUgYmxvZyBmdW5jdGlvbmFsaXR5LCBwcm9kdWN0IGdpZnRzLCBicmFuZCBtYW5hZ2VtZW50LCBTRU8gaW1wcm92ZW1lbnRzLCBpZGVudGlmaWNhdGlvbiBhbmQgZGlzcGxheSBvZiBiZXN0c2VsbGVycyBhbmQgbWFueSBtb3JlLiBNYW55IG9mIHRob3NlIGhhdmUgYmVlbiBpbnRlZ3JhdGVkIHdpdGggdGhlIENvbnRlbnQgQ29uc3RydWN0b3IsIGFuZCB0aGF0IGFsbG93cyB5b3UgdG8gY3JlYXRlIHZhcmlvdXMgbWFya2V0aW5nIGNhbXBhaWduIGxhbmRpbmcgcGFnZXMuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1BhcmFncmFwaD5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L1RleHRQaWN0dXJlPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgeyAodGhpcy5zdGF0ZS50YWIgPT0gJ3V4JykgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8VGV4dFBpY3R1cmUgcGljdHVyZT17KFxuICAgICAgICAgICAgICAgICAgICAgICAgPFBpY3R1cmVWZWN0b3JwbmcgaW1hZ2U9XCJnLWZlYXR1cmUtdXhcIiB3aWR0aERlc2t0b3A9XCI5MCVcIiBtYXJnaW5EZXNrdG9wPVwiMXJlbSAxcmVtIDAgMFwiLz5cbiAgICAgICAgICAgICAgICAgICAgKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGxpbmUgSHRtbFRhZz1cImgzXCIgc2l6ZT1cIjIwXCI+VXNlciBFeHBlcmllbmNlPC9IZWFkbGluZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQYXJhZ3JhcGggc2l6ZT1cIjIwXCIgZGlzdGFuY2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTWFnZVN1aXRlIGltcHJvdmVzIHRoZSB1c2VyIGV4cGVyaWVuY2UgZm9yIGN1c3RvbWVycyBhbmQgYWRtaW5pc3RyYXRvcnMuICAgQmVzaWRlIHNtYWxsZXIgVVggZW5oYW5jZW1lbnRzIGluIHRoZSBzZWFyY2gsIGxheWVyZWQgbmF2aWdhdGlvbiBmaWx0ZXJzLCBjaGVja291dCwgY29udGVudCBtYW5hZ2VtZW50IGFuZCBtb2JpbGUgb3B0aW1pemF0aW9ucyB0aGVyZSBhcmUgYWxzbyBicmFuZCBuZXcgZmVhdHVyZXMgc3VjaCBhIHRoZSBQcm9kdWN0IEZpbmRlci4gSXQgYWxsb3dzIHlvdSB0byBkZWZpbmUgYSBwcm9kdWN0IHF1ZXN0aW9ubmFpcmUgd2l0aGluIHRoZSBDb250ZW50IENvbnN0cnVjdG9yLiBCeSB0aGF0LCB5b3UgY2FuIGNvbnN1bHQgeW91ciBjdXN0b21lcnMgYXQgYW55IHBsYWNlIG9mIHlvdXIgTWFnZW50byB3ZWJzaG9wIHdoaWNoIHByb2R1Y3QgZml0cyBiZXN0IGFjY29yZGluZyB0byB0aGVpciByZXF1aXJlbWVudHMuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1BhcmFncmFwaD5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L1RleHRQaWN0dXJlPlxuICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIGFydGljbGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJHtyZW0oODApfSAke3JlbSgxMDApfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICApXG4gICAgfVxuICAgIHRhYkNsaWNrZWQoaWQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0YWI6IGlkXG4gICAgICAgIH0pXG4gICAgfVxufVxuIl19 */\n/*@ sourceURL=/Users/krzysztof/www/magesuite-web/sections/why.jsx */"),
        dynamic: [Object(_components_styles__WEBPACK_IMPORTED_MODULE_2__["rem"])(80), Object(_components_styles__WEBPACK_IMPORTED_MODULE_2__["rem"])(100)],
        __self: this
      }));
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
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.45774caa257b6140516a.hot-update.js.map