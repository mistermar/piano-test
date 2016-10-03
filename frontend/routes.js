import App from 'components/App';
import Currencies from 'Currencies';
import pairs from 'constants/currencies';

const routes = {

	path: `/`,
	component: App,
	indexRoute: {
		component: Currencies
	},

	childRoutes: [
		{
			path: `/:pair`,
			onEnter( nextState, replace, callback ) {

				if ( pairs.indexOf( nextState.params.pair ) === -1 ) {

					replace( `/err/notfound` );

					return callback();

				}

				return callback();

			},
			getComponent( nextState, cb ) {
				require.ensure( [], ( require ) => {
					cb( null, require( `PairDetail` ).default );
				}, `pairDetail` );
			}
		},
		{
			path: `*`,
			getComponent( nextState, cb ) {
				require.ensure( [], ( require ) => {
					cb( null, require( `NotFound` ).default );
				}, `notFound` );
			}

		}
	]

};

export default routes;
