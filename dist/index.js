/** @license Apache-2.0 */

'use strict';

/**
* Discrete uniform distribution quantile function.
*
* @module @stdlib/stats-base-dists-discrete-uniform-quantile
*
* @example
* var quantile = require( '@stdlib/stats-base-dists-discrete-uniform-quantile' );
*
* var y = quantile( 0.8, 0, 1 );
* // returns 1
*
* y = quantile( 0.5, 0, 10 );
* // returns 5
*
* var myQuantile = quantile.factory( 0, 4 );
* y = myQuantile( 0.8 );
* // returns 4
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-nonenumerable-read-only-property/dist' );
var main = require( './main.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( main, 'factory', factory );


// EXPORTS //

module.exports = main;
