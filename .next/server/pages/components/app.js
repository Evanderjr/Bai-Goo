(() => {
var exports = {};
exports.id = 889;
exports.ids = [889];
exports.modules = {

/***/ 341:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport default from dynamic */ private_next_pages_components_app_js__WEBPACK_IMPORTED_MODULE_0___default.a)
/* harmony export */ });
/* harmony import */ var private_next_pages_components_app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(498);
/* harmony import */ var private_next_pages_components_app_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(private_next_pages_components_app_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in private_next_pages_components_app_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => private_next_pages_components_app_js__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);

        // Next.js Route Loader
        
        
    

/***/ }),

/***/ 498:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

const express = __webpack_require__(860);
const openai = __webpack_require__(118);
const app = express();
const port = 3001; // Altere para a porta desejada
const gpt3ApiKey = "sk -zfg6FMfbKYD7u94cwv6TT3BlbkFJGy 0Gn7JCrwan7n5urVWt"; // Substitua pelo sua chave API do GPT-3
app.use(express.json());
app.post("/api/gpt3", async (req, res)=>{
    const { message  } = req.body;
    // Chame a API do GPT-3 com a mensagem recebida
    const gpt3Response = await openai.Completion.create({
        engine: "text-davinci-003",
        prompt: message,
        max_tokens: 50
    });
    const answer = gpt3Response.choices[0].text.trim();
    res.json({
        answer
    });
});
app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/ChatBAIGOO.jsx");
});
app.listen(port, ()=>{
    console.log(`Servidor rodando em http://localhost:${port}`);
});


/***/ }),

/***/ 860:
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ 118:
/***/ ((module) => {

"use strict";
module.exports = require("openai");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(341));
module.exports = __webpack_exports__;

})();