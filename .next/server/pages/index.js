(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 312:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Home_container__vxf_Q",
	"header": "Home_header__34qQ8",
	"logo": "Home_logo__31a4M",
	"navbar": "Home_navbar__RKbus",
	"main": "Home_main__oTENP",
	"section": "Home_section__O40f1",
	"h1": "Home_h1__gVClU",
	"h2": "Home_h2__8sqzq",
	"p": "Home_p__uCnl9",
	"li": "Home_li__ern4h",
	"sectionTitle": "Home_sectionTitle__xWFAE",
	"sectionDescription": "Home_sectionDescription__XZrXA",
	"text-center": "Home_text-center__kWdUR",
	"description": "Home_description__gAjaq",
	"center": "Home_center__Diegy",
	"title": "Home_title__sxVLJ",
	"footer": "Home_footer__w3jij",
	"svg-image": "Home_svg-image__BEphL",
	"spin": "Home_spin__9HnDm",
	"body": "Home_body__xo8M2",
	"button1": "Home_button1__o_wbI",
	"button2": "Home_button2__Qe_kE"
};


/***/ }),

/***/ 150:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ pages)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(893);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./pages/styles/Home.module.css
var Home_module = __webpack_require__(312);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
// EXTERNAL MODULE: ./pages/components/ChatBAIGOO.jsx
var ChatBAIGOO = __webpack_require__(845);
;// CONCATENATED MODULE: ./pages/index.tsx




const Home = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (Home_module_default()).container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("title", {
                        children: "P\xe1gina Inicial - BAI GOO"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "description",
                        content: "P\xe1gina Inicial - BAI GOO"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("header", {
                className: (Home_module_default()).header,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: (Home_module_default()).logoContainer,
                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                            src: "/logo.png",
                            alt: "Logo",
                            className: (Home_module_default()).logo
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: (Home_module_default()).buttonsContainer,
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                className: (Home_module_default()).button1,
                                children: "Abertura de conta"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("button", {
                                className: (Home_module_default()).button2,
                                children: "Perfil"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("main", {
                className: (Home_module_default()).main,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                        className: (Home_module_default()).section,
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                className: (Home_module_default()).sectionTitle,
                                children: "Bem-vindo ao BAI GOO"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                className: (Home_module_default()).sectionDescription,
                                children: "Aqui voc\xea encontrar\xe1 conselhos de cr\xe9dito banc\xe1rio inteligentes."
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(ChatBAIGOO/* default */.Z, {})
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("footer", {
                className: (Home_module_default()).footer,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: (Home_module_default()).footerContent,
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                            className: (Home_module_default()).footerText,
                            children: "\xa9 2023 BAI GOO. Todos os direitos reservados."
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                            className: (Home_module_default()).footerText,
                            children: "Rua XPTO, Luanda, Angola"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const pages = (Home);

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader.js?page=%2F&absolutePagePath=private-next-pages%2Findex.tsx&preferredRegion=!

        // Next.js Route Loader
        
        
    

/***/ }),

/***/ 258:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,845], () => (__webpack_exec__(150)));
module.exports = __webpack_exports__;

})();