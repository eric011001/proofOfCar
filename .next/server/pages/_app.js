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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction App({ Component , pageProps  }) {\n    const [walletAddress, setWalletAddress] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const getCurrentWalletConnected = async ()=>{\n        if (typeof window.ethereum !== \"undefined\") {\n            ethereum.request({\n                method: \"eth_requestAccounts\"\n            }).then((wallets)=>setWalletAddress(wallets[0]));\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        getCurrentWalletConnected();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        address: walletAddress,\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"/Users/ericaguilarmarcial/Desktop/proofOfCar/pages/_app.tsx\",\n        lineNumber: 21,\n        columnNumber: 10\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBOEI7QUFFb0I7QUFFbkMsU0FBU0csSUFBSSxFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBWSxFQUFFO0lBQzlELE1BQU0sQ0FBQ0MsZUFBZUMsaUJBQWlCLEdBQUdMLCtDQUFRQSxDQUFDO0lBRW5ELE1BQU1NLDRCQUE0QixVQUFZO1FBQzVDLElBQUcsT0FBT0MsT0FBT0MsUUFBUSxLQUFLLGFBQVk7WUFDeENBLFNBQVNDLE9BQU8sQ0FBQztnQkFBRUMsUUFBUTtZQUFzQixHQUNoREMsSUFBSSxDQUFDLENBQUNDLFVBQWdCUCxpQkFBaUJPLE9BQU8sQ0FBQyxFQUFFO1FBQ3BELENBQUM7SUFDSDtJQUVBYixnREFBU0EsQ0FBQyxJQUFNO1FBQ2RPO0lBQ0YsR0FBRyxFQUFFO0lBSUwscUJBQU8sOERBQUNKO1FBQVVXLFNBQVNUO1FBQWdCLEdBQUdELFNBQVM7Ozs7OztBQUN6RCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvb2ZvZmNhci8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuZGVjbGFyZSB2YXIgd2luZG93OiBhbnlcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIGNvbnN0IFt3YWxsZXRBZGRyZXNzLCBzZXRXYWxsZXRBZGRyZXNzXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IGdldEN1cnJlbnRXYWxsZXRDb25uZWN0ZWQgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYodHlwZW9mIHdpbmRvdy5ldGhlcmV1bSAhPT0gXCJ1bmRlZmluZWRcIil7XG4gICAgICBldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiAnZXRoX3JlcXVlc3RBY2NvdW50cycgfSlcbiAgICAgIC50aGVuKCh3YWxsZXRzOmFueSkgPT4gc2V0V2FsbGV0QWRkcmVzcyh3YWxsZXRzWzBdKSlcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRDdXJyZW50V2FsbGV0Q29ubmVjdGVkKClcbiAgfSwgW10pXG5cbiAgXG5cbiAgcmV0dXJuIDxDb21wb25lbnQgYWRkcmVzcz17d2FsbGV0QWRkcmVzc30gey4uLnBhZ2VQcm9wc30gLz5cbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwid2FsbGV0QWRkcmVzcyIsInNldFdhbGxldEFkZHJlc3MiLCJnZXRDdXJyZW50V2FsbGV0Q29ubmVjdGVkIiwid2luZG93IiwiZXRoZXJldW0iLCJyZXF1ZXN0IiwibWV0aG9kIiwidGhlbiIsIndhbGxldHMiLCJhZGRyZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();