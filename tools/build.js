import fs from 'fs';
import webpack from 'webpack';
import webpackConfig from '../webpack.config.js';

webpack( webpackConfig ).run( ( err, stats ) => {

	if ( err ) {

		console.log( err );

	}


	stats.toString( {
		colors: true,
		timings: false,
		reasons: false,
		hash: false,
		version: false,
		chunks: false,
		chunkModules: false,
		cached: false
	} );

	// fs.writeFile( `./public/stats.json`, JSON.stringify( stats.toJson() ) );

} );


