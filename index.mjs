// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float32-sign-mask@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float32-abs-mask@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@v0.2.2-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float32-base-to-word@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float32-base-from-word@v0.2.2-esm/index.mjs";function o(o,r){var d,i;return o=e(o),r=e(r),d=m(o),d&=t,i=m(r),n(d|=i&=s)}export{o as default};
//# sourceMappingURL=index.mjs.map
