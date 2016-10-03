import axios from 'axios';

import { pairsForQueryString } from 'constants/currencies';

export const UPDATE_CURRENCIES = `UPDATE_CURRENCIES`;
export const SET_CHOSEN_PAIR   = `SET_CHOSEN_PAIR`;

export const updateCurrencies = () => {

	return ( dispatch, getState ) => {

		axios.get(
			`https://query.yahooapis.com/v1/public/yql?q=select * from yahoo.finance.xchange where pair in ( ${ pairsForQueryString } )&env=store://datatables.org/alltableswithkeys&format=json`
		).then( ( response ) => {

			const { rate } = response.data.query.results;

			const date = Date.now();

			const currentRate = {};

			rate.forEach( ( value ) => {

				currentRate[ value.id ] = {
					rate: Number( value.Rate ),
					date
				};

			} );

			dispatch( {
				type: UPDATE_CURRENCIES,
				payload: {
					currentRate
				}
			} );

		} );
		
	};

};

export const setChosenPair = ( pair ) => {

	return {
		type: SET_CHOSEN_PAIR,
		payload: {
			pair
		}
	};

};

export default {

	updateCurrencies,
	setChosenPair

};
