var Web;(()=>{var e={699:(e,t,r)=>{"use strict";function n(e,t){if(e){if("string"==typeof e)return o(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function a(e){var t,r,o,a=function(e){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=n(e))){t&&(e=t);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return i=e.done,e},e:function(e){l=!0,a=e},f:function(){try{i||null==t.return||t.return()}finally{if(l)throw a}}}}(document.cookie.split(";"));try{for(a.s();!(t=a.n()).done;){var i=(r=t.value.trim().split("="),o=2,function(e){if(Array.isArray(e))return e}(r)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,l=[],u=!0,c=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=a.call(r)).done)&&(l.push(n.value),l.length!==t);u=!0);}catch(e){c=!0,o=e}finally{try{if(!u&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(c)throw o}}return l}}(r,o)||n(r,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l=i[0],u=i[1];if(l===e)return u}}catch(e){a.e(e)}finally{a.f()}return null}function i(e,t){var r="".concat(e,"=").concat(t,"; path=").concat("/"),n=new Date;n.setTime(n.getTime()+6048e5),r+="; expires=".concat(n.toUTCString()),r+="; SameSite=".concat("Strict"),document.cookie=r}r.r(t),r.d(t,{getCookie:()=>a,setCookie:()=>i})},928:(e,t,r)=>{"use strict";r.r(t),r.d(t,{SyncCookieTheme:()=>l,toggleTheme:()=>i});var n=r(699),o=[{Hex:"#000000"},{Hex:"#FFFFFF"}];function a(e){e=Math.abs(e%2),function(e,t){if(!t)throw"Not enough arguments given to ColorChangeItems();";for(var r=document.getElementsByClassName(e),n=0;n<r.length;n++)r[n].style.color=t}("nav-links",o[1-e].Hex);var t=document.getElementById("Body");t.style.color=o[1-e].Hex,t.style.background=o[e].Hex,n.setCookie("mode",e)}function i(){a(1-parseInt(n.getCookie("mode"))||0)}function l(){var e=n.getCookie("mode");a(null!==e?parseInt(e):1)}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},CookieManager=r(699),ThemeManager=r(928),Web={}})();