// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-integer@v0.1.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.1.1-esm/index.mjs";function i(t,r,i){return e(t)||e(r)||e(i)||!s(r)||!s(i)||r>i||t<0||t>1?NaN:r+n(t*(i-r+1))}function m(t,i){var m;return e(t)||e(i)||!s(t)||!s(i)||t>i?r(NaN):(m=i-t+1,function(s){if(e(s)||s<0||s>1)return NaN;return t+n(s*m)})}t(i,"factory",m);export{i as default,m as factory};
//# sourceMappingURL=index.mjs.map
