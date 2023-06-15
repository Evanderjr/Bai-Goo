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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Chat_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Chat.module.css */ \"./pages/components/Chat.module.css\");\n/* harmony import */ var _Chat_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Chat_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction ChatBAIGOO() {\n    _s();\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        // Obter o texto da mensagem do estado ou do evento\n        const messageText = e.target.message.value;\n        try {\n            // Fazer a requisição para a API\n            const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"http://localhost:3001/api/gpt3\", {\n                message: messageText\n            });\n            // Extrair a resposta da API\n            const responseData = response.data;\n            setReceivedMessage(responseData.answer);\n            // Adicionar a mensagem enviada ao estado de mensagens\n            setMessages((prevMessages)=>[\n                    ...prevMessages,\n                    {\n                        text: messageText,\n                        sender: \"user\"\n                    }\n                ]);\n            // Adicionar a resposta da inteligência artificial ao estado de mensagens\n            setMessages((prevMessages)=>[\n                    ...prevMessages,\n                    {\n                        text: responseData.answer,\n                        sender: \"chatbot\"\n                    }\n                ]);\n        } catch (error) {\n            console.error(\"Erro na requisi\\xe7\\xe3o:\", error);\n        // Lidar com erros de requisição, se necessário\n        }\n        // Limpar a área de entrada de texto\n        e.target.message.value = \"\";\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_Chat_module_css__WEBPACK_IMPORTED_MODULE_3___default().chatSection),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: (_Chat_module_css__WEBPACK_IMPORTED_MODULE_3___default().chatTitle),\n                children: \"Chat BAI GOO\"\n            }, void 0, false, {\n                fileName: \"/Users/vasconsellosolliveira/Negotium Rogationem/Bai-Goo/pages/components/ChatBAIGOO.jsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Chat_module_css__WEBPACK_IMPORTED_MODULE_3___default().chatContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Chat_module_css__WEBPACK_IMPORTED_MODULE_3___default().chatMessages),\n                        children: messages.map((message, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\".concat((_Chat_module_css__WEBPACK_IMPORTED_MODULE_3___default().message), \" \").concat((_Chat_module_css__WEBPACK_IMPORTED_MODULE_3___default())[message.sender]),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_Chat_module_css__WEBPACK_IMPORTED_MODULE_3___default().messageContent),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: (_Chat_module_css__WEBPACK_IMPORTED_MODULE_3___default().messageText),\n                                            children: message.text\n                                        }, void 0, false, {\n                                            fileName: \"/Users/vasconsellosolliveira/Negotium Rogationem/Bai-Goo/pages/components/ChatBAIGOO.jsx\",\n                                            lineNumber: 56,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: (_Chat_module_css__WEBPACK_IMPORTED_MODULE_3___default().messageTimestamp),\n                                            children: \"13:30\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/vasconsellosolliveira/Negotium Rogationem/Bai-Goo/pages/components/ChatBAIGOO.jsx\",\n                                            lineNumber: 57,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/vasconsellosolliveira/Negotium Rogationem/Bai-Goo/pages/components/ChatBAIGOO.jsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 15\n                                }, this)\n                            }, index, false, {\n                                fileName: \"/Users/vasconsellosolliveira/Negotium Rogationem/Bai-Goo/pages/components/ChatBAIGOO.jsx\",\n                                lineNumber: 51,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/vasconsellosolliveira/Negotium Rogationem/Bai-Goo/pages/components/ChatBAIGOO.jsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Chat_module_css__WEBPACK_IMPORTED_MODULE_3___default().chatInput),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: handleSubmit,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    name: \"message\",\n                                    placeholder: \"Escreva uma mensagem\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/vasconsellosolliveira/Negotium Rogationem/Bai-Goo/pages/components/ChatBAIGOO.jsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    className: (_Chat_module_css__WEBPACK_IMPORTED_MODULE_3___default().sendMessageButton),\n                                    children: \"Enviar\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/vasconsellosolliveira/Negotium Rogationem/Bai-Goo/pages/components/ChatBAIGOO.jsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/vasconsellosolliveira/Negotium Rogationem/Bai-Goo/pages/components/ChatBAIGOO.jsx\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/vasconsellosolliveira/Negotium Rogationem/Bai-Goo/pages/components/ChatBAIGOO.jsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vasconsellosolliveira/Negotium Rogationem/Bai-Goo/pages/components/ChatBAIGOO.jsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Chat_module_css__WEBPACK_IMPORTED_MODULE_3___default().chatActions),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_Chat_module_css__WEBPACK_IMPORTED_MODULE_3___default().newConversationButton),\n                        children: \"Nova Conversa\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vasconsellosolliveira/Negotium Rogationem/Bai-Goo/pages/components/ChatBAIGOO.jsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_Chat_module_css__WEBPACK_IMPORTED_MODULE_3___default().clearConversationButton),\n                        children: \"Limpar Conversa\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vasconsellosolliveira/Negotium Rogationem/Bai-Goo/pages/components/ChatBAIGOO.jsx\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vasconsellosolliveira/Negotium Rogationem/Bai-Goo/pages/components/ChatBAIGOO.jsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vasconsellosolliveira/Negotium Rogationem/Bai-Goo/pages/components/ChatBAIGOO.jsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n}\n_s(ChatBAIGOO, \"dxxfFX7fiXmC0h9Fk+B7I5VonqM=\");\n_c = ChatBAIGOO;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatBAIGOO);\nvar _c;\n$RefreshReg$(_c, \"ChatBAIGOO\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL0NoYXRCQUlHT08uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBd0M7QUFDRDtBQUNiO0FBRTFCLFNBQVNJOztJQUNQLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTCwrQ0FBUUEsQ0FBQyxFQUFFO0lBRTNDLE1BQU1NLGVBQWUsT0FBT0M7UUFDMUJBLEVBQUVDO1FBRUYsbURBQW1EO1FBQ25ELE1BQU1DLGNBQWNGLEVBQUVHLE9BQU9DLFFBQVFDO1FBRXJDLElBQUk7WUFDRixnQ0FBZ0M7WUFDaEMsTUFBTUMsV0FBVyxNQUFNWCxrREFBVVksQ0FBQyxrQ0FBa0M7Z0JBQ2xFSCxTQUFTRjtZQUNYO1lBRUEsNEJBQTRCO1lBQzVCLE1BQU1NLGVBQWVGLFNBQVNHO1lBQzlCQyxtQkFBbUJGLGFBQWFHO1lBRWhDLHNEQUFzRDtZQUN0RGIsWUFBWSxDQUFDYyxlQUFpQjt1QkFDekJBO29CQUNIO3dCQUFFQyxNQUFNWDt3QkFBYVksUUFBUTtvQkFBTztpQkFDckM7WUFFRCx5RUFBeUU7WUFDekVoQixZQUFZLENBQUNjLGVBQWlCO3VCQUN6QkE7b0JBQ0g7d0JBQUVDLE1BQU1MLGFBQWFHO3dCQUFRRyxRQUFRO29CQUFVO2lCQUNoRDtRQUVILEVBQUUsT0FBT0MsT0FBTztZQUNkQyxRQUFRRCxNQUFNLDZCQUF1QkE7UUFDckMsK0NBQStDO1FBQ2pEO1FBRUEsb0NBQW9DO1FBQ3BDZixFQUFFRyxPQUFPQyxRQUFRQyxRQUFRO0lBQzNCO0lBRUEscUJBQ0UsOERBQUNZO1FBQVFDLFdBQVd4QixxRUFBa0J5Qjs7MEJBQ3BDLDhEQUFDQztnQkFBR0YsV0FBV3hCLG1FQUFnQjJCOzBCQUFFOzs7Ozs7MEJBQ2pDLDhEQUFDQztnQkFBSUosV0FBV3hCLHVFQUFvQjZCOztrQ0FDbEMsOERBQUNEO3dCQUFJSixXQUFXeEIsc0VBQW1COEI7a0NBQ2hDM0IsU0FBUzRCLElBQUksQ0FBQ3JCLFNBQVNzQixzQkFDdEIsOERBQUNKO2dDQUVDSixXQUFXLEdBQXFCeEIsT0FBbEJBLGlFQUFjVSxFQUFDLEtBQTBCLE9BQXZCVix5REFBTSxDQUFDVSxRQUFRVSxPQUFPOzBDQUV0RCw0RUFBQ1E7b0NBQUlKLFdBQVd4Qix3RUFBcUJpQzs7c0RBQ25DLDhEQUFDQzs0Q0FBRVYsV0FBV3hCLHFFQUFrQlE7c0RBQUdFLFFBQVFTOzs7Ozs7c0RBQzNDLDhEQUFDZ0I7NENBQUtYLFdBQVd4QiwwRUFBdUJvQztzREFBRTs7Ozs7Ozs7Ozs7OytCQUx2Q0o7Ozs7Ozs7Ozs7a0NBVVgsOERBQUNKO3dCQUFJSixXQUFXeEIsbUVBQWdCcUM7a0NBQzlCLDRFQUFDQzs0QkFBS0MsVUFBVWxDOzs4Q0FDZCw4REFBQ21DO29DQUFNQyxNQUFLO29DQUFPQyxNQUFLO29DQUFVQyxhQUFZOzs7Ozs7OENBQzlDLDhEQUFDQztvQ0FBT0gsTUFBSztvQ0FBU2pCLFdBQVd4QiwyRUFBd0I2Qzs4Q0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSWpFLDhEQUFDakI7Z0JBQUlKLFdBQVd4QixxRUFBa0I4Qzs7a0NBQ2hDLDhEQUFDRjt3QkFBT3BCLFdBQVd4QiwrRUFBNEIrQztrQ0FBRTs7Ozs7O2tDQUNqRCw4REFBQ0g7d0JBQU9wQixXQUFXeEIsaUZBQThCZ0Q7a0NBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUkzRDtHQXRFUzlDO0tBQUFBO0FBd0VULCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvQ2hhdEJBSUdPTy5qc3g/YTU5ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQ2hhdC5tb2R1bGUuY3NzJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmZ1bmN0aW9uIENoYXRCQUlHT08oKSB7XG4gIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgLy8gT2J0ZXIgbyB0ZXh0byBkYSBtZW5zYWdlbSBkbyBlc3RhZG8gb3UgZG8gZXZlbnRvXG4gICAgY29uc3QgbWVzc2FnZVRleHQgPSBlLnRhcmdldC5tZXNzYWdlLnZhbHVlO1xuXG4gICAgdHJ5IHtcbiAgICAgIC8vIEZhemVyIGEgcmVxdWlzacOnw6NvIHBhcmEgYSBBUElcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS9ncHQzJywge1xuICAgICAgICBtZXNzYWdlOiBtZXNzYWdlVGV4dCxcbiAgICAgIH0pO1xuXG4gICAgICAvLyBFeHRyYWlyIGEgcmVzcG9zdGEgZGEgQVBJXG4gICAgICBjb25zdCByZXNwb25zZURhdGEgPSByZXNwb25zZS5kYXRhO1xuICAgICAgc2V0UmVjZWl2ZWRNZXNzYWdlKHJlc3BvbnNlRGF0YS5hbnN3ZXIpO1xuICAgICAgXG4gICAgICAvLyBBZGljaW9uYXIgYSBtZW5zYWdlbSBlbnZpYWRhIGFvIGVzdGFkbyBkZSBtZW5zYWdlbnNcbiAgICAgIHNldE1lc3NhZ2VzKChwcmV2TWVzc2FnZXMpID0+IFtcbiAgICAgICAgLi4ucHJldk1lc3NhZ2VzLFxuICAgICAgICB7IHRleHQ6IG1lc3NhZ2VUZXh0LCBzZW5kZXI6ICd1c2VyJyB9LFxuICAgICAgXSk7XG5cbiAgICAgIC8vIEFkaWNpb25hciBhIHJlc3Bvc3RhIGRhIGludGVsaWfDqm5jaWEgYXJ0aWZpY2lhbCBhbyBlc3RhZG8gZGUgbWVuc2FnZW5zXG4gICAgICBzZXRNZXNzYWdlcygocHJldk1lc3NhZ2VzKSA9PiBbXG4gICAgICAgIC4uLnByZXZNZXNzYWdlcyxcbiAgICAgICAgeyB0ZXh0OiByZXNwb25zZURhdGEuYW5zd2VyLCBzZW5kZXI6ICdjaGF0Ym90JyB9LFxuICAgICAgXSk7XG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJybyBuYSByZXF1aXNpw6fDo286JywgZXJyb3IpO1xuICAgICAgLy8gTGlkYXIgY29tIGVycm9zIGRlIHJlcXVpc2nDp8Ojbywgc2UgbmVjZXNzw6FyaW9cbiAgICB9XG5cbiAgICAvLyBMaW1wYXIgYSDDoXJlYSBkZSBlbnRyYWRhIGRlIHRleHRvXG4gICAgZS50YXJnZXQubWVzc2FnZS52YWx1ZSA9ICcnO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuY2hhdFNlY3Rpb259PlxuICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLmNoYXRUaXRsZX0+Q2hhdCBCQUkgR09PPC9oMj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hhdENvbnRhaW5lcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hhdE1lc3NhZ2VzfT5cbiAgICAgICAgICB7bWVzc2FnZXMubWFwKChtZXNzYWdlLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5tZXNzYWdlfSAke3N0eWxlc1ttZXNzYWdlLnNlbmRlcl19YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZXNzYWdlQ29udGVudH0+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMubWVzc2FnZVRleHR9PnttZXNzYWdlLnRleHR9PC9wPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLm1lc3NhZ2VUaW1lc3RhbXB9PjEzOjMwPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGF0SW5wdXR9PlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm1lc3NhZ2VcIiBwbGFjZWhvbGRlcj1cIkVzY3JldmEgdW1hIG1lbnNhZ2VtXCIgLz5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT17c3R5bGVzLnNlbmRNZXNzYWdlQnV0dG9ufT5FbnZpYXI8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYXRBY3Rpb25zfT5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5uZXdDb252ZXJzYXRpb25CdXR0b259Pk5vdmEgQ29udmVyc2E8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5jbGVhckNvbnZlcnNhdGlvbkJ1dHRvbn0+TGltcGFyIENvbnZlcnNhPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYXRCQUlHT087XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsImF4aW9zIiwiQ2hhdEJBSUdPTyIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJtZXNzYWdlVGV4dCIsInRhcmdldCIsIm1lc3NhZ2UiLCJ2YWx1ZSIsInJlc3BvbnNlIiwicG9zdCIsInJlc3BvbnNlRGF0YSIsImRhdGEiLCJzZXRSZWNlaXZlZE1lc3NhZ2UiLCJhbnN3ZXIiLCJwcmV2TWVzc2FnZXMiLCJ0ZXh0Iiwic2VuZGVyIiwiZXJyb3IiLCJjb25zb2xlIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImNoYXRTZWN0aW9uIiwiaDIiLCJjaGF0VGl0bGUiLCJkaXYiLCJjaGF0Q29udGFpbmVyIiwiY2hhdE1lc3NhZ2VzIiwibWFwIiwiaW5kZXgiLCJtZXNzYWdlQ29udGVudCIsInAiLCJzcGFuIiwibWVzc2FnZVRpbWVzdGFtcCIsImNoYXRJbnB1dCIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsInNlbmRNZXNzYWdlQnV0dG9uIiwiY2hhdEFjdGlvbnMiLCJuZXdDb252ZXJzYXRpb25CdXR0b24iLCJjbGVhckNvbnZlcnNhdGlvbkJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/ChatBAIGOO.jsx\n"));

/***/ })

});