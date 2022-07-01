// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float32-base-to-word@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float32-base-from-word@esm/index.mjs";function r(r,o){var m,d;return r=t(r),o=t(o),m=s(r),m&=2147483647,d=s(o),e(m|=d&=2147483648)}export{r as default};
//# sourceMappingURL=index.mjs.map
