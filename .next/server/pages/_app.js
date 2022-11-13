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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction App({ Component , pageProps  }) {\n    const { 0: walletAddress , 1: setWalletAddress  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const getCurrentWalletConnected = async ()=>{\n        if (typeof window.ethereum !== \"undefined\") {\n            const ethereum = window.ethereum;\n            ethereum.request({\n                method: \"eth_requestAccounts\"\n            }).then((wallets)=>setWalletAddress(wallets[0]));\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        getCurrentWalletConnected();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        address: walletAddress,\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"/Users/ericaguilarmarcial/Desktop/proofOfCar/pages/_app.tsx\",\n        lineNumber: 23,\n        columnNumber: 10\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBOEI7QUFFcUI7QUFHcEMsU0FBU0csR0FBRyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFZLEVBQUU7SUFDOUQsTUFBTSxLQUFDQyxhQUFhLE1BQUVDLGdCQUFnQixNQUFJTCwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUV0RCxNQUFNTSx5QkFBeUIsR0FBRyxVQUFZO1FBQzVDLElBQUcsT0FBT0MsTUFBTSxDQUFDQyxRQUFRLEtBQUssV0FBVyxFQUFDO1lBQ3hDLE1BQU1BLFFBQVEsR0FBR0QsTUFBTSxDQUFDQyxRQUFRO1lBQ2hDQSxRQUFRLENBQUNDLE9BQU8sQ0FBQztnQkFBRUMsTUFBTSxFQUFFLHFCQUFxQjthQUFFLENBQUMsQ0FDbERDLElBQUksQ0FBQyxDQUFDQyxPQUFXLEdBQUtQLGdCQUFnQixDQUFDTyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0RCxDQUFDO0lBQ0gsQ0FBQztJQUVEYixnREFBUyxDQUFDLElBQU07UUFDZE8seUJBQXlCLEVBQUU7SUFDN0IsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUlOLHFCQUFPLDhEQUFDSixTQUFTO1FBQUNXLE9BQU8sRUFBRVQsYUFBYTtRQUFHLEdBQUdELFNBQVM7Ozs7O1lBQUk7QUFDN0QsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb29mb2ZjYXIvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBNZXRhTWFza0lucGFnZVByb3ZpZGVyIH0gZnJvbSAnQG1ldGFtYXNrL3Byb3ZpZGVycyc7XG5kZWNsYXJlIHZhciB3aW5kb3c6IGFueVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgY29uc3QgW3dhbGxldEFkZHJlc3MsIHNldFdhbGxldEFkZHJlc3NdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgZ2V0Q3VycmVudFdhbGxldENvbm5lY3RlZCA9IGFzeW5jICgpID0+IHtcbiAgICBpZih0eXBlb2Ygd2luZG93LmV0aGVyZXVtICE9PSBcInVuZGVmaW5lZFwiKXtcbiAgICAgIGNvbnN0IGV0aGVyZXVtID0gd2luZG93LmV0aGVyZXVtIGFzIE1ldGFNYXNrSW5wYWdlUHJvdmlkZXI7XG4gICAgICBldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiAnZXRoX3JlcXVlc3RBY2NvdW50cycgfSlcbiAgICAgIC50aGVuKCh3YWxsZXRzOmFueSkgPT4gc2V0V2FsbGV0QWRkcmVzcyh3YWxsZXRzWzBdKSlcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRDdXJyZW50V2FsbGV0Q29ubmVjdGVkKClcbiAgfSwgW10pXG5cbiAgXG5cbiAgcmV0dXJuIDxDb21wb25lbnQgYWRkcmVzcz17d2FsbGV0QWRkcmVzc30gey4uLnBhZ2VQcm9wc30gLz5cbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwid2FsbGV0QWRkcmVzcyIsInNldFdhbGxldEFkZHJlc3MiLCJnZXRDdXJyZW50V2FsbGV0Q29ubmVjdGVkIiwid2luZG93IiwiZXRoZXJldW0iLCJyZXF1ZXN0IiwibWV0aG9kIiwidGhlbiIsIndhbGxldHMiLCJhZGRyZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

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