// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-integer@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";var i=s,a=e,m=r;var d=n,o=s,l=e,j=r;var f=function(t,s,e){return a(t)||a(s)||a(e)||!i(s)||!i(e)||s>e||t<0||t>1?NaN:s+m(t*(e-s+1))},p=function(t,s){var e;return l(t)||l(s)||!o(t)||!o(s)||t>s?d(NaN):(e=s-t+1,function(s){if(l(s)||s<0||s>1)return NaN;return t+j(s*e)})};t(f,"factory",p);var h=f;export{h as default,p as factory};
//# sourceMappingURL=index.mjs.map