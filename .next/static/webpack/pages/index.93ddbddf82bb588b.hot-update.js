"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _util_awsAPI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/awsAPI */ \"./src/util/awsAPI.js\");\n/* harmony import */ var _util_set_credentials__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/set_credentials */ \"./src/util/set_credentials.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Homepage() {\n    _s();\n    (0,_util_set_credentials__WEBPACK_IMPORTED_MODULE_3__.setCredentials)();\n    console.log(AWS.config);\n    (0,_util_awsAPI__WEBPACK_IMPORTED_MODULE_2__.run)();\n    const [eSub, setESub] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Subscribe\");\n    const [pSub, setPSub] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Subscribe\");\n    const [SM, setSM] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Send Message\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"homepage-wrapper\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Amazon SNS Demo\"\n            }, void 0, false, {\n                fileName: \"/Users/johnwu/Documents/Brown CS/Personal Projects/Amazon-SNS-Demo/src/pages/index.js\",\n                lineNumber: 17,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid-master\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"column1\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \" Email Subscription\"\n                            }, void 0, false, {\n                                fileName: \"/Users/johnwu/Documents/Brown CS/Personal Projects/Amazon-SNS-Demo/src/pages/index.js\",\n                                lineNumber: 20,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                placeholder: \"Enter Your Email Address\"\n                            }, void 0, false, {\n                                fileName: \"/Users/johnwu/Documents/Brown CS/Personal Projects/Amazon-SNS-Demo/src/pages/index.js\",\n                                lineNumber: 21,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                children: [\n                                    \" \",\n                                    eSub,\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/johnwu/Documents/Brown CS/Personal Projects/Amazon-SNS-Demo/src/pages/index.js\",\n                                lineNumber: 22,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/johnwu/Documents/Brown CS/Personal Projects/Amazon-SNS-Demo/src/pages/index.js\",\n                        lineNumber: 19,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"column2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \" SMS Subscription\"\n                            }, void 0, false, {\n                                fileName: \"/Users/johnwu/Documents/Brown CS/Personal Projects/Amazon-SNS-Demo/src/pages/index.js\",\n                                lineNumber: 25,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                placeholder: \"Enter Your Phone Number\"\n                            }, void 0, false, {\n                                fileName: \"/Users/johnwu/Documents/Brown CS/Personal Projects/Amazon-SNS-Demo/src/pages/index.js\",\n                                lineNumber: 26,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                children: [\n                                    \" \",\n                                    pSub,\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/johnwu/Documents/Brown CS/Personal Projects/Amazon-SNS-Demo/src/pages/index.js\",\n                                lineNumber: 27,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/johnwu/Documents/Brown CS/Personal Projects/Amazon-SNS-Demo/src/pages/index.js\",\n                        lineNumber: 24,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"column3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \" Send Notification\"\n                            }, void 0, false, {\n                                fileName: \"/Users/johnwu/Documents/Brown CS/Personal Projects/Amazon-SNS-Demo/src/pages/index.js\",\n                                lineNumber: 30,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                placeholder: \"Enter Your Notification Message\"\n                            }, void 0, false, {\n                                fileName: \"/Users/johnwu/Documents/Brown CS/Personal Projects/Amazon-SNS-Demo/src/pages/index.js\",\n                                lineNumber: 31,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                children: [\n                                    \" \",\n                                    SM,\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/johnwu/Documents/Brown CS/Personal Projects/Amazon-SNS-Demo/src/pages/index.js\",\n                                lineNumber: 32,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/johnwu/Documents/Brown CS/Personal Projects/Amazon-SNS-Demo/src/pages/index.js\",\n                        lineNumber: 29,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/johnwu/Documents/Brown CS/Personal Projects/Amazon-SNS-Demo/src/pages/index.js\",\n                lineNumber: 18,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/johnwu/Documents/Brown CS/Personal Projects/Amazon-SNS-Demo/src/pages/index.js\",\n        lineNumber: 16,\n        columnNumber: 7\n    }, this);\n}\n_s(Homepage, \"Vl+IXgvEnW3nUlgZk2ULeSs9QKs=\");\n_c = Homepage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Homepage);\nvar _c;\n$RefreshReg$(_c, \"Homepage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUFzQztBQUNKO0FBQ29CO0FBR3RELFNBQVNJLFdBQVc7O0lBQ2hCRCxxRUFBY0E7SUFDZEUsUUFBUUMsR0FBRyxDQUFDQyxJQUFJQyxNQUFNO0lBQ3RCTixpREFBR0E7SUFDSCxNQUFNLENBQUNPLE1BQU1DLFFBQVEsR0FBR1QsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDVSxNQUFNQyxRQUFRLEdBQUdYLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ1ksSUFBSUMsTUFBTSxHQUFHYiwrQ0FBUUEsQ0FBQztJQUc3QixxQkFDRSw4REFBQ2M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNGO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNYLDhEQUFDRTswQ0FBRzs7Ozs7OzBDQUNKLDhEQUFDQztnQ0FBTUMsTUFBSztnQ0FBT0MsYUFBWTs7Ozs7OzBDQUMvQiw4REFBQ0M7O29DQUFPO29DQUFFYjtvQ0FBSzs7Ozs7Ozs7Ozs7OztrQ0FFbkIsOERBQUNNO3dCQUFJQyxXQUFVOzswQ0FDWCw4REFBQ0U7MENBQUc7Ozs7OzswQ0FDSiw4REFBQ0M7Z0NBQU1DLE1BQUs7Z0NBQU9DLGFBQVk7Ozs7OzswQ0FDL0IsOERBQUNDOztvQ0FBTztvQ0FBRVg7b0NBQUs7Ozs7Ozs7Ozs7Ozs7a0NBRW5CLDhEQUFDSTt3QkFBSUMsV0FBVTs7MENBQ1gsOERBQUNFOzBDQUFHOzs7Ozs7MENBQ0osOERBQUNLO2dDQUFTRixhQUFZOzs7Ozs7MENBQ3RCLDhEQUFDQzs7b0NBQU87b0NBQUVUO29DQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzdCO0dBL0JTVDtLQUFBQTtBQWlDVCwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXguanM/NDA4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQge3J1bn0gZnJvbSBcIi4uL3V0aWwvYXdzQVBJXCJcbmltcG9ydCB7c2V0Q3JlZGVudGlhbHN9IGZyb20gXCIuLi91dGlsL3NldF9jcmVkZW50aWFsc1wiXG5cblxuZnVuY3Rpb24gSG9tZXBhZ2UoKSB7XG4gICAgc2V0Q3JlZGVudGlhbHMoKTtcbiAgICBjb25zb2xlLmxvZyhBV1MuY29uZmlnKVxuICAgIHJ1bigpO1xuICAgIGNvbnN0IFtlU3ViLCBzZXRFU3ViXSA9IHVzZVN0YXRlKFwiU3Vic2NyaWJlXCIpO1xuICAgIGNvbnN0IFtwU3ViLCBzZXRQU3ViXSA9IHVzZVN0YXRlKFwiU3Vic2NyaWJlXCIpO1xuICAgIGNvbnN0IFtTTSwgc2V0U01dID0gdXNlU3RhdGUoXCJTZW5kIE1lc3NhZ2VcIik7XG4gICAgXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lcGFnZS13cmFwcGVyXCI+IFxuICAgICAgICA8aDE+QW1hem9uIFNOUyBEZW1vPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLW1hc3RlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4xXCI+XG4gICAgICAgICAgICAgICAgPGgyPiBFbWFpbCBTdWJzY3JpcHRpb248L2gyPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgWW91ciBFbWFpbCBBZGRyZXNzXCI+PC9pbnB1dD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uPiB7ZVN1Yn0gPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uMlwiPlxuICAgICAgICAgICAgICAgIDxoMj4gU01TIFN1YnNjcmlwdGlvbjwvaDI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJFbnRlciBZb3VyIFBob25lIE51bWJlclwiPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbj4ge3BTdWJ9IDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbjNcIj5cbiAgICAgICAgICAgICAgICA8aDI+IFNlbmQgTm90aWZpY2F0aW9uPC9oMj5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgcGxhY2Vob2xkZXI9XCJFbnRlciBZb3VyIE5vdGlmaWNhdGlvbiBNZXNzYWdlXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uPiB7U019IDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lcGFnZTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInJ1biIsInNldENyZWRlbnRpYWxzIiwiSG9tZXBhZ2UiLCJjb25zb2xlIiwibG9nIiwiQVdTIiwiY29uZmlnIiwiZVN1YiIsInNldEVTdWIiLCJwU3ViIiwic2V0UFN1YiIsIlNNIiwic2V0U00iLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImgyIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJ0ZXh0YXJlYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});