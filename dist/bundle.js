!function(e,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports.corsByPassLib=o():e.corsByPassLib=o()}(self,(()=>(()=>{"use strict";var e={d:(o,t)=>{for(var r in t)e.o(t,r)&&!e.o(o,r)&&Object.defineProperty(o,r,{enumerable:!0,get:t[r]})},o:(e,o)=>Object.prototype.hasOwnProperty.call(e,o),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},o={};function t(){"serviceWorker"in navigator&&navigator.serviceWorker.register("/sw.js").then((function(e){console.log("Service Worker registered with scope:",e.scope)})).catch((function(e){console.log("Service Worker registration failed:",e)}));var e=window.fetch;window.fetch=function(o){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("string"==typeof o&&o.startsWith("http")){var r=new URL(o);o="/proxy/".concat(r.href)}return e(o,t)}}return e.r(o),e.d(o,{initialize:()=>t}),o})()));