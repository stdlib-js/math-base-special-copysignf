"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var v=s(function(A,u){
var q=require('@stdlib/constants-float32-sign-mask/dist'),n=require('@stdlib/constants-float32-abs-mask/dist'),o=require('@stdlib/number-float64-base-to-float32/dist'),t=require('@stdlib/number-float32-base-to-word/dist'),c=require('@stdlib/number-float32-base-from-word/dist');function f(e,r){var a,i;return e=o(e),r=o(r),a=t(e),a&=n,i=t(r),i&=q,a|=i,c(a)}u.exports=f
});var S=v();module.exports=S;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
