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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AllReviews; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _AllReviews_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AllReviews.css */ \"(app-pages-browser)/./src/app/review/all-review/AllReviews.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction AllReviews() {\n    _s();\n    const [reviews, setReviews] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"http://localhost:8080/reviews/list-reviews\").then((response)=>{\n            console.log(response);\n            return response.json();\n        }).then((data)=>{\n            setReviews(data);\n            fetch(\"http://localhost:8080/reviews/games\").then((response)=>response.json()).then((data)=>{\n                console.log(data);\n                document.getelem;\n            }).catch((error)=>{\n                console.log(\"ERROR\");\n            });\n        }).catch((error)=>{\n            console.log(\"ERROR\");\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"All Reviews\"\n            }, void 0, false, {\n                fileName: \"/Users/tsabitcodar/Documents/TKADPRO/epicarcade_frontend/epicarcade-frontend/src/app/review/all-review/page.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            reviews.length > 0 ? reviews.map((review, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"review\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            id: \"id-games\",\n                            children: [\n                                \"Id-game: \",\n                                review.id_game\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/tsabitcodar/Documents/TKADPRO/epicarcade_frontend/epicarcade-frontend/src/app/review/all-review/page.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Rating: \",\n                                review.rating\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/tsabitcodar/Documents/TKADPRO/epicarcade_frontend/epicarcade-frontend/src/app/review/all-review/page.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Comment: \",\n                                review.comment\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/tsabitcodar/Documents/TKADPRO/epicarcade_frontend/epicarcade-frontend/src/app/review/all-review/page.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, index, true, {\n                    fileName: \"/Users/tsabitcodar/Documents/TKADPRO/epicarcade_frontend/epicarcade-frontend/src/app/review/all-review/page.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 11\n                }, this)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"no-reviews\",\n                children: \"No reviews available.\"\n            }, void 0, false, {\n                fileName: \"/Users/tsabitcodar/Documents/TKADPRO/epicarcade_frontend/epicarcade-frontend/src/app/review/all-review/page.tsx\",\n                lineNumber: 44,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tsabitcodar/Documents/TKADPRO/epicarcade_frontend/epicarcade-frontend/src/app/review/all-review/page.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n_s(AllReviews, \"FPrwLLWcZBXrtWYcIRYMKBd2Ocw=\");\n_c = AllReviews;\nvar _c;\n$RefreshReg$(_c, \"AllReviews\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcmV2aWV3L2FsbC1yZXZpZXcvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVtRDtBQUN6QjtBQUVYLFNBQVNHOztJQUN0QixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR0gsK0NBQVFBLENBQUMsRUFBRTtJQUV6Q0QsZ0RBQVNBLENBQUM7UUFDUkssTUFBTSw4Q0FDSEMsSUFBSSxDQUFDQyxDQUFBQTtZQUNKQyxRQUFRQyxHQUFHLENBQUNGO1lBQ1osT0FBT0EsU0FBU0csSUFBSTtRQUN0QixHQUNDSixJQUFJLENBQUNLLENBQUFBO1lBQ0pQLFdBQVdPO1lBQ1hOLE1BQU0sdUNBQ0hDLElBQUksQ0FBQ0MsQ0FBQUEsV0FBWUEsU0FBU0csSUFBSSxJQUM5QkosSUFBSSxDQUFDSyxDQUFBQTtnQkFDSkgsUUFBUUMsR0FBRyxDQUFDRTtnQkFDWkMsU0FBU0MsT0FBTztZQUNsQixHQUNDQyxLQUFLLENBQUNDLENBQUFBO2dCQUNMUCxRQUFRQyxHQUFHLENBQUM7WUFDZDtRQUNKLEdBQ0NLLEtBQUssQ0FBQ0MsQ0FBQUE7WUFDTFAsUUFBUUMsR0FBRyxDQUFDO1FBQ2Q7SUFDSixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ087UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDOzBCQUFHOzs7Ozs7WUFDSGYsUUFBUWdCLE1BQU0sR0FBRyxJQUNoQmhCLFFBQVFpQixHQUFHLENBQUMsQ0FBQ0MsUUFBUUMsc0JBQ25CLDhEQUFDTjtvQkFBZ0JDLFdBQVU7O3NDQUN6Qiw4REFBQ007NEJBQUdDLElBQUc7O2dDQUFXO2dDQUFVSCxPQUFPSSxPQUFPOzs7Ozs7O3NDQUMxQyw4REFBQ0M7O2dDQUFFO2dDQUFTTCxPQUFPTSxNQUFNOzs7Ozs7O3NDQUN6Qiw4REFBQ0Q7O2dDQUFFO2dDQUFVTCxPQUFPTyxPQUFPOzs7Ozs7OzttQkFIbkJOOzs7OzBDQU9aLDhEQUFDSTtnQkFBRVQsV0FBVTswQkFBYTs7Ozs7Ozs7Ozs7O0FBSWxDO0dBMUN3QmY7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9yZXZpZXcvYWxsLXJldmlldy9wYWdlLnRzeD84N2Y5Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4vQWxsUmV2aWV3cy5jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBbGxSZXZpZXdzKCl7XG4gIGNvbnN0IFtyZXZpZXdzLCBzZXRSZXZpZXdzXSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwODAvcmV2aWV3cy9saXN0LXJldmlld3MnKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHNldFJldmlld3MoZGF0YSk7XG4gICAgICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwODAvcmV2aWV3cy9nYW1lcycpXG4gICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRlbGVtXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SJyk7XG4gICAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJFUlJPUlwiKTtcbiAgICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGgxPkFsbCBSZXZpZXdzPC9oMT5cbiAgICAgIHtyZXZpZXdzLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgIHJldmlld3MubWFwKChyZXZpZXcsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJyZXZpZXdcIj5cbiAgICAgICAgICAgIDxoMiBpZD0naWQtZ2FtZXMnPklkLWdhbWU6IHtyZXZpZXcuaWRfZ2FtZX08L2gyPlxuICAgICAgICAgICAgPHA+UmF0aW5nOiB7cmV2aWV3LnJhdGluZ308L3A+XG4gICAgICAgICAgICA8cD5Db21tZW50OiB7cmV2aWV3LmNvbW1lbnR9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKVxuICAgICAgKSA6IChcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibm8tcmV2aWV3c1wiPk5vIHJldmlld3MgYXZhaWxhYmxlLjwvcD5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJBbGxSZXZpZXdzIiwicmV2aWV3cyIsInNldFJldmlld3MiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJqc29uIiwiZGF0YSIsImRvY3VtZW50IiwiZ2V0ZWxlbSIsImNhdGNoIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImxlbmd0aCIsIm1hcCIsInJldmlldyIsImluZGV4IiwiaDIiLCJpZCIsImlkX2dhbWUiLCJwIiwicmF0aW5nIiwiY29tbWVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/review/all-review/page.tsx\n"));

/***/ })

});