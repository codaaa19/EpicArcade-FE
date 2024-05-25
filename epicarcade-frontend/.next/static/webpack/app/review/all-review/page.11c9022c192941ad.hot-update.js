"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/review/all-review/page",{

/***/ "(app-pages-browser)/./src/app/review/all-review/page.tsx":
/*!********************************************!*\
  !*** ./src/app/review/all-review/page.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AllReviews; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _AllReviews_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AllReviews.css */ \"(app-pages-browser)/./src/app/review/all-review/AllReviews.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction AllReviews() {\n    _s();\n    const [reviews, setReviews] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"http://localhost:8080/reviews/list-reviews\").then((response)=>{\n            console.log(response);\n            return response.json();\n        }).then((data)=>{\n            setReviews(data);\n            fetch();\n        }).catch((error)=>{\n            console.log(\"ERROR\");\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"All Reviews\"\n            }, void 0, false, {\n                fileName: \"/Users/tsabitcodar/Documents/TKADPRO/epicarcade_frontend/epicarcade-frontend/src/app/review/all-review/page.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            reviews.length > 0 ? reviews.map((review, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"review\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: [\n                                \"Id-game: \",\n                                review.id_game\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/tsabitcodar/Documents/TKADPRO/epicarcade_frontend/epicarcade-frontend/src/app/review/all-review/page.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Rating: \",\n                                review.rating\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/tsabitcodar/Documents/TKADPRO/epicarcade_frontend/epicarcade-frontend/src/app/review/all-review/page.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Comment: \",\n                                review.comment\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/tsabitcodar/Documents/TKADPRO/epicarcade_frontend/epicarcade-frontend/src/app/review/all-review/page.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, index, true, {\n                    fileName: \"/Users/tsabitcodar/Documents/TKADPRO/epicarcade_frontend/epicarcade-frontend/src/app/review/all-review/page.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 11\n                }, this)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"no-reviews\",\n                children: \"No reviews available.\"\n            }, void 0, false, {\n                fileName: \"/Users/tsabitcodar/Documents/TKADPRO/epicarcade_frontend/epicarcade-frontend/src/app/review/all-review/page.tsx\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tsabitcodar/Documents/TKADPRO/epicarcade_frontend/epicarcade-frontend/src/app/review/all-review/page.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(AllReviews, \"FPrwLLWcZBXrtWYcIRYMKBd2Ocw=\");\n_c = AllReviews;\nvar _c;\n$RefreshReg$(_c, \"AllReviews\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcmV2aWV3L2FsbC1yZXZpZXcvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVtRDtBQUN6QjtBQUVYLFNBQVNHOztJQUN0QixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR0gsK0NBQVFBLENBQUMsRUFBRTtJQUV6Q0QsZ0RBQVNBLENBQUM7UUFDUkssTUFBTSw4Q0FDSEMsSUFBSSxDQUFDQyxDQUFBQTtZQUNKQyxRQUFRQyxHQUFHLENBQUNGO1lBQ1osT0FBT0EsU0FBU0csSUFBSTtRQUN0QixHQUNDSixJQUFJLENBQUNLLENBQUFBO1lBQ0pQLFdBQVdPO1lBQ1hOO1FBQ0YsR0FDQ08sS0FBSyxDQUFDQyxDQUFBQTtZQUNMTCxRQUFRQyxHQUFHLENBQUM7UUFDZDtJQUNKLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDSztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7MEJBQUc7Ozs7OztZQUNIYixRQUFRYyxNQUFNLEdBQUcsSUFDaEJkLFFBQVFlLEdBQUcsQ0FBQyxDQUFDQyxRQUFRQyxzQkFDbkIsOERBQUNOO29CQUFnQkMsV0FBVTs7c0NBQ3pCLDhEQUFDTTs7Z0NBQUc7Z0NBQVVGLE9BQU9HLE9BQU87Ozs7Ozs7c0NBQzVCLDhEQUFDQzs7Z0NBQUU7Z0NBQVNKLE9BQU9LLE1BQU07Ozs7Ozs7c0NBQ3pCLDhEQUFDRDs7Z0NBQUU7Z0NBQVVKLE9BQU9NLE9BQU87Ozs7Ozs7O21CQUhuQkw7Ozs7MENBT1osOERBQUNHO2dCQUFFUixXQUFVOzBCQUFhOzs7Ozs7Ozs7Ozs7QUFJbEM7R0FsQ3dCYjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3Jldmlldy9hbGwtcmV2aWV3L3BhZ2UudHN4Pzg3ZjkiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9BbGxSZXZpZXdzLmNzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFsbFJldmlld3MoKXtcbiAgY29uc3QgW3Jldmlld3MsIHNldFJldmlld3NdID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9yZXZpZXdzL2xpc3QtcmV2aWV3cycpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIH0pXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgc2V0UmV2aWV3cyhkYXRhKTtcbiAgICAgICAgZmV0Y2goKVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRVJST1JcIik7XG4gICAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxoMT5BbGwgUmV2aWV3czwvaDE+XG4gICAgICB7cmV2aWV3cy5sZW5ndGggPiAwID8gKFxuICAgICAgICByZXZpZXdzLm1hcCgocmV2aWV3LCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwicmV2aWV3XCI+XG4gICAgICAgICAgICA8aDI+SWQtZ2FtZToge3Jldmlldy5pZF9nYW1lfTwvaDI+XG4gICAgICAgICAgICA8cD5SYXRpbmc6IHtyZXZpZXcucmF0aW5nfTwvcD5cbiAgICAgICAgICAgIDxwPkNvbW1lbnQ6IHtyZXZpZXcuY29tbWVudH08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpXG4gICAgICApIDogKFxuICAgICAgICA8cCBjbGFzc05hbWU9XCJuby1yZXZpZXdzXCI+Tm8gcmV2aWV3cyBhdmFpbGFibGUuPC9wPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkFsbFJldmlld3MiLCJyZXZpZXdzIiwic2V0UmV2aWV3cyIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImpzb24iLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwibGVuZ3RoIiwibWFwIiwicmV2aWV3IiwiaW5kZXgiLCJoMiIsImlkX2dhbWUiLCJwIiwicmF0aW5nIiwiY29tbWVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/review/all-review/page.tsx\n"));

/***/ })

});