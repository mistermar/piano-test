import autoprefixer from 'autoprefixer';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlwebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import webpack from 'webpack';

const ROOT_PATH = path.resolve( __dirname, `./../` );
const FRONTEND_PATH  = path.resolve( ROOT_PATH, `frontend` );

const prodFrontendConfig = {

	resolve: {

		modulesDirectories: [
			`node_modules`, `frontend`, `frontend/pages`
		],

		extensions: [ ``, `.css`, `.js`, `.jsx` ]

	},

	devtool: false,

	profile: true,

	module: {
		preLoaders: [
			{
				test: /\.jsx?$/,
				loaders: [ `eslint` ],
				configFile: path.resolve( ROOT_PATH, `.eslintrc` ),
				exclude: [ /node_modules/, /build/ ]
			}
		],

		loaders: [
			{
				test: /\.font\.(js|json)$/,
				loader: ExtractTextPlugin.extract( `style`, `css!fontgen?fileName=fonts/[fontname][ext]` )
			},
			{
				test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
				loader: `url?limit=10000&mimetype=application/font-woff`
			},
			{
				test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
				loader: `url?limit=10000&mimetype=application/font-woff`
			},
			{
				test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
				loader: `url?limit=10000&mimetype=application/octet-stream`
			},
			{
				test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
				loader: `file`
			},
			{
				test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
				loader: `url?limit=10000&mimetype=image/svg+xml`
			},
			{
				test: /\.png$/,
				loader: `url?limit=10000&mimetype=image/png`
			},
			{
				test: /\.gif$/,
				loader: `url?name=[name].gif&limit=10000&mimetype=image/gif`
			},
			{
				test: /\.json$/,
				loader: `json-loader`
			},
			{
				test: /\.jsx?$/,
				loaders: [ `babel` ],
				include: FRONTEND_PATH
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract(
					`style`,
					`css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss`
				),
				include: FRONTEND_PATH,
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract(
					`style`,
					`css!postcss`
				),
				include: /node_modules/
			}
		]

	},

	postcss() {

		return [
			autoprefixer( { browsers: [ `last 2 versions` ] } )
		];

	},

	entry: [
		`babel-polyfill`,
		path.resolve( FRONTEND_PATH, `main.jsx` )
	],

	output: {

		path: path.resolve( ROOT_PATH, `build` ),
		publicPath: `/`,
		filename: `bundle.js`,
		chunkFilename: `[name].chunk.js`

	},

	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new ExtractTextPlugin( `styles.css`, {
			allChunks: true
		} ),
		new HtmlwebpackPlugin( {
			title: `Piano test`,
			filename: `index.html`
		} ),
		new webpack.optimize.UglifyJsPlugin( {
			compress: {
				warnings: false,
				unsafe: true,
				// eslint-disable-next-line
				drop_console: true
			}
		} )

	],

	eslint: {
		failOnError: false,
		emitError: true
	}
};


export default prodFrontendConfig;
