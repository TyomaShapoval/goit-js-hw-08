var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},t={},l=e.parcelRequired7c6;null==l&&((l=function(e){if(e in a)return a[e].exports;if(e in t){var l=t[e];delete t[e];var o={id:e,exports:{}};return a[e]=o,l.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,a){t[e]=a},e.parcelRequired7c6=l);var o=l("kEUo3");const r=document.querySelector(".feedback-form"),n=r.querySelector('input[name="email"]'),s=r.querySelector('textarea[name="message"]'),i=JSON.parse(localStorage.getItem("feedback-form-state"));null===i?console.log("bidosya"):(n.value=i.email,s.value=i.message);const m={email:n.value,message:s.value};r.addEventListener("input",(0,o.throttle)((({target:e})=>{"email"===e.name?(m.email=e.value,localStorage.setItem("feedback-form-state",JSON.stringify(m))):"message"===e.name&&(m.message=e.value,localStorage.setItem("feedback-form-state",JSON.stringify(m)))}),500)),r.addEventListener("submit",(e=>{e.preventDefault();const a={email:n.value,message:s.value};console.log(a),localStorage.removeItem("feedback-form-state"),n.value="",s.value="",m.email="",m.message=""}));
//# sourceMappingURL=03-feedback.c4feccb8.js.map