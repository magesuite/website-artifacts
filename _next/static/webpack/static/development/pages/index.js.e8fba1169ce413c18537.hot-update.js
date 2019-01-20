webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/styles.jsx":
/*!*******************************!*\
  !*** ./components/styles.jsx ***!
  \*******************************/
/*! exports provided: distances, distancesMacro, colors, mediaQueries, resolveScopedStyles, rem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distances", function() { return distances; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distancesMacro", function() { return distancesMacro; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return colors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mediaQueries", function() { return mediaQueries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveScopedStyles", function() { return resolveScopedStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rem", function() { return rem; });
var distances = {
  desktop: {
    topPadding: rem(85),
    subheadlineToHeadline: rem(35),
    headlineToContent: rem(100),
    h5ToText: rem(45),
    bottomPadding: rem(85),
    sidesPadding: rem(100),
    bodyToLinkMore: rem(45)
  },
  mobile: {
    topPadding: rem(60),
    subheadlineToHeadline: rem(35),
    headlineToContent: rem(60),
    h5ToText: rem(40),
    bottomPadding: rem(60),
    sidesPadding: rem(20),
    bodyToLinkMore: rem(40)
  }
};
var distancesMacro = {
  paddingDesktop: "".concat(distances.desktop.topPadding, " ").concat(distances.desktop.sidesPadding, " ").concat(distances.desktop.bottomPadding),
  paddingMobile: "".concat(distances.mobile.topPadding, " ").concat(distances.mobile.sidesPadding, " ").concat(distances.mobile.bottomPadding),
  paddingMobileNoSides: "".concat(distances.mobile.topPadding, " 0 ").concat(distances.mobile.bottomPadding),
  paddingHeadlineMobile: "".concat(distances.mobile.topPadding, " ").concat(distances.mobile.sidesPadding, " ").concat(distances.mobile.headlineToContent),
  paddingHeadlineDesktop: "".concat(distances.desktop.topPadding, " ").concat(distances.desktop.sidesPadding, " ").concat(distances.desktop.headlineToContent)
};
var colors = {
  d: '#222222',
  g: '#4D4D4D',
  l: '#E5E5E5',
  l2: '#9B9B9B',
  l3: '#F7F7F7',
  r: '#d81323',
  w: '#fff',
  b: '#222222',
  p: '#FF7844',
  p2: '#FF5F21'
};
var mediaQueries = {
  mobile: '(max-width: 480px)',
  tabletUp: '(min-width: 480px)'
};
function resolveScopedStyles(scope) {
  return {
    className: scope.props.className,
    styles: scope.props.children
  };
}
function rem(px) {
  return String(px / 16) + "rem";
}

/***/ })

})
//# sourceMappingURL=index.js.e8fba1169ce413c18537.hot-update.js.map