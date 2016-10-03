import { combineReducers } from 'redux';
import { currencies } from './currencies';

const mainReducer = combineReducers( {
	currencies
} );

export default mainReducer;
