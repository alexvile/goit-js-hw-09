var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var r=o("iQIUW");const l=document.querySelector("[name=delay]"),i=document.querySelector("[name=step]"),u=document.querySelector("[name=amount]"),c=document.querySelector("form"),a=document.querySelector("[type=submit]");let d=0,s=0,f=0;c.addEventListener("input",(function(e){d=l.value,s=i.value,f=u.value})),a.addEventListener("click",(function(e){e.preventDefault(),function(e,n,t){let o=0;const l=Date.now();setTimeout((()=>{const e=setInterval((()=>{o+=1,o>t?clearInterval(e):function(e,n){const t=Math.random()>.3;return new Promise(((o,r)=>{t?o(`Fulfilled promise ${e} in ${Date.now()-n}ms`):r(`Rejected promise ${e} in ${Date.now()-n}ms`)}))}(o,l).then((e=>{r.Notify.success(e),console.log(e)})).catch((e=>{r.Notify.failure(e),console.log(e)}))}),n)}),e)}(d,s,f)}));
//# sourceMappingURL=03-promises.330e354d.js.map
