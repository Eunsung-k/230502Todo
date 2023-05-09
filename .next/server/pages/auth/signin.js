"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/auth/signin";
exports.ids = ["pages/auth/signin"];
exports.modules = {

/***/ "./src/pages/auth/signin.js":
/*!**********************************!*\
  !*** ./src/pages/auth/signin.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Signin)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Signin() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center h-screen\",\n        children: session ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid m-auto text-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"m-4\",\n                    children: [\n                        \"Signed in as \",\n                        session.user.name\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/eunsungkim/Documents/GitHub/230502todo/src/pages/auth/signin.js\",\n                    lineNumber: 12,\n                    columnNumber: 12\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: `w-40\n                       justify-self-center\n                       p-1 mb-4\n                     bg-pink-500 text-white\n                       border border-pink-500 rounded\n                     hover:bg-white hover:text-pink-500`,\n                    onClick: ()=>router.push(\"/\"),\n                    children: \"Go to Home\"\n                }, void 0, false, {\n                    fileName: \"/Users/eunsungkim/Documents/GitHub/230502todo/src/pages/auth/signin.js\",\n                    lineNumber: 13,\n                    columnNumber: 12\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: `w-40\n                       justify-self-center\n                       p-1 mb-4\n                     text-pink-500\n                       border border-pink-500 rounded\n                     hover:bg-white hover:text-pink-500`,\n                    onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signOut)(),\n                    children: \"Sign out\"\n                }, void 0, false, {\n                    fileName: \"/Users/eunsungkim/Documents/GitHub/230502todo/src/pages/auth/signin.js\",\n                    lineNumber: 24,\n                    columnNumber: 12\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/eunsungkim/Documents/GitHub/230502todo/src/pages/auth/signin.js\",\n            lineNumber: 11,\n            columnNumber: 10\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid m-auto text-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"m-4\",\n                    children: \"Not signed in\"\n                }, void 0, false, {\n                    fileName: \"/Users/eunsungkim/Documents/GitHub/230502todo/src/pages/auth/signin.js\",\n                    lineNumber: 38,\n                    columnNumber: 12\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: `w-40\n                       justify-self-center\n                       p-1 mb-4\n                     bg-pink-500 text-white\n                       border border-pink-500 rounded\n                     hover:bg-white hover:text-pink-500`,\n                    onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signIn)(),\n                    children: \"Sign in\"\n                }, void 0, false, {\n                    fileName: \"/Users/eunsungkim/Documents/GitHub/230502todo/src/pages/auth/signin.js\",\n                    lineNumber: 39,\n                    columnNumber: 12\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/eunsungkim/Documents/GitHub/230502todo/src/pages/auth/signin.js\",\n            lineNumber: 37,\n            columnNumber: 10\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/eunsungkim/Documents/GitHub/230502todo/src/pages/auth/signin.js\",\n        lineNumber: 9,\n        columnNumber: 6\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXV0aC9zaWduaW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBd0M7QUFDdUI7QUFFL0MsU0FBU0ksU0FBUztJQUMvQixNQUFNQyxTQUFTTCxzREFBU0E7SUFDeEIsTUFBTSxFQUFFTSxNQUFNQyxRQUFPLEVBQUUsR0FBR04sMkRBQVVBO0lBRXBDLHFCQUNFLDhEQUFDTztRQUFJQyxXQUFVO2tCQUNaRix3QkFDQyw4REFBQ0M7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNEO29CQUFJQyxXQUFVOzt3QkFBTTt3QkFBY0YsUUFBUUcsSUFBSSxDQUFDQyxJQUFJOzs7Ozs7OzhCQUNwRCw4REFBQ0M7b0JBQ0NILFdBQVcsQ0FBQzs7Ozs7dURBSzhCLENBQUM7b0JBQzNDSSxTQUFTLElBQU1SLE9BQU9TLElBQUksQ0FBQzs4QkFDNUI7Ozs7Ozs4QkFHRCw4REFBQ0Y7b0JBQ0NILFdBQVcsQ0FBQzs7Ozs7dURBSzhCLENBQUM7b0JBQzNDSSxTQUFTLElBQU1WLHdEQUFPQTs4QkFDdkI7Ozs7Ozs7Ozs7O2lDQUtILDhEQUFDSztZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0Q7b0JBQUlDLFdBQVU7OEJBQU07Ozs7Ozs4QkFDckIsOERBQUNHO29CQUNDSCxXQUFXLENBQUM7Ozs7O3VEQUs4QixDQUFDO29CQUMzQ0ksU0FBUyxJQUFNWCx1REFBTUE7OEJBQ3RCOzs7Ozs7Ozs7OztnQkFJSjs7Ozs7O0FBR1AsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvcGFnZXMvYXV0aC9zaWduaW4uanM/MGU0OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbiBpbXBvcnQgeyB1c2VTZXNzaW9uLCBzaWduSW4sIHNpZ25PdXQgfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XG5cbiBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWduaW4oKSB7XG4gICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpO1xuXG4gICByZXR1cm4gKFxuICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaC1zY3JlZW5cIj5cbiAgICAgICB7c2Vzc2lvbiA/IChcbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBtLWF1dG8gdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTRcIj5TaWduZWQgaW4gYXMge3Nlc3Npb24udXNlci5uYW1lfTwvZGl2PlxuICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgY2xhc3NOYW1lPXtgdy00MFxuICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LXNlbGYtY2VudGVyXG4gICAgICAgICAgICAgICAgICAgICAgIHAtMSBtYi00XG4gICAgICAgICAgICAgICAgICAgICBiZy1waW5rLTUwMCB0ZXh0LXdoaXRlXG4gICAgICAgICAgICAgICAgICAgICAgIGJvcmRlciBib3JkZXItcGluay01MDAgcm91bmRlZFxuICAgICAgICAgICAgICAgICAgICAgaG92ZXI6Ymctd2hpdGUgaG92ZXI6dGV4dC1waW5rLTUwMGB9XG4gICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvXCIpfVxuICAgICAgICAgICA+XG4gICAgICAgICAgICAgR28gdG8gSG9tZVxuICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgIGNsYXNzTmFtZT17YHctNDBcbiAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1zZWxmLWNlbnRlclxuICAgICAgICAgICAgICAgICAgICAgICBwLTEgbWItNFxuICAgICAgICAgICAgICAgICAgICAgdGV4dC1waW5rLTUwMFxuICAgICAgICAgICAgICAgICAgICAgICBib3JkZXIgYm9yZGVyLXBpbmstNTAwIHJvdW5kZWRcbiAgICAgICAgICAgICAgICAgICAgIGhvdmVyOmJnLXdoaXRlIGhvdmVyOnRleHQtcGluay01MDBgfVxuICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNpZ25PdXQoKX1cbiAgICAgICAgICAgPlxuICAgICAgICAgICAgIFNpZ24gb3V0XG4gICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgPC9kaXY+XG4gICAgICAgKSA6IChcbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBtLWF1dG8gdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTRcIj5Ob3Qgc2lnbmVkIGluPC9kaXY+XG4gICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICBjbGFzc05hbWU9e2B3LTQwXG4gICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktc2VsZi1jZW50ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgcC0xIG1iLTRcbiAgICAgICAgICAgICAgICAgICAgIGJnLXBpbmstNTAwIHRleHQtd2hpdGVcbiAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyIGJvcmRlci1waW5rLTUwMCByb3VuZGVkXG4gICAgICAgICAgICAgICAgICAgICBob3ZlcjpiZy13aGl0ZSBob3Zlcjp0ZXh0LXBpbmstNTAwYH1cbiAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzaWduSW4oKX1cbiAgICAgICAgICAgPlxuICAgICAgICAgICAgIFNpZ24gaW5cbiAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICA8L2Rpdj5cbiAgICAgICApfVxuICAgICA8L2Rpdj5cbiAgICk7XG4gfSJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VTZXNzaW9uIiwic2lnbkluIiwic2lnbk91dCIsIlNpZ25pbiIsInJvdXRlciIsImRhdGEiLCJzZXNzaW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwidXNlciIsIm5hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwicHVzaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/auth/signin.js\n");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/auth/signin.js"));
module.exports = __webpack_exports__;

})();