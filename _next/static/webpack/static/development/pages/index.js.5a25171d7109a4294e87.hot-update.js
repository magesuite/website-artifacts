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
        id: "why",
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
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_text_picture__WEBPACK_IMPORTED_MODULE_4__["default"], {
        picture: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_picture_vectorpng__WEBPACK_IMPORTED_MODULE_5__["default"], {
          image: "g-feature-cms",
          widthDesktop: "60%",
          marginDesktop: "2rem 9rem 0 0",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        }),
        hide: this.state.tab == 'cms',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_headline__WEBPACK_IMPORTED_MODULE_6__["default"], {
        HtmlTag: "h3",
        size: "20",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "Content Constructor"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_paragraph__WEBPACK_IMPORTED_MODULE_7__["default"], {
        size: "20",
        distance: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "The MageSuite Content Constructor is an enhancement of the Magento CMS giving you the possibility to build up any CMS page by combining numerous types of components within a few clicks and with no need to develop separate templates. In addition to that, it allows you to use these components also on your category page and product detail page. The Content Constructor is a free and Open Source alternative to the Magento 2 PageBuilder.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_text_picture__WEBPACK_IMPORTED_MODULE_4__["default"], {
        picture: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_picture_vectorpng__WEBPACK_IMPORTED_MODULE_5__["default"], {
          image: "g-feature-performance",
          widthDesktop: "80%",
          marginDesktop: "2rem 1rem 0 0",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        }),
        hide: this.state.tab == 'perf',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_headline__WEBPACK_IMPORTED_MODULE_6__["default"], {
        HtmlTag: "h3",
        size: "20",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "High Performance"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_paragraph__WEBPACK_IMPORTED_MODULE_7__["default"], {
        size: "20",
        distance: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "To boost loading and rendering times of your Magento webshop, MageSuite provides a couple of performance improvements in the frontend and backend. Furthermore, the Cache Warmer rebuilds your Varnish cache for the most important Magento pages after having flushed the cache. The MageSuite Cloud makes your Magento Open Source even ready for AWS. It increases the availability of your webshop in traffic peaks by providing features like horizontal auto-scaling.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_text_picture__WEBPACK_IMPORTED_MODULE_4__["default"], {
        picture: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_picture_vectorpng__WEBPACK_IMPORTED_MODULE_5__["default"], {
          image: "g-feature-security",
          widthDesktop: "50%",
          marginDesktop: "2rem 11rem 0 0",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        }),
        hide: this.state.tab == 'security',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_headline__WEBPACK_IMPORTED_MODULE_6__["default"], {
        HtmlTag: "h3",
        size: "20",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "Security & GDPR"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_paragraph__WEBPACK_IMPORTED_MODULE_7__["default"], {
        size: "20",
        distance: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "To maximize the security of personal data, MageSuite provides a module, which helps you to meet the requirements of the General Data Protection Regulation (GDPR / DSGVO). It restricts access to customer data and anonymizes personal information in your Magento admin panel so that users without suitable rights for processing data cannot see it.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_text_picture__WEBPACK_IMPORTED_MODULE_4__["default"], {
        picture: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_picture_vectorpng__WEBPACK_IMPORTED_MODULE_5__["default"], {
          image: "g-feature-search",
          widthDesktop: "60%",
          marginDesktop: "2rem 9rem 0 0",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        }),
        hide: this.state.tab == 'search',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_headline__WEBPACK_IMPORTED_MODULE_6__["default"], {
        HtmlTag: "h3",
        size: "20",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "Search Engine"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_paragraph__WEBPACK_IMPORTED_MODULE_7__["default"], {
        size: "20",
        distance: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "MageSuite integrates the elasticsearch engine by using the OpenSource elasticsuite extension and providing you with a comprehensive feature set for your Magento search such as advanced auto-suggest, improved category filters, optimizing the search result relevance and many more. In addition to that MageSuite enhances the search UX, allows also horizontal layered navigation filters and integrates elasticsuite with the Content Constructor components.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_text_picture__WEBPACK_IMPORTED_MODULE_4__["default"], {
        picture: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_picture_vectorpng__WEBPACK_IMPORTED_MODULE_5__["default"], {
          image: "g-feature-marketing",
          widthDesktop: "60%",
          marginDesktop: "2rem 9rem 0 0",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          },
          __self: this
        }),
        hide: this.state.tab == 'marketing',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_headline__WEBPACK_IMPORTED_MODULE_6__["default"], {
        HtmlTag: "h3",
        size: "20",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "Marketing"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_paragraph__WEBPACK_IMPORTED_MODULE_7__["default"], {
        size: "20",
        distance: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "To increase your sales and conversion rate, MageSuite provides you with many marketing features such as Daily Deals, Positive Indicators, Image Teasers inside the product grid, a simple blog functionality, product gifts, brand management, SEO improvements, identification and display of bestsellers and many more. Many of those have been integrated with the Content Constructor, and that allows you to create various marketing campaign landing pages.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_text_picture__WEBPACK_IMPORTED_MODULE_4__["default"], {
        picture: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_picture_vectorpng__WEBPACK_IMPORTED_MODULE_5__["default"], {
          image: "g-feature-ux",
          widthDesktop: "90%",
          marginDesktop: "1rem 1rem 0 0",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        }),
        hide: this.state.tab == 'ux',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_headline__WEBPACK_IMPORTED_MODULE_6__["default"], {
        HtmlTag: "h3",
        size: "20",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, "User Experience"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_paragraph__WEBPACK_IMPORTED_MODULE_7__["default"], {
        size: "20",
        distance: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, "MageSuite improves the user experience for customers and administrators.   Beside smaller UX enhancements in the search, layered navigation filters, checkout, content management and mobile optimizations there are also brand new features such a the Product Finder. It allows you to define a product questionnaire within the Content Constructor. By that, you can consult your customers at any place of your Magento webshop which product fits best according to their requirements.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3893657940",
        css: "article.__jsx-style-dynamic-selector{padding:".concat(Object(_components_styles__WEBPACK_IMPORTED_MODULE_2__["rem"])(80), " ").concat(Object(_components_styles__WEBPACK_IMPORTED_MODULE_2__["rem"])(100), ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rcnp5c3p0b2Yvd3d3L21hZ2VzdWl0ZS13ZWIvc2VjdGlvbnMvd2h5LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRjRCLEFBRzJGLGtFQUN0RSIsImZpbGUiOiIvVXNlcnMva3J6eXN6dG9mL3d3dy9tYWdlc3VpdGUtd2ViL3NlY3Rpb25zL3doeS5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW0sIGNvbG9ycyB9IGZyb20gXCIuLi9jb21wb25lbnRzL3N0eWxlc1wiO1xuaW1wb3J0IEZlYXR1cmVzVGFicyBmcm9tIFwiLi4vY29tcG9uZW50cy9mZWF0dXJlcy10YWJzXCI7XG5pbXBvcnQgVGV4dFBpY3R1cmUgZnJvbSBcIi4uL2NvbXBvbmVudHMvdGV4dC1waWN0dXJlXCI7XG5pbXBvcnQgUGljdHVyZVZlY3RvcnBuZyBmcm9tIFwiLi4vY29tcG9uZW50cy9waWN0dXJlLXZlY3RvcnBuZ1wiO1xuaW1wb3J0IEhlYWRsaW5lIGZyb20gXCIuLi9jb21wb25lbnRzL2hlYWRsaW5lXCI7XG5pbXBvcnQgUGFyYWdyYXBoIGZyb20gXCIuLi9jb21wb25lbnRzL3BhcmFncmFwaFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9idXR0b25cIjtcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2h5IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB0YWI6ICdjbXMnXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJsaW1pdGVkLXdpZHRoXCIgaWQ9XCJ3aHlcIj5cbiAgICAgICAgICAgICAgICA8SGVhZGxpbmUgSHRtbFRhZz1cImgyXCIgY2VudGVyZWQ+V2hhdCBpcyBNYWdlU3VpdGU/PC9IZWFkbGluZT5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8UGFyYWdyYXBoIGNlbnRlcmVkIGRpc3RhbmNlPlxuICAgICAgICAgICAgICAgIE1hZ2VTdWl0ZSBpcyBhIGNvbGxlY3Rpb24gb2YgT3BlblNvdXJjZSBtb2R1bGVzIGFkZGluZyB2YWx1YWJsZSBmZWF0dXJlcyBhbmQgZW5oYW5jZW1lbnRzIHRoYXQgYXJlIG1pc3NpbmcgaW4geW91ciBuYXRpdmUgTWFnZW50byAyIE9wZW4gU291cmNlIHNob3AuXG4gICAgICAgICAgICAgICAgPC9QYXJhZ3JhcGg+XG4gICAgICAgICAgICAgICAgPEZlYXR1cmVzVGFicyB0YWJDbGlja2VkPXt0aGlzLnRhYkNsaWNrZWQuYmluZCh0aGlzKX0gYWN0aXZlVGFiPXt0aGlzLnN0YXRlLnRhYn0vPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxUZXh0UGljdHVyZSBwaWN0dXJlPXsoXG4gICAgICAgICAgICAgICAgICAgIDxQaWN0dXJlVmVjdG9ycG5nIGltYWdlPVwiZy1mZWF0dXJlLWNtc1wiIHdpZHRoRGVza3RvcD1cIjYwJVwiIG1hcmdpbkRlc2t0b3A9XCIycmVtIDlyZW0gMCAwXCIvPlxuICAgICAgICAgICAgICAgICl9IGhpZGU9e3RoaXMuc3RhdGUudGFiID09ICdjbXMnfT5cbiAgICAgICAgICAgICAgICAgICAgPEhlYWRsaW5lIEh0bWxUYWc9XCJoM1wiIHNpemU9XCIyMFwiPkNvbnRlbnQgQ29uc3RydWN0b3I8L0hlYWRsaW5lPlxuICAgICAgICAgICAgICAgICAgICA8UGFyYWdyYXBoIHNpemU9XCIyMFwiIGRpc3RhbmNlPlxuICAgICAgICAgICAgICAgICAgICAgICAgVGhlIE1hZ2VTdWl0ZSBDb250ZW50IENvbnN0cnVjdG9yIGlzIGFuIGVuaGFuY2VtZW50IG9mIHRoZSBNYWdlbnRvIENNUyBnaXZpbmcgeW91IHRoZSBwb3NzaWJpbGl0eSB0byBidWlsZCB1cCBhbnkgQ01TIHBhZ2UgYnkgY29tYmluaW5nIG51bWVyb3VzIHR5cGVzIG9mIGNvbXBvbmVudHMgd2l0aGluIGEgZmV3IGNsaWNrcyBhbmQgd2l0aCBubyBuZWVkIHRvIGRldmVsb3Agc2VwYXJhdGUgdGVtcGxhdGVzLiBJbiBhZGRpdGlvbiB0byB0aGF0LCBpdCBhbGxvd3MgeW91IHRvIHVzZSB0aGVzZSBjb21wb25lbnRzIGFsc28gb24geW91ciBjYXRlZ29yeSBwYWdlIGFuZCBwcm9kdWN0IGRldGFpbCBwYWdlLiBUaGUgQ29udGVudCBDb25zdHJ1Y3RvciBpcyBhIGZyZWUgYW5kIE9wZW4gU291cmNlIGFsdGVybmF0aXZlIHRvIHRoZSBNYWdlbnRvIDIgUGFnZUJ1aWxkZXIuXG4gICAgICAgICAgICAgICAgICAgIDwvUGFyYWdyYXBoPlxuICAgICAgICAgICAgICAgICAgICB7LyogPEJ1dHRvbiB0ZXh0PVwiRmluZCBvdXQgbW9yZVwiLz4gKi99XG4gICAgICAgICAgICAgICAgPC9UZXh0UGljdHVyZT5cbiAgICAgICAgICAgICAgICA8VGV4dFBpY3R1cmUgcGljdHVyZT17KFxuICAgICAgICAgICAgICAgICAgICA8UGljdHVyZVZlY3RvcnBuZyBpbWFnZT1cImctZmVhdHVyZS1wZXJmb3JtYW5jZVwiIHdpZHRoRGVza3RvcD1cIjgwJVwiIG1hcmdpbkRlc2t0b3A9XCIycmVtIDFyZW0gMCAwXCIvPlxuICAgICAgICAgICAgICAgICl9IGhpZGU9e3RoaXMuc3RhdGUudGFiID09ICdwZXJmJ30+XG4gICAgICAgICAgICAgICAgICAgIDxIZWFkbGluZSBIdG1sVGFnPVwiaDNcIiBzaXplPVwiMjBcIj5IaWdoIFBlcmZvcm1hbmNlPC9IZWFkbGluZT5cbiAgICAgICAgICAgICAgICAgICAgPFBhcmFncmFwaCBzaXplPVwiMjBcIiBkaXN0YW5jZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIFRvIGJvb3N0IGxvYWRpbmcgYW5kIHJlbmRlcmluZyB0aW1lcyBvZiB5b3VyIE1hZ2VudG8gd2Vic2hvcCwgTWFnZVN1aXRlIHByb3ZpZGVzIGEgY291cGxlIG9mIHBlcmZvcm1hbmNlIGltcHJvdmVtZW50cyBpbiB0aGUgZnJvbnRlbmQgYW5kIGJhY2tlbmQuIEZ1cnRoZXJtb3JlLCB0aGUgQ2FjaGUgV2FybWVyIHJlYnVpbGRzIHlvdXIgVmFybmlzaCBjYWNoZSBmb3IgdGhlIG1vc3QgaW1wb3J0YW50IE1hZ2VudG8gcGFnZXMgYWZ0ZXIgaGF2aW5nIGZsdXNoZWQgdGhlIGNhY2hlLiBUaGUgTWFnZVN1aXRlIENsb3VkIG1ha2VzIHlvdXIgTWFnZW50byBPcGVuIFNvdXJjZSBldmVuIHJlYWR5IGZvciBBV1MuIEl0IGluY3JlYXNlcyB0aGUgYXZhaWxhYmlsaXR5IG9mIHlvdXIgd2Vic2hvcCBpbiB0cmFmZmljIHBlYWtzIGJ5IHByb3ZpZGluZyBmZWF0dXJlcyBsaWtlIGhvcml6b250YWwgYXV0by1zY2FsaW5nLlxuICAgICAgICAgICAgICAgICAgICA8L1BhcmFncmFwaD5cbiAgICAgICAgICAgICAgICA8L1RleHRQaWN0dXJlPlxuICAgICAgICAgICAgICAgIDxUZXh0UGljdHVyZSBwaWN0dXJlPXsoXG4gICAgICAgICAgICAgICAgICAgIDxQaWN0dXJlVmVjdG9ycG5nIGltYWdlPVwiZy1mZWF0dXJlLXNlY3VyaXR5XCIgd2lkdGhEZXNrdG9wPVwiNTAlXCIgbWFyZ2luRGVza3RvcD1cIjJyZW0gMTFyZW0gMCAwXCIvPlxuICAgICAgICAgICAgICAgICl9IGhpZGU9e3RoaXMuc3RhdGUudGFiID09ICdzZWN1cml0eSd9PlxuICAgICAgICAgICAgICAgICAgICA8SGVhZGxpbmUgSHRtbFRhZz1cImgzXCIgc2l6ZT1cIjIwXCI+U2VjdXJpdHkgJmFtcDsgR0RQUjwvSGVhZGxpbmU+XG4gICAgICAgICAgICAgICAgICAgIDxQYXJhZ3JhcGggc2l6ZT1cIjIwXCIgZGlzdGFuY2U+XG4gICAgICAgICAgICAgICAgICAgICAgICBUbyBtYXhpbWl6ZSB0aGUgc2VjdXJpdHkgb2YgcGVyc29uYWwgZGF0YSwgTWFnZVN1aXRlIHByb3ZpZGVzIGEgbW9kdWxlLCB3aGljaCBoZWxwcyB5b3UgdG8gbWVldCB0aGUgcmVxdWlyZW1lbnRzIG9mIHRoZSBHZW5lcmFsIERhdGEgUHJvdGVjdGlvbiBSZWd1bGF0aW9uIChHRFBSIC8gRFNHVk8pLiBJdCByZXN0cmljdHMgYWNjZXNzIHRvIGN1c3RvbWVyIGRhdGEgYW5kIGFub255bWl6ZXMgcGVyc29uYWwgaW5mb3JtYXRpb24gaW4geW91ciBNYWdlbnRvIGFkbWluIHBhbmVsIHNvIHRoYXQgdXNlcnMgd2l0aG91dCBzdWl0YWJsZSByaWdodHMgZm9yIHByb2Nlc3NpbmcgZGF0YSBjYW5ub3Qgc2VlIGl0LlxuICAgICAgICAgICAgICAgICAgICA8L1BhcmFncmFwaD5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9UZXh0UGljdHVyZT5cbiAgICAgICAgICAgICAgICA8VGV4dFBpY3R1cmUgcGljdHVyZT17KFxuICAgICAgICAgICAgICAgICAgICA8UGljdHVyZVZlY3RvcnBuZyBpbWFnZT1cImctZmVhdHVyZS1zZWFyY2hcIiB3aWR0aERlc2t0b3A9XCI2MCVcIiBtYXJnaW5EZXNrdG9wPVwiMnJlbSA5cmVtIDAgMFwiLz5cbiAgICAgICAgICAgICAgICApfSBoaWRlPXt0aGlzLnN0YXRlLnRhYiA9PSAnc2VhcmNoJ30+XG4gICAgICAgICAgICAgICAgICAgIDxIZWFkbGluZSBIdG1sVGFnPVwiaDNcIiBzaXplPVwiMjBcIj5TZWFyY2ggRW5naW5lPC9IZWFkbGluZT5cbiAgICAgICAgICAgICAgICAgICAgPFBhcmFncmFwaCBzaXplPVwiMjBcIiBkaXN0YW5jZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIE1hZ2VTdWl0ZSBpbnRlZ3JhdGVzIHRoZSBlbGFzdGljc2VhcmNoIGVuZ2luZSBieSB1c2luZyB0aGUgT3BlblNvdXJjZSBlbGFzdGljc3VpdGUgZXh0ZW5zaW9uIGFuZCBwcm92aWRpbmcgeW91IHdpdGggYSBjb21wcmVoZW5zaXZlIGZlYXR1cmUgc2V0IGZvciB5b3VyIE1hZ2VudG8gc2VhcmNoIHN1Y2ggYXMgYWR2YW5jZWQgYXV0by1zdWdnZXN0LCBpbXByb3ZlZCBjYXRlZ29yeSBmaWx0ZXJzLCBvcHRpbWl6aW5nIHRoZSBzZWFyY2ggcmVzdWx0IHJlbGV2YW5jZSBhbmQgbWFueSBtb3JlLiBJbiBhZGRpdGlvbiB0byB0aGF0IE1hZ2VTdWl0ZSBlbmhhbmNlcyB0aGUgc2VhcmNoIFVYLCBhbGxvd3MgYWxzbyBob3Jpem9udGFsIGxheWVyZWQgbmF2aWdhdGlvbiBmaWx0ZXJzIGFuZCBpbnRlZ3JhdGVzIGVsYXN0aWNzdWl0ZSB3aXRoIHRoZSBDb250ZW50IENvbnN0cnVjdG9yIGNvbXBvbmVudHMuXG4gICAgICAgICAgICAgICAgICAgIDwvUGFyYWdyYXBoPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L1RleHRQaWN0dXJlPlxuICAgICAgICAgICAgICAgIDxUZXh0UGljdHVyZSBwaWN0dXJlPXsoXG4gICAgICAgICAgICAgICAgICAgIDxQaWN0dXJlVmVjdG9ycG5nIGltYWdlPVwiZy1mZWF0dXJlLW1hcmtldGluZ1wiIHdpZHRoRGVza3RvcD1cIjYwJVwiIG1hcmdpbkRlc2t0b3A9XCIycmVtIDlyZW0gMCAwXCIvPlxuICAgICAgICAgICAgICAgICl9IGhpZGU9e3RoaXMuc3RhdGUudGFiID09ICdtYXJrZXRpbmcnfT5cbiAgICAgICAgICAgICAgICAgICAgPEhlYWRsaW5lIEh0bWxUYWc9XCJoM1wiIHNpemU9XCIyMFwiPk1hcmtldGluZzwvSGVhZGxpbmU+XG4gICAgICAgICAgICAgICAgICAgIDxQYXJhZ3JhcGggc2l6ZT1cIjIwXCIgZGlzdGFuY2U+XG4gICAgICAgICAgICAgICAgICAgICAgICBUbyBpbmNyZWFzZSB5b3VyIHNhbGVzIGFuZCBjb252ZXJzaW9uIHJhdGUsIE1hZ2VTdWl0ZSBwcm92aWRlcyB5b3Ugd2l0aCBtYW55IG1hcmtldGluZyBmZWF0dXJlcyBzdWNoIGFzIERhaWx5IERlYWxzLCBQb3NpdGl2ZSBJbmRpY2F0b3JzLCBJbWFnZSBUZWFzZXJzIGluc2lkZSB0aGUgcHJvZHVjdCBncmlkLCBhIHNpbXBsZSBibG9nIGZ1bmN0aW9uYWxpdHksIHByb2R1Y3QgZ2lmdHMsIGJyYW5kIG1hbmFnZW1lbnQsIFNFTyBpbXByb3ZlbWVudHMsIGlkZW50aWZpY2F0aW9uIGFuZCBkaXNwbGF5IG9mIGJlc3RzZWxsZXJzIGFuZCBtYW55IG1vcmUuIE1hbnkgb2YgdGhvc2UgaGF2ZSBiZWVuIGludGVncmF0ZWQgd2l0aCB0aGUgQ29udGVudCBDb25zdHJ1Y3RvciwgYW5kIHRoYXQgYWxsb3dzIHlvdSB0byBjcmVhdGUgdmFyaW91cyBtYXJrZXRpbmcgY2FtcGFpZ24gbGFuZGluZyBwYWdlcy5cbiAgICAgICAgICAgICAgICAgICAgPC9QYXJhZ3JhcGg+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvVGV4dFBpY3R1cmU+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8VGV4dFBpY3R1cmUgcGljdHVyZT17KFxuICAgICAgICAgICAgICAgICAgICA8UGljdHVyZVZlY3RvcnBuZyBpbWFnZT1cImctZmVhdHVyZS11eFwiIHdpZHRoRGVza3RvcD1cIjkwJVwiIG1hcmdpbkRlc2t0b3A9XCIxcmVtIDFyZW0gMCAwXCIvPlxuICAgICAgICAgICAgICAgICl9IGhpZGU9e3RoaXMuc3RhdGUudGFiID09ICd1eCd9PlxuICAgICAgICAgICAgICAgICAgICA8SGVhZGxpbmUgSHRtbFRhZz1cImgzXCIgc2l6ZT1cIjIwXCI+VXNlciBFeHBlcmllbmNlPC9IZWFkbGluZT5cbiAgICAgICAgICAgICAgICAgICAgPFBhcmFncmFwaCBzaXplPVwiMjBcIiBkaXN0YW5jZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIE1hZ2VTdWl0ZSBpbXByb3ZlcyB0aGUgdXNlciBleHBlcmllbmNlIGZvciBjdXN0b21lcnMgYW5kIGFkbWluaXN0cmF0b3JzLiAgIEJlc2lkZSBzbWFsbGVyIFVYIGVuaGFuY2VtZW50cyBpbiB0aGUgc2VhcmNoLCBsYXllcmVkIG5hdmlnYXRpb24gZmlsdGVycywgY2hlY2tvdXQsIGNvbnRlbnQgbWFuYWdlbWVudCBhbmQgbW9iaWxlIG9wdGltaXphdGlvbnMgdGhlcmUgYXJlIGFsc28gYnJhbmQgbmV3IGZlYXR1cmVzIHN1Y2ggYSB0aGUgUHJvZHVjdCBGaW5kZXIuIEl0IGFsbG93cyB5b3UgdG8gZGVmaW5lIGEgcHJvZHVjdCBxdWVzdGlvbm5haXJlIHdpdGhpbiB0aGUgQ29udGVudCBDb25zdHJ1Y3Rvci4gQnkgdGhhdCwgeW91IGNhbiBjb25zdWx0IHlvdXIgY3VzdG9tZXJzIGF0IGFueSBwbGFjZSBvZiB5b3VyIE1hZ2VudG8gd2Vic2hvcCB3aGljaCBwcm9kdWN0IGZpdHMgYmVzdCBhY2NvcmRpbmcgdG8gdGhlaXIgcmVxdWlyZW1lbnRzLlxuICAgICAgICAgICAgICAgICAgICA8L1BhcmFncmFwaD5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9UZXh0UGljdHVyZT5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIGFydGljbGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJHtyZW0oODApfSAke3JlbSgxMDApfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICApXG4gICAgfVxuICAgIHRhYkNsaWNrZWQoaWQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0YWI6IGlkXG4gICAgICAgIH0pXG4gICAgfVxufVxuIl19 */\n/*@ sourceURL=/Users/krzysztof/www/magesuite-web/sections/why.jsx */"),
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
//# sourceMappingURL=index.js.5a25171d7109a4294e87.hot-update.js.map