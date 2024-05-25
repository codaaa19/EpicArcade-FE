"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/review/add-review/page",{

/***/ "(app-pages-browser)/./src/app/review/add-review/page.tsx":
/*!********************************************!*\
  !*** ./src/app/review/add-review/page.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AddReview; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/uuid */ \"(app-pages-browser)/./src/app/utils/uuid.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction AddReview() {\n    _s();\n    const [idGame, setIdGame] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [rating, setRating] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [comment, setComment] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        const id = (0,_utils_uuid__WEBPACK_IMPORTED_MODULE_2__.uuid)();\n        const review = {\n            id,\n            idGame,\n            rating,\n            comment\n        };\n        try {\n            const response = await fetch(\"http://localhost:8080/reviews/add-review\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(review)\n            });\n            if (!response.ok) {\n                throw new Error(\"HTTP error \" + response.status);\n            }\n            const data = await response.json();\n            console.log(\"Success:\", data);\n        } catch (error) {\n            console.error(\"Error:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Add your review\"\n            }, void 0, false, {\n                fileName: \"/Users/tsabitcodar/Documents/TKADPRO/epicarcade_frontend/epicarcade-frontend/src/app/review/add-review/page.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            \"ID Game:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                value: idGame,\n                                onChange: (e)=>setIdGame(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"/Users/tsabitcodar/Documents/TKADPRO/epicarcade_frontend/epicarcade-frontend/src/app/review/add-review/page.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tsabitcodar/Documents/TKADPRO/epicarcade_frontend/epicarcade-frontend/src/app/review/add-review/page.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            \"Rating:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                value: rating,\n                                onChange: (e)=>setRating(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"/Users/tsabitcodar/Documents/TKADPRO/epicarcade_frontend/epicarcade-frontend/src/app/review/add-review/page.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tsabitcodar/Documents/TKADPRO/epicarcade_frontend/epicarcade-frontend/src/app/review/add-review/page.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        children: [\n                            \"Comment:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                value: comment,\n                                onChange: (e)=>setComment(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"/Users/tsabitcodar/Documents/TKADPRO/epicarcade_frontend/epicarcade-frontend/src/app/review/add-review/page.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tsabitcodar/Documents/TKADPRO/epicarcade_frontend/epicarcade-frontend/src/app/review/add-review/page.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tsabitcodar/Documents/TKADPRO/epicarcade_frontend/epicarcade-frontend/src/app/review/add-review/page.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tsabitcodar/Documents/TKADPRO/epicarcade_frontend/epicarcade-frontend/src/app/review/add-review/page.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tsabitcodar/Documents/TKADPRO/epicarcade_frontend/epicarcade-frontend/src/app/review/add-review/page.tsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, this);\n}\n_s(AddReview, \"v7sPVbnZWpH+v/eyWnDZIEMrxyU=\");\n_c = AddReview;\nvar _c;\n$RefreshReg$(_c, \"AddReview\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcmV2aWV3L2FkZC1yZXZpZXcvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUV3QztBQUNBO0FBRXpCLFNBQVNHOztJQUN0QixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR0osK0NBQVFBLENBQUM7SUFDckMsTUFBTSxDQUFDSyxRQUFRQyxVQUFVLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ08sU0FBU0MsV0FBVyxHQUFHUiwrQ0FBUUEsQ0FBQztJQUV2QyxNQUFNUyxlQUFlLE9BQU9DO1FBQzFCQSxNQUFNQyxjQUFjO1FBQ3BCLE1BQU1DLEtBQUtYLGlEQUFJQTtRQUVmLE1BQU1ZLFNBQVM7WUFDYkQ7WUFDQVQ7WUFDQUU7WUFDQUU7UUFDRjtRQUVBLElBQUk7WUFDRixNQUFNTyxXQUFXLE1BQU1DLE1BQU0sNENBQTRDO2dCQUN2RUMsUUFBUTtnQkFDUkMsU0FBUztvQkFDUCxnQkFBZ0I7Z0JBQ2xCO2dCQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUNQO1lBQ3ZCO1lBRUEsSUFBSSxDQUFDQyxTQUFTTyxFQUFFLEVBQUU7Z0JBQ2hCLE1BQU0sSUFBSUMsTUFBTSxnQkFBZ0JSLFNBQVNTLE1BQU07WUFDakQ7WUFFQSxNQUFNQyxPQUFPLE1BQU1WLFNBQVNXLElBQUk7WUFDaENDLFFBQVFDLEdBQUcsQ0FBQyxZQUFZSDtRQUMxQixFQUFFLE9BQU9JLE9BQU87WUFDZEYsUUFBUUUsS0FBSyxDQUFDLFVBQVVBO1FBQzFCO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0M7OzBCQUNDLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQztnQkFBS0MsVUFBVXZCOztrQ0FDZCw4REFBQ3dCOzs0QkFBTTswQ0FFTCw4REFBQ0M7Z0NBQU1DLE1BQUs7Z0NBQU9DLE9BQU9qQztnQ0FBUWtDLFVBQVVDLENBQUFBLElBQUtsQyxVQUFVa0MsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7Ozs7Ozs7a0NBRTNFLDhEQUFDSDs7NEJBQU07MENBRUwsOERBQUNDO2dDQUFNQyxNQUFLO2dDQUFTQyxPQUFPL0I7Z0NBQVFnQyxVQUFVQyxDQUFBQSxJQUFLaEMsVUFBVWdDLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7Ozs7Ozs7O2tDQUU3RSw4REFBQ0g7OzRCQUFNOzBDQUVMLDhEQUFDTztnQ0FBU0osT0FBTzdCO2dDQUFTOEIsVUFBVUMsQ0FBQUEsSUFBSzlCLFdBQVc4QixFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7Ozs7Ozs7OztrQ0FFcEUsOERBQUNLO3dCQUFPTixNQUFLO2tDQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJOUI7R0F4RHdCakM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9yZXZpZXcvYWRkLXJldmlldy9wYWdlLnRzeD82ZTI5Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXVpZCB9IGZyb20gXCIuLi8uLi91dGlscy91dWlkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkZFJldmlldygpe1xuICBjb25zdCBbaWRHYW1lLCBzZXRJZEdhbWVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbcmF0aW5nLCBzZXRSYXRpbmddID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbY29tbWVudCwgc2V0Q29tbWVudF0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50OiBSZWFjdC5Gb3JtRXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGlkID0gdXVpZCgpO1xuXG4gICAgY29uc3QgcmV2aWV3ID0ge1xuICAgICAgaWQsXG4gICAgICBpZEdhbWUsXG4gICAgICByYXRpbmcsXG4gICAgICBjb21tZW50XG4gICAgfTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwODAvcmV2aWV3cy9hZGQtcmV2aWV3Jywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmV2aWV3KVxuICAgICAgfSk7XG5cbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdIVFRQIGVycm9yICcgKyByZXNwb25zZS5zdGF0dXMpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgY29uc29sZS5sb2coJ1N1Y2Nlc3M6JywgZGF0YSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPkFkZCB5b3VyIHJldmlldzwvaDE+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIElEIEdhbWU6XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2lkR2FtZX0gb25DaGFuZ2U9e2UgPT4gc2V0SWRHYW1lKGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIFJhdGluZzpcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHZhbHVlPXtyYXRpbmd9IG9uQ2hhbmdlPXtlID0+IHNldFJhdGluZyhlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICBDb21tZW50OlxuICAgICAgICAgIDx0ZXh0YXJlYSB2YWx1ZT17Y29tbWVudH0gb25DaGFuZ2U9e2UgPT4gc2V0Q29tbWVudChlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApO1xufTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInV1aWQiLCJBZGRSZXZpZXciLCJpZEdhbWUiLCJzZXRJZEdhbWUiLCJyYXRpbmciLCJzZXRSYXRpbmciLCJjb21tZW50Iiwic2V0Q29tbWVudCIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJpZCIsInJldmlldyIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvayIsIkVycm9yIiwic3RhdHVzIiwiZGF0YSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJkaXYiLCJoMSIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ0ZXh0YXJlYSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/review/add-review/page.tsx\n"));

/***/ })

});