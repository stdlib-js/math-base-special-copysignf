// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(){"use strict";var t="function"==typeof Math.fround?Math.fround:null,n="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),o=Object.prototype.toString,r=Object.prototype.hasOwnProperty,e="function"==typeof Symbol?Symbol.toStringTag:"",f=n&&"symbol"==typeof Symbol.toStringTag?function(t){var n,f,i,u,a;if(null==t)return o.call(t);f=t[e],a=e,n=null!=(u=t)&&r.call(u,a);try{t[e]=void 0}catch(n){return o.call(t)}return i=o.call(t),n?t[e]=f:delete t[e],i}:function(t){return o.call(t)},i="function"==typeof Float32Array,u=Number.POSITIVE_INFINITY,a="function"==typeof Float32Array?Float32Array:null,y="function"==typeof Float32Array?Float32Array:void 0,l=function(){var t,n,o;if("function"!=typeof a)return!1;try{n=new a([1,3.14,-3.14,5e40]),o=n,t=(i&&o instanceof Float32Array||"[object Float32Array]"===f(o))&&1===n[0]&&3.140000104904175===n[1]&&-3.140000104904175===n[2]&&n[3]===u}catch(n){t=!1}return t}()?y:function(){throw new Error("not implemented")},c=new l(1),p="function"==typeof t?t:function(t){return c[0]=t,c[0]},d="function"==typeof Uint32Array,b="function"==typeof Uint32Array?Uint32Array:null,m="function"==typeof Uint32Array?Uint32Array:void 0,s=function(){var t,n,o;if("function"!=typeof b)return!1;try{n=new b(n=[1,3.14,-3.14,4294967296,4294967297]),o=n,t=(d&&o instanceof Uint32Array||"[object Uint32Array]"===f(o))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?m:function(){throw new Error("not implemented")},A=new l(1),w=new s(A.buffer);function h(t){return A[0]=t,w[0]}var v=new s(1),S=new l(v.buffer);return function(t,n){var o,r,e;return t=p(t),n=p(n),o=h(t),o&=2147483647,r=h(n),e=o|=r&=2147483648,v[0]=e,S[0]}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).copysignf=n();
//# sourceMappingURL=index.js.map