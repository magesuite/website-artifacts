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
        id: "features",
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
        css: "article.__jsx-style-dynamic-selector{padding:".concat(Object(_components_styles__WEBPACK_IMPORTED_MODULE_2__["rem"])(80), " ").concat(Object(_components_styles__WEBPACK_IMPORTED_MODULE_2__["rem"])(100), ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rcnp5c3p0b2Yvd3d3L21hZ2VzdWl0ZS13ZWIvc2VjdGlvbnMvd2h5LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4RjRCLEFBRzJGLGtFQUN0RSIsImZpbGUiOiIvVXNlcnMva3J6eXN6dG9mL3d3dy9tYWdlc3VpdGUtd2ViL3NlY3Rpb25zL3doeS5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW0sIGNvbG9ycyB9IGZyb20gXCIuLi9jb21wb25lbnRzL3N0eWxlc1wiO1xuaW1wb3J0IEZlYXR1cmVzVGFicyBmcm9tIFwiLi4vY29tcG9uZW50cy9mZWF0dXJlcy10YWJzXCI7XG5pbXBvcnQgVGV4dFBpY3R1cmUgZnJvbSBcIi4uL2NvbXBvbmVudHMvdGV4dC1waWN0dXJlXCI7XG5pbXBvcnQgUGljdHVyZVZlY3RvcnBuZyBmcm9tIFwiLi4vY29tcG9uZW50cy9waWN0dXJlLXZlY3RvcnBuZ1wiO1xuaW1wb3J0IEhlYWRsaW5lIGZyb20gXCIuLi9jb21wb25lbnRzL2hlYWRsaW5lXCI7XG5pbXBvcnQgUGFyYWdyYXBoIGZyb20gXCIuLi9jb21wb25lbnRzL3BhcmFncmFwaFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9idXR0b25cIjtcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2h5IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB0YWI6ICdjbXMnXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJsaW1pdGVkLXdpZHRoXCIgaWQ9XCJmZWF0dXJlc1wiPlxuICAgICAgICAgICAgICAgIDxIZWFkbGluZSBIdG1sVGFnPVwiaDJcIiBjZW50ZXJlZD5XaGF0IGlzIE1hZ2VTdWl0ZT88L0hlYWRsaW5lPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxQYXJhZ3JhcGggY2VudGVyZWQgZGlzdGFuY2U+XG4gICAgICAgICAgICAgICAgTWFnZVN1aXRlIGlzIGEgY29sbGVjdGlvbiBvZiBPcGVuU291cmNlIG1vZHVsZXMgYWRkaW5nIHZhbHVhYmxlIGZlYXR1cmVzIGFuZCBlbmhhbmNlbWVudHMgdGhhdCBhcmUgbWlzc2luZyBpbiB5b3VyIG5hdGl2ZSBNYWdlbnRvIDIgT3BlbiBTb3VyY2Ugc2hvcC5cbiAgICAgICAgICAgICAgICA8L1BhcmFncmFwaD5cbiAgICAgICAgICAgICAgICA8RmVhdHVyZXNUYWJzIHRhYkNsaWNrZWQ9e3RoaXMudGFiQ2xpY2tlZC5iaW5kKHRoaXMpfSBhY3RpdmVUYWI9e3RoaXMuc3RhdGUudGFifS8+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgeyAodGhpcy5zdGF0ZS50YWIgPT0gJ2NtcycpICYmIChcbiAgICAgICAgICAgICAgICAgICAgPFRleHRQaWN0dXJlIHBpY3R1cmU9eyhcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQaWN0dXJlVmVjdG9ycG5nIGltYWdlPVwiZy1mZWF0dXJlLWNtc1wiIHdpZHRoRGVza3RvcD1cIjYwJVwiIG1hcmdpbkRlc2t0b3A9XCIycmVtIDlyZW0gMCAwXCIvPlxuICAgICAgICAgICAgICAgICAgICApfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkbGluZSBIdG1sVGFnPVwiaDNcIiBzaXplPVwiMjBcIj5Db250ZW50IENvbnN0cnVjdG9yPC9IZWFkbGluZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQYXJhZ3JhcGggc2l6ZT1cIjIwXCIgZGlzdGFuY2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlIE1hZ2VTdWl0ZSBDb250ZW50IENvbnN0cnVjdG9yIGlzIGFuIGVuaGFuY2VtZW50IG9mIHRoZSBNYWdlbnRvIENNUyBnaXZpbmcgeW91IHRoZSBwb3NzaWJpbGl0eSB0byBidWlsZCB1cCBhbnkgQ01TIHBhZ2UgYnkgY29tYmluaW5nIG51bWVyb3VzIHR5cGVzIG9mIGNvbXBvbmVudHMgd2l0aGluIGEgZmV3IGNsaWNrcyBhbmQgd2l0aCBubyBuZWVkIHRvIGRldmVsb3Agc2VwYXJhdGUgdGVtcGxhdGVzLiBJbiBhZGRpdGlvbiB0byB0aGF0LCBpdCBhbGxvd3MgeW91IHRvIHVzZSB0aGVzZSBjb21wb25lbnRzIGFsc28gb24geW91ciBjYXRlZ29yeSBwYWdlIGFuZCBwcm9kdWN0IGRldGFpbCBwYWdlLiBUaGUgQ29udGVudCBDb25zdHJ1Y3RvciBpcyBhIGZyZWUgYW5kIE9wZW4gU291cmNlIGFsdGVybmF0aXZlIHRvIHRoZSBNYWdlbnRvIDIgUGFnZUJ1aWxkZXIuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1BhcmFncmFwaD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8QnV0dG9uIHRleHQ9XCJGaW5kIG91dCBtb3JlXCIvPiAqL31cbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0UGljdHVyZT5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHsgKHRoaXMuc3RhdGUudGFiID09ICdwZXJmJykgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8VGV4dFBpY3R1cmUgcGljdHVyZT17KFxuICAgICAgICAgICAgICAgICAgICAgICAgPFBpY3R1cmVWZWN0b3JwbmcgaW1hZ2U9XCJnLWZlYXR1cmUtcGVyZm9ybWFuY2VcIiB3aWR0aERlc2t0b3A9XCI4MCVcIiBtYXJnaW5EZXNrdG9wPVwiMnJlbSAxcmVtIDAgMFwiLz5cbiAgICAgICAgICAgICAgICAgICAgKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGxpbmUgSHRtbFRhZz1cImgzXCIgc2l6ZT1cIjIwXCI+SGlnaCBQZXJmb3JtYW5jZTwvSGVhZGxpbmU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UGFyYWdyYXBoIHNpemU9XCIyMFwiIGRpc3RhbmNlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvIGJvb3N0IGxvYWRpbmcgYW5kIHJlbmRlcmluZyB0aW1lcyBvZiB5b3VyIE1hZ2VudG8gd2Vic2hvcCwgTWFnZVN1aXRlIHByb3ZpZGVzIGEgY291cGxlIG9mIHBlcmZvcm1hbmNlIGltcHJvdmVtZW50cyBpbiB0aGUgZnJvbnRlbmQgYW5kIGJhY2tlbmQuIEZ1cnRoZXJtb3JlLCB0aGUgQ2FjaGUgV2FybWVyIHJlYnVpbGRzIHlvdXIgVmFybmlzaCBjYWNoZSBmb3IgdGhlIG1vc3QgaW1wb3J0YW50IE1hZ2VudG8gcGFnZXMgYWZ0ZXIgaGF2aW5nIGZsdXNoZWQgdGhlIGNhY2hlLiBUaGUgTWFnZVN1aXRlIENsb3VkIG1ha2VzIHlvdXIgTWFnZW50byBPcGVuIFNvdXJjZSBldmVuIHJlYWR5IGZvciBBV1MuIEl0IGluY3JlYXNlcyB0aGUgYXZhaWxhYmlsaXR5IG9mIHlvdXIgd2Vic2hvcCBpbiB0cmFmZmljIHBlYWtzIGJ5IHByb3ZpZGluZyBmZWF0dXJlcyBsaWtlIGhvcml6b250YWwgYXV0by1zY2FsaW5nLlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QYXJhZ3JhcGg+XG4gICAgICAgICAgICAgICAgICAgIDwvVGV4dFBpY3R1cmU+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB7ICh0aGlzLnN0YXRlLnRhYiA9PSAnc2VjdXJpdHknKSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0UGljdHVyZSBwaWN0dXJlPXsoXG4gICAgICAgICAgICAgICAgICAgICAgICA8UGljdHVyZVZlY3RvcnBuZyBpbWFnZT1cImctZmVhdHVyZS1zZWN1cml0eVwiIHdpZHRoRGVza3RvcD1cIjUwJVwiIG1hcmdpbkRlc2t0b3A9XCIycmVtIDExcmVtIDAgMFwiLz5cbiAgICAgICAgICAgICAgICAgICAgKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGxpbmUgSHRtbFRhZz1cImgzXCIgc2l6ZT1cIjIwXCI+U2VjdXJpdHkgJmFtcDsgR0RQUjwvSGVhZGxpbmU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UGFyYWdyYXBoIHNpemU9XCIyMFwiIGRpc3RhbmNlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvIG1heGltaXplIHRoZSBzZWN1cml0eSBvZiBwZXJzb25hbCBkYXRhLCBNYWdlU3VpdGUgcHJvdmlkZXMgYSBtb2R1bGUsIHdoaWNoIGhlbHBzIHlvdSB0byBtZWV0IHRoZSByZXF1aXJlbWVudHMgb2YgdGhlIEdlbmVyYWwgRGF0YSBQcm90ZWN0aW9uIFJlZ3VsYXRpb24gKEdEUFIgLyBEU0dWTykuIEl0IHJlc3RyaWN0cyBhY2Nlc3MgdG8gY3VzdG9tZXIgZGF0YSBhbmQgYW5vbnltaXplcyBwZXJzb25hbCBpbmZvcm1hdGlvbiBpbiB5b3VyIE1hZ2VudG8gYWRtaW4gcGFuZWwgc28gdGhhdCB1c2VycyB3aXRob3V0IHN1aXRhYmxlIHJpZ2h0cyBmb3IgcHJvY2Vzc2luZyBkYXRhIGNhbm5vdCBzZWUgaXQuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1BhcmFncmFwaD5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L1RleHRQaWN0dXJlPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgeyAodGhpcy5zdGF0ZS50YWIgPT0gJ3NlYXJjaCcpICYmIChcbiAgICAgICAgICAgICAgICAgICAgPFRleHRQaWN0dXJlIHBpY3R1cmU9eyhcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQaWN0dXJlVmVjdG9ycG5nIGltYWdlPVwiZy1mZWF0dXJlLXNlYXJjaFwiIHdpZHRoRGVza3RvcD1cIjYwJVwiIG1hcmdpbkRlc2t0b3A9XCIycmVtIDlyZW0gMCAwXCIvPlxuICAgICAgICAgICAgICAgICAgICApfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkbGluZSBIdG1sVGFnPVwiaDNcIiBzaXplPVwiMjBcIj5TZWFyY2ggRW5naW5lPC9IZWFkbGluZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQYXJhZ3JhcGggc2l6ZT1cIjIwXCIgZGlzdGFuY2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTWFnZVN1aXRlIGludGVncmF0ZXMgdGhlIGVsYXN0aWNzZWFyY2ggZW5naW5lIGJ5IHVzaW5nIHRoZSBPcGVuU291cmNlIGVsYXN0aWNzdWl0ZSBleHRlbnNpb24gYW5kIHByb3ZpZGluZyB5b3Ugd2l0aCBhIGNvbXByZWhlbnNpdmUgZmVhdHVyZSBzZXQgZm9yIHlvdXIgTWFnZW50byBzZWFyY2ggc3VjaCBhcyBhZHZhbmNlZCBhdXRvLXN1Z2dlc3QsIGltcHJvdmVkIGNhdGVnb3J5IGZpbHRlcnMsIG9wdGltaXppbmcgdGhlIHNlYXJjaCByZXN1bHQgcmVsZXZhbmNlIGFuZCBtYW55IG1vcmUuIEluIGFkZGl0aW9uIHRvIHRoYXQgTWFnZVN1aXRlIGVuaGFuY2VzIHRoZSBzZWFyY2ggVVgsIGFsbG93cyBhbHNvIGhvcml6b250YWwgbGF5ZXJlZCBuYXZpZ2F0aW9uIGZpbHRlcnMgYW5kIGludGVncmF0ZXMgZWxhc3RpY3N1aXRlIHdpdGggdGhlIENvbnRlbnQgQ29uc3RydWN0b3IgY29tcG9uZW50cy5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFyYWdyYXBoPlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvVGV4dFBpY3R1cmU+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB7ICh0aGlzLnN0YXRlLnRhYiA9PSAnbWFya2V0aW5nJykgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8VGV4dFBpY3R1cmUgcGljdHVyZT17KFxuICAgICAgICAgICAgICAgICAgICAgICAgPFBpY3R1cmVWZWN0b3JwbmcgaW1hZ2U9XCJnLWZlYXR1cmUtbWFya2V0aW5nXCIgd2lkdGhEZXNrdG9wPVwiNjAlXCIgbWFyZ2luRGVza3RvcD1cIjJyZW0gOXJlbSAwIDBcIi8+XG4gICAgICAgICAgICAgICAgICAgICl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRsaW5lIEh0bWxUYWc9XCJoM1wiIHNpemU9XCIyMFwiPk1hcmtldGluZzwvSGVhZGxpbmU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UGFyYWdyYXBoIHNpemU9XCIyMFwiIGRpc3RhbmNlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvIGluY3JlYXNlIHlvdXIgc2FsZXMgYW5kIGNvbnZlcnNpb24gcmF0ZSwgTWFnZVN1aXRlIHByb3ZpZGVzIHlvdSB3aXRoIG1hbnkgbWFya2V0aW5nIGZlYXR1cmVzIHN1Y2ggYXMgRGFpbHkgRGVhbHMsIFBvc2l0aXZlIEluZGljYXRvcnMsIEltYWdlIFRlYXNlcnMgaW5zaWRlIHRoZSBwcm9kdWN0IGdyaWQsIGEgc2ltcGxlIGJsb2cgZnVuY3Rpb25hbGl0eSwgcHJvZHVjdCBnaWZ0cywgYnJhbmQgbWFuYWdlbWVudCwgU0VPIGltcHJvdmVtZW50cywgaWRlbnRpZmljYXRpb24gYW5kIGRpc3BsYXkgb2YgYmVzdHNlbGxlcnMgYW5kIG1hbnkgbW9yZS4gTWFueSBvZiB0aG9zZSBoYXZlIGJlZW4gaW50ZWdyYXRlZCB3aXRoIHRoZSBDb250ZW50IENvbnN0cnVjdG9yLCBhbmQgdGhhdCBhbGxvd3MgeW91IHRvIGNyZWF0ZSB2YXJpb3VzIG1hcmtldGluZyBjYW1wYWlnbiBsYW5kaW5nIHBhZ2VzLlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QYXJhZ3JhcGg+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0UGljdHVyZT5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHsgKHRoaXMuc3RhdGUudGFiID09ICd1eCcpICYmIChcbiAgICAgICAgICAgICAgICAgICAgPFRleHRQaWN0dXJlIHBpY3R1cmU9eyhcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQaWN0dXJlVmVjdG9ycG5nIGltYWdlPVwiZy1mZWF0dXJlLXV4XCIgd2lkdGhEZXNrdG9wPVwiOTAlXCIgbWFyZ2luRGVza3RvcD1cIjFyZW0gMXJlbSAwIDBcIi8+XG4gICAgICAgICAgICAgICAgICAgICl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRsaW5lIEh0bWxUYWc9XCJoM1wiIHNpemU9XCIyMFwiPlVzZXIgRXhwZXJpZW5jZTwvSGVhZGxpbmU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UGFyYWdyYXBoIHNpemU9XCIyMFwiIGRpc3RhbmNlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hZ2VTdWl0ZSBpbXByb3ZlcyB0aGUgdXNlciBleHBlcmllbmNlIGZvciBjdXN0b21lcnMgYW5kIGFkbWluaXN0cmF0b3JzLiAgIEJlc2lkZSBzbWFsbGVyIFVYIGVuaGFuY2VtZW50cyBpbiB0aGUgc2VhcmNoLCBsYXllcmVkIG5hdmlnYXRpb24gZmlsdGVycywgY2hlY2tvdXQsIGNvbnRlbnQgbWFuYWdlbWVudCBhbmQgbW9iaWxlIG9wdGltaXphdGlvbnMgdGhlcmUgYXJlIGFsc28gYnJhbmQgbmV3IGZlYXR1cmVzIHN1Y2ggYSB0aGUgUHJvZHVjdCBGaW5kZXIuIEl0IGFsbG93cyB5b3UgdG8gZGVmaW5lIGEgcHJvZHVjdCBxdWVzdGlvbm5haXJlIHdpdGhpbiB0aGUgQ29udGVudCBDb25zdHJ1Y3Rvci4gQnkgdGhhdCwgeW91IGNhbiBjb25zdWx0IHlvdXIgY3VzdG9tZXJzIGF0IGFueSBwbGFjZSBvZiB5b3VyIE1hZ2VudG8gd2Vic2hvcCB3aGljaCBwcm9kdWN0IGZpdHMgYmVzdCBhY2NvcmRpbmcgdG8gdGhlaXIgcmVxdWlyZW1lbnRzLlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QYXJhZ3JhcGg+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0UGljdHVyZT5cbiAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICBhcnRpY2xlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICR7cmVtKDgwKX0gJHtyZW0oMTAwKX07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG5cbiAgICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgKVxuICAgIH1cbiAgICB0YWJDbGlja2VkKGlkKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdGFiOiBpZFxuICAgICAgICB9KVxuICAgIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/krzysztof/www/magesuite-web/sections/why.jsx */"),
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
//# sourceMappingURL=index.js.432275c20a74cc530aba.hot-update.js.map