import config from '../config';
import path from 'path';
import webpack from 'webpack';
import webpackConfig from '../webpack.config.js';
import WebpackDevServer from 'webpack-dev-server';

const compiler = webpack( webpackConfig );

const server = new WebpackDevServer( compiler, {

	contentBase: path.resolve( __dirname, `build` ),
	hot: true,
	inline: true,
	publicPath: `/`,
	historyApiFallback: true,
	watchOptions: {
		aggregateTimeout: 100
	},
	stats: {
		colors: true,
		timings: false,
		reasons: false,
		hash: false,
		version: false,
		chunks: false,
		children: false,
		chunkModules: false,
		cached: false,
		cachedAssets: false
	}
} );

server.listen( config.get( `serverPort` ), `0.0.0.0`, () => {

	console.log( `server running at ${ config.get( `serverUrl` ) }` );
	return true;

} );
