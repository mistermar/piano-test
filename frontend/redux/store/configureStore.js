import { applyMiddleware, compose, createStore } from 'redux';
import { loadState, saveState } from './localStorage';
import Immutable from 'immutable';
import mainReducer  from '../reducers';
import throttle from 'lodash/function/throttle';
import thunk from 'redux-thunk';

const configureStore = () => {

	const persistedState = {
		currencies: Immutable.fromJS( loadState() )
	};


	const store = createStore(
		mainReducer,
		persistedState,
		compose(
			applyMiddleware( thunk )
		)
	);

	store.subscribe( throttle( () => {

		saveState( store.getState().currencies );

	}, 1000 ) );

	return store;
};



export default configureStore;
