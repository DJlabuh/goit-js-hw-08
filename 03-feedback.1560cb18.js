function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o="Expected a function",i=NaN,r="[object Symbol]",a=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt,s="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,m=s||d||Function("return this")(),v=Object.prototype.toString,p=Math.max,g=Math.min,y=function(){return m.Date.now()};function b(e,t,n){var i,r,a,u,f,c,l=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(o);function v(t){var n=i,o=r;return i=r=void 0,l=t,u=e.apply(o,n)}function b(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=a}function h(){var e=y();if(b(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-c);return d?g(n,a-(e-l)):n}(e))}function w(e){return f=void 0,m&&i?v(e):(i=r=void 0,u)}function O(){var e=y(),n=b(e);if(i=arguments,r=this,c=e,n){if(void 0===f)return function(e){return l=e,f=setTimeout(h,t),s?v(e):u}(c);if(d)return f=setTimeout(h,t),v(c)}return void 0===f&&(f=setTimeout(h,t)),u}return t=S(t)||0,j(n)&&(s=!!n.leading,a=(d="maxWait"in n)?p(S(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),O.cancel=function(){void 0!==f&&clearTimeout(f),l=0,i=c=r=f=void 0},O.flush=function(){return void 0===f?u:w(y())},O}function j(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function S(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&v.call(e)==r}(e))return i;if(j(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=j(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=f.test(e);return n||c.test(e)?l(e.slice(2),n?2:8):u.test(e)?i:+e}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError(o);return j(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),b(e,t,{leading:i,maxWait:t,trailing:r})};const h=document.querySelector(".feedback-form"),w=document.querySelector('input[name="email"]'),O=document.querySelector('textarea[name="message"]');h.addEventListener("input",e(t)((function(){const e={email:w.value,message:O.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500)),h.addEventListener("submit",(function(e){e.preventDefault();const t={email:w.value,message:O.value};console.log(t),w.value="",O.value="",localStorage.removeItem("feedback-form-state")})),function(){const e=localStorage.getItem("feedback-form-state");if(e){const t=JSON.parse(e);w.value=t.email,O.value=t.message}}();
//# sourceMappingURL=03-feedback.1560cb18.js.map
