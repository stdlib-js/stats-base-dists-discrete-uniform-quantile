<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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

# Quantile Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> [Discrete uniform][discrete-uniform-distribution] distribution [quantile function][quantile-function].

<section class="intro">

The [quantile function][quantile-function] for a [discrete uniform][discrete-uniform-distribution] random variable is

<!-- <equation class="equation" label="eq:discrete_uniform_quantile_function" align="center" raw="Q(p) = a + \lfloor p \cdot ( b - a + 1 ) \rfloor" alt="Quantile function for a discrete uniform distribution."> -->

<div class="equation" align="center" data-raw-text="Q(p) = a + \lfloor p \cdot ( b - a + 1 ) \rfloor" data-equation="eq:discrete_uniform_quantile_function">
    <img src="https://cdn.rawgit.com/stdlib-js/stdlib/7e0a95722efd9c771b129597380c63dc6715508b/lib/node_modules/@stdlib/stats/base/dists/discrete-uniform/quantile/docs/img/equation_discrete_uniform_quantile_function.svg" alt="Quantile function for a discrete uniform distribution.">
    <br>
</div>

<!-- </equation> -->

for `0 <= p <= 1`, where `a` is the minimum support and `b` is the maximum support. The parameters must satisfy `a <= b`.

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-discrete-uniform-quantile
```

</section>

<section class="usage">

## Usage

```javascript
var quantile = require( '@stdlib/stats-base-dists-discrete-uniform-quantile' );
```

#### quantile( p, a, b )

Evaluates the [quantile function][quantile-function] for a [discrete uniform][discrete-uniform-distribution] distribution with parameters `a` (minimum support) and `b` (maximum support).

```javascript
var y = quantile( 0.8, 0, 1 );
// returns 1

y = quantile( 0.5, 0, 10 );
// returns 5
```

If provided a probability `p` outside the interval `[0,1]`, the function returns `NaN`.

```javascript
var y = quantile( 1.9, 0, 2 );
// returns NaN

y = quantile( -0.1, 0, 2 );
// returns NaN
```

If `a` or `b` is not an integer value, the function returns `NaN`.

```javascript
var y = quantile( 0.2, 1, 5.5 );
// returns NaN
```

If provided `a > b`, the function returns `NaN`.

```javascript
var y = quantile( 0.4, 2, 1 );
// returns NaN
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = quantile( NaN, 0.0, 1.0 );
// returns NaN

y = quantile( 0.0, NaN, 1.0 );
// returns NaN

y = quantile( 0.0, 0.0, NaN );
// returns NaN
```

#### quantile.factory( a, b )

Returns a function for evaluating the quantile function of a [discrete uniform][discrete-uniform-distribution] distribution with parameters `a` (minimum support) and `b` (maximum support).

```javascript
var myquantile = quantile.factory( 0, 4 );
var y = myquantile( 0.8 );
// returns 4

y = myquantile( 0.3 );
// returns 1
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randint = require( '@stdlib/random-base-discrete-uniform' );
var randu = require( '@stdlib/random-base-randu' );
var quantile = require( '@stdlib/stats-base-dists-discrete-uniform-quantile' );

var randa = randint.factory( 0, 5 );
var randb = randint.factory();
var a;
var b;
var p;
var v;
var i;

for ( i = 0; i < 10; i++ ) {
    p = randu();
    a = randa();
    b = randb( a, a+randa() );
    v = quantile( p, a, b );
    console.log( 'p: %d, a: %d, b: %d, Q(p;a,b): %d', p.toFixed( 4 ), a.toFixed( 4 ), b.toFixed( 4 ), v.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-discrete-uniform-quantile.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-discrete-uniform-quantile

[test-image]: https://github.com/stdlib-js/stats-base-dists-discrete-uniform-quantile/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/stats-base-dists-discrete-uniform-quantile/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-discrete-uniform-quantile/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-discrete-uniform-quantile?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-discrete-uniform-quantile
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-discrete-uniform-quantile/main

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-discrete-uniform-quantile/main/LICENSE

[discrete-uniform-distribution]: https://en.wikipedia.org/wiki/Discrete_uniform_distribution

[quantile-function]: https://en.wikipedia.org/wiki/Quantile_function

</section>

<!-- /.links -->
