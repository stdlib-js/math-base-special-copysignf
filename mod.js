// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Math.fround?Math.fround:null;var r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var n=Object.prototype.toString;var o=Object.prototype.hasOwnProperty;var e="function"==typeof Symbol?Symbol:void 0,a="function"==typeof e?e.toStringTag:"";var f=r&&"symbol"==typeof Symbol.toStringTag?function(t){var r,e,f,u,i;if(null==t)return n.call(t);e=t[a],i=a,r=null!=(u=t)&&o.call(u,i);try{t[a]=void 0}catch(r){return n.call(t)}return f=n.call(t),r?t[a]=e:delete t[a],f}:function(t){return n.call(t)},u="function"==typeof Float32Array;var i=Number.POSITIVE_INFINITY,y="function"==typeof Float32Array?Float32Array:null;var c="function"==typeof Float32Array?Float32Array:void 0;var l=function(){var t,r,n;if("function"!=typeof y)return!1;try{r=new y([1,3.14,-3.14,5e40]),n=r,t=(u&&n instanceof Float32Array||"[object Float32Array]"===f(n))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===i}catch(r){t=!1}return t}()?c:function(){throw new Error("not implemented")},p=new l(1);var v="function"==typeof t?t:function(t){return p[0]=t,p[0]},b="function"==typeof Uint32Array;var A="function"==typeof Uint32Array?Uint32Array:null;var m="function"==typeof Uint32Array?Uint32Array:void 0;var w=function(){var t,r,n;if("function"!=typeof A)return!1;try{r=new A(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,t=(b&&n instanceof Uint32Array||"[object Uint32Array]"===f(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?m:function(){throw new Error("not implemented")},d=new l(1),S=new w(d.buffer);function h(t){return d[0]=t,S[0]}var F=new w(1),U=new l(F.buffer);function s(t,r){var n,o,e;return t=v(t),r=v(r),n=h(t),n&=2147483647,o=h(r),e=n|=o&=2147483648,F[0]=e,U[0]}export{s as default};
//# sourceMappingURL=mod.js.map