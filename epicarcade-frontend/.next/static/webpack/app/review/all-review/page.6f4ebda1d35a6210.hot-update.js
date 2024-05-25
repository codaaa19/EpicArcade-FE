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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AllReviews; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _AllReviews_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AllReviews.css */ \"(app-pages-browser)/./src/app/review/all-review/AllReviews.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction AllReviews() {\n    _s();\n    const [reviews, setReviews] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [games, setGames] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"http://localhost:8080/reviews/list-reviews\").then((response)=>response.json()).then((data)=>{\n            setReviews(data);\n            fetch(\"http://localhost:8080/reviews/games\").then((response)=>response.json()).then((gamesData)=>{\n                const gamesDict = {};\n                gamesData.forEach((game)=>{\n                    gamesDict[game.id] = game.name;\n                });\n                setGames(gamesDict);\n            }).catch((error)=>{\n                console.error(\"Error fetching games:\", error);\n            });\n        }).catch((error)=>{\n            console.error(\"Error fetching reviews:\", error);\n        });\n    }, []);\n    const handleDelete = async (id)=>{\n        try {\n            const response = await fetch(`http://localhost:8080/reviews/delete/${id}`, {\n                method: \"DELETE\"\n            });\n            if (!response.ok) {\n                throw new Error(\"HTTP error \" + response.status);\n            }\n            // Remove the deleted review from the state\n            setReviews(reviews.filter((review)=>review.id !== id));\n        } catch (error) {\n            console.error(\"Error deleting review:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"All Reviews\"\n            }, void 0, false, {\n                fileName: \"/Users/tsabitcodar/Documents/TKADPRO/epicarcade_frontend/epicarcade-frontend/src/app/review/all-review/page.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            reviews.length > 0 ? reviews.map((review, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"review\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"id-games\",\n                            children: [\n                                \"Id-game: \",\n                                games[review.id_game] || review.id_game\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/tsabitcodar/Documents/TKADPRO/epicarcade_frontend/epicarcade-frontend/src/app/review/all-review/page.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Rating: \",\n                                review.rating\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/tsabitcodar/Documents/TKADPRO/epicarcade_frontend/epicarcade-frontend/src/app/review/all-review/page.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Comment: \",\n                                review.comment\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/tsabitcodar/Documents/TKADPRO/epicarcade_frontend/epicarcade-frontend/src/app/review/all-review/page.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"delete-button\",\n                            onClick: ()=>handleDelete(review.id),\n                            children: \"Delete\"\n                        }, void 0, false, {\n                            fileName: \"/Users/tsabitcodar/Documents/TKADPRO/epicarcade_frontend/epicarcade-frontend/src/app/review/all-review/page.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, index, true, {\n                    fileName: \"/Users/tsabitcodar/Documents/TKADPRO/epicarcade_frontend/epicarcade-frontend/src/app/review/all-review/page.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 11\n                }, this)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"no-reviews\",\n                children: \"No reviews available.\"\n            }, void 0, false, {\n                fileName: \"/Users/tsabitcodar/Documents/TKADPRO/epicarcade_frontend/epicarcade-frontend/src/app/review/all-review/page.tsx\",\n                lineNumber: 68,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tsabitcodar/Documents/TKADPRO/epicarcade_frontend/epicarcade-frontend/src/app/review/all-review/page.tsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, this);\n}\n_s(AllReviews, \"F9wp4xtE+UeJSzEpEVUplgJXtCo=\");\n_c = AllReviews;\nvar _c;\n$RefreshReg$(_c, \"AllReviews\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcmV2aWV3L2FsbC1yZXZpZXcvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVtRDtBQUN6QjtBQUVYLFNBQVNHOztJQUN0QixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR0gsK0NBQVFBLENBQUMsRUFBRTtJQUN6QyxNQUFNLENBQUNJLE9BQU9DLFNBQVMsR0FBR0wsK0NBQVFBLENBQUMsQ0FBQztJQUVwQ0QsZ0RBQVNBLENBQUM7UUFDUk8sTUFBTSw4Q0FDSEMsSUFBSSxDQUFDQyxDQUFBQSxXQUFZQSxTQUFTQyxJQUFJLElBQzlCRixJQUFJLENBQUNHLENBQUFBO1lBQ0pQLFdBQVdPO1lBQ1hKLE1BQU0sdUNBQ0hDLElBQUksQ0FBQ0MsQ0FBQUEsV0FBWUEsU0FBU0MsSUFBSSxJQUM5QkYsSUFBSSxDQUFDSSxDQUFBQTtnQkFDSixNQUFNQyxZQUFZLENBQUM7Z0JBQ25CRCxVQUFVRSxPQUFPLENBQUNDLENBQUFBO29CQUNoQkYsU0FBUyxDQUFDRSxLQUFLQyxFQUFFLENBQUMsR0FBR0QsS0FBS0UsSUFBSTtnQkFDaEM7Z0JBQ0FYLFNBQVNPO1lBQ1gsR0FDQ0ssS0FBSyxDQUFDQyxDQUFBQTtnQkFDTEMsUUFBUUQsS0FBSyxDQUFDLHlCQUF5QkE7WUFDekM7UUFDSixHQUNDRCxLQUFLLENBQUNDLENBQUFBO1lBQ0xDLFFBQVFELEtBQUssQ0FBQywyQkFBMkJBO1FBQzNDO0lBQ0osR0FBRyxFQUFFO0lBRUwsTUFBTUUsZUFBZSxPQUFPTDtRQUMxQixJQUFJO1lBQ0YsTUFBTVAsV0FBVyxNQUFNRixNQUFNLENBQUMscUNBQXFDLEVBQUVTLEdBQUcsQ0FBQyxFQUFFO2dCQUN6RU0sUUFBUTtZQUNWO1lBRUEsSUFBSSxDQUFDYixTQUFTYyxFQUFFLEVBQUU7Z0JBQ2hCLE1BQU0sSUFBSUMsTUFBTSxnQkFBZ0JmLFNBQVNnQixNQUFNO1lBQ2pEO1lBRUEsMkNBQTJDO1lBQzNDckIsV0FBV0QsUUFBUXVCLE1BQU0sQ0FBQ0MsQ0FBQUEsU0FBVUEsT0FBT1gsRUFBRSxLQUFLQTtRQUNwRCxFQUFFLE9BQU9HLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDLDBCQUEwQkE7UUFDMUM7SUFDRjtJQUVBLHFCQUNFLDhEQUFDUztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7MEJBQUc7Ozs7OztZQUNIM0IsUUFBUTRCLE1BQU0sR0FBRyxJQUNoQjVCLFFBQVE2QixHQUFHLENBQUMsQ0FBQ0wsUUFBUU0sc0JBQ25CLDhEQUFDTDtvQkFBZ0JDLFdBQVU7O3NDQUN6Qiw4REFBQ0s7NEJBQUdMLFdBQVU7O2dDQUFXO2dDQUFVeEIsS0FBSyxDQUFDc0IsT0FBT1EsT0FBTyxDQUFDLElBQUlSLE9BQU9RLE9BQU87Ozs7Ozs7c0NBQzFFLDhEQUFDQzs7Z0NBQUU7Z0NBQVNULE9BQU9VLE1BQU07Ozs7Ozs7c0NBQ3pCLDhEQUFDRDs7Z0NBQUU7Z0NBQVVULE9BQU9XLE9BQU87Ozs7Ozs7c0NBQzNCLDhEQUFDQzs0QkFDQ1YsV0FBVTs0QkFDVlcsU0FBUyxJQUFNbkIsYUFBYU0sT0FBT1gsRUFBRTtzQ0FDdEM7Ozs7Ozs7bUJBUE9pQjs7OzswQ0FhWiw4REFBQ0c7Z0JBQUVQLFdBQVU7MEJBQWE7Ozs7Ozs7Ozs7OztBQUlsQztHQWxFd0IzQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3Jldmlldy9hbGwtcmV2aWV3L3BhZ2UudHN4Pzg3ZjkiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9BbGxSZXZpZXdzLmNzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFsbFJldmlld3MoKSB7XG4gIGNvbnN0IFtyZXZpZXdzLCBzZXRSZXZpZXdzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2dhbWVzLCBzZXRHYW1lc10gPSB1c2VTdGF0ZSh7fSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo4MDgwL3Jldmlld3MvbGlzdC1yZXZpZXdzJylcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICBzZXRSZXZpZXdzKGRhdGEpO1xuICAgICAgICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo4MDgwL3Jldmlld3MvZ2FtZXMnKVxuICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAudGhlbihnYW1lc0RhdGEgPT4ge1xuICAgICAgICAgICAgY29uc3QgZ2FtZXNEaWN0ID0ge307XG4gICAgICAgICAgICBnYW1lc0RhdGEuZm9yRWFjaChnYW1lID0+IHtcbiAgICAgICAgICAgICAgZ2FtZXNEaWN0W2dhbWUuaWRdID0gZ2FtZS5uYW1lO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzZXRHYW1lcyhnYW1lc0RpY3QpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGdhbWVzOicsIGVycm9yKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyByZXZpZXdzOicsIGVycm9yKTtcbiAgICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gYXN5bmMgKGlkKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9yZXZpZXdzL2RlbGV0ZS8ke2lkfWAsIHtcbiAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSFRUUCBlcnJvciAnICsgcmVzcG9uc2Uuc3RhdHVzKTtcbiAgICAgIH1cblxuICAgICAgLy8gUmVtb3ZlIHRoZSBkZWxldGVkIHJldmlldyBmcm9tIHRoZSBzdGF0ZVxuICAgICAgc2V0UmV2aWV3cyhyZXZpZXdzLmZpbHRlcihyZXZpZXcgPT4gcmV2aWV3LmlkICE9PSBpZCkpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyByZXZpZXc6JywgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8aDE+QWxsIFJldmlld3M8L2gxPlxuICAgICAge3Jldmlld3MubGVuZ3RoID4gMCA/IChcbiAgICAgICAgcmV2aWV3cy5tYXAoKHJldmlldywgaW5kZXgpID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cInJldmlld1wiPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImlkLWdhbWVzXCI+SWQtZ2FtZToge2dhbWVzW3Jldmlldy5pZF9nYW1lXSB8fCByZXZpZXcuaWRfZ2FtZX08L2gyPlxuICAgICAgICAgICAgPHA+UmF0aW5nOiB7cmV2aWV3LnJhdGluZ308L3A+XG4gICAgICAgICAgICA8cD5Db21tZW50OiB7cmV2aWV3LmNvbW1lbnR9PC9wPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkZWxldGUtYnV0dG9uXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlRGVsZXRlKHJldmlldy5pZCl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIERlbGV0ZVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpXG4gICAgICApIDogKFxuICAgICAgICA8cCBjbGFzc05hbWU9XCJuby1yZXZpZXdzXCI+Tm8gcmV2aWV3cyBhdmFpbGFibGUuPC9wPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQWxsUmV2aWV3cyIsInJldmlld3MiLCJzZXRSZXZpZXdzIiwiZ2FtZXMiLCJzZXRHYW1lcyIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJnYW1lc0RhdGEiLCJnYW1lc0RpY3QiLCJmb3JFYWNoIiwiZ2FtZSIsImlkIiwibmFtZSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwiaGFuZGxlRGVsZXRlIiwibWV0aG9kIiwib2siLCJFcnJvciIsInN0YXR1cyIsImZpbHRlciIsInJldmlldyIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwibGVuZ3RoIiwibWFwIiwiaW5kZXgiLCJoMiIsImlkX2dhbWUiLCJwIiwicmF0aW5nIiwiY29tbWVudCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/review/all-review/page.tsx\n"));

/***/ })

});