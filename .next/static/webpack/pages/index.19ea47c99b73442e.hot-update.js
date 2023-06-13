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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Chat_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Chat.module.css */ \"./pages/components/Chat.module.css\");\n/* harmony import */ var _Chat_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Chat_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction ChatBAIGOO() {\n    _s();\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        // Obter o texto da mensagem do estado ou do evento\n        const messageText = e.target.message.value;\n        try {\n            // Fazer a requisição para a API\n            const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"http://localhost:3001/api/gpt3\", {\n                message: messageText\n            });\n            // Extrair a resposta da API\n            const responseData = response.data.content;\n            console.log(responseData);\n            // Adicionar a mensagem enviada ao estado de mensagens\n            setMessages((prevMessages)=>[\n                    ...prevMessages,\n                    {\n                        text: messageText,\n                        sender: \"user\"\n                    }\n                ]);\n            // Adicionar a resposta da inteligência artificial ao estado de mensagens\n            setMessages((prevMessages)=>[\n                    ...prevMessages,\n                    {\n                        text: responseData,\n                        sender: \"chatbot\"\n                    }\n                ]);\n        } catch (error) {\n            console.error(\"Erro na requisi\\xe7\\xe3o:\", error);\n        // Lidar com erros de requisição, se necessário\n        }\n        // Limpar a área de entrada de texto\n        e.target.message.value = \"\";\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_Chat_module_css__WEBPACK_IMPORTED_MODULE_3___default().chatSection),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: (_Chat_module_css__WEBPACK_IMPORTED_MODULE_3___default().chatTitle),\n                children: \"Chat BAI GOO\"\n            }, void 0, false, {\n                fileName: \"/Users/vasconsellosolliveira/Negotium Rogationem/Bai-Goo/pages/components/ChatBAIGOO.jsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Chat_module_css__WEBPACK_IMPORTED_MODULE_3___default().chatContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Chat_module_css__WEBPACK_IMPORTED_MODULE_3___default().chatMessages),\n                        children: messages.map((message, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\".concat((_Chat_module_css__WEBPACK_IMPORTED_MODULE_3___default().message), \" \").concat((_Chat_module_css__WEBPACK_IMPORTED_MODULE_3___default())[message.sender]),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_Chat_module_css__WEBPACK_IMPORTED_MODULE_3___default().messageContent),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: (_Chat_module_css__WEBPACK_IMPORTED_MODULE_3___default().messageText),\n                                            children: message.text\n                                        }, void 0, false, {\n                                            fileName: \"/Users/vasconsellosolliveira/Negotium Rogationem/Bai-Goo/pages/components/ChatBAIGOO.jsx\",\n                                            lineNumber: 56,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: (_Chat_module_css__WEBPACK_IMPORTED_MODULE_3___default().messageTimestamp),\n                                            children: \"13:30\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/vasconsellosolliveira/Negotium Rogationem/Bai-Goo/pages/components/ChatBAIGOO.jsx\",\n                                            lineNumber: 57,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/vasconsellosolliveira/Negotium Rogationem/Bai-Goo/pages/components/ChatBAIGOO.jsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 15\n                                }, this)\n                            }, index, false, {\n                                fileName: \"/Users/vasconsellosolliveira/Negotium Rogationem/Bai-Goo/pages/components/ChatBAIGOO.jsx\",\n                                lineNumber: 51,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/vasconsellosolliveira/Negotium Rogationem/Bai-Goo/pages/components/ChatBAIGOO.jsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Chat_module_css__WEBPACK_IMPORTED_MODULE_3___default().chatInput),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: handleSubmit,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    name: \"message\",\n                                    placeholder: \"Escreva uma mensagem\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/vasconsellosolliveira/Negotium Rogationem/Bai-Goo/pages/components/ChatBAIGOO.jsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    className: (_Chat_module_css__WEBPACK_IMPORTED_MODULE_3___default().sendMessageButton),\n                                    children: \"Enviar\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/vasconsellosolliveira/Negotium Rogationem/Bai-Goo/pages/components/ChatBAIGOO.jsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/vasconsellosolliveira/Negotium Rogationem/Bai-Goo/pages/components/ChatBAIGOO.jsx\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/vasconsellosolliveira/Negotium Rogationem/Bai-Goo/pages/components/ChatBAIGOO.jsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vasconsellosolliveira/Negotium Rogationem/Bai-Goo/pages/components/ChatBAIGOO.jsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Chat_module_css__WEBPACK_IMPORTED_MODULE_3___default().chatActions),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_Chat_module_css__WEBPACK_IMPORTED_MODULE_3___default().newConversationButton),\n                        children: \"Nova Conversa\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vasconsellosolliveira/Negotium Rogationem/Bai-Goo/pages/components/ChatBAIGOO.jsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_Chat_module_css__WEBPACK_IMPORTED_MODULE_3___default().clearConversationButton),\n                        children: \"Limpar Conversa\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vasconsellosolliveira/Negotium Rogationem/Bai-Goo/pages/components/ChatBAIGOO.jsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vasconsellosolliveira/Negotium Rogationem/Bai-Goo/pages/components/ChatBAIGOO.jsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vasconsellosolliveira/Negotium Rogationem/Bai-Goo/pages/components/ChatBAIGOO.jsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n}\n_s(ChatBAIGOO, \"dxxfFX7fiXmC0h9Fk+B7I5VonqM=\");\n_c = ChatBAIGOO;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatBAIGOO);\nvar _c;\n$RefreshReg$(_c, \"ChatBAIGOO\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL0NoYXRCQUlHT08uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBd0M7QUFDRDtBQUNiO0FBRTFCLFNBQVNJOztJQUNQLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTCwrQ0FBUUEsQ0FBQyxFQUFFO0lBRTNDLE1BQU1NLGVBQWUsT0FBT0M7UUFDMUJBLEVBQUVDO1FBRUYsbURBQW1EO1FBQ25ELE1BQU1DLGNBQWNGLEVBQUVHLE9BQU9DLFFBQVFDO1FBRXJDLElBQUk7WUFDRixnQ0FBZ0M7WUFDaEMsTUFBTUMsV0FBVyxNQUFNWCxrREFBVVksQ0FBQyxrQ0FBa0M7Z0JBQ2xFSCxTQUFTRjtZQUNYO1lBRUEsNEJBQTRCO1lBQzVCLE1BQU1NLGVBQWVGLFNBQVNHLEtBQUtDO1lBQ25DQyxRQUFRQyxJQUFJSjtZQUVaLHNEQUFzRDtZQUN0RFYsWUFBWSxDQUFDZSxlQUFpQjt1QkFDekJBO29CQUNIO3dCQUFFQyxNQUFNWjt3QkFBYWEsUUFBUTtvQkFBTztpQkFDckM7WUFFRCx5RUFBeUU7WUFDekVqQixZQUFZLENBQUNlLGVBQWlCO3VCQUN6QkE7b0JBQ0g7d0JBQUVDLE1BQU1OO3dCQUFjTyxRQUFRO29CQUFVO2lCQUN6QztRQUVILEVBQUUsT0FBT0MsT0FBTztZQUNkTCxRQUFRSyxNQUFNLDZCQUF1QkE7UUFDckMsK0NBQStDO1FBQ2pEO1FBRUEsb0NBQW9DO1FBQ3BDaEIsRUFBRUcsT0FBT0MsUUFBUUMsUUFBUTtJQUMzQjtJQUVBLHFCQUNFLDhEQUFDWTtRQUFRQyxXQUFXeEIscUVBQWtCeUI7OzBCQUNwQyw4REFBQ0M7Z0JBQUdGLFdBQVd4QixtRUFBZ0IyQjswQkFBRTs7Ozs7OzBCQUNqQyw4REFBQ0M7Z0JBQUlKLFdBQVd4Qix1RUFBb0I2Qjs7a0NBQ2xDLDhEQUFDRDt3QkFBSUosV0FBV3hCLHNFQUFtQjhCO2tDQUNoQzNCLFNBQVM0QixJQUFJLENBQUNyQixTQUFTc0Isc0JBQ3RCLDhEQUFDSjtnQ0FFQ0osV0FBVyxHQUFxQnhCLE9BQWxCQSxpRUFBY1UsRUFBQyxLQUEwQixPQUF2QlYseURBQU0sQ0FBQ1UsUUFBUVcsT0FBTzswQ0FFdEQsNEVBQUNPO29DQUFJSixXQUFXeEIsd0VBQXFCaUM7O3NEQUNuQyw4REFBQ0M7NENBQUVWLFdBQVd4QixxRUFBa0JRO3NEQUFHRSxRQUFRVTs7Ozs7O3NEQUMzQyw4REFBQ2U7NENBQUtYLFdBQVd4QiwwRUFBdUJvQztzREFBRTs7Ozs7Ozs7Ozs7OytCQUx2Q0o7Ozs7Ozs7Ozs7a0NBWVgsOERBQUNKO3dCQUFJSixXQUFXeEIsbUVBQWdCcUM7a0NBQzlCLDRFQUFDQzs0QkFBS0MsVUFBVWxDOzs4Q0FDZCw4REFBQ21DO29DQUFNQyxNQUFLO29DQUFPQyxNQUFLO29DQUFVQyxhQUFZOzs7Ozs7OENBQzlDLDhEQUFDQztvQ0FBT0gsTUFBSztvQ0FBU2pCLFdBQVd4QiwyRUFBd0I2Qzs4Q0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSWpFLDhEQUFDakI7Z0JBQUlKLFdBQVd4QixxRUFBa0I4Qzs7a0NBQ2hDLDhEQUFDRjt3QkFBT3BCLFdBQVd4QiwrRUFBNEIrQztrQ0FBRTs7Ozs7O2tDQUNqRCw4REFBQ0g7d0JBQU9wQixXQUFXeEIsaUZBQThCZ0Q7a0NBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUkzRDtHQXhFUzlDO0tBQUFBO0FBMEVULCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvQ2hhdEJBSUdPTy5qc3g/YTU5ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQ2hhdC5tb2R1bGUuY3NzJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmZ1bmN0aW9uIENoYXRCQUlHT08oKSB7XG4gIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgLy8gT2J0ZXIgbyB0ZXh0byBkYSBtZW5zYWdlbSBkbyBlc3RhZG8gb3UgZG8gZXZlbnRvXG4gICAgY29uc3QgbWVzc2FnZVRleHQgPSBlLnRhcmdldC5tZXNzYWdlLnZhbHVlO1xuXG4gICAgdHJ5IHtcbiAgICAgIC8vIEZhemVyIGEgcmVxdWlzacOnw6NvIHBhcmEgYSBBUElcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS9ncHQzJywge1xuICAgICAgICBtZXNzYWdlOiBtZXNzYWdlVGV4dCxcbiAgICAgIH0pO1xuXG4gICAgICAvLyBFeHRyYWlyIGEgcmVzcG9zdGEgZGEgQVBJXG4gICAgICBjb25zdCByZXNwb25zZURhdGEgPSByZXNwb25zZS5kYXRhLmNvbnRlbnQ7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZURhdGEpO1xuXG4gICAgICAvLyBBZGljaW9uYXIgYSBtZW5zYWdlbSBlbnZpYWRhIGFvIGVzdGFkbyBkZSBtZW5zYWdlbnNcbiAgICAgIHNldE1lc3NhZ2VzKChwcmV2TWVzc2FnZXMpID0+IFtcbiAgICAgICAgLi4ucHJldk1lc3NhZ2VzLFxuICAgICAgICB7IHRleHQ6IG1lc3NhZ2VUZXh0LCBzZW5kZXI6ICd1c2VyJyB9LFxuICAgICAgXSk7XG5cbiAgICAgIC8vIEFkaWNpb25hciBhIHJlc3Bvc3RhIGRhIGludGVsaWfDqm5jaWEgYXJ0aWZpY2lhbCBhbyBlc3RhZG8gZGUgbWVuc2FnZW5zXG4gICAgICBzZXRNZXNzYWdlcygocHJldk1lc3NhZ2VzKSA9PiBbXG4gICAgICAgIC4uLnByZXZNZXNzYWdlcyxcbiAgICAgICAgeyB0ZXh0OiByZXNwb25zZURhdGEsIHNlbmRlcjogJ2NoYXRib3QnIH0sXG4gICAgICBdKTtcblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvIG5hIHJlcXVpc2nDp8OjbzonLCBlcnJvcik7XG4gICAgICAvLyBMaWRhciBjb20gZXJyb3MgZGUgcmVxdWlzacOnw6NvLCBzZSBuZWNlc3PDoXJpb1xuICAgIH1cblxuICAgIC8vIExpbXBhciBhIMOhcmVhIGRlIGVudHJhZGEgZGUgdGV4dG9cbiAgICBlLnRhcmdldC5tZXNzYWdlLnZhbHVlID0gJyc7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5jaGF0U2VjdGlvbn0+XG4gICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuY2hhdFRpdGxlfT5DaGF0IEJBSSBHT088L2gyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGF0Q29udGFpbmVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGF0TWVzc2FnZXN9PlxuICAgICAgICAgIHttZXNzYWdlcy5tYXAoKG1lc3NhZ2UsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLm1lc3NhZ2V9ICR7c3R5bGVzW21lc3NhZ2Uuc2VuZGVyXX1gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lc3NhZ2VDb250ZW50fT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5tZXNzYWdlVGV4dH0+e21lc3NhZ2UudGV4dH08L3A+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubWVzc2FnZVRpbWVzdGFtcH0+MTM6MzA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG5cbiAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hhdElucHV0fT5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJtZXNzYWdlXCIgcGxhY2Vob2xkZXI9XCJFc2NyZXZhIHVtYSBtZW5zYWdlbVwiIC8+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9e3N0eWxlcy5zZW5kTWVzc2FnZUJ1dHRvbn0+RW52aWFyPC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGF0QWN0aW9uc30+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMubmV3Q29udmVyc2F0aW9uQnV0dG9ufT5Ob3ZhIENvbnZlcnNhPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuY2xlYXJDb252ZXJzYXRpb25CdXR0b259PkxpbXBhciBDb252ZXJzYTwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDaGF0QkFJR09PO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJheGlvcyIsIkNoYXRCQUlHT08iLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwibWVzc2FnZVRleHQiLCJ0YXJnZXQiLCJtZXNzYWdlIiwidmFsdWUiLCJyZXNwb25zZSIsInBvc3QiLCJyZXNwb25zZURhdGEiLCJkYXRhIiwiY29udGVudCIsImNvbnNvbGUiLCJsb2ciLCJwcmV2TWVzc2FnZXMiLCJ0ZXh0Iiwic2VuZGVyIiwiZXJyb3IiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiY2hhdFNlY3Rpb24iLCJoMiIsImNoYXRUaXRsZSIsImRpdiIsImNoYXRDb250YWluZXIiLCJjaGF0TWVzc2FnZXMiLCJtYXAiLCJpbmRleCIsIm1lc3NhZ2VDb250ZW50IiwicCIsInNwYW4iLCJtZXNzYWdlVGltZXN0YW1wIiwiY2hhdElucHV0IiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwic2VuZE1lc3NhZ2VCdXR0b24iLCJjaGF0QWN0aW9ucyIsIm5ld0NvbnZlcnNhdGlvbkJ1dHRvbiIsImNsZWFyQ29udmVyc2F0aW9uQnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/ChatBAIGOO.jsx\n"));

/***/ })

});