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

/***/ "./pages/components/ChatBAIGOO.jsx":
/*!*****************************************!*\
  !*** ./pages/components/ChatBAIGOO.jsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Chat_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Chat.module.css */ \"./pages/components/Chat.module.css\");\n/* harmony import */ var _Chat_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Chat_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction ChatBAIGOO() {\n    _s();\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        // Obter o texto da mensagem do estado ou do evento\n        const messageText = e.target.message.value;\n        try {\n            // Fazer a requisição para a API\n            const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"http://localhost:3001/api/gpt3\", {\n                message: messageText\n            });\n            // Extrair a resposta da API\n            const responseData = response.data.answer.content;\n            console.log(responseData);\n            // Adicionar a mensagem enviada ao estado de mensagens\n            setMessages((prevMessages)=>[\n                    ...prevMessages,\n                    {\n                        text: messageText,\n                        sender: \"user\"\n                    }\n                ]);\n            // Adicionar a resposta da inteligência artificial ao estado de mensagens\n            setMessages((prevMessages)=>[\n                    ...prevMessages,\n                    {\n                        text: responseData,\n                        sender: \"chatbot\"\n                    }\n                ]);\n        } catch (error) {\n            console.error(\"Erro na requisi\\xe7\\xe3o:\", error);\n        // Lidar com erros de requisição, se necessário\n        }\n        // Limpar a área de entrada de texto\n        e.target.message.value = \"\";\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_Chat_module_css__WEBPACK_IMPORTED_MODULE_3___default().chatSection),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: (_Chat_module_css__WEBPACK_IMPORTED_MODULE_3___default().chatTitle),\n                children: \"Chat BAI GOO\"\n            }, void 0, false, {\n                fileName: \"/Users/vasconsellosolliveira/Negotium Rogationem/Bai-Goo/pages/components/ChatBAIGOO.jsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Chat_module_css__WEBPACK_IMPORTED_MODULE_3___default().chatContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Chat_module_css__WEBPACK_IMPORTED_MODULE_3___default().chatMessages),\n                        children: messages.map((message, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\".concat((_Chat_module_css__WEBPACK_IMPORTED_MODULE_3___default().message), \" \").concat((_Chat_module_css__WEBPACK_IMPORTED_MODULE_3___default())[message.sender]),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_Chat_module_css__WEBPACK_IMPORTED_MODULE_3___default().messageContent),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: (_Chat_module_css__WEBPACK_IMPORTED_MODULE_3___default().messageText),\n                                            children: message.text\n                                        }, void 0, false, {\n                                            fileName: \"/Users/vasconsellosolliveira/Negotium Rogationem/Bai-Goo/pages/components/ChatBAIGOO.jsx\",\n                                            lineNumber: 56,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: (_Chat_module_css__WEBPACK_IMPORTED_MODULE_3___default().messageTimestamp),\n                                            children: \"13:30\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/vasconsellosolliveira/Negotium Rogationem/Bai-Goo/pages/components/ChatBAIGOO.jsx\",\n                                            lineNumber: 57,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/vasconsellosolliveira/Negotium Rogationem/Bai-Goo/pages/components/ChatBAIGOO.jsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 15\n                                }, this)\n                            }, index, false, {\n                                fileName: \"/Users/vasconsellosolliveira/Negotium Rogationem/Bai-Goo/pages/components/ChatBAIGOO.jsx\",\n                                lineNumber: 51,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/vasconsellosolliveira/Negotium Rogationem/Bai-Goo/pages/components/ChatBAIGOO.jsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Chat_module_css__WEBPACK_IMPORTED_MODULE_3___default().chatInput),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: handleSubmit,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    name: \"message\",\n                                    placeholder: \"Escreva uma mensagem\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/vasconsellosolliveira/Negotium Rogationem/Bai-Goo/pages/components/ChatBAIGOO.jsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    className: (_Chat_module_css__WEBPACK_IMPORTED_MODULE_3___default().sendMessageButton),\n                                    children: \"Enviar\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/vasconsellosolliveira/Negotium Rogationem/Bai-Goo/pages/components/ChatBAIGOO.jsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/vasconsellosolliveira/Negotium Rogationem/Bai-Goo/pages/components/ChatBAIGOO.jsx\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/vasconsellosolliveira/Negotium Rogationem/Bai-Goo/pages/components/ChatBAIGOO.jsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vasconsellosolliveira/Negotium Rogationem/Bai-Goo/pages/components/ChatBAIGOO.jsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Chat_module_css__WEBPACK_IMPORTED_MODULE_3___default().chatActions),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_Chat_module_css__WEBPACK_IMPORTED_MODULE_3___default().newConversationButton),\n                        children: \"Nova Conversa\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vasconsellosolliveira/Negotium Rogationem/Bai-Goo/pages/components/ChatBAIGOO.jsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_Chat_module_css__WEBPACK_IMPORTED_MODULE_3___default().clearConversationButton),\n                        children: \"Limpar Conversa\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vasconsellosolliveira/Negotium Rogationem/Bai-Goo/pages/components/ChatBAIGOO.jsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vasconsellosolliveira/Negotium Rogationem/Bai-Goo/pages/components/ChatBAIGOO.jsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vasconsellosolliveira/Negotium Rogationem/Bai-Goo/pages/components/ChatBAIGOO.jsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n}\n_s(ChatBAIGOO, \"dxxfFX7fiXmC0h9Fk+B7I5VonqM=\");\n_c = ChatBAIGOO;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatBAIGOO);\nvar _c;\n$RefreshReg$(_c, \"ChatBAIGOO\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL0NoYXRCQUlHT08uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBd0M7QUFDRDtBQUNiO0FBRTFCLFNBQVNJOztJQUNQLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTCwrQ0FBUUEsQ0FBQyxFQUFFO0lBRTNDLE1BQU1NLGVBQWUsT0FBT0M7UUFDMUJBLEVBQUVDO1FBRUYsbURBQW1EO1FBQ25ELE1BQU1DLGNBQWNGLEVBQUVHLE9BQU9DLFFBQVFDO1FBRXJDLElBQUk7WUFDRixnQ0FBZ0M7WUFDaEMsTUFBTUMsV0FBVyxNQUFNWCxrREFBVVksQ0FBQyxrQ0FBa0M7Z0JBQ2xFSCxTQUFTRjtZQUNYO1lBRUEsNEJBQTRCO1lBQzVCLE1BQU1NLGVBQWVGLFNBQVNHLEtBQUtDLE9BQU9DO1lBQzFDQyxRQUFRQyxJQUFJTDtZQUVaLHNEQUFzRDtZQUN0RFYsWUFBWSxDQUFDZ0IsZUFBaUI7dUJBQ3pCQTtvQkFDSDt3QkFBRUMsTUFBTWI7d0JBQWFjLFFBQVE7b0JBQU87aUJBQ3JDO1lBRUQseUVBQXlFO1lBQ3pFbEIsWUFBWSxDQUFDZ0IsZUFBaUI7dUJBQ3pCQTtvQkFDSDt3QkFBRUMsTUFBTVA7d0JBQWNRLFFBQVE7b0JBQVU7aUJBQ3pDO1FBRUgsRUFBRSxPQUFPQyxPQUFPO1lBQ2RMLFFBQVFLLE1BQU0sNkJBQXVCQTtRQUNyQywrQ0FBK0M7UUFDakQ7UUFFQSxvQ0FBb0M7UUFDcENqQixFQUFFRyxPQUFPQyxRQUFRQyxRQUFRO0lBQzNCO0lBRUEscUJBQ0UsOERBQUNhO1FBQVFDLFdBQVd6QixxRUFBa0IwQjs7MEJBQ3BDLDhEQUFDQztnQkFBR0YsV0FBV3pCLG1FQUFnQjRCOzBCQUFFOzs7Ozs7MEJBQ2pDLDhEQUFDQztnQkFBSUosV0FBV3pCLHVFQUFvQjhCOztrQ0FDbEMsOERBQUNEO3dCQUFJSixXQUFXekIsc0VBQW1CK0I7a0NBQ2hDNUIsU0FBUzZCLElBQUksQ0FBQ3RCLFNBQVN1QixzQkFDdEIsOERBQUNKO2dDQUVDSixXQUFXLEdBQXFCekIsT0FBbEJBLGlFQUFjVSxFQUFDLEtBQTBCLE9BQXZCVix5REFBTSxDQUFDVSxRQUFRWSxPQUFPOzBDQUV0RCw0RUFBQ087b0NBQUlKLFdBQVd6Qix3RUFBcUJrQzs7c0RBQ25DLDhEQUFDQzs0Q0FBRVYsV0FBV3pCLHFFQUFrQlE7c0RBQUdFLFFBQVFXOzs7Ozs7c0RBQzNDLDhEQUFDZTs0Q0FBS1gsV0FBV3pCLDBFQUF1QnFDO3NEQUFFOzs7Ozs7Ozs7Ozs7K0JBTHZDSjs7Ozs7Ozs7OztrQ0FZWCw4REFBQ0o7d0JBQUlKLFdBQVd6QixtRUFBZ0JzQztrQ0FDOUIsNEVBQUNDOzRCQUFLQyxVQUFVbkM7OzhDQUNkLDhEQUFDb0M7b0NBQU1DLE1BQUs7b0NBQU9DLE1BQUs7b0NBQVVDLGFBQVk7Ozs7Ozs4Q0FDOUMsOERBQUNDO29DQUFPSCxNQUFLO29DQUFTakIsV0FBV3pCLDJFQUF3QjhDOzhDQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFJakUsOERBQUNqQjtnQkFBSUosV0FBV3pCLHFFQUFrQitDOztrQ0FDaEMsOERBQUNGO3dCQUFPcEIsV0FBV3pCLCtFQUE0QmdEO2tDQUFFOzs7Ozs7a0NBQ2pELDhEQUFDSDt3QkFBT3BCLFdBQVd6QixpRkFBOEJpRDtrQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTNEO0dBeEVTL0M7S0FBQUE7QUEwRVQsK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9DaGF0QkFJR09PLmpzeD9hNTllIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9DaGF0Lm1vZHVsZS5jc3MnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuZnVuY3Rpb24gQ2hhdEJBSUdPTygpIHtcbiAgY29uc3QgW21lc3NhZ2VzLCBzZXRNZXNzYWdlc10gPSB1c2VTdGF0ZShbXSk7XG4gIFxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIC8vIE9idGVyIG8gdGV4dG8gZGEgbWVuc2FnZW0gZG8gZXN0YWRvIG91IGRvIGV2ZW50b1xuICAgIGNvbnN0IG1lc3NhZ2VUZXh0ID0gZS50YXJnZXQubWVzc2FnZS52YWx1ZTtcblxuICAgIHRyeSB7XG4gICAgICAvLyBGYXplciBhIHJlcXVpc2nDp8OjbyBwYXJhIGEgQVBJXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvZ3B0MycsIHtcbiAgICAgICAgbWVzc2FnZTogbWVzc2FnZVRleHQsXG4gICAgICB9KTtcblxuICAgICAgLy8gRXh0cmFpciBhIHJlc3Bvc3RhIGRhIEFQSVxuICAgICAgY29uc3QgcmVzcG9uc2VEYXRhID0gcmVzcG9uc2UuZGF0YS5hbnN3ZXIuY29udGVudDtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlRGF0YSk7XG5cbiAgICAgIC8vIEFkaWNpb25hciBhIG1lbnNhZ2VtIGVudmlhZGEgYW8gZXN0YWRvIGRlIG1lbnNhZ2Vuc1xuICAgICAgc2V0TWVzc2FnZXMoKHByZXZNZXNzYWdlcykgPT4gW1xuICAgICAgICAuLi5wcmV2TWVzc2FnZXMsXG4gICAgICAgIHsgdGV4dDogbWVzc2FnZVRleHQsIHNlbmRlcjogJ3VzZXInIH0sXG4gICAgICBdKTtcblxuICAgICAgLy8gQWRpY2lvbmFyIGEgcmVzcG9zdGEgZGEgaW50ZWxpZ8OqbmNpYSBhcnRpZmljaWFsIGFvIGVzdGFkbyBkZSBtZW5zYWdlbnNcbiAgICAgIHNldE1lc3NhZ2VzKChwcmV2TWVzc2FnZXMpID0+IFtcbiAgICAgICAgLi4ucHJldk1lc3NhZ2VzLFxuICAgICAgICB7IHRleHQ6IHJlc3BvbnNlRGF0YSwgc2VuZGVyOiAnY2hhdGJvdCcgfSxcbiAgICAgIF0pO1xuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gbmEgcmVxdWlzacOnw6NvOicsIGVycm9yKTtcbiAgICAgIC8vIExpZGFyIGNvbSBlcnJvcyBkZSByZXF1aXNpw6fDo28sIHNlIG5lY2Vzc8OhcmlvXG4gICAgfVxuXG4gICAgLy8gTGltcGFyIGEgw6FyZWEgZGUgZW50cmFkYSBkZSB0ZXh0b1xuICAgIGUudGFyZ2V0Lm1lc3NhZ2UudmFsdWUgPSAnJztcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmNoYXRTZWN0aW9ufT5cbiAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5jaGF0VGl0bGV9PkNoYXQgQkFJIEdPTzwvaDI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYXRDb250YWluZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYXRNZXNzYWdlc30+XG4gICAgICAgICAge21lc3NhZ2VzLm1hcCgobWVzc2FnZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMubWVzc2FnZX0gJHtzdHlsZXNbbWVzc2FnZS5zZW5kZXJdfWB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVzc2FnZUNvbnRlbnR9PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLm1lc3NhZ2VUZXh0fT57bWVzc2FnZS50ZXh0fTwvcD5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5tZXNzYWdlVGltZXN0YW1wfT4xMzozMDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cblxuICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGF0SW5wdXR9PlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm1lc3NhZ2VcIiBwbGFjZWhvbGRlcj1cIkVzY3JldmEgdW1hIG1lbnNhZ2VtXCIgLz5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT17c3R5bGVzLnNlbmRNZXNzYWdlQnV0dG9ufT5FbnZpYXI8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYXRBY3Rpb25zfT5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5uZXdDb252ZXJzYXRpb25CdXR0b259Pk5vdmEgQ29udmVyc2E8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5jbGVhckNvbnZlcnNhdGlvbkJ1dHRvbn0+TGltcGFyIENvbnZlcnNhPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYXRCQUlHT087XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsImF4aW9zIiwiQ2hhdEJBSUdPTyIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJtZXNzYWdlVGV4dCIsInRhcmdldCIsIm1lc3NhZ2UiLCJ2YWx1ZSIsInJlc3BvbnNlIiwicG9zdCIsInJlc3BvbnNlRGF0YSIsImRhdGEiLCJhbnN3ZXIiLCJjb250ZW50IiwiY29uc29sZSIsImxvZyIsInByZXZNZXNzYWdlcyIsInRleHQiLCJzZW5kZXIiLCJlcnJvciIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJjaGF0U2VjdGlvbiIsImgyIiwiY2hhdFRpdGxlIiwiZGl2IiwiY2hhdENvbnRhaW5lciIsImNoYXRNZXNzYWdlcyIsIm1hcCIsImluZGV4IiwibWVzc2FnZUNvbnRlbnQiLCJwIiwic3BhbiIsIm1lc3NhZ2VUaW1lc3RhbXAiLCJjaGF0SW5wdXQiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJzZW5kTWVzc2FnZUJ1dHRvbiIsImNoYXRBY3Rpb25zIiwibmV3Q29udmVyc2F0aW9uQnV0dG9uIiwiY2xlYXJDb252ZXJzYXRpb25CdXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/ChatBAIGOO.jsx\n"));

/***/ })

});