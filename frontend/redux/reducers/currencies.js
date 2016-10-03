import pairs, { USDRUB } from 'constants/currencies';
import  { SET_CHOSEN_PAIR, UPDATE_CURRENCIES } from '../actions/currencies';
import Immutable from 'immutable';

const currenciesInitialState = Immutable.Map( {
	pairs: ( function() {

		const pairsForImmutable = {};

		pairs.forEach( ( pair ) => {

			pairsForImmutable[ pair ] = Immutable.List();

		} );

		return Immutable.Map( pairsForImmutable );
	} )(),
	chosen: USDRUB
} );

export const currencies = ( state = currenciesInitialState, action ) => {

	if ( action.type === SET_CHOSEN_PAIR ) {

		const { pair } = action.payload;

		return state.set( `chosen`, pair );

	}

	if ( action.type === UPDATE_CURRENCIES ) {

		const { currentRate } = action.payload;

		return state.update( `pairs`, ( mutatedPairs ) => {

			return mutatedPairs.map( ( mutatedPair, key ) => {

				if ( mutatedPair.size < 7 && mutatedPair.size > 1 ) {

					return mutatedPair.push( Immutable.Map( currentRate[ key ] ) );

				}

				if ( mutatedPair.size < 2 ) {

					return mutatedPair
						.push( Immutable.Map( currentRate[ key ] ) )
						.push( Immutable.Map( currentRate[ key ] ) );

				}

				return mutatedPair.withMutations( ( pair ) => {

					return pair.delete( 0 ).push( Immutable.Map( currentRate[ key ] ) );

				} );

			} );

		} );

	}

	return state;

};
