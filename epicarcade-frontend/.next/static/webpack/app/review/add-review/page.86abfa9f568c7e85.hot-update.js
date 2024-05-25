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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AddReview; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _AddReview_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AddReview.css */ \"(app-pages-browser)/./src/app/review/add-review/AddReview.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction AddReview() {\n    _s();\n    const [id_game, setIdGame] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [rating, setRating] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [comment, setComment] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [games, setGames] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Fetch the list of games\n        fetch(\"http://localhost:8080/reviews/games\").then((response)=>response.json()).then((data)=>{\n            setGames(data);\n        }).catch((error)=>{\n            console.error(\"Error fetching games:\", error);\n        });\n    }, []);\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        const review = {\n            id_game,\n            rating,\n            comment\n        };\n        try {\n            const response = await fetch(\"http://localhost:8080/reviews/add-review\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(review)\n            });\n            if (!response.ok) {\n                throw new Error(\"HTTP error \" + response.status);\n            }\n            const data = await response.json();\n            console.log(\"Success:\", data);\n            router.push(\"/review\");\n            loca;\n        } catch (error) {\n            console.error(\"Error:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"background\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Add your review\"\n                }, void 0, false, {\n                    fileName: \"/Users/tsabitcodar/Documents/TKADPRO/epicarcade_frontend/epicarcade-frontend/src/app/review/add-review/page.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    className: \"form\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            children: [\n                                \"ID Game:\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    list: \"games\",\n                                    type: \"text\",\n                                    value: id_game,\n                                    onChange: (e)=>setIdGame(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"/Users/tsabitcodar/Documents/TKADPRO/epicarcade_frontend/epicarcade-frontend/src/app/review/add-review/page.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"datalist\", {\n                                    id: \"games\",\n                                    children: games.map((game)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: game.id,\n                                            children: game.name\n                                        }, game.id, false, {\n                                            fileName: \"/Users/tsabitcodar/Documents/TKADPRO/epicarcade_frontend/epicarcade-frontend/src/app/review/add-review/page.tsx\",\n                                            lineNumber: 72,\n                                            columnNumber: 17\n                                        }, this))\n                                }, void 0, false, {\n                                    fileName: \"/Users/tsabitcodar/Documents/TKADPRO/epicarcade_frontend/epicarcade-frontend/src/app/review/add-review/page.tsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/tsabitcodar/Documents/TKADPRO/epicarcade_frontend/epicarcade-frontend/src/app/review/add-review/page.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            children: [\n                                \"Rating:\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"number\",\n                                    min: \"1\",\n                                    max: \"5\",\n                                    value: rating,\n                                    onChange: (e)=>setRating(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"/Users/tsabitcodar/Documents/TKADPRO/epicarcade_frontend/epicarcade-frontend/src/app/review/add-review/page.tsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/tsabitcodar/Documents/TKADPRO/epicarcade_frontend/epicarcade-frontend/src/app/review/add-review/page.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            children: [\n                                \"Comment:\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                    value: comment,\n                                    onChange: (e)=>setComment(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"/Users/tsabitcodar/Documents/TKADPRO/epicarcade_frontend/epicarcade-frontend/src/app/review/add-review/page.tsx\",\n                                    lineNumber: 90,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/tsabitcodar/Documents/TKADPRO/epicarcade_frontend/epicarcade-frontend/src/app/review/add-review/page.tsx\",\n                            lineNumber: 88,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            children: \"Submit\"\n                        }, void 0, false, {\n                            fileName: \"/Users/tsabitcodar/Documents/TKADPRO/epicarcade_frontend/epicarcade-frontend/src/app/review/add-review/page.tsx\",\n                            lineNumber: 95,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/tsabitcodar/Documents/TKADPRO/epicarcade_frontend/epicarcade-frontend/src/app/review/add-review/page.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/tsabitcodar/Documents/TKADPRO/epicarcade_frontend/epicarcade-frontend/src/app/review/add-review/page.tsx\",\n            lineNumber: 59,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/tsabitcodar/Documents/TKADPRO/epicarcade_frontend/epicarcade-frontend/src/app/review/add-review/page.tsx\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, this);\n}\n_s(AddReview, \"igXC8SewryvEOBP21287wj5Wbo0=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = AddReview;\nvar _c;\n$RefreshReg$(_c, \"AddReview\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcmV2aWV3L2FkZC1yZXZpZXcvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFbUQ7QUFDUDtBQUNuQjtBQUVWLFNBQVNJOztJQUN0QixNQUFNLENBQUNDLFNBQVNDLFVBQVUsR0FBR0wsK0NBQVFBLENBQUM7SUFDdEMsTUFBTSxDQUFDTSxRQUFRQyxVQUFVLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ1EsU0FBU0MsV0FBVyxHQUFHVCwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNVLE9BQU9DLFNBQVMsR0FBR1gsK0NBQVFBLENBQUMsRUFBRTtJQUNyQyxNQUFNWSxTQUFTViwwREFBU0E7SUFFeEJELGdEQUFTQSxDQUFDO1FBQ1IsMEJBQTBCO1FBQzFCWSxNQUFNLHVDQUNIQyxJQUFJLENBQUNDLENBQUFBLFdBQVlBLFNBQVNDLElBQUksSUFDOUJGLElBQUksQ0FBQ0csQ0FBQUE7WUFDSk4sU0FBU007UUFDWCxHQUNDQyxLQUFLLENBQUNDLENBQUFBO1lBQ0xDLFFBQVFELEtBQUssQ0FBQyx5QkFBeUJBO1FBQ3pDO0lBQ0osR0FBRyxFQUFFO0lBRUwsTUFBTUUsZUFBZSxPQUFPQztRQUMxQkEsTUFBTUMsY0FBYztRQUVwQixNQUFNQyxTQUFTO1lBQ2JwQjtZQUNBRTtZQUNBRTtRQUNGO1FBRUEsSUFBSTtZQUNGLE1BQU1PLFdBQVcsTUFBTUYsTUFBTSw0Q0FBNEM7Z0JBQ3ZFWSxRQUFRO2dCQUNSQyxTQUFTO29CQUNQLGdCQUFnQjtnQkFDbEI7Z0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQ0w7WUFDdkI7WUFFQSxJQUFJLENBQUNULFNBQVNlLEVBQUUsRUFBRTtnQkFDaEIsTUFBTSxJQUFJQyxNQUFNLGdCQUFnQmhCLFNBQVNpQixNQUFNO1lBQ2pEO1lBRUEsTUFBTWYsT0FBTyxNQUFNRixTQUFTQyxJQUFJO1lBQ2hDSSxRQUFRYSxHQUFHLENBQUMsWUFBWWhCO1lBQ3hCTCxPQUFPc0IsSUFBSSxDQUFDO1lBQ1pDO1FBQ0YsRUFBRSxPQUFPaEIsT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMsVUFBVUE7UUFDMUI7SUFDRjtJQUVBLHFCQUNFLDhEQUFDaUI7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNDOzhCQUFHOzs7Ozs7OEJBQ0osOERBQUNDO29CQUFLQyxVQUFVbkI7b0JBQWNnQixXQUFVOztzQ0FDdEMsOERBQUNJOztnQ0FBTTs4Q0FFTCw4REFBQ0M7b0NBQ0NDLE1BQUs7b0NBQ0xDLE1BQUs7b0NBQ0xDLE9BQU96QztvQ0FDUDBDLFVBQVUsQ0FBQ0MsSUFBTTFDLFVBQVUwQyxFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7Ozs4Q0FFM0MsOERBQUNJO29DQUFTQyxJQUFHOzhDQUNWeEMsTUFBTXlDLEdBQUcsQ0FBQyxDQUFDQyxxQkFDViw4REFBQ0M7NENBQXFCUixPQUFPTyxLQUFLRixFQUFFO3NEQUNqQ0UsS0FBS0UsSUFBSTsyQ0FEQ0YsS0FBS0YsRUFBRTs7Ozs7Ozs7Ozs7Ozs7OztzQ0FNMUIsOERBQUNUOztnQ0FBTTs4Q0FFTCw4REFBQ0M7b0NBQ0NFLE1BQUs7b0NBQ0xXLEtBQUk7b0NBQ0pDLEtBQUk7b0NBQ0pYLE9BQU92QztvQ0FDUHdDLFVBQVUsQ0FBQ0MsSUFBTXhDLFVBQVV3QyxFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7Ozs7Ozs7OztzQ0FHN0MsOERBQUNKOztnQ0FBTTs4Q0FFTCw4REFBQ2dCO29DQUNDWixPQUFPckM7b0NBQ1BzQyxVQUFVLENBQUNDLElBQU10QyxXQUFXc0MsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7Ozs7Ozs7c0NBRzlDLDhEQUFDYTs0QkFBT2QsTUFBSztzQ0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLaEM7R0E3RndCekM7O1FBS1BELHNEQUFTQTs7O0tBTEZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcmV2aWV3L2FkZC1yZXZpZXcvcGFnZS50c3g/NmUyOSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcbmltcG9ydCAnLi9BZGRSZXZpZXcuY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRkUmV2aWV3KCkge1xuICBjb25zdCBbaWRfZ2FtZSwgc2V0SWRHYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3JhdGluZywgc2V0UmF0aW5nXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2NvbW1lbnQsIHNldENvbW1lbnRdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbZ2FtZXMsIHNldEdhbWVzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBGZXRjaCB0aGUgbGlzdCBvZiBnYW1lc1xuICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwODAvcmV2aWV3cy9nYW1lcycpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgc2V0R2FtZXMoZGF0YSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZ2FtZXM6JywgZXJyb3IpO1xuICAgICAgfSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgcmV2aWV3ID0ge1xuICAgICAgaWRfZ2FtZSxcbiAgICAgIHJhdGluZyxcbiAgICAgIGNvbW1lbnQsXG4gICAgfTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwODAvcmV2aWV3cy9hZGQtcmV2aWV3Jywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJldmlldyksXG4gICAgICB9KTtcblxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0hUVFAgZXJyb3IgJyArIHJlc3BvbnNlLnN0YXR1cyk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBjb25zb2xlLmxvZygnU3VjY2VzczonLCBkYXRhKTtcbiAgICAgIHJvdXRlci5wdXNoKCcvcmV2aWV3Jyk7XG4gICAgICBsb2NhXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJhY2tncm91bmRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxoMT5BZGQgeW91ciByZXZpZXc8L2gxPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJmb3JtXCI+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgSUQgR2FtZTpcbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBsaXN0PVwiZ2FtZXNcIlxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtpZF9nYW1lfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldElkR2FtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRhdGFsaXN0IGlkPVwiZ2FtZXNcIj5cbiAgICAgICAgICAgICAge2dhbWVzLm1hcCgoZ2FtZSkgPT4gKFxuICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtnYW1lLmlkfSB2YWx1ZT17Z2FtZS5pZH0+XG4gICAgICAgICAgICAgICAgICB7Z2FtZS5uYW1lfVxuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGF0YWxpc3Q+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICBSYXRpbmc6XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgIG1pbj1cIjFcIlxuICAgICAgICAgICAgICBtYXg9XCI1XCJcbiAgICAgICAgICAgICAgdmFsdWU9e3JhdGluZ31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRSYXRpbmcoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIENvbW1lbnQ6XG4gICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgdmFsdWU9e2NvbW1lbnR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q29tbWVudChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJBZGRSZXZpZXciLCJpZF9nYW1lIiwic2V0SWRHYW1lIiwicmF0aW5nIiwic2V0UmF0aW5nIiwiY29tbWVudCIsInNldENvbW1lbnQiLCJnYW1lcyIsInNldEdhbWVzIiwicm91dGVyIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInJldmlldyIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9rIiwiRXJyb3IiLCJzdGF0dXMiLCJsb2ciLCJwdXNoIiwibG9jYSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJpbnB1dCIsImxpc3QiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJkYXRhbGlzdCIsImlkIiwibWFwIiwiZ2FtZSIsIm9wdGlvbiIsIm5hbWUiLCJtaW4iLCJtYXgiLCJ0ZXh0YXJlYSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/review/add-review/page.tsx\n"));

/***/ })

});