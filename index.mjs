// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float32-base-to-word@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float32-base-from-word@esm/index.mjs";var r=t,o=s,m=e;var d=function(t,s){var e,d;return t=r(t),s=r(s),e=o(t),e&=2147483647,d=o(s),m(e|=d&=2147483648)};export{d as default};
//# sourceMappingURL=index.mjs.map
