"use strict";var o=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var v=o(function(R,q){
var s=require('@stdlib/math-base-assert-is-integer/dist'),u=require('@stdlib/math-base-assert-is-nan/dist'),y=require('@stdlib/math-base-special-floor/dist');function x(e,r,t){var n;return u(e)||u(r)||u(t)||!s(r)||!s(t)||r>t||e<0||e>1?NaN:(n=t-r+1,r+y(e*n))}q.exports=x
});var N=o(function(h,f){
var g=require('@stdlib/utils-constant-function/dist'),c=require('@stdlib/math-base-assert-is-integer/dist'),a=require('@stdlib/math-base-assert-is-nan/dist'),I=require('@stdlib/math-base-special-floor/dist');function d(e,r){var t;if(a(e)||a(r)||!c(e)||!c(r)||e>r)return g(NaN);return t=r-e+1,n;function n(i){return a(i)||i<0||i>1?NaN:e+I(i*t)}}f.exports=d
});var m=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=v(),F=N();m(l,"factory",F);module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
