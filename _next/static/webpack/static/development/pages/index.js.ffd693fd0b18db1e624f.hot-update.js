webpackHotUpdate("static/development/pages/index.js",{

/***/ "./sections/hero.jsx":
/*!***************************!*\
  !*** ./sections/hero.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_headline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/headline */ "./components/headline.jsx");
/* harmony import */ var _components_paragraph__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/paragraph */ "./components/paragraph.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/styles */ "./components/styles.jsx");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layout */ "./components/layout.jsx");
/* harmony import */ var _components_icons_icon_play__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/icons/icon-play */ "./components/icons/icon-play.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _data_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../data/store */ "./data/store.js");


function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    margin: 0 auto;\n    display: block;\n    cursor: pointer;\n    margin-top: 1rem;\n    @media ", " {\n        transform: scale(0.7);\n    }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n    background-color: ", ";\n    @media ", " {\n        height: calc(100vh - ", ");\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    @media ", " {\n        display: none;\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n"]);

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











var Hero =
/*#__PURE__*/
function (_Component) {
  _inherits(Hero, _Component);

  function Hero() {
    _classCallCheck(this, Hero);

    return _possibleConstructorReturn(this, _getPrototypeOf(Hero).apply(this, arguments));
  }

  _createClass(Hero, [{
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Section, {
        as: "section"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Video, {
        loop: true,
        muted: true,
        autoplay: "autoplay",
        ref: "video"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("source", {
        src: "/static/video/hero-video.mp4",
        type: "video/mp4"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Slogan, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_headline__WEBPACK_IMPORTED_MODULE_1__["default"], {
        as: "p",
        light: true,
        centered: true
      }, "Open Source CMS for Magento 2"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_paragraph__WEBPACK_IMPORTED_MODULE_2__["default"], {
        centered: true,
        light: true
      }, "Content Constructor is a CMS module within MageSuite and a free and Open Source alternative to Magento PageBuilder. Check out the demo video."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PlayButton, {
        onClick: function onClick(e) {
          return _this.playVideo();
        }
      })));
    }
  }, {
    key: "playVideo",
    value: function playVideo() {
      this.props.dispatch(Object(_data_store__WEBPACK_IMPORTED_MODULE_8__["playVideo"])("https://vimeo.com/229095695"));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {//this.refs.video
    }
  }]);

  return Hero;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])()(Hero));
var Slogan = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject());
var Video = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].video(_templateObject2(), _components_styles__WEBPACK_IMPORTED_MODULE_4__["mediaQueries"].mobile);
var Section = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(_components_layout__WEBPACK_IMPORTED_MODULE_5__["MaxWidth"])(_templateObject3(), _components_styles__WEBPACK_IMPORTED_MODULE_4__["colors"].bl, _components_styles__WEBPACK_IMPORTED_MODULE_4__["mediaQueries"].mobile, Object(_components_styles__WEBPACK_IMPORTED_MODULE_4__["rem"])(96));
var PlayButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(_components_icons_icon_play__WEBPACK_IMPORTED_MODULE_6__["default"])(_templateObject4(), _components_styles__WEBPACK_IMPORTED_MODULE_4__["mediaQueries"].mobile);

/***/ })

})
//# sourceMappingURL=index.js.ffd693fd0b18db1e624f.hot-update.js.map