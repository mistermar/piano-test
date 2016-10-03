import { browserHistory, Router } from 'react-router';
import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import routes from 'routes.js';

const Root = ( { store } ) => {
	
	return (
		<Provider store={ store }>
			<Router
				history={ browserHistory }
				routes={ routes }
			/>
		</Provider>
	);
};

Root.displayName = `Root`;

Root.propTypes = {

	store: PropTypes.object.isRequired

};

export default Root;
