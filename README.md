<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# copysignf

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return a [single-precision floating-point number][ieee754] with the magnitude of `x` and the sign of `y`.

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-copysignf
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

</section>

<section class="usage">

## Usage

```javascript
var copysignf = require( '@stdlib/math-base-special-copysignf' );
```

#### copysignf( x, y )

Returns a [single-precision floating-point number][ieee754] with the magnitude of `x` and the sign of `y`.

```javascript
var z = copysignf( -3.0, 10.0 );
// returns 3.0

z = copysignf( 3.0, -1.0 );
// returns -3.0

z = copysignf( 1.0, -0.0 );
// returns -1.0

z = copysignf( -3.0, -0.0 );
// returns -3.0

z = copysignf( -0.0, 1.0 );
// returns 0.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   According to the [IEEE754][ieee754] standard, a `NaN` has a biased exponent equal to `255`, a significand greater than `0`, and a sign bit equal to **either** `1` **or** `0`. In which case, `NaN` may not correspond to just one but many binary representations. Accordingly, care should be taken to ensure that `y` is **not** `NaN`; otherwise, behavior may be indeterminate.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var copysignf = require( '@stdlib/math-base-special-copysignf' );

var x;
var y;
var z;
var i;

// Generate random numbers `x` and `y` and copy the sign of `y` to `x`...
for ( i = 0; i < 100; i++ ) {
    x = (randu()*100.0) - 50.0;
    y = (randu()*10.0) - 5.0;
    z = copysignf( x, y );
    console.log( 'x: %d, y: %d => %d', x, y, z );
}
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/math/base/special/copysignf.h"
```

#### stdlib_base_copysignf( x, y )

Returns a [single-precision floating-point number][ieee754] with the magnitude of `x` and the sign of `y`.

```c
float v = stdlib_base_copysignf( -3.0f, 10.0f );
// returns 3.0f

float v = stdlib_base_copysignf( 3.0f, -1.0f );
// returns -3.0f
```

The function accepts the following arguments:

-   **x**: `[in] float` number from which to derive a magnitude.
-   **y**: `[in] float` number from which to derive a sign.

```c
float stdlib_base_copysignf( const float x, const float y );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/math/base/special/copysignf.h"
#include <stdio.h>

int main() {
    float x[] = { 3.0f, -3.0f, 0.0f, 0.0f/0.0f };

    float y;
    int i;
    for ( i = 0; i < 4; i++ ) {
        y = stdlib_base_copysignf( x[ i ], -3.0f );
        printf( "copysignf(%f, %f) = %f\n", x[ i ], -3.0f, y );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-copysignf.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-copysignf

[test-image]: https://github.com/stdlib-js/math-base-special-copysignf/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/math-base-special-copysignf/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-copysignf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-copysignf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-copysignf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-copysignf/main

-->

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-copysignf/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-special-copysignf/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-special-copysignf/tree/esm

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-copysignf/main/LICENSE

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

</section>

<!-- /.links -->
