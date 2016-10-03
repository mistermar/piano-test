import config from './config';

const DEBUG = config.get( `NODE_ENV` ) === `development`;

const webpackConfig = DEBUG ? require( `./webpack/dev.frontend.config` ) : require( `./webpack/prod.frontend.config` );

export default webpackConfig.default;
