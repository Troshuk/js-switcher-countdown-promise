function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequirecafb;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},t.parcelRequirecafb=o),o.register("fExtF",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){if(!t.has(e))throw new TypeError("attempted to "+r+" private field on non-instance");return t.get(e)}})),o.register("iaRLo",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}})),o.register("7K24o",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}})),o.register("3LGG3",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){if(t.set)t.set.call(e,r);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=r}}}));var a={};Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,t){var r=i.default(e,t,"get");return l.default(e,r)};var i=u(o("fExtF")),l=u(o("iaRLo"));function u(e){return e&&e.__esModule?e:{default:e}}var d={};Object.defineProperty(d,"__esModule",{value:!0}),d.default=function(e,t,r){f.default(e,t),t.set(e,r)};var s,f=(s=o("7K24o"))&&s.__esModule?s:{default:s};var c={};Object.defineProperty(c,"__esModule",{value:!0}),c.default=function(e,t,r){var n=p.default(e,t,"set");return v.default(e,n,r),r};var p=b(o("fExtF")),v=b(o("3LGG3"));function b(e){return e&&e.__esModule?e:{default:e}}var h={};Object.defineProperty(h,"__esModule",{value:!0}),h.default=function(e,t,r){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return r};var _={};Object.defineProperty(_,"__esModule",{value:!0}),_.default=function(e,t){w.default(e,t),t.add(e)};var w=function(e){return e&&e.__esModule?e:{default:e}}(o("7K24o"));var y={};Object.defineProperty(y,"__esModule",{value:!0}),y.default=function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e};const g={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]"),body:document.querySelector("body")};var M=new WeakMap,x=new WeakMap,S=new WeakSet;function B(){return`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}const O=new class{startSwitcher(){e(a)(this,x)||(e(c)(this,M,setInterval((()=>this.setBackgroundColorFn(e(h)(this,S,B).call(this))),1e3)),e(c)(this,x,!0),this.disabledStartBtnFn(!0))}stopSwitcher(){e(a)(this,x)&&(clearInterval(e(a)(this,M)),e(c)(this,x,!1),this.disabledStartBtnFn(!1))}constructor(t,r){e(_)(this,S),e(d)(this,M,{writable:!0,value:void 0}),e(d)(this,x,{writable:!0,value:!1}),e(y)(this,"setBackgroundColorFn",void 0),e(y)(this,"disabledStartBtnFn",void 0),this.setBackgroundColorFn=r,this.disabledStartBtnFn=t,this.disabledStartBtnFn(!1)}}((function(e){g.startBtn.disabled=e,g.stopBtn.disabled=!e}),(function(e){g.body.style.backgroundColor=e}));g.startBtn.addEventListener("click",O.startSwitcher.bind(O)),g.stopBtn.addEventListener("click",O.stopSwitcher.bind(O));
//# sourceMappingURL=01-color-switcher.826212ca.js.map