const localStorageName = `currencyApp`;

/* eslint-disable no-undefined */
export const loadState = () => {

	try {

		const serializedState = localStorage.getItem( localStorageName );

		if ( serializedState === null ) {

			return undefined;

		}

		return JSON.parse( serializedState );

	} catch ( err ) {

		return undefined;

	}

};

/* eslint-enable no-undefined */

export const saveState = ( state ) => {

	try {

		const serializedState = JSON.stringify( state );

		localStorage.setItem( localStorageName, serializedState );


	} catch ( err ) {

		if ( err ) {
			
			console.log( err );
			
			// throw err;
			
		}

	}

};
