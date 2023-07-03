exports.id = 733;
exports.ids = [733];
exports.modules = {

/***/ 650:
/***/ ((module) => {

// Exports
module.exports = {
	"chatSection": "Chat_chatSection__k4Atp",
	"chatTitle": "Chat_chatTitle__yt5Ny",
	"chatContainer": "Chat_chatContainer__k_FA1",
	"chatMessages": "Chat_chatMessages__rTFtY",
	"message": "Chat_message__iHaz1",
	"messageContent": "Chat_messageContent__yjnHZ",
	"messageText": "Chat_messageText__zB1qr",
	"messageTimestamp": "Chat_messageTimestamp__93cCk",
	"chatInput": "Chat_chatInput__Peydo",
	"chatActions": "Chat_chatActions__Jyw53",
	"newConversationButton": "Chat_newConversationButton__tBG7S",
	"clearConversationButton": "Chat_clearConversationButton__gKvg_",
	"user": "Chat_user__yLWQQ",
	"fadeIn": "Chat_fadeIn__hkhQj"
};


/***/ }),

/***/ 733:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Chat_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(650);
/* harmony import */ var _Chat_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Chat_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);
axios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function ChatBAIGOO() {
    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        // Obter o texto da mensagem do estado ou do evento
        const messageText = e.target.message.value;
        try {
            // Fazer a requisição para a API
            const response = await axios__WEBPACK_IMPORTED_MODULE_2__["default"].post("http://localhost:3001/api/gpt3", {
                message: messageText
            });
            // Extrair a resposta da API
            const responseData = response.data.answer.content;
            console.log(responseData);
            // Adicionar a mensagem enviada ao estado de mensagens
            setMessages((prevMessages)=>[
                    ...prevMessages,
                    {
                        text: messageText,
                        sender: "user"
                    }
                ]);
            // Adicionar a resposta da inteligência artificial ao estado de mensagens
            setMessages((prevMessages)=>[
                    ...prevMessages,
                    {
                        text: responseData,
                        sender: "chatbot"
                    }
                ]);
        } catch (error) {
            console.error("Erro na requisi\xe7\xe3o:", error);
        // Lidar com erros de requisição, se necessário
        }
        // Limpar a área de entrada de texto
        e.target.message.value = "";
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: (_Chat_module_css__WEBPACK_IMPORTED_MODULE_3___default().chatSection),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: (_Chat_module_css__WEBPACK_IMPORTED_MODULE_3___default().chatTitle),
                children: "Chat BAI GOO"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_Chat_module_css__WEBPACK_IMPORTED_MODULE_3___default().chatContainer),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_Chat_module_css__WEBPACK_IMPORTED_MODULE_3___default().chatMessages),
                        children: messages.map((message, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `${(_Chat_module_css__WEBPACK_IMPORTED_MODULE_3___default().message)} ${(_Chat_module_css__WEBPACK_IMPORTED_MODULE_3___default())[message.sender]}`,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_Chat_module_css__WEBPACK_IMPORTED_MODULE_3___default().messageContent),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: (_Chat_module_css__WEBPACK_IMPORTED_MODULE_3___default().messageText),
                                            children: message.text
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: (_Chat_module_css__WEBPACK_IMPORTED_MODULE_3___default().messageTimestamp),
                                            children: "13:30"
                                        })
                                    ]
                                })
                            }, index))
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_Chat_module_css__WEBPACK_IMPORTED_MODULE_3___default().chatInput),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                            onSubmit: handleSubmit,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "text",
                                    name: "message",
                                    placeholder: "Escreva uma mensagem"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    type: "submit",
                                    className: (_Chat_module_css__WEBPACK_IMPORTED_MODULE_3___default().sendMessageButton),
                                    children: "Enviar"
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_Chat_module_css__WEBPACK_IMPORTED_MODULE_3___default().chatActions),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: (_Chat_module_css__WEBPACK_IMPORTED_MODULE_3___default().newConversationButton),
                        children: "Nova Conversa"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: (_Chat_module_css__WEBPACK_IMPORTED_MODULE_3___default().clearConversationButton),
                        children: "Limpar Conversa"
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatBAIGOO);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;