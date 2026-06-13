"use strict";var s=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var v=s(function(A,u){
var q=require('@stdlib/constants-float32-sign-mask/dist'),n=require('@stdlib/constants-float32-abs-mask/dist'),o=require('@stdlib/number-float64-base-to-float32/dist'),t=require('@stdlib/number-float32-base-to-word/dist'),c=require('@stdlib/number-float32-base-from-word/dist');function f(a,r){var e,i;return a=o(a),r=o(r),e=t(a),e&=n,i=t(r),i&=q,e|=i,c(e)}u.exports=f
});var S=v();module.exports=S;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
